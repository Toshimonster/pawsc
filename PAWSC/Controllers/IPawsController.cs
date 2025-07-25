using PAWSC.Runtime;
using PAWSC.Scenes;

namespace PAWSC.Controllers;

public interface IPawsController : IIdentifiable
{
    public void Initialise(PawsRuntime runtime);
}

public abstract class PawsController(string id) : IPawsController
{
    protected PawsRuntime? Runtime { get; private set; }
    public virtual void Initialise(PawsRuntime runtime)
    {
        Runtime = runtime;
    }

    public string ID { get; private set; } = id;
}

public class TestController(string id) : PawsController(id)
{
    public override void Initialise(PawsRuntime runtime)
    {
        base.Initialise(runtime);
        runtime.Scenes?.AddScene(
            new PulserScene("TEST")
        );
    }
}