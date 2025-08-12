using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations.Games;

public class GameLauncherScene(Identifier id) : SkiaSharpScene(id, 64, 32)
{
    private int selectedGameIndex = 0;
    private readonly string[] gameNames = { "Dino Game", "Snake", "Pong", "Tetris", "Space Invaders" };
    private readonly Type[] gameTypes = { typeof(DinoGame), typeof(SnakeGame), typeof(PongGame), typeof(TetrisGame), typeof(SpaceInvadersGame) };
    
    private DateTime lastInput = DateTime.UtcNow;
    private const double InputCooldown = 0.2; // Prevent rapid input

    public override Task Initialise(PawsRuntime runtime)
    {
        // This scene doesn't need GATT controller setup
        return Task.CompletedTask;
    }

    protected override void RenderScene(DrawInfo drawInfo)
    {
        // Clear to dark blue
        Canvas.Clear(new SKColor(0, 0, 40));

        // Draw title
        using var titleFont = new SKFont { Size = 10 };
        using var titlePaint = new SKPaint
        {
            Color = SKColors.Yellow,
            IsAntialias = false
        };
        Canvas.DrawText("PAWSC GAMES", 8, 8, SKTextAlign.Left, titleFont, titlePaint);

        // Draw game list
        using var gameFont = new SKFont { Size = 8 };
        using var gamePaint = new SKPaint
        {
            Color = SKColors.White,
            IsAntialias = false
        };

        using var selectedFont = new SKFont { Size = 8 };
        using var selectedPaint = new SKPaint
        {
            Color = SKColors.Cyan,
            IsAntialias = false
        };

        for (int i = 0; i < gameNames.Length; i++)
        {
            var paint = i == selectedGameIndex ? selectedPaint : gamePaint;
            var font = i == selectedGameIndex ? selectedFont : gameFont;
            var y = 16 + i * 8;
            var prefix = i == selectedGameIndex ? "> " : "  ";
            Canvas.DrawText(prefix + gameNames[i], 4, y, SKTextAlign.Left, font, paint);
        }

        // Draw instructions
        using var instructionFont = new SKFont { Size = 6 };
        using var instructionPaint = new SKPaint
        {
            Color = SKColors.Gray,
            IsAntialias = false
        };
        Canvas.DrawText("Up/Down: Select  A: Launch  B: Back", 2, 28, SKTextAlign.Left, instructionFont, instructionPaint);
    }

    public void HandleInput(GameControllerCharacteristic.ControllerValues input)
    {
        var now = DateTime.UtcNow;
        if ((now - lastInput).TotalSeconds < InputCooldown) return;
        lastInput = now;

        switch (input)
        {
            case GameControllerCharacteristic.ControllerValues.Up:
                selectedGameIndex = (selectedGameIndex - 1 + gameNames.Length) % gameNames.Length;
                break;
            case GameControllerCharacteristic.ControllerValues.Down:
                selectedGameIndex = (selectedGameIndex + 1) % gameNames.Length;
                break;
            case GameControllerCharacteristic.ControllerValues.A:
                LaunchSelectedGame();
                break;
        }
    }

    private void LaunchSelectedGame()
    {
        // This would typically switch to the selected game scene
        // For now, we'll just log the selection
        Console.WriteLine($"Launching: {gameNames[selectedGameIndex]}");
        
        // In a real implementation, you would:
        // 1. Create an instance of the selected game type
        // 2. Switch the active scene to that game
        // 3. Handle returning to the launcher when the game ends
    }
} 