using System.Text;
using PAWSC.Runtime;

namespace PAWSC.Interfaces;

public interface IPawsInterface
{
    public void Initialised(PawsRuntime runtime);
    public void Accept(IList<Byte> data);
    public int GetByteSize();
}

public readonly struct Pixel(byte r, byte g, byte b, byte a)
{
    public readonly byte R = r;
    public readonly byte G = g;
    public readonly byte B = b;
    public readonly byte A = a;
}

public static class PawsInterfaceHelper {
    public static IEnumerable<Pixel> ConvertToRGBAPixels(IList<Byte> data) {
        if (data == null || data.Count % 4 != 0) {
            throw new ArgumentException("Buffer of pixels cannot be converted into pixels")
        }

        return Enumerable.Range(0, data.Count / 4)
            .Select(i => new Pixel(
                data[i * 4],
                data[i * 4 + 1],
                data[i * 4 + 2],
                data[i * 4 + 3]
            ))
    }
}

public class FrameBufferInterface(String FrameBufferPath, int Width, int Height) : IPawsInterface
{
    public String FrameBufferPath { get; private set; } = FrameBufferPath;
    public int Width { get; private set; } = Width;
    public int Height { get; private set; } = Height;

    public void Initialised(PawsRuntime runtime)
    {
        // none
    }

    public void Accept(IList<byte> data)
    {
        using var fb = new FileStream(FrameBufferPath, FileMode.Open, FileAccess.Write);
        fb.Write(data.ToArray(), 0, GetByteSize());
    }

    public int GetByteSize()
    {
        return Width * Height * 4;
    }
}

public class TerminalInterface(String Symbol, int Width, int Height) : IPawsInterface {
    public int Width { get; private set; } = Width;
    public int Height { get; private set; } = Height;
    public String Symbol { get; private set; } = Symbol;

    private const String Reset = "\x1b[0m";

    public void Initialised(PawsRuntime runtime) {
        //none
    }

    public void Accept(IList<Byte> data) {
        IList<Pixel> pixels = PawsInterfaceHelper.ConvertToRGBAPixels(data).ToList();
        StringBuilder builder = new StringBuilder(GetByteSize() * 10); //Preallocate generously

        Console.OutputEncoding = Encoding.UTF8;
        Console.SetCursorPosition(0, 0);

        for (int y = 0; y < Height; y++)
        {
            int rowStart = (y * Width);
            for (int x = 0; x < Width; x++)
            {
                Pixel p = pixels[rowStart + x];
                builder.Append("\x1b[48;2;");
                builder.Append(p.R);
                builder.Append(";");
                builder.Append(p.G);
                builder.Append(";");
                builder.Append(p.B);
                builder.Append("m");
            }
            builder.Append(Reset);
            builder.Append("\n");
        }
        Console.Write(builder.ToString());
    }

    public int GetByteSize()
    {
        return Width * Height * 4;
    }
}