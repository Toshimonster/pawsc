using System.Collections.Concurrent;
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
