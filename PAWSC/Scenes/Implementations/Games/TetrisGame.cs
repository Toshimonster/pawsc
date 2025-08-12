using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations.Games;

public class TetrisGame(Identifier id) : GameScene(id)
{
    // Game state
    private bool gameOver = false;
    private int score = 0;
    private int level = 1;
    private int linesCleared = 0;
    
    // Grid
    private const int GridWidth = 16; // 64 pixels / 4 pixel blocks
    private const int GridHeight = 8; // 32 pixels / 4 pixel blocks
    private readonly int[,] grid = new int[GridWidth, GridHeight];
    private const int BlockSize = 4; // 4x4 pixel blocks
    
    // Current piece
    private int currentPieceX = 0;
    private int currentPieceY = 0;
    private int currentPieceType = 0;
    private int currentPieceRotation = 0;
    
    // Game timing
    private DateTime lastUpdate = DateTime.UtcNow;
    private double dropTimer = 0.0;
    private double dropInterval = 1.0; // Start with 1 second drops
    
    // Piece definitions (simple 2x2 blocks for small screen)
    private static readonly int[][][] Pieces = {
        // Square
        new int[][] { new int[] {1,1}, new int[] {1,1} },
        // Line
        new int[][] { new int[] {1,1,1,1} },
        // L shape
        new int[][] { new int[] {1,0}, new int[] {1,0}, new int[] {1,1} },
        // T shape
        new int[][] { new int[] {1,1,1}, new int[] {0,1,0} }
    };

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
            case GameControllerCharacteristic.ControllerValues.Left:
                if (CanMovePiece(currentPieceX - 1, currentPieceY, currentPieceType, currentPieceRotation))
                    currentPieceX--;
                break;
            case GameControllerCharacteristic.ControllerValues.Right:
                if (CanMovePiece(currentPieceX + 1, currentPieceY, currentPieceType, currentPieceRotation))
                    currentPieceX++;
                break;
            case GameControllerCharacteristic.ControllerValues.Down:
                if (CanMovePiece(currentPieceX, currentPieceY + 1, currentPieceType, currentPieceRotation))
                    currentPieceY++;
                break;
            case GameControllerCharacteristic.ControllerValues.Up:
                var newRotation = (currentPieceRotation + 1) % 4;
                if (CanMovePiece(currentPieceX, currentPieceY, currentPieceType, newRotation))
                    currentPieceRotation = newRotation;
                break;
            case GameControllerCharacteristic.ControllerValues.A:
                // Hard drop
                while (CanMovePiece(currentPieceX, currentPieceY + 1, currentPieceType, currentPieceRotation))
                {
                    currentPieceY++;
                }
                PlacePiece();
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

        // Draw grid
        DrawGrid();
        
        // Draw current piece
        DrawPiece(currentPieceX, currentPieceY, currentPieceType, currentPieceRotation, SKColors.Cyan);

        // Draw UI
        using var font = new SKFont { Size = 6 };
        using var paint = new SKPaint
        {
            Color = SKColors.White,
            IsAntialias = false
        };
        
        Canvas.DrawText($"Score: {score}", 2, 6, SKTextAlign.Left, font, paint);
        Canvas.DrawText($"Level: {level}", 2, 12, SKTextAlign.Left, font, paint);
        Canvas.DrawText($"Lines: {linesCleared}", 2, 18, SKTextAlign.Left, font, paint);

        if (gameOver)
        {
            using var gameOverFont = new SKFont { Size = 8 };
            using var gameOverPaint = new SKPaint
            {
                Color = SKColors.Red,
                IsAntialias = false
            };
            Canvas.DrawText("GAME OVER", 20, 20, SKTextAlign.Left, gameOverFont, gameOverPaint);
            Canvas.DrawText("Press A to restart", 12, 28, SKTextAlign.Left, gameOverFont, gameOverPaint);
        }
    }

    private void DrawGrid()
    {
        using var paint = new SKPaint
        {
            Color = SKColors.Gray,
            IsAntialias = false,
            Style = SKPaintStyle.Fill
        };

        for (int x = 0; x < GridWidth; x++)
        {
            for (int y = 0; y < GridHeight; y++)
            {
                if (grid[x, y] != 0)
                {
                    var screenX = x * BlockSize;
                    var screenY = y * BlockSize;
                    Canvas.DrawRect(new SKRect(screenX, screenY, screenX + BlockSize, screenY + BlockSize), paint);
                }
            }
        }
    }

    private void DrawPiece(int x, int y, int pieceType, int rotation, SKColor color)
    {
        using var paint = new SKPaint
        {
            Color = color,
            IsAntialias = false,
            Style = SKPaintStyle.Fill
        };

        var piece = Pieces[pieceType % Pieces.Length];
        var pieceWidth = piece[0].Length;
        var pieceHeight = piece.Length;

        for (int py = 0; py < pieceHeight; py++)
        {
            for (int px = 0; px < pieceWidth; px++)
            {
                if (piece[py][px] != 0)
                {
                    var screenX = (x + px) * BlockSize;
                    var screenY = (y + py) * BlockSize;
                    Canvas.DrawRect(new SKRect(screenX, screenY, screenX + BlockSize, screenY + BlockSize), paint);
                }
            }
        }
    }

    private void UpdateGame(double elapsed)
    {
        dropTimer += elapsed;
        if (dropTimer >= dropInterval)
        {
            dropTimer = 0.0;
            if (!MovePieceDown())
            {
                PlacePiece();
                ClearLines();
                SpawnNewPiece();
                if (!CanMovePiece(currentPieceX, currentPieceY, currentPieceType, currentPieceRotation))
                {
                    gameOver = true;
                }
            }
        }
    }

    private bool MovePieceDown()
    {
        if (CanMovePiece(currentPieceX, currentPieceY + 1, currentPieceType, currentPieceRotation))
        {
            currentPieceY++;
            return true;
        }
        return false;
    }

    private bool CanMovePiece(int newX, int newY, int pieceType, int rotation)
    {
        var piece = Pieces[pieceType % Pieces.Length];
        var pieceWidth = piece[0].Length;
        var pieceHeight = piece.Length;

        for (int py = 0; py < pieceHeight; py++)
        {
            for (int px = 0; px < pieceWidth; px++)
            {
                if (piece[py][px] != 0)
                {
                    var checkX = newX + px;
                    var checkY = newY + py;
                    
                    if (checkX < 0 || checkX >= GridWidth || checkY >= GridHeight)
                        return false;
                    
                    if (checkY >= 0 && grid[checkX, checkY] != 0)
                        return false;
                }
            }
        }
        return true;
    }

    private void PlacePiece()
    {
        var piece = Pieces[currentPieceType % Pieces.Length];
        var pieceWidth = piece[0].Length;
        var pieceHeight = piece.Length;

        for (int py = 0; py < pieceHeight; py++)
        {
            for (int px = 0; px < pieceWidth; px++)
            {
                if (piece[py][px] != 0)
                {
                    var gridX = currentPieceX + px;
                    var gridY = currentPieceY + py;
                    if (gridX >= 0 && gridX < GridWidth && gridY >= 0 && gridY < GridHeight)
                    {
                        grid[gridX, gridY] = 1;
                    }
                }
            }
        }
    }

    private void ClearLines()
    {
        for (int y = GridHeight - 1; y >= 0; y--)
        {
            bool lineFull = true;
            for (int x = 0; x < GridWidth; x++)
            {
                if (grid[x, y] == 0)
                {
                    lineFull = false;
                    break;
                }
            }

            if (lineFull)
            {
                // Clear the line
                for (int x = 0; x < GridWidth; x++)
                {
                    grid[x, y] = 0;
                }

                // Move all lines above down
                for (int moveY = y; moveY > 0; moveY--)
                {
                    for (int x = 0; x < GridWidth; x++)
                    {
                        grid[x, moveY] = grid[x, moveY - 1];
                    }
                }

                // Clear top line
                for (int x = 0; x < GridWidth; x++)
                {
                    grid[x, 0] = 0;
                }

                linesCleared++;
                score += 100 * level;
                
                // Increase level every 5 lines
                level = (linesCleared / 5) + 1;
                dropInterval = Math.Max(0.1, 1.0 - (level - 1) * 0.1);
                
                y++; // Recheck this line
            }
        }
    }

    private void SpawnNewPiece()
    {
        currentPieceType = Random.Shared.Next(Pieces.Length);
        currentPieceRotation = 0;
        currentPieceX = GridWidth / 2 - 1;
        currentPieceY = 0;
    }

    private void ResetGame()
    {
        gameOver = false;
        score = 0;
        level = 1;
        linesCleared = 0;
        dropInterval = 1.0;
        dropTimer = 0.0;
        
        // Clear grid
        for (int x = 0; x < GridWidth; x++)
        {
            for (int y = 0; y < GridHeight; y++)
            {
                grid[x, y] = 0;
            }
        }
        
        SpawnNewPiece();
    }
} 