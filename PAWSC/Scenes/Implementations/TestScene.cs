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
            IsAntialias = true
        };
        using var font = new SKFont(SKTypeface.Default, 12);
        
        Canvas.DrawText("Test Scene", 10, 20, SKTextAlign.Left, font, paint);
    }
}