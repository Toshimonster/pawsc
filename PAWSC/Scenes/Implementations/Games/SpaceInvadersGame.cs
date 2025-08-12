using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations.Games;

public class SpaceInvadersGame(Identifier id) : GameScene(id)
{
    // Game state
    private bool gameOver = false;
    private int score = 0;
    private int lives = 3;
    private bool gameStarted = false;
    
    // Player
    private float playerX = 32;
    private const int PlayerWidth = 6;
    private const int PlayerHeight = 4;
    private const float PlayerSpeed = 40f;
    
    // Aliens
    private readonly List<Alien> aliens = new();
    private const int AlienRows = 3;
    private const int AlienCols = 8;
    private const int AlienWidth = 6;
    private const int AlienHeight = 4;
    private float alienDirection = 1f;
    private float alienSpeed = 10f;
    private double alienMoveTimer = 0.0;
    private const double AlienMoveInterval = 1.0;
    
    // Bullets
    private readonly List<Bullet> playerBullets = new();
    private readonly List<Bullet> alienBullets = new();
    private const int BulletWidth = 2;
    private const int BulletHeight = 4;
    private const float BulletSpeed = 60f;
    
    // Game timing
    private DateTime lastUpdate = DateTime.UtcNow;
    private double shootTimer = 0.0;
    private const double ShootInterval = 0.3; // Can shoot every 300ms
    private double alienShootTimer = 0.0;
    private const double AlienShootInterval = 2.0; // Aliens shoot every 2 seconds

    public override Task Initialise(PawsRuntime runtime)
    {
        base.Initialise(runtime);
        ResetGame();
        lastUpdate = DateTime.UtcNow;
        return Task.CompletedTask;
    }

    protected override void OnInput(object? sender, GameControllerCharacteristic.ControllerValues e)
    {
        if (gameOver)
        {
            if (e == GameControllerCharacteristic.ControllerValues.A)
            {
                ResetGame();
            }
            return;
        }

        if (!gameStarted && e == GameControllerCharacteristic.ControllerValues.A)
        {
            gameStarted = true;
            return;
        }

        switch (e)
        {
            case GameControllerCharacteristic.ControllerValues.Left:
                playerX = Math.Max(0, playerX - PlayerWidth);
                break;
            case GameControllerCharacteristic.ControllerValues.Right:
                playerX = Math.Min(SceneImageInfo.Width - PlayerWidth, playerX + PlayerWidth);
                break;
            case GameControllerCharacteristic.ControllerValues.A:
                if (shootTimer <= 0.0)
                {
                    ShootPlayerBullet();
                    shootTimer = ShootInterval;
                }
                break;
        }
    }

    protected override void RenderScene(DrawInfo drawInfo)
    {
        var now = DateTime.UtcNow;
        var elapsed = (now - lastUpdate).TotalSeconds;
        if (elapsed > 0.25) elapsed = 0.25;
        lastUpdate = now;

        if (gameStarted && !gameOver)
        {
            UpdateGame(elapsed);
        }

        // Clear to black
        Canvas.Clear(SKColors.Black);

        // Draw player
        using var playerPaint = new SKPaint
        {
            Color = SKColors.Green,
            IsAntialias = false,
            Style = SKPaintStyle.Fill
        };
        Canvas.DrawRect(new SKRect(playerX, SceneImageInfo.Height - PlayerHeight - 2, 
                                  playerX + PlayerWidth, SceneImageInfo.Height - 2), playerPaint);

        // Draw aliens
        using var alienPaint = new SKPaint
        {
            Color = SKColors.Red,
            IsAntialias = false,
            Style = SKPaintStyle.Fill
        };
        foreach (var alien in aliens)
        {
            Canvas.DrawRect(new SKRect(alien.X, alien.Y, alien.X + AlienWidth, alien.Y + AlienHeight), alienPaint);
        }

        // Draw bullets
        using var bulletPaint = new SKPaint
        {
            Color = SKColors.Yellow,
            IsAntialias = false,
            Style = SKPaintStyle.Fill
        };
        foreach (var bullet in playerBullets)
        {
            Canvas.DrawRect(new SKRect(bullet.X, bullet.Y, bullet.X + BulletWidth, bullet.Y + BulletHeight), bulletPaint);
        }
        foreach (var bullet in alienBullets)
        {
            Canvas.DrawRect(new SKRect(bullet.X, bullet.Y, bullet.X + BulletWidth, bullet.Y + BulletHeight), bulletPaint);
        }

        // Draw UI
        using var font = new SKFont { Size = 6 };
        using var paint = new SKPaint
        {
            Color = SKColors.White,
            IsAntialias = false
        };
        
        Canvas.DrawText($"Score: {score}", 2, 6, SKTextAlign.Left, font, paint);
        Canvas.DrawText($"Lives: {lives}", 2, 12, SKTextAlign.Left, font, paint);

        if (!gameStarted)
        {
            using var startFont = new SKFont { Size = 8 };
            using var startPaint = new SKPaint
            {
                Color = SKColors.Yellow,
                IsAntialias = false
            };
            Canvas.DrawText("Press A to start", 15, 20, SKTextAlign.Left, startFont, startPaint);
        }

        if (gameOver)
        {
            using var gameOverFont = new SKFont { Size = 8 };
            using var gameOverPaint = new SKPaint
            {
                Color = SKColors.Red,
                IsAntialias = false
            };
            Canvas.DrawText("GAME OVER", 15, 20, SKTextAlign.Left, gameOverFont, gameOverPaint);
            Canvas.DrawText("Press A to restart", 8, 28, SKTextAlign.Left, gameOverFont, gameOverPaint);
        }
    }

    private void UpdateGame(double elapsed)
    {
        // Update timers
        shootTimer -= elapsed;
        alienMoveTimer += elapsed;
        alienShootTimer += elapsed;

        // Move aliens
        if (alienMoveTimer >= AlienMoveInterval)
        {
            alienMoveTimer = 0.0;
            MoveAliens();
        }

        // Alien shooting
        if (alienShootTimer >= AlienShootInterval)
        {
            alienShootTimer = 0.0;
            ShootAlienBullet();
        }

        // Update bullets
        UpdateBullets(elapsed);

        // Check collisions
        CheckCollisions();

        // Check win/lose conditions
        if (aliens.Count == 0)
        {
            // Level complete - spawn new wave
            SpawnAliens();
            alienSpeed += 5f; // Increase difficulty
        }
    }

    private void MoveAliens()
    {
        bool shouldReverse = false;
        float newDirection = alienDirection;

        foreach (var alien in aliens)
        {
            alien.X += alienDirection * alienSpeed * 0.1f;

            if (alien.X <= 0 || alien.X >= SceneImageInfo.Width - AlienWidth)
            {
                shouldReverse = true;
            }
        }

        if (shouldReverse)
        {
            newDirection = -alienDirection;
            foreach (var alien in aliens)
            {
                alien.Y += 4; // Move down
                if (alien.Y >= SceneImageInfo.Height - PlayerHeight - 10)
                {
                    gameOver = true; // Aliens reached the bottom
                }
            }
        }

        alienDirection = newDirection;
    }

    private void ShootPlayerBullet()
    {
        var bullet = new Bullet
        {
            X = playerX + PlayerWidth / 2 - BulletWidth / 2,
            Y = SceneImageInfo.Height - PlayerHeight - 2 - BulletHeight,
            VelocityY = -BulletSpeed
        };
        playerBullets.Add(bullet);
    }

    private void ShootAlienBullet()
    {
        if (aliens.Count == 0) return;

        var randomAlien = aliens[Random.Shared.Next(aliens.Count)];
        var bullet = new Bullet
        {
            X = randomAlien.X + AlienWidth / 2 - BulletWidth / 2,
            Y = randomAlien.Y + AlienHeight,
            VelocityY = BulletSpeed
        };
        alienBullets.Add(bullet);
    }

    private void UpdateBullets(double elapsed)
    {
        // Update player bullets
        for (int i = playerBullets.Count - 1; i >= 0; i--)
        {
            var bullet = playerBullets[i];
            bullet.Y += bullet.VelocityY * (float)elapsed;

            if (bullet.Y < -BulletHeight)
            {
                playerBullets.RemoveAt(i);
            }
        }

        // Update alien bullets
        for (int i = alienBullets.Count - 1; i >= 0; i--)
        {
            var bullet = alienBullets[i];
            bullet.Y += bullet.VelocityY * (float)elapsed;

            if (bullet.Y > SceneImageInfo.Height)
            {
                alienBullets.RemoveAt(i);
            }
        }
    }

    private void CheckCollisions()
    {
        // Player bullets vs aliens
        for (int i = playerBullets.Count - 1; i >= 0; i--)
        {
            var bullet = playerBullets[i];
            for (int j = aliens.Count - 1; j >= 0; j--)
            {
                var alien = aliens[j];
                if (bullet.X < alien.X + AlienWidth && bullet.X + BulletWidth > alien.X &&
                    bullet.Y < alien.Y + AlienHeight && bullet.Y + BulletHeight > alien.Y)
                {
                    aliens.RemoveAt(j);
                    playerBullets.RemoveAt(i);
                    score += 100;
                    break;
                }
            }
        }

        // Alien bullets vs player
        for (int i = alienBullets.Count - 1; i >= 0; i--)
        {
            var bullet = alienBullets[i];
            if (bullet.X < playerX + PlayerWidth && bullet.X + BulletWidth > playerX &&
                bullet.Y < SceneImageInfo.Height - 2 && bullet.Y + BulletHeight > SceneImageInfo.Height - PlayerHeight - 2)
            {
                alienBullets.RemoveAt(i);
                lives--;
                if (lives <= 0)
                {
                    gameOver = true;
                }
                else
                {
                    // Reset player position
                    playerX = SceneImageInfo.Width / 2 - PlayerWidth / 2;
                }
            }
        }
    }

    private void SpawnAliens()
    {
        aliens.Clear();
        for (int row = 0; row < AlienRows; row++)
        {
            for (int col = 0; col < AlienCols; col++)
            {
                aliens.Add(new Alien
                {
                    X = col * (AlienWidth + 2) + 4,
                    Y = row * (AlienHeight + 2) + 4
                });
            }
        }
    }

    private void ResetGame()
    {
        gameOver = false;
        score = 0;
        lives = 3;
        gameStarted = false;
        playerX = SceneImageInfo.Width / 2 - PlayerWidth / 2;
        alienSpeed = 10f;
        alienDirection = 1f;
        alienMoveTimer = 0.0;
        alienShootTimer = 0.0;
        shootTimer = 0.0;
        
        playerBullets.Clear();
        alienBullets.Clear();
        
        SpawnAliens();
    }

    private class Alien
    {
        public float X { get; set; }
        public float Y { get; set; }
    }

    private class Bullet
    {
        public float X { get; set; }
        public float Y { get; set; }
        public float VelocityY { get; set; }
    }
} 