using DotnetBleServer.Gatt.Description;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces;
using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations;

public interface IPawsState : IIdentifiable
{
    public Dictionary<Identifier[], IPawsGif> Definition { get; }
}

public interface IPawsGif : IIdentifiable
{
    SKCodec Codec { get; }
}

public record PawsGif(Identifier Id) : IPawsGif
{
    public SKCodec Codec { get; private init; } = null!;

    public static PawsGif FromCodec(SKCodec codec, Identifier id)
    {
        return new PawsGif(id)
        {
            Codec = codec
        };
    }

    public static PawsGif FromBytes(byte[] bytes, Identifier id)
    {
        var codec = SKCodec.Create(SKData.CreateCopy(bytes));
        return FromCodec(codec, id);
    }

    public static PawsGif FromFile(string path, Identifier id)
    {
        var codec = SKCodec.Create(path);
        if (codec is null) throw new FileNotFoundException(id + ": Could not create gif codec", path);
        return FromCodec(codec, id);
    }

    public static PawsGif FromFile(string path)
    {
        return FromFile(path, Identifier.Random());
    }
}

public class BaseState(Identifier id) : IPawsState
{
    public Identifier Id { get; init; } = id;
    public Dictionary<Identifier[], IPawsGif> Definition { get; } = new();

    public void AddGif(Identifier[] interfaces, IPawsGif gif)
    {
        Definition[interfaces] = gif;
    }

    public void AddGif(Identifier iface, IPawsGif gif)
    {
        AddGif([iface], gif);
    }
}

public class StateScene : SkiaSharpRasterScene
{
    protected readonly Dictionary<Identifier, IPawsState> States = new();

    public StateScene(Identifier id, Dictionary<Identifier, IPawsState> definitions): this(id)
    {
        States = definitions;
    }

    public StateScene(Identifier id) : base(id)
    {
    }

    public Dictionary<Identifier, IPawsState>.ValueCollection GetAllStates()
    {
        return States.Values;
    }

    public void AddState(IPawsState state)
    {
        States.Add(state.Id, state);
    }

    public Identifier? ActiveState
    {
        get
        {
            if (_activeState is null && States.Count > 0)
            {
                _activeState = States.Keys.FirstOrDefault();
            }

            return _activeState;
        }
        private set
        {
            if (value != null && States.ContainsKey((Identifier)value))
            {
                _activeState = value;
            }
            else
            {
                throw new ArgumentNullException();
            }
        }
    }

    private Identifier? _activeState = null;

    private IPawsState? ActiveStateObject => ActiveState != null ? States.GetValueOrDefault((Identifier) ActiveState) : null;

    public override void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
    {
        var stateToDraw = ActiveStateObject;
        if (stateToDraw == null) return;

        foreach (var keyValuePair in stateToDraw.Definition)
        {
            var ifaces = mgr.ById(keyValuePair.Key);
            DrawToInterface(ifaces, keyValuePair.Value, drawInfo);
        }
    }

    public override Task Initialise(PawsRuntime runtime)
    {
        RegisterControl<Identifier>("setState", OnSetState);
        RegisterControl("getState", OnGetState);
        RegisterControl("getStateList", OnGetStateList);

        return Task.CompletedTask;
    }

    private void DrawToInterface(IEnumerable<IPawsInterface> ifaces, IPawsGif gif, DrawInfo drawInfo)
    {
        var codec = gif.Codec;
        var frames = codec.FrameInfo;
        var frameIndex = GetFrameIndex(drawInfo.Time.Ticks / 10000, frames);

        var info = codec.Info;
        using var bitmap = new SKBitmap(info.Width, info.Height);
        var options = new SKCodecOptions(frameIndex);

        codec.GetPixels(bitmap.Info, bitmap.GetPixels(), options);
        var img = SKImage.FromBitmap(bitmap);

        foreach (var iface in ifaces)
        {
            var data = GetBytesForIface(iface, img);
            if (data.Length == 0) continue;
            // Send the encoded image as a ReadOnlySpan<byte>
            iface.Accept(data);
        }
    }

    private static int GetFrameIndex(long timeMs, SKCodecFrameInfo[] frames)
    {
        long totalDuration = frames.Sum(f => f.Duration);
        if (totalDuration == 0) throw new ArgumentException("Frames cannot have a 0 duration");
        var time = (timeMs) % (totalDuration);

        long accumulated = 0;
        for (int i = 0; i < frames.Length; i++)
        {
            accumulated += frames[i].Duration;
            if (time < accumulated)
                return i;
        }

        return frames.Length - 1; // fallback to last frame
    }

    public void SetStateFromId(Identifier identifier)
    {
        try
        {
            ActiveState = identifier;
        }
        catch
        {
            //Ignore
        }
    }

    private Task OnSetState(Identifier identifier)
    {
        SetStateFromId(identifier);
        return Task.CompletedTask;
    }

    private Task<Identifier?> OnGetState()
    {
        return Task.FromResult(ActiveState);
    }

    private Task<string> OnGetStateList()
    {
        return Task.FromResult(string.Join(",", States.Keys));
    }
}
