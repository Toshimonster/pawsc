using System.Collections.Concurrent;
using DotnetBleServer.Gatt.Description;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces;
using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations;

public record PawsStateDescription
{
    public required string Name { get; init; }
    public required Uri? Placeholder { get; init; }
}

public interface IPawsState : IIdentifiable
{
    public ConcurrentDictionary<Identifier[], IPawsGif> Definition { get; }
    public PawsStateDescription Description { get; }
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
    public ConcurrentDictionary<Identifier[], IPawsGif> Definition { get; } = new();

    public PawsStateDescription Description { get; } = new PawsStateDescription()
    {
        Name = string.Empty,
        Placeholder = null,
    };

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
    protected readonly ConcurrentDictionary<Identifier, IPawsState> States = new();

    public StateScene(Identifier id, ConcurrentDictionary<Identifier, IPawsState> definitions): this(id)
    {
        States = definitions;
    }

    public StateScene(Identifier id) : base(id)
    {
    }

    public ICollection<IPawsState> GetAllStates()
    {
        return States.Values;
    }

    public bool AddStateIfNotExist(IPawsState state)
    {
        return States.TryAdd(state.Id, state);
    }

    public bool RemoveState(IPawsState state)
    {
        return RemoveState(state.Id);
    }

    public bool RemoveState(Identifier id)
    {
        return States.Remove(id, out _);
    }

    public Identifier? ActiveState
    {
        get
        {
            if (_activeState is null && !States.IsEmpty)
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
        base.Initialise(runtime);
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
        catch (Exception ex)
        {
            Runtime?.Broadcast(PawsCommands.Log.Warn($"Could not set state to {identifier}", ex));
        }
    }

    private Task OnSetState(Identifier identifier)
    {
        Runtime?.Broadcast(PawsCommands.Log.Trace($"Setting state to {identifier}"));
        SetStateFromId(identifier);
        return Task.CompletedTask;
    }

    private Task<Identifier?> OnGetState()
    {
        return Task.FromResult(ActiveState);
    }

    private Task<string> OnGetStateList()
    {
        Console.WriteLine("To Ret: \n" + string.Join(",", States.Keys));
        return Task.FromResult(string.Join(",", States.Keys));
    }
}
