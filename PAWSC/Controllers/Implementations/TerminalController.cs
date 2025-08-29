using PAWSC.Runtime;
using PAWSC.Scenes;
using PAWSC.Scenes.Implementations.Games;

namespace PAWSC.Controllers.Implementations;

public class TerminalController(Identifier id) : PawsController(id), IDisposable
{
    private Thread? _listenerThread;
    private bool _running;

    private void Start()
    {
        if (_running) return;

        _running = true;
        _listenerThread = new Thread(ListenLoop)
        {
            IsBackground = true
        };
        _listenerThread.Start();
    }

    private void Stop()
    {
        _running = false;
    }

    private void ListenLoop()
    {
        while (_running)
        {
            var keyInfo = Console.ReadKey(intercept: true);

            GameScene.ControllerValues? key = keyInfo.Key switch
            {
                ConsoleKey.UpArrow => GameScene.ControllerValues.Up,
                ConsoleKey.DownArrow => GameScene.ControllerValues.Down,
                ConsoleKey.LeftArrow => GameScene.ControllerValues.Left,
                ConsoleKey.RightArrow => GameScene.ControllerValues.Right,

                ConsoleKey.A => GameScene.ControllerValues.A,
                ConsoleKey.B => GameScene.ControllerValues.B,
                _ => null
            };

            if (key != null)
            {
                Runtime?.Broadcast(new PawsCommands.GattSceneControl(Runtime.ActiveScene?.Id.ToString() ?? "",
                    "gameControl",
                    GattCapableScene.EncodeValue((GameScene.ControllerValues)key)));
            }

            Thread.Sleep(20);
        }
    }

    public override async Task Initialise(PawsRuntime runtime)
    {
        await base.Initialise(runtime);
        Start();
    }

    public void Dispose()
    {
        Stop();
    }
}
