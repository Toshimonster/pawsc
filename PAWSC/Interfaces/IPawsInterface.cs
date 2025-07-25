using PAWSC.Runtime;

namespace PAWSC.Interfaces;

public interface IPawsInterface : IIdentifiable
{
    public void Initialise(PawsRuntime runtime);
    public void Accept(IList<Byte> data);
    public int GetByteSize();
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