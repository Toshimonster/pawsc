using PAWSC.Runtime;
using PAWSC.Scenes;

namespace PAWSC.Controllers;

/// <summary>
/// Defines the contract for PAWS controllers that can be managed by the controller system.
/// </summary>
public interface IPawsController : IIdentifiable, IPawsInitialisable
{
}

/// <summary>
/// Base class for PAWS controllers providing common functionality.
/// </summary>
/// <remarks>
/// This class provides a foundation for implementing controllers with basic runtime management.
/// </remarks>
public abstract class PawsController : IPawsController
{
    /// <summary>
    /// Gets the runtime instance that this controller is associated with.
    /// </summary>
    /// <remarks>
    /// This property is set during initialization and may be null before Initialise is called.
    /// </remarks>
    protected PawsRuntime? Runtime { get; private set; }

    /// <summary>
    /// Gets the unique identifier for this controller.
    /// </summary>
    public Identifier Id { get; }

    /// <summary>
    /// Initializes a new instance of the PawsController class.
    /// </summary>
    /// <param name="id">The unique identifier for this controller.</param>
    protected PawsController(Identifier id)
    {
        Id = id;
    }

    /// <summary>
    /// Initializes the controller with the runtime.
    /// </summary>
    /// <param name="runtime">The PAWS runtime instance.</param>
    /// <returns>A task representing the initialization operation.</returns>
    public virtual Task Initialise(PawsRuntime runtime)
    {
        Runtime = runtime ?? throw new ArgumentNullException(nameof(runtime));
        return Task.CompletedTask;
    }
}