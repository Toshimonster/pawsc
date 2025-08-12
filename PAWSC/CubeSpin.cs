using System;
using System.IO;
using System.Threading;
using SkiaSharp;

namespace PAWSC
{

    internal class MorphApp
    {
        private const int Width = 320;
        private const int Height = 240;
        private const string FrameBufferPath = "/dev/fb0";
        private const int ResamplePoints = 64;

        private readonly ShapeMorpher morpher = new(Width, Height, ResamplePoints);
        private readonly Renderer renderer = new(Width, Height);
        private readonly FramebufferWriter fbWriter = new(FrameBufferPath);

        public void Run()
        {
            var stopwatch = System.Diagnostics.Stopwatch.StartNew();
            double lastTime = stopwatch.Elapsed.TotalSeconds;

            while (true)
            {
                double now = stopwatch.Elapsed.TotalSeconds;
                float delta = (float)(now - lastTime);
                lastTime = now;

                // Loop through shape pairs every 4 seconds
                int pairIndex = (int)(now / 4.0) % morpher.PairCount;
                float t = (float)(now % 4.0) / 4.0f;

                var pts = morpher.GetInterpolatedShape(pairIndex, t);

                using var surface = renderer.CreateSurface();
                var canvas = surface.Canvas;
                canvas.Clear(SKColors.Black);

                renderer.DrawPolygon(canvas, pts);
                renderer.DrawText(canvas, $"Shape {pairIndex + 1}/{morpher.PairCount}  t={t:F2}", Width / 2, 20);

                using var img = surface.Snapshot();
                using var pxm = img.PeekPixels();
                fbWriter.Write(pxm.GetPixels(), Width, Height);
            }
        }
    }

    internal class ShapeMorpher
    {
        private readonly List<SKPoint[]> shapes = new();
        private readonly int screenWidth, screenHeight, pointCount;

        public int PairCount => shapes.Count;

        public ShapeMorpher(int screenWidth, int screenHeight, int pointCount)
        {
            this.screenWidth = screenWidth;
            this.screenHeight = screenHeight;
            this.pointCount = pointCount;

            // Add various shapes
            shapes.Add(ShapeUtils.Resample(NormalizedShapes.Square(), pointCount));
            shapes.Add(ShapeUtils.Resample(NormalizedShapes.Triangle(), pointCount));
            shapes.Add(ShapeUtils.Resample(NormalizedShapes.Star(), pointCount));
            shapes.Add(ShapeUtils.Resample(NormalizedShapes.Diamond(), pointCount));
            shapes.Add(ShapeUtils.Resample(NormalizedShapes.Irregular(), pointCount));
            shapes.Add(ShapeUtils.Resample(NormalizedShapes.Circle(), pointCount));
        }

        public SKPoint[] GetInterpolatedShape(int pairIndex, float t)
        {
            var a = shapes[pairIndex % shapes.Count];
            var b = shapes[(pairIndex + 1) % shapes.Count];
            var result = new SKPoint[pointCount];

            for (int i = 0; i < pointCount; i++)
            {
                float x = a[i].X * (1 - t) + b[i].X * t;
                float y = a[i].Y * (1 - t) + b[i].Y * t;
                result[i] = new SKPoint(
                    x * screenWidth / 2 + screenWidth / 2,
                    y * screenHeight / 2 + screenHeight / 2
                );
            }

            return result;
        }
    }

    internal static class ShapeUtils
    {
        public static SKPoint[] Resample(SKPoint[] original, int count)
        {
            // Close the loop if it's not closed
            var points = original.ToList();
            if (!points[0].Equals(points[^1]))
                points.Add(points[0]);

            // Calculate total path length
            float totalLength = 0;
            var lengths = new float[points.Count - 1];
            for (int i = 0; i < lengths.Length; i++)
            {
                lengths[i] = Distance(points[i], points[i + 1]);
                totalLength += lengths[i];
            }

            float segmentLength = totalLength / count;
            var resampled = new List<SKPoint> { points[0] };
            float distAccum = 0;
            int seg = 0;

            while (resampled.Count < count)
            {
                if (seg >= lengths.Length) break;
                float remain = segmentLength - distAccum;
                float d = lengths[seg];

                if (remain < d)
                {
                    float ratio = remain / d;
                    var p1 = points[seg];
                    var p2 = points[seg + 1];
                    var newPt = Lerp(p1, p2, ratio);
                    resampled.Add(newPt);

                    points[seg] = newPt;
                    lengths[seg] = d - remain;
                    distAccum = 0;
                }
                else
                {
                    distAccum += d;
                    seg++;
                }
            }

            while (resampled.Count < count)
                resampled.Add(resampled[^1]);

            return resampled.ToArray();
        }

        private static SKPoint Lerp(SKPoint a, SKPoint b, float t) =>
            new(a.X + (b.X - a.X) * t, a.Y + (b.Y - a.Y) * t);

        private static float Distance(SKPoint a, SKPoint b) =>
            (float)Math.Sqrt((a.X - b.X) * (a.X - b.X) + (a.Y - b.Y) * (a.Y - b.Y));
    }

    internal static class NormalizedShapes
    {
        public static SKPoint[] Square() => new[]
        {
            new SKPoint(-1, -1), new SKPoint( 1, -1),
            new SKPoint( 1,  1), new SKPoint(-1,  1)
        };

        public static SKPoint[] Triangle() => new[]
        {
            new SKPoint( 0, -1),
            new SKPoint( 1,  1),
            new SKPoint(-1,  1)
        };

        public static SKPoint[] Star()
        {
            var points = new List<SKPoint>();
            for (int i = 0; i < 10; i++)
            {
                float angle = (float)(Math.PI * 2 * i / 10);
                float r = i % 2 == 0 ? 1f : 0.5f;
                points.Add(new SKPoint((float)Math.Cos(angle) * r, (float)Math.Sin(angle) * r));
            }
            return points.ToArray();
        }

        public static SKPoint[] Diamond() => new[]
        {
            new SKPoint( 0, -1),
            new SKPoint( 1,  0),
            new SKPoint( 0,  1),
            new SKPoint(-1,  0)
        };

        public static SKPoint[] Circle()
        {
            var pts = new SKPoint[64];
            for (int i = 0; i < 64; i++)
            {
                float a = (float)(i / 64.0 * 2 * Math.PI);
                pts[i] = new SKPoint((float)Math.Cos(a), (float)Math.Sin(a));
            }
            return pts;
        }

        public static SKPoint[] Irregular() => new[]
        {
            new SKPoint(-1, -0.5f), new SKPoint(-0.2f, -0.9f),
            new SKPoint( 0.4f, -0.4f), new SKPoint( 1, 0.1f),
            new SKPoint( 0.6f, 0.9f), new SKPoint(-0.5f, 0.7f)
        };
    }

    internal class Renderer
    {
        private readonly int width, height;

        public Renderer(int width, int height)
        {
            this.width = width;
            this.height = height;
        }

        public SKSurface CreateSurface()
        {
            var info = new SKImageInfo(width, height, SKColorType.Bgra8888);
            return SKSurface.Create(info);
        }

        public void DrawPolygon(SKCanvas canvas, SKPoint[] pts)
        {
            using var paint = new SKPaint
            {
                Color = SKColors.Orange,
                StrokeWidth = 2,
                IsAntialias = true,
                Style = SKPaintStyle.Stroke
            };

            using var path = new SKPath();
            path.MoveTo(pts[0]);
            for (int i = 1; i < pts.Length; i++)
                path.LineTo(pts[i]);
            path.Close();

            canvas.DrawPath(path, paint);
        }

        public void DrawText(SKCanvas canvas, string text, float x, float y)
        {
            using var paint = new SKPaint
            {
                Color = SKColors.White,
                IsAntialias = true
            };
            using var font = new SKFont(SKTypeface.Default, 12);
            
            canvas.DrawText(text, x, y, SKTextAlign.Center, font, paint);
        }
    }

    internal class FramebufferWriter
    {
        private readonly string path;
        public FramebufferWriter(string path) => this.path = path;

        public void Write(IntPtr pixelPtr, int width, int height)
        {
            int len = width * height * 4;
            var data = new byte[len];
            System.Runtime.InteropServices.Marshal.Copy(pixelPtr, data, 0, len);
            using var fb = new FileStream(path, FileMode.Open, FileAccess.Write);
            fb.Write(data, 0, len);
        }
    }
}
