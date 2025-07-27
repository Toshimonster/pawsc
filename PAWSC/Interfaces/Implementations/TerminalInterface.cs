using PAWSC.Runtime;
using Spectre.Console;

namespace PAWSC.Interfaces.Implementations;

public class TerminalInterface(int width, int height) : IPawsInterface
{
    
    public PawsInterfaceInfo InterfaceInfo { get; } = new()
    {
        Width = width,
        Height = height,
        ByteRepresentation = PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgb
    };
    public required string Id { get; init; }

    public void Initialise(PawsRuntime runtime)
    {
        AnsiConsole.Clear();
    }

    public void Accept(ReadOnlySpan<byte> data)
    {
        ReadOnlySpan<Pixel> pixels = PawsInterfaceHelper.ConvertToRgbPixels(data);

        var canvas = new Canvas(InterfaceInfo.Width, InterfaceInfo.Height);

        for (int y = 0; y < InterfaceInfo.Height; y++)
        {
            for (int x = 0; x < InterfaceInfo.Width; x++)
            {
                var pixel = pixels[y * InterfaceInfo.Width + x];
                pixel = pixel.ApplyToRgb();
                var color = new Color(pixel.R, pixel.G, pixel.B);
                canvas.SetPixel(x, y, color);
            }
        }

        AnsiConsole.Cursor.SetPosition(0, 0);
        AnsiConsole.Write(canvas);
    }
}