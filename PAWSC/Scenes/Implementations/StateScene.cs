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

public record PawsGif : IPawsGif
{
    public SKCodec Codec { get; init; }
}

public class BaseState(Identifier id, Dictionary<Identifier, IPawsGif> definition) : IPawsState
{
    public Identifier Id { get; init; } = id;
    public Dictionary<Identifier, IPawsGif> Definition { get; init; } = definition;
}

public class StateScene : SkiaSharpRasterScene
{
    protected Dictionary<Identifier, IPawsState> States = new();

    public StateScene(Identifier id) : base(id)
    {
        var dict = new Dictionary<Identifier, IPawsGif>()
        {
            [new Identifier("LEFT_P45")] = new PawsGif()
            {
                Codec = SKCodec.Create("/home/toshi/Documents/Personal/Proto/ToshiProto/face_blink_shine.gif")
            }
        };
        AddState(new BaseState(new Identifier("Test"), dict));
        ActiveState = States.Keys.First();
    }

    public void AddState(IPawsState state)
    {
        States.Add(state.Id, state);
    }

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
        int frameIndex = GetFrameIndex(drawInfo.Time.Ticks / 10000, frames);

        var info = codec.Info;
        using var bitmap = new SKBitmap(info.Width, info.Height);
        var options = new SKCodecOptions(frameIndex);

        codec.GetPixels(bitmap.Info, bitmap.GetPixels(), options);
        var img = SKImage.FromBitmap(bitmap);

        using SKImage viewImage = SkiaSharpScene.CreateViewImage(new SKRect(0, 0, bitmap.Width, bitmap.Height),
            iface,
            img,
            img.Info
        );
        
        var encoded = viewImage.PeekPixels().GetPixels();

        var originalLen = viewImage.Width * viewImage.Height * 4;
        var len =  iface.InterfaceInfo.GetByteSize();
        var interfaceBytes = iface.InterfaceInfo.ByteRepresentation.GetBytesPerPixel();
        var data = new byte[originalLen];
        System.Runtime.InteropServices.Marshal.Copy(encoded, data, 0, originalLen);
            
        data = PawsInterfaceHelper.DropBytes(data, len, 4, interfaceBytes);
        
        // Send the encoded image as a ReadOnlySpan<byte>
        iface.Accept(data);
    }
    
    
    private int GetFrameIndex(long timeMs, SKCodecFrameInfo[] frames)
    {
        long totalDuration = frames.Sum(f => f.Duration);
        long time = (timeMs) % (totalDuration);

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
        //throw new NotImplementedException();
    }
}