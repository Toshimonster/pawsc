using PAWSC.Runtime;
using Spectre.Console;

namespace PAWSC.Interfaces;

public class TerminalInterface(int width, int height) : IPawsInterface
{
    private int Width { get; set; } = width;
    private int Height { get; set; } = height;
    public required string ID { get; set; }

    public void Initialise(PawsRuntime runtime)
    {
        AnsiConsole.Clear();
    }

    public void Accept(IList<byte> data)
    {
        IList<Pixel> pixels = PawsInterfaceHelper.ConvertToRGBAPixels(data).ToList();

        var canvas = new Canvas(Width, Height);

        for (int y = 0; y < Height; y++)
        {
            for (int x = 0; x < Width; x++)
            {
                var pixel = pixels[y * Width + x];
                pixel = pixel.ApplyToRgb();
                var color = new Color(pixel.R, pixel.G, pixel.B);
                canvas.SetPixel(x, y, color);
            }
        }

        AnsiConsole.Cursor.SetPosition(0, 0);
        AnsiConsole.Write(canvas);
    }

    public int GetByteSize() => Width * Height * 4;
}