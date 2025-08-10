using PAWSC.Runtime;
using PAWSC.Scenes;

namespace PAWSC.Controllers;

public interface IPawsController : IIdentifiable, IPawsInitialisable
{
}

public abstract class PawsController(Identifier id) : IPawsController
{
    protected PawsRuntime? Runtime { get; private set; }
    public virtual Task Initialise(PawsRuntime runtime)
    {
        Runtime = runtime;
        return Task.CompletedTask;
    }

    public Identifier Id { get; private set; } = id;
}