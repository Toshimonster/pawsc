using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations;

public class TestScene(Identifier name, int width = 255, int height = 255, SKColorType colorType = SKColorType.Bgra8888)
    : SkiaSharpScene(name, width, height, colorType)
{
    protected override void RenderScene(DrawInfo drawInfo)
    {
        Canvas.Clear(SKColors.Black);
        using var paint = new SKPaint
        {
            Color = SKColors.White,
            TextSize = 12,
            IsAntialias = true,
        };

        Canvas.DrawText($"Time: {drawInfo.Time.ToString("s.fff")} | DT: {drawInfo.Deltatime} | FPS: {drawInfo.Fps}", 0, 60, paint);
    }
}