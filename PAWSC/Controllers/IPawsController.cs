using PAWSC.Runtime;
using PAWSC.Scenes;

namespace PAWSC.Controllers;

public interface IPawsController
{
    public void Initialise(PawsRuntime runtime);
}

public abstract class PawsController : IPawsController
{
    protected PawsRuntime? Runtime { get; private set; }
    public virtual void Initialise(PawsRuntime runtime)
    {
        Runtime = runtime;
    }
}

public class TestController : PawsController
{
    public override void Initialise(PawsRuntime runtime)
    {
        base.Initialise(runtime);
        runtime.Scenes?.AddScene(
            new PulserScene("TEST")
        );
    }
}