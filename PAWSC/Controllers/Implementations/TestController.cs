using DotnetBleServer.Core;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces.Implementations;
using PAWSC.Runtime;
using PAWSC.Scenes.Implementations;

namespace PAWSC.Controllers.Implementations;

public class TestController(Identifier id) : PawsController(id)
{
    public override void Initialise(PawsRuntime runtime)
    {
        base.Initialise(runtime);

        /*var x = new InterfaceProxyManager<>(
            "TEST",
            [
            ]
        );*/
        
        var state = new BaseState(new Identifier("Test"));
        var state2 = new BaseState(new Identifier("Test2"));
        if (File.Exists("./start.gif"))
        {
            state.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("./start.gif"));
            state2.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("./start.gif"));
        }
        else if (File.Exists("/home/toshi/Documents/Personal/Proto/ToshiProto/State Assets/Happy/Happy[face_mirror].gif"))
        {
            state.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("/home/toshi/Documents/Personal/Proto/ToshiProto/State Assets/Happy/Happy[face_mirror].gif"));
            state2.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("/home/toshi/Documents/Personal/Proto/ToshiProto/State Assets/Bluescreen/Idle-Bluescreen[face].gif"));
        }

        var stateScene = new StateScene(new Identifier("TEST"));
        stateScene.AddState(state);
        stateScene.AddState(state2);
        stateScene.SetStateFromId(state2.Id);

        _ = PawsServiceImplementations.RegisterGattApplication(runtime);
        
        runtime.Scenes?.Add(
            //new PulserScene("TEST")
            //new SpinningCubeScene(new Identifier("TEST"))
            //new SpinningCubeAndPrismScene("TEST")
            stateScene
            );
    }
}