using System.Text.Json;
using PAWSC.Runtime;
using SkiaSharp;

// your namespace

namespace PAWSC.Scenes.Implementations;

public class SpinningCubeScene(Identifier name, int width = 255, int height = 255)
    : SkiaSharpScene(name, width, height)
{
    private float _rotationX = 0;
    private float _rotationY = 0;

    private SKImage?[] _faceImages = new SKImage?[6];

    public override async Task Initialise(PawsRuntime runtime)
    {
        await base.Initialise(runtime);
        await UpdateFaceImages();
    }
    
    protected override void RenderScene(DrawInfo drawInfo)
    {
        // Clear canvas
        Canvas.Clear(SKColors.Black);

        // Update rotation angles based on delta time
        _rotationY += (float)(drawInfo.Deltatime * 0.00000001);
        _rotationX += (float)(drawInfo.Deltatime * 0.000000005);
        _rotationY %= ((float) Math.PI * 2);
        _rotationX %= ((float) Math.PI * 2);

        // Cube size and vertices in model space
        float size = 1.0f;
        var vertices = new[]
        {
            new SKPoint3(-size, -size, -size),
            new SKPoint3( size, -size, -size),
            new SKPoint3( size,  size, -size),
            new SKPoint3(-size,  size, -size),
            new SKPoint3(-size, -size,  size),
            new SKPoint3( size, -size,  size),
            new SKPoint3( size,  size,  size),
            new SKPoint3(-size,  size,  size),
        };

        // Rotate and project all vertices to 2D screen points
        var projected = vertices
            .Select(v => Rotate(v, _rotationX, _rotationY))
            .Select(Project)
            .Select(p => ToScreen(p, SceneImageInfo.Width, SceneImageInfo.Height))
            .ToArray();

        var faceVertexIndices = new[]
        {
            new[] { 0, 1, 2, 3 }, // back
            new[] { 4, 5, 6, 7 }, // front
            new[] { 0, 4, 7, 3 }, // left
            new[] { 1, 5, 6, 2 }, // right
            new[] { 3, 2, 6, 7 }, // top
            new[] { 0, 1, 5, 4 }  // bottom
        };

        // Calculate average depth (Z) of each face for sorting
        var faceDepths = new List<(int faceIndex, float avgZ)>();

        for (int i = 0; i < 6; i++)
        {
            // faceVertexIndices is your existing index array
            var faceVertices3D = faceVertexIndices[i].Select(idx => Rotate(vertices[idx], _rotationX, _rotationY)).ToArray();
            float avgZ = faceVertices3D.Average(v => v.Z);
            faceDepths.Add((i, avgZ));
        }

// Sort faces back to front (lowest Z to highest Z)
        faceDepths.Sort((a, b) => a.avgZ.CompareTo(b.avgZ));

// Draw faces in sorted order
        foreach (var (faceIndex, _) in faceDepths)
        {
            var quad = faceVertexIndices[faceIndex].Select(idx => projected[idx]).ToArray();
            DrawImageOnFace(_faceImages[faceIndex], quad);
        }
        
        // Edges between vertices to draw cube wireframe
        var edges = new (int a, int b)[]
        {
            (0,1), (1,2), (2,3), (3,0), // back face
            (4,5), (5,6), (6,7), (7,4), // front face
            (0,4), (1,5), (2,6), (3,7)  // connecting edges
        };

        using var paint = new SKPaint
        {
            Color = SKColors.White,
            IsAntialias = true
        };
        using var font = new SKFont(SKTypeface.Default, 12);
        
        Canvas.DrawText($"FPS: {drawInfo.Fps}", 10, 20, SKTextAlign.Left, font, paint);
    }
    
    private async Task UpdateFaceImages()
    {
        var rnd = new Random();
        using var http = new HttpClient();
        
        http.DefaultRequestHeaders.UserAgent.ParseAdd("MyPawsCubeApp/1.0");

        for (int i = 0; i < 6; i++)
        {
            using var response = await http.GetAsync("https://e926.net/posts.json?limit=1&tags=order:random+score:>=500+protogen");
            response.EnsureSuccessStatusCode();

            using var stream = await response.Content.ReadAsStreamAsync();
            var doc = await JsonDocument.ParseAsync(stream);

            var posts = doc.RootElement.GetProperty("posts");

            if (posts.GetArrayLength() > 0)
            {
                var fileUrl = posts[0].GetProperty("file").GetProperty("url").GetString();
                if (!string.IsNullOrEmpty(fileUrl))
                {
                    using var s = await http.GetStreamAsync(fileUrl);
                    using var mem = new MemoryStream();
                    await s.CopyToAsync(mem);
                    mem.Seek(0, SeekOrigin.Begin);
                    
                    // Decode original image
                    using var originalBitmap = SKBitmap.Decode(mem);

                    if (originalBitmap != null)
                    {
                        // Calculate resize dimensions maintaining aspect ratio
                        int width = originalBitmap.Width;
                        int height = originalBitmap.Height;

                        float scale = Math.Min((float)255 / width, (float)255 / height);

                        int resizedWidth = (int)(width * scale);
                        int resizedHeight = (int)(height * scale);

                        // Resize bitmap
                        using var resizedBitmap = originalBitmap.Resize(new SKImageInfo(resizedWidth, resizedHeight), new SKSamplingOptions(SKCubicResampler.Mitchell));

                        if (resizedBitmap != null)
                        {
                            // Create SKImage from resized bitmap
                            _faceImages[i] = SKImage.FromBitmap(resizedBitmap);
                        }
                    }
                }
            }
        }
    }
    
    private void DrawImageOnFace(SKImage? image, SKPoint[] quad)
    {
        if (image == null || quad.Length != 4)
            return;

        var texCoords = new[]
        {
            new SKPoint(0, 0),
            new SKPoint(image.Width, 0),
            new SKPoint(image.Width, image.Height),
            new SKPoint(0, image.Height)
        };

        var indices = new ushort[] { 0, 1, 2, 0, 2, 3 };

        using var vertices = SKVertices.CreateCopy(
            SKVertexMode.Triangles,
            quad,
            texCoords,
            null,
            indices);

        using var paint = new SKPaint
        {
            Shader = image.ToShader(),
            IsAntialias = true
        };

        Canvas.DrawVertices(vertices, SKBlendMode.SrcOver, paint);
    }


    private static SKPoint3 Rotate(SKPoint3 point, float angleX, float angleY)
    {
        // Rotate around Y axis
        var cosY = MathF.Cos(angleY);
        var sinY = MathF.Sin(angleY);
        var x1 = point.X * cosY - point.Z * sinY;
        var z1 = point.X * sinY + point.Z * cosY;

        // Rotate around X axis
        var cosX = MathF.Cos(angleX);
        var sinX = MathF.Sin(angleX);
        var y1 = point.Y * cosX - z1 * sinX;
        var z2 = point.Y * sinX + z1 * cosX;

        return new SKPoint3(x1, y1, z2);
    }

    private static SKPoint Project(SKPoint3 point)
    {
        float distance = 3.5f;
        float factor = distance / (distance - point.Z);
        return new SKPoint(point.X * factor, point.Y * factor);
    }

    private static SKPoint ToScreen(SKPoint projected, float width, float height)
    {
        // Map from projected space (-width/4..width/4, -height/4..height/4) to canvas pixel coords
        return new SKPoint(
            projected.X * width / 4 + width / 2,
            -projected.Y * height / 4 + height / 2);
    }
}