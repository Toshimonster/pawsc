using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations.Games;

public class SnakeGame(Identifier id) : GameScene(id)
{
    // Game state
    private bool gameOver = false;
    private int score = 0;
    
    // Snake
    private readonly List<SKPoint> snake = new();
    private SKPoint direction = new(1, 0); // Start moving right
    private const int SnakeSegmentSize = 2;
    
    // Food
    private SKPoint food;
    private readonly Random rng = new();
    
    // Game timing
    private DateTime lastUpdate = DateTime.UtcNow;
    private const double MoveInterval = 0.15; // Move every 150ms
    private double moveTimer = 0.0;
    
    // Grid size
    private const int GridWidth = 32; // 64 pixels / 2 pixel segments
    private const int GridHeight = 16; // 32 pixels / 2 pixel segments

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

        switch (e)
        {
            case GameControllerCharacteristic.ControllerValues.Up:
                if (direction.Y == 0) direction = new SKPoint(0, -1);
                break;
            case GameControllerCharacteristic.ControllerValues.Down:
                if (direction.Y == 0) direction = new SKPoint(0, 1);
                break;
            case GameControllerCharacteristic.ControllerValues.Left:
                if (direction.X == 0) direction = new SKPoint(-1, 0);
                break;
            case GameControllerCharacteristic.ControllerValues.Right:
                if (direction.X == 0) direction = new SKPoint(1, 0);
                break;
        }
    }

    protected override void RenderScene(DrawInfo drawInfo)
    {
        var now = DateTime.UtcNow;
        var elapsed = (now - lastUpdate).TotalSeconds;
        if (elapsed > 0.25) elapsed = 0.25;
        lastUpdate = now;

        if (!gameOver)
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

        // Draw snake
        foreach (var segment in snake)
        {
            var x = segment.X * SnakeSegmentSize;
            var y = segment.Y * SnakeSegmentSize;
            Canvas.DrawRect(new SKRect(x, y, x + SnakeSegmentSize, y + SnakeSegmentSize), paint);
        }

        // Draw food
        var foodX = food.X * SnakeSegmentSize;
        var foodY = food.Y * SnakeSegmentSize;
        Canvas.DrawRect(new SKRect(foodX, foodY, foodX + SnakeSegmentSize, foodY + SnakeSegmentSize), paint);

        // Draw score
        using var scoreFont = new SKFont { Size = 8 };
        using var scorePaint = new SKPaint
        {
            Color = SKColors.White,
            IsAntialias = false
        };
        Canvas.DrawText($"Score: {score}", 2, 8, SKTextAlign.Left, scoreFont, scorePaint);

        if (gameOver)
        {
            using var gameOverFont = new SKFont { Size = 10 };
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
        moveTimer += elapsed;
        if (moveTimer < MoveInterval) return;
        
        moveTimer = 0.0;
        MoveSnake();
        CheckCollisions();
        CheckFood();
    }

    private void MoveSnake()
    {
        var head = snake[0];
        var newHead = new SKPoint(head.X + direction.X, head.Y + direction.Y);
        
        // Wrap around edges
        if (newHead.X < 0) newHead.X = GridWidth - 1;
        if (newHead.X >= GridWidth) newHead.X = 0;
        if (newHead.Y < 0) newHead.Y = GridHeight - 1;
        if (newHead.Y >= GridHeight) newHead.Y = 0;
        
        snake.Insert(0, newHead);
        
        // Remove tail (will be added back if food eaten)
        snake.RemoveAt(snake.Count - 1);
    }

    private void CheckCollisions()
    {
        var head = snake[0];
        
        // Check self-collision (skip head)
        for (int i = 1; i < snake.Count; i++)
        {
            if (snake[i] == head)
            {
                gameOver = true;
                return;
            }
        }
    }

    private void CheckFood()
    {
        var head = snake[0];
        if (head == food)
        {
            // Grow snake
            var tail = snake[^1];
            snake.Add(tail);
            
            // Spawn new food
            SpawnFood();
            score++;
        }
    }

    private void SpawnFood()
    {
        do
        {
            food = new SKPoint(rng.Next(0, GridWidth), rng.Next(0, GridHeight));
        } while (snake.Contains(food));
    }

    private void ResetGame()
    {
        gameOver = false;
        score = 0;
        snake.Clear();
        
        // Start with 3 segments moving right
        snake.Add(new SKPoint(5, 8));
        snake.Add(new SKPoint(4, 8));
        snake.Add(new SKPoint(3, 8));
        
        direction = new SKPoint(1, 0);
        SpawnFood();
        moveTimer = 0.0;
    }
} 