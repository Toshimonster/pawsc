using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;
using PAWSC.Scenes;

namespace PAWSC.Controllers.Implementations.Gatt;

internal interface IGattService
{
    GattServiceDescription Instance { get; }
}

public abstract class ConstructedCharacteristic : GattCharacteristicDescription
{
    protected ConstructedCharacteristic(Guid uuid, CharacteristicFlags flags)
    {
        UUID = uuid.ToString();
        Flags = flags;
    }

    protected static byte[] EncodeFromString(string value)
    {
        try
        {
            return Encoding.Unicode.GetBytes(value);
        }
        catch
        {
            return [];
        }
    }

    protected static string DecodeToString(byte[]? value)
    {
        try
        {
            return Encoding.Unicode.GetString(value ?? []);
        }
        catch
        {
            return "";
        }
    }

    protected static byte[] EncodeFromInt(int value)
    {
        return BitConverter.GetBytes(value);
    }

    protected static int DecodeFromInt(byte[]? value)
    {
        try
        {
            return BitConverter.ToInt32(value);
        }
        catch
        {
            return 0;
        }
    }

    protected static byte[] EncodeFromDouble(double value)
    {
        return BitConverter.GetBytes(value);
    }

    protected static double DecodeFromDouble(byte[]? value)
    {
        try
        {
            return BitConverter.ToDouble(value);
        }
        catch
        {
            return 0;
        }
    }
}

public class PawsBaseServiceImplementation(PawsRuntime runtime) : IGattService
{
    public GattServiceDescription Instance { get; } = new()
    {
        UUID = UuidRegistry.PawsBaseService.ToString(),
        Primary = true,
        GattCharacteristicDescriptions =
        {
            new SceneListCharacteristic(runtime),
            new ControllerListCharacteristic(runtime),
            new InterfaceListCharacteristic(runtime),

            new ActiveSceneCharacteristic(runtime)
,           new ActiveSceneCapabilitiesCharacteristic(runtime)
        }
    };

    private abstract class IdListCharacteristic(Guid uuid, CharacteristicFlags flags) :
        ConstructedCharacteristic(uuid, flags)
    {
        protected abstract IEnumerable<Identifier> GetIdentifiers();
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(EncodeFromString(string.Join(
                ",",
                GetIdentifiers()
            )));
        }
    }

    private sealed class SceneListCharacteristic(PawsRuntime runtime) : IdListCharacteristic(
        UuidRegistry.PawsBaseCharacteristics.SceneList,
        CharacteristicFlags.Read)
    {
        protected override IEnumerable<Identifier> GetIdentifiers()
        {
            return runtime.Scenes.GetAllIdentifiers();
        }
    }

    private sealed class ControllerListCharacteristic(PawsRuntime runtime) : IdListCharacteristic(
        UuidRegistry.PawsBaseCharacteristics.ControllerList,
        CharacteristicFlags.Read)
    {
        protected override IEnumerable<Identifier> GetIdentifiers()
        {
            return runtime.Controllers.GetAllIdentifiers();
        }
    }

    private sealed class InterfaceListCharacteristic(PawsRuntime runtime) : IdListCharacteristic(
        UuidRegistry.PawsBaseCharacteristics.InterfaceList,
        CharacteristicFlags.Read)
    {
        protected override IEnumerable<Identifier> GetIdentifiers()
        {
            return runtime.Interfaces.GetAllIdentifiers();
        }
    }

    private sealed class ActiveSceneCharacteristic(PawsRuntime runtime) : ConstructedCharacteristic(
        UuidRegistry.PawsBaseCharacteristics.ActiveScene,
        CharacteristicFlags.Read | CharacteristicFlags.Write)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(EncodeFromString(runtime.ActiveScene?.Id.ToString() ?? ""));
        }

        public override Task WriteValueAsync(byte[] value)
        {
            runtime.Broadcast(new PawsCommands.SetScene(new Identifier(DecodeToString(value))));
            return Task.CompletedTask;
        }
    }

    private sealed class ActiveSceneCapabilitiesCharacteristic(PawsRuntime runtime) : ConstructedCharacteristic(
        UuidRegistry.PawsBaseCharacteristics.ActiveSceneCapabilities,
        CharacteristicFlags.Read)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            if (runtime.ActiveScene is IGattCapableScene gattDef)
            {
                return Task.FromResult(EncodeFromString(
                    string.Join(
                        ",",
                        gattDef.GetCapabilities())
                    )
                );
            }
            return Task.FromResult(EncodeFromString(runtime.ActiveScene?.Id.ToString() ?? ""));
        }
    }
}
