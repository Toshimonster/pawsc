using DotnetBleServer.Gatt.Description;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces;
using PAWSC.Runtime;

namespace PAWSC.Scenes.Implementations.Games;

public abstract class GameScene(Identifier id) : SkiaSharpScene(id, 64, 32), IGattControllableDefinition
{
    private GameControllerCharacteristic? _controller = null;

    protected abstract override void RenderScene(DrawInfo drawInfo);

    public override Task Initialise(PawsRuntime runtime)
    {
        _controller = new GameControllerCharacteristic(runtime);
        _controller.OnInput += OnInput;
        Characteristics =
        [
            _controller
        ];
        return Task.CompletedTask;
    }

    protected abstract void OnInput(object? sender, GameControllerCharacteristic.ControllerValues e);

    public GattServiceDescription ServiceDescription { get; private set; } = new GattServiceDescription()
    {
        UUID = UuidRegistry.GameService.ToString(),
        Primary = true
    };

    public IEnumerable<GattCharacteristicDescription> Characteristics { get; private set; } = [];
}

public class GameControllerCharacteristic(PawsRuntime runtime) : PawsServiceImplementations.PawsCharacteristic(runtime, UuidRegistry.GameCharacteristics.Controller.ToString(), CharacteristicFlags.Write)
{
    public event EventHandler<ControllerValues>? OnInput;

    public override Task<byte[]> ReadValueAsync()
    {
        return Task.FromResult(Array.Empty<byte>());
    }

    public override Task WriteValueAsync(byte[] value)
    {
        if (value.Length != 1)
            return Task.CompletedTask;

        ControllerValues control = (ControllerValues) value[0];

        if (!Enum.IsDefined(control))
            return Task.CompletedTask;

        OnInput?.Invoke(this, control);

        return Task.CompletedTask;
    }

    public enum ControllerValues
    {
        A = 0x00,
        B = 0x01,
        Left = 0x02,
        Right = 0x03,
        Up = 0x04,
        Down = 0x05
    }
}
