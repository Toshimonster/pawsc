using PAWSC.Runtime;

namespace PAWSC.Interfaces;

public class FrameBufferInterface(String FrameBufferPath, int Width, int Height) : IPawsInterface
{
    public String FrameBufferPath { get; private set; } = FrameBufferPath;
    public int Width { get; private set; } = Width;
    public int Height { get; private set; } = Height;

    public void Initialise(PawsRuntime runtime)
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
    
    public required string ID { get; set; }
}