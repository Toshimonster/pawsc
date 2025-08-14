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

    public static PawsGif FromFile(string path, Identifier id)
    {
        var codec = SKCodec.Create(path);
        if (codec is null) throw new FileNotFoundException(id + ": Could not create gif codec", path);
        return new PawsGif(id)
        {
            Codec = codec
        };
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

public class StateScene : SkiaSharpRasterScene, IGattControllableDefinition
{
    protected Dictionary<Identifier, IPawsState> States = new();

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

    private IPawsState? ActiveStateObject
    {
        get
        {
            if (ActiveState != null)
            {
                return States.GetValueOrDefault((Identifier) ActiveState);
            }

            return null;
        }
    }

    public override void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
    {
        IPawsState? stateToDraw = ActiveStateObject;
        if (stateToDraw == null) return;

        foreach (KeyValuePair<Identifier[], IPawsGif> keyValuePair in stateToDraw.Definition)
        {
            IEnumerable<IPawsInterface> ifaces = mgr.ById(keyValuePair.Key);
            DrawToInterface(ifaces, keyValuePair.Value, drawInfo);
        }
    }

    public override Task Initialise(PawsRuntime runtime)
    {
        Characteristics =
        [
            new PawsStatesCharacteristic(runtime),
            new PawsActiveStateCharacteristic(runtime)
        ];

        return Task.CompletedTask;
    }

    private void DrawToInterface(IEnumerable<IPawsInterface> ifaces, IPawsGif gif, DrawInfo drawInfo)
    {
        SKCodec codec = gif.Codec;
        SKCodecFrameInfo[] frames = codec.FrameInfo;
        int frameIndex = GetFrameIndex(drawInfo.Time.Ticks / 10000, frames);

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

    private int GetFrameIndex(long timeMs, SKCodecFrameInfo[] frames)
    {
        long totalDuration = frames.Sum(f => f.Duration);
        if (totalDuration == 0) throw new ArgumentException("Frames cannot have a 0 duration");
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

    public GattServiceDescription ServiceDescription { get; } = new GattServiceDescription
    {
        UUID = UuidRegistry.StateService.ToString(),
        Primary = true
    };

    public IEnumerable<GattCharacteristicDescription> Characteristics { get; private set; } = new List<GattCharacteristicDescription>();

    public class PawsStatesCharacteristic(PawsRuntime runtime) : PawsServiceImplementations.PawsStateCharacteristic(
        runtime,
        UuidRegistry.PawsCharacteristics.States,
        CharacteristicFlags.Read)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            var states = ActiveStateScene?.GetAllStates().ToList() ?? [];
            return Task.FromResult(
                EncodeFromString(
                    string.Join(',', states.Select(x => x.Id))
                )
            );
        }
    }

    public class PawsActiveStateCharacteristic(PawsRuntime runtime)
        : PawsServiceImplementations.PawsStateCharacteristic(runtime, UuidRegistry.PawsCharacteristics.State,
            CharacteristicFlags.Notify)
    {

        public override Task<byte[]> ReadValueAsync()
        {
            var activeState = ActiveStateScene?.ActiveState;
            return Task.FromResult(
                EncodeFromString(activeState?.ToString() ?? "")
            );
        }

        public override Task WriteValueAsync(byte[]? value)
        {
            var stringId = DecodeToString(value);
            var identifier = new Identifier(stringId);
            Console.WriteLine(identifier);
            ActiveStateScene?.SetStateFromId(identifier);
            return base.WriteValueAsync(value);
        }
    }
}
