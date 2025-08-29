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
        private const int DinoW = 16;
        private const int DinoH = 16;
        private bool isJumping = false;
        private bool isDead = false;
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
                if (isDead)
                {
                    ResetGame();
                } else if (!isJumping)
                {
                    isJumping = true;
                    vy = JumpVelocity;
                }
            }
            // optionally implement Down / B for ducking
            return Task.CompletedTask;
        }

        protected override bool ClearOnDraw => false;

        protected override void RenderScene(DrawInfo drawInfo)
        {
            // white paint, no AA for sharp pixels
            using var paint = new SKPaint
            {
                Color = SKColors.White,
                IsAntialias = false,
                Style = SKPaintStyle.Fill
            };

            if (isDead)
            {
                DrawDino(Canvas, paint);
                return;
            }

            // determine elapsed time
            var now = DateTime.UtcNow;
            var elapsed = (now - lastUpdate).TotalSeconds;
            // clamp a max delta to avoid huge jumps if paused
            if (elapsed > 0.25) elapsed = 0.25;
            lastUpdate = now;

            UpdateWorld(elapsed);

            // black background
            Canvas.Clear(SKColors.Transparent);

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
                var forgiveness = 4;
                var heightForgiveness = 2;
                if (AabbCollision(dinoX, dinoY, DinoW - forgiveness, DinoH - heightForgiveness,
                                  obstacles[i].X, obstacles[i].Y, obstacles[i].Width, obstacles[i].Height))
                {
                    // simple reset on hit
                    GameOver();
                    break;
                }
            }

            // optional: slowly ramp speed over time to increase difficulty
            worldSpeed += 0.5f * (float)dt;
        }

        private static readonly ushort[][] DinoFrames = new ushort[][]
        { [
            0b0000000011111000,
            0b0000000111111111,
            0b0000000111111111,
            0b0000000111111111,
            0b1000000111100000,
            0b1000001111111110,
            0b1100011111000000,
            0b1110111111111000,
            0b1111111111110100,
            0b1111111111100000,
            0b0111111111100000,
            0b0011111111000000,
            0b0001111110000000,
            0b0000111110000000,
            0b0000010011000000,
            0b0000011000000000
        ],[
            0b0000000011111000,
            0b0000000111111111,
            0b0000000111111111,
            0b0000000111111111,
            0b1000000111100000,
            0b1000001111111110,
            0b1100011111000000,
            0b1110111111111000,
            0b1111111111110100,
            0b1111111111100000,
            0b0111111111100000,
            0b0011111111000000,
            0b0001111110000000,
            0b0000111110000000,
            0b0000011010000000,
            0b0000000011000000
            ]
        };

        private static readonly ushort[] DinoDead = new ushort[]
        {
            0b0000000011111000,
            0b0000000110111111,
            0b0000000101011111,
            0b0000000110111111,
            0b1000000111100000,
            0b1000001111111110,
            0b1100011111000000,
            0b1110111111111000,
            0b1111111111100100,
            0b1111111111100000,
            0b0111111111100000,
            0b0011111111000000,
            0b0001111110000000,
            0b0000111100000000,
            0b0000010010000000,
            0b0000011011000000,
        };

        private void DrawDino(SKCanvas canvas, SKPaint paint)
        {
            var chosen = DinoFrames[runFrame];
            if (isDead) chosen = DinoDead;

            drawDinoImg(canvas, paint, chosen);
        }

        private void drawDinoImg(SKCanvas canvas, SKPaint paint, ushort[] dino)
        {
            var baseX = (int)Math.Round(dinoX);
            var baseY = (int)Math.Round(dinoY);

            // draw each bit as a 1x1 pixel rectangle (scale = 1 because display is small)
            for (int row = 0; row < 16; row++)
            {
                ushort b = dino[row];
                for (int col = 0; col < 16; col++)
                {
                    if ((b & (1 << (15 - col))) != 0)
                    {
                        canvas.DrawRect(
                            new SKRect(baseX + col, baseY + row, baseX + col + 1, baseY + row + 1),
                            paint
                        );
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

        private void GameOver()
        {
            isDead = true;
        }

        private void ResetGame()
        {
            isDead = false;
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
