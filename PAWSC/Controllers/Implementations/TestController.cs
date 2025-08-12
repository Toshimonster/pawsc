using DotnetBleServer.Core;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces.Implementations;
using PAWSC.Runtime;
using PAWSC.Scenes.Implementations;
using PAWSC.Scenes.Implementations.Games;
using PAWSC.Scenes.Implementations.Streaming;

namespace PAWSC.Controllers.Implementations;

/// <summary>
/// Test controller that demonstrates basic PAWS functionality by creating various test scenes.
/// </summary>
/// <remarks>
/// This controller is primarily used for testing and demonstration purposes.
/// Comment/uncomment different scenes to test various PAWS system capabilities.
/// </remarks>
public class TestController : PawsServiceImplementations.GattController
{
    /// <summary>
    /// Initializes a new instance of the TestController class.
    /// </summary>
    /// <param name="id">The unique identifier for this controller.</param>
    public TestController(Identifier id) : base(id)
    {
    }

    /// <summary>
    /// Initializes the test controller and creates various test scenes.
    /// </summary>
    /// <param name="runtime">The PAWS runtime instance.</param>
    /// <returns>A task representing the initialization operation.</returns>
    public override async Task Initialise(PawsRuntime runtime)
    {
        await base.Initialise(runtime);

        // ===== STATE SCENES =====
        // Uncomment to test state management with GIFs
        /*
        var state = new BaseState(new Identifier("Test"));
        var state2 = new BaseState(new Identifier("Test2"));
        if (File.Exists("./start.gif")) {
            state.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("./start.gif"));
            state2.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("./start.gif"));
        } else if (File.Exists("/home/toshi/Documents/Personal/Proto/ToshiProto/State Assets/Happy/Happy[face_mirror].gif"))
        {
            state.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("/home/toshi/Documents/Personal/Proto/ToshiProto/State Assets/Happy/Happy[face_mirror].gif"));
            state2.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("/home/toshi/Documents/Personal/Proto/ToshiProto/State Assets/Bluescreen/Idle-Bluescreen[face].gif"));
        }

        var stateScene = new StateScene(new Identifier("TEST"));
        stateScene.AddState(state);
        stateScene.AddState(state2);
        stateScene.SetStateFromId(state2.Id);
        runtime.Scenes?.Add(stateScene);
        */

        // ===== BASIC SCENES =====
        // Uncomment to test basic rendering scenes
        runtime.Scenes?.Add(new SpinningCubeScene(new Identifier("TEST")));
        // runtime.Scenes?.Add(new PulserScene(new Identifier("TEST")));
        // runtime.Scenes?.Add(new SkiaSharp3dScene(new Identifier("TEST")));
        // runtime.Scenes?.Add(new StreamScene(Identifier.Random()));

        // ===== GAME SCENES =====
        // Uncomment to test all games
        /*
        GameScene[] games = new GameScene[]
        {
            new DinoGame(Identifier.Random()),
            new SnakeGame(Identifier.Random()),
            new PongGame(Identifier.Random()),
            new TetrisGame(Identifier.Random()),
            new SpaceInvadersGame(Identifier.Random())
        };

        foreach (var game in games)
        {
            runtime.Scenes?.Add(game);
        }
        */

        // ===== INDIVIDUAL GAME TESTING =====
        // Uncomment individual games to test them one by one
        // runtime.Scenes?.Add(new DinoGame(Identifier.Random()));
        // runtime.Scenes?.Add(new SnakeGame(Identifier.Random()));
        // runtime.Scenes?.Add(new PongGame(Identifier.Random()));
        // runtime.Scenes?.Add(new TetrisGame(Identifier.Random()));
        // runtime.Scenes?.Add(new SpaceInvadersGame(Identifier.Random()));

        await Task.CompletedTask;
    }
}
