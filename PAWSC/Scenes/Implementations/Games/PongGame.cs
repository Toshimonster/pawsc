using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations.Games;

public class PongGame(Identifier id) : GameScene(id)
{
    // Game state
    private bool gameOver = false;
    private int playerScore = 0;
    private int aiScore = 0;
    private bool gameStarted = false;

    // Paddles
    private const int PaddleWidth = 2;
    private const int PaddleHeight = 8;
    private float playerPaddleY = 12;
    private float aiPaddleY = 12;
    private const float PaddleSpeed = 40f; // pixels per second

    // Ball
    private float ballX = 32;
    private float ballY = 16;
    private float ballVX = 30f;
    private float ballVY = 20f;
    private const int BallSize = 2;

    // Game timing
    private DateTime lastUpdate = DateTime.UtcNow;
    private const double AiUpdateInterval = 0.1; // AI updates every 100ms
    private double aiTimer = 0.0;

    public override Task Initialise(PawsRuntime runtime)
    {
        base.Initialise(runtime);
        ResetGame();
        lastUpdate = DateTime.UtcNow;
        return Task.CompletedTask;
    }

    protected override Task OnInput(ControllerValues e)
    {
        if (gameOver)
        {
            if (e == ControllerValues.A)
            {
                ResetGame();
            }

            return Task.CompletedTask;
        }

        if (!gameStarted && e == ControllerValues.A)
        {
            gameStarted = true;
            return Task.CompletedTask;
        }

        // Paddle movement
        switch (e)
        {
            case ControllerValues.Up:
                playerPaddleY = Math.Max(0, playerPaddleY - PaddleHeight);
                break;
            case ControllerValues.Down:
                playerPaddleY = Math.Min(SceneImageInfo.Height - PaddleHeight, playerPaddleY + PaddleHeight);
                break;
        }

        return Task.CompletedTask;
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

        using var paint = new SKPaint
        {
            Color = SKColors.White,
            IsAntialias = false,
            Style = SKPaintStyle.Fill
        };

        // Draw center line
        for (int y = 0; y < SceneImageInfo.Height; y += 4)
        {
            Canvas.DrawRect(new SKRect(31, y, 33, y + 2), paint);
        }

        // Draw paddles
        Canvas.DrawRect(new SKRect(2, playerPaddleY, 2 + PaddleWidth, playerPaddleY + PaddleHeight), paint);
        Canvas.DrawRect(new SKRect(SceneImageInfo.Width - 2 - PaddleWidth, aiPaddleY, SceneImageInfo.Width - 2, aiPaddleY + PaddleHeight), paint);

        // Draw ball
        Canvas.DrawRect(new SKRect(ballX, ballY, ballX + BallSize, ballY + BallSize), paint);

        // Draw scores
        using var scoreFont = new SKFont { Size = 8 };
        using var scorePaint = new SKPaint
        {
            Color = SKColors.White,
            IsAntialias = false
        };
        Canvas.DrawText($"{playerScore}", 10, 8, SKTextAlign.Left, scoreFont, scorePaint);
        Canvas.DrawText($"{aiScore}", 50, 8, SKTextAlign.Left, scoreFont, scorePaint);

        if (!gameStarted)
        {
            using var startFont = new SKFont { Size = 7 };
            using var startPaint = new SKPaint
            {
                Color = SKColors.Yellow,
                IsAntialias = false
            };
            Canvas.DrawText("Press A to start", 31, 20, SKTextAlign.Center, startFont, startPaint);
        }

        if (gameOver)
        {
            using var gameOverFont = new SKFont { Size = 7 };
            using var gameOverPaint = new SKPaint
            {
                Color = SKColors.Red,
                IsAntialias = false
            };
            Canvas.DrawText("GAME OVER", 31, 20, SKTextAlign.Center, gameOverFont, gameOverPaint);
            Canvas.DrawText("Press A to restart", 31, 28, SKTextAlign.Center, gameOverFont, gameOverPaint);
        }
    }

    private void UpdateGame(double elapsed)
    {
        // Update ball position
        ballX += ballVX * (float)elapsed;
        ballY += ballVY * (float)elapsed;

        // Ball collision with top and bottom
        if (ballY <= 0 || ballY >= SceneImageInfo.Height - BallSize)
        {
            ballVY = -ballVY;
            ballY = Math.Clamp(ballY, 0, SceneImageInfo.Height - BallSize);
        }

        // Ball collision with paddles
        if (ballX <= 4 && ballY + BallSize > playerPaddleY && ballY < playerPaddleY + PaddleHeight)
        {
            ballVX = -ballVX;
            ballX = 4;
            // Add some randomness to ball direction
            ballVY += (float)(Random.Shared.NextDouble() - 0.5) * 20f;
        }

        if (ballX >= SceneImageInfo.Width - 4 - BallSize && ballY + BallSize > aiPaddleY && ballY < aiPaddleY + PaddleHeight)
        {
            ballVX = -ballVX;
            ballX = SceneImageInfo.Width - 4 - BallSize;
            ballVY += (float)(Random.Shared.NextDouble() - 0.5) * 20f;
        }

        // Ball out of bounds
        if (ballX < 0)
        {
            aiScore++;
            ResetBall();
            if (aiScore >= 5) gameOver = true;
        }
        else if (ballX > SceneImageInfo.Width)
        {
            playerScore++;
            ResetBall();
            if (playerScore >= 5) gameOver = true;
        }

        // AI paddle movement
        aiTimer += elapsed;
        if (aiTimer >= AiUpdateInterval)
        {
            aiTimer = 0.0;
            UpdateAiPaddle();
        }
    }

    private void UpdateAiPaddle()
    {
        // Simple AI: follow the ball
        if (ballY < aiPaddleY + PaddleHeight / 2)
        {
            aiPaddleY = Math.Max(0, aiPaddleY - 2);
        }
        else if (ballY > aiPaddleY + PaddleHeight / 2)
        {
            aiPaddleY = Math.Min(SceneImageInfo.Height - PaddleHeight, aiPaddleY + 2);
        }
    }

    private void ResetBall()
    {
        ballX = SceneImageInfo.Width / 2;
        ballY = SceneImageInfo.Height / 2;
        ballVX = Random.Shared.Next(2) == 0 ? 30f : -30f;
        ballVY = (float)(Random.Shared.NextDouble() - 0.5) * 40f;
        gameStarted = false;
    }

    private void ResetGame()
    {
        gameOver = false;
        playerScore = 0;
        aiScore = 0;
        gameStarted = false;
        playerPaddleY = 12;
        aiPaddleY = 12;
        ResetBall();
        aiTimer = 0.0;
    }
}
