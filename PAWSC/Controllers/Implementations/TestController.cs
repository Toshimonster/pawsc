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
        if (File.Exists("./start.gif"))
        {
            state.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("./start.gif"));
        }
        else if (File.Exists("/home/toshi/Documents/Personal/Proto/ToshiProto/State Assets/Happy/Happy[face_mirror].gif"))
        {
            state.AddGif(new Identifier("LEFT_P45"), PawsGif.FromFile("/home/toshi/Documents/Personal/Proto/ToshiProto/State Assets/Happy/Happy[face_mirror].gif"));
        }

        var stateScene = new StateScene(new Identifier("TEST"));
        stateScene.AddState(state);

        _ = PawsServiceImplementations.RegisterGattApplication(runtime);
        
        runtime.Scenes?.Add(
            //new PulserScene("TEST")
            //new SpinningCubeScene(new Identifier("TEST"))
            //new SpinningCubeAndPrismScene("TEST")
            stateScene
            );
    }
}