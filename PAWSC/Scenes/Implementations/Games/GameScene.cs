using DotnetBleServer.Gatt.Description;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces;
using PAWSC.Runtime;

namespace PAWSC.Scenes.Implementations.Games;

public abstract class GameScene(Identifier id) : SkiaSharpScene(id, 64, 32)
{
    protected abstract override void RenderScene(DrawInfo drawInfo);

    public override Task Initialise(PawsRuntime runtime)
    {
        RegisterControl<ControllerValues>("gameControl", OnInput);
        return Task.CompletedTask;
    }

    protected abstract Task OnInput(ControllerValues e);

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
