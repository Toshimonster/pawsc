using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations.Games;

public class DinoGame(Identifier id) : GameScene(id)
    {

        // Display / world
        private float groundY;

        // Dino (pixelated)
        private float dinoX = 6;
        private float dinoY;
        private const int DinoW = 8;
        private const int DinoH = 8;
        private bool isJumping = false;
        private float vy = 0;
        private const float Gravity = 120f;      // pixels / s^2
        private const float JumpVelocity = -50f; // pixels / s

        // Obstacles
        private readonly List<Obstacle> obstacles = new();
        private readonly Random rng = new();
        private float worldSpeed = 30f; // pixels / second

        // Spawn timing
        private double nextSpawnIn = 1.0; // seconds
        private DateTime lastUpdate = DateTime.UtcNow;

        // Running animation
        private double frameTimer = 0.0;
        private int runFrame = 0;

        public override Task Initialise(PawsRuntime runtime)
        {
            base.Initialise(runtime);
            groundY = SceneImageInfo.Height - 6; // leave some room
            ResetGame();

            lastUpdate = DateTime.UtcNow;
            return Task.CompletedTask;
        }

        protected override Task OnInput(ControllerValues e)
        {
            if (e == ControllerValues.A ||
                e == ControllerValues.Up)
            {
                if (!isJumping)
                {
                    isJumping = true;
                    vy = JumpVelocity;
                }
            }
            // optionally implement Down / B for ducking
            return Task.CompletedTask;
        }

        protected override void RenderScene(DrawInfo drawInfo)
        {
            // determine elapsed time
            var now = DateTime.UtcNow;
            var elapsed = (now - lastUpdate).TotalSeconds;
            // clamp a max delta to avoid huge jumps if paused
            if (elapsed > 0.25) elapsed = 0.25;
            lastUpdate = now;

            UpdateWorld(elapsed);

            // black background
            Canvas.Clear(SKColors.Black);

            // white paint, no AA for sharp pixels
            using var paint = new SKPaint
            {
                Color = SKColors.White,
                IsAntialias = false,
                Style = SKPaintStyle.Fill
            };

            // ground
            Canvas.DrawRect(new SKRect(0, groundY, SceneImageInfo.Width, groundY + 1), paint);

            // draw dino as pixel blocks (8x8). use two-frame "leg" animation
            DrawDino(Canvas, paint);

            // draw obstacles
            foreach (var o in obstacles)
            {
                // integer positions for crisp pixels
                var rx = (int)Math.Round(o.X);
                var ry = (int)Math.Round(o.Y);
                Canvas.DrawRect(new SKRect(rx, ry, rx + o.Width, ry + o.Height), paint);
                // optional little top pixel to vary silhouette
                if (o.Height >= 5)
                    Canvas.DrawRect(new SKRect(rx, ry - 1, rx + 2, ry), paint);
            }
        }

        private void UpdateWorld(double dt)
        {
            // animation
            frameTimer += dt;
            if (frameTimer >= 0.12)
            {
                frameTimer = 0;
                runFrame = (runFrame + 1) % 2;
            }

            // update jump physics
            if (isJumping)
            {
                dinoY += vy * (float)dt;
                vy += Gravity * (float)dt;

                if (dinoY >= groundY - DinoH)
                {
                    dinoY = groundY - DinoH;
                    isJumping = false;
                    vy = 0;
                }
            }

            // spawn logic
            nextSpawnIn -= dt;
            if (nextSpawnIn <= 0)
            {
                SpawnObstacle();
                // adapt spawn interval to speed for playability
                var min = Math.Max(0.6, 0.9 - (worldSpeed - 20) / 100.0);
                var max = Math.Max(1.0, 1.6 - (worldSpeed - 20) / 80.0);
                nextSpawnIn = min + rng.NextDouble() * (max - min);
            }

            // move obstacles and check collisions
            for (int i = obstacles.Count - 1; i >= 0; i--)
            {
                obstacles[i].X -= worldSpeed * (float)dt;

                if (obstacles[i].X + obstacles[i].Width < 0)
                {
                    obstacles.RemoveAt(i);
                    continue;
                }

                // collision (AABB)
                if (AabbCollision(dinoX, dinoY, DinoW, DinoH,
                                  obstacles[i].X, obstacles[i].Y, obstacles[i].Width, obstacles[i].Height))
                {
                    // simple reset on hit
                    ResetGame();
                    break;
                }
            }

            // optional: slowly ramp speed over time to increase difficulty
            worldSpeed += 0.5f * (float)dt;
        }

        private void DrawDino(SKCanvas canvas, SKPaint paint)
        {
            // pixel rows for a simple 8x8 dino (two frames) — represented as booleans (1 = pixel)
            // very small, stylized blocky dino
            // Frame 0
            byte[] frame0 = new byte[]
            {
                0b00111100, // ..████..
                0b01111110, // .██████.
                0b11111111, // ████████
                0b11111111, // ████████
                0b11111111, // ████████
                0b01111100, // .████..
                0b00111000, // ..███..
                0b00010000  // ...█...
            };

            // Frame 1 (leg swapped)
            byte[] frame1 = new byte[]
            {
                0b00111100,
                0b01111110,
                0b11111111,
                0b11111111,
                0b11111111,
                0b01111100,
                0b00011000,
                0b00100000
            };

            var chosen = runFrame == 0 ? frame0 : frame1;

            var baseX = (int)Math.Round(dinoX);
            var baseY = (int)Math.Round(dinoY);

            // draw each bit as a 1x1 pixel rectangle (scale = 1 because display is small)
            for (int row = 0; row < 8; row++)
            {
                byte b = chosen[row];
                for (int col = 0; col < 8; col++)
                {
                    if ((b & (1 << (7 - col))) != 0)
                    {
                        canvas.DrawRect(new SKRect(baseX + col, baseY + row, baseX + col + 1, baseY + row + 1), paint);
                    }
                }
            }
        }

        private void SpawnObstacle()
        {
            // small cactus-like sprite: width 3-5, height 4-8 (pixels)
            var h = rng.Next(4, 9);
            var w = rng.Next(2, 5);
            var o = new Obstacle
            {
                X = SceneImageInfo.Width + 2,
                Y = groundY - h,
                Width = w,
                Height = h
            };
            obstacles.Add(o);
        }

        private static bool AabbCollision(float x1, float y1, float w1, float h1,
                                          float x2, float y2, float w2, float h2)
        {
            return !(x1 + w1 <= x2 || x1 >= x2 + w2 ||
                     y1 + h1 <= y2 || y1 >= y2 + h2);
        }

        private void ResetGame()
        {
            obstacles.Clear();
            dinoY = groundY - DinoH;
            isJumping = false;
            vy = 0;
            worldSpeed = 30f;
            nextSpawnIn = 0.9 + rng.NextDouble() * 0.8;
            frameTimer = 0;
            runFrame = 0;
        }

        private class Obstacle
        {
            public float X;
            public float Y;
            public int Width;
            public int Height;
        }
    }
