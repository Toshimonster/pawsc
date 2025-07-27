using PAWSC.Runtime;

namespace PAWSC.Interfaces;

public record PawsInterfaceInfo
{
    public int Width { get; init; } = 1;
    public int Height { get; init; } = 1;
    public PawsInterfaceByteRepresentation ByteRepresentation { get; init; }

    public enum PawsInterfaceByteRepresentation
    {
        [ByteSize(1)]
        Byte,
        [ByteSize(3)]
        Rgb,
        [ByteSize(4)]
        Rgba
    }
    
    public int GetByteSize()
    {
        return ByteRepresentation.GetBytesPerPixel() * Width * Height;
    }
}

public interface IPawsInterface : IIdentifiable, IPawsInitialisable
{
    public void Accept(ReadOnlySpan<byte> data);
    public PawsInterfaceInfo InterfaceInfo { get; }
}

public readonly struct Pixel(byte r, byte g, byte b, byte a)
{
    public readonly byte R = r;
    public readonly byte G = g;
    public readonly byte B = b;
    public readonly byte A = a;

    public Pixel ApplyToRgb()
    {
        var delta = A / 255f;
        return new Pixel(
            (byte)(R * delta), 
            (byte)(G * delta), 
            (byte)(B * delta), 
            255);
    }
}