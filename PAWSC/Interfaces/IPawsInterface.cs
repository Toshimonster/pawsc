using PAWSC.Runtime;

namespace PAWSC.Interfaces;

public interface IPawsInterface
{
    public void Initialised(PawsRuntime runtime);
    public void Accept(IList<Byte> data);
    public int GetByteSize();
}

public class FrameBufferInterface(String frameBufferPath, int Width, int Height) : IPawsInterface
{
    private String FrameBufferPath { get; set; } = frameBufferPath;
    public int Width { get; private set; }
    public int Height { get; private set; }

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