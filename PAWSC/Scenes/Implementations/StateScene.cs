using PAWSC.Interfaces;
using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations;

public interface IPawsState : IIdentifiable
{
    public Dictionary<Identifier, IPawsGif> Definition { get; init; }
}

public interface IPawsGif
{
    SKCodec Codec { get; init; }
}

public class BaseState(Identifier id, Dictionary<Identifier, IPawsGif> definition) : IPawsState
{
    public Identifier Id { get; init; } = id;
    public Dictionary<Identifier, IPawsGif> Definition { get; init; } = definition;
}

public class StateScene(Identifier id) : BaseScene(id)
{
    protected Dictionary<Identifier, IPawsState> States = new();

    public Identifier ActiveState
    {
        get;
        private set;
    }

    private IPawsState? ActiveStateObject => States[ActiveState];
    
    public override void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
    {
        IPawsState? stateToDraw = ActiveStateObject;
        if (stateToDraw == null) return;
        
        foreach (KeyValuePair<Identifier, IPawsGif> keyValuePair in stateToDraw.Definition)
        {
            IPawsInterface? iface = mgr.ById(keyValuePair.Key);
            if (iface == null) continue;
            DrawToInterface(iface, keyValuePair.Value, drawInfo);
        }
    }

    private void DrawToInterface(IPawsInterface iface, IPawsGif gif, DrawInfo drawInfo)
    {
        SKCodec codec = gif.Codec;
        SKCodecFrameInfo[] frames = codec.FrameInfo;
        int frameIndex = GetFrameIndex(drawInfo.Time.Ticks, frames);

        var info = codec.Info;
        using var bitmap = new SKBitmap(info.Width, info.Height);
        var options = new SKCodecOptions(frameIndex);

        codec.GetPixels(bitmap.Info, bitmap.GetPixels(), options);
        
        // Encode the bitmap into PNG (or any supported format)
        using var image = SKImage.FromBitmap(bitmap);
        using var data = image.Encode(SKEncodedImageFormat.Png, 100);

        // Send the encoded image as a ReadOnlySpan<byte>
        iface.Accept(data.AsSpan());
    }
    
    
    private int GetFrameIndex(long timeMs, SKCodecFrameInfo[] frames)
    {
        long totalDuration = frames.Sum(f => f.Duration);
        long time = timeMs % totalDuration;

        long accumulated = 0;
        for (int i = 0; i < frames.Length; i++)
        {
            accumulated += frames[i].Duration;
            if (time < accumulated)
                return i;
        }

        return frames.Length - 1; // fallback to last frame
    }

    public override void Initialise(PawsRuntime runtime)
    {
        throw new NotImplementedException();
    }
}