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
        
        runtime.Scenes?.Add(
            //new PulserScene("TEST")
            new SpinningCubeScene(new Identifier("TEST"))
            //new SpinningCubeAndPrismScene("TEST")
        );
    }
}