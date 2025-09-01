using System.Diagnostics.CodeAnalysis;
using System.Security.Cryptography;
using PAWSC.Controllers;
using PAWSC.Interfaces;
using PAWSC.Scenes;

namespace PAWSC.Runtime;

/// <summary>
/// Represents a unique identifier for PAWS components.
/// </summary>
public readonly struct Identifier : IEquatable<Identifier>
{
    private readonly string _id;

    /// <summary>
    /// Initializes a new instance of the Identifier struct.
    /// </summary>
    /// <param name="id">The string identifier.</param>
    /// <exception cref="ArgumentNullException">Thrown when id is null.</exception>
    public Identifier(string id)
    {
        _id = id ?? throw new ArgumentNullException(nameof(id));
    }

    /// <summary>
    /// Generates a random identifier with 5 characters.
    /// </summary>
    /// <returns>A new random identifier.</returns>
    public static Identifier Random()
    {
        return new Identifier(RandomNumberGenerator.GetString("abcdefghijklmnopqrstuvwxyz1234567890", 5));
    }

    public bool Matches(string identifier)
    {
        return identifier.Equals(ToString());
    }

    /// <summary>
    /// Returns a string representation of the identifier.
    /// </summary>
    /// <returns>A formatted string representation.</returns>
    public override string ToString()
    {
        return $"ID[{_id}]";
    }

    /// <summary>
    /// Returns the hash code for this identifier.
    /// </summary>
    /// <returns>The hash code.</returns>
    public override int GetHashCode()
    {
        return _id?.GetHashCode() ?? 0;
    }

    /// <summary>
    /// Determines whether this identifier equals another.
    /// </summary>
    /// <param name="other">The other identifier to compare.</param>
    /// <returns>True if the identifiers are equal; otherwise, false.</returns>
    public bool Equals(Identifier other)
    {
        return _id == other._id;
    }

    /// <summary>
    /// Determines whether this identifier equals another object.
    /// </summary>
    /// <param name="obj">The object to compare.</param>
    /// <returns>True if the objects are equal; otherwise, false.</returns>
    public override bool Equals(object? obj)
    {
        return obj is Identifier other && Equals(other);
    }

    /// <summary>
    /// Equality operator for identifiers.
    /// </summary>
    /// <param name="left">Left identifier.</param>
    /// <param name="right">Right identifier.</param>
    /// <returns>True if equal; otherwise, false.</returns>
    public static bool operator ==(Identifier left, Identifier right)
    {
        return left.Equals(right);
    }

    /// <summary>
    /// Inequality operator for identifiers.
    /// </summary>
    /// <param name="left">Left identifier.</param>
    /// <param name="right">Right identifier.</param>
    /// <returns>True if not equal; otherwise, false.</returns>
    public static bool operator !=(Identifier left, Identifier right)
    {
        return !left.Equals(right);
    }

    public static Identifier FromRawString(string raw)
    {
        if (raw == null) throw new ArgumentNullException(nameof(raw));

        const string prefix = "ID[";
        const string suffix = "]";

        if (!raw.StartsWith(prefix) || !raw.EndsWith(suffix))
        {
            throw new FormatException($"Invalid Identifier format: '{raw}'. Expected format 'ID[xxx]'.");
        }

        var inner = raw.Substring(prefix.Length, raw.Length - prefix.Length - suffix.Length);

        if (string.IsNullOrWhiteSpace(inner))
        {
            throw new FormatException("Identifier cannot be empty.");
        }

        return new Identifier(inner);
    }
}

/// <summary>
/// Interface for components that have an identifier.
/// </summary>
public interface IIdentifiable
{
    /// <summary>
    /// Gets the identifier of the component.
    /// </summary>
    Identifier Id { get; }
}

/// <summary>
/// Interface for components that can be initialized.
/// </summary>
public interface IPawsInitialisable
{
    /// <summary>
    /// Initializes the component with the runtime.
    /// </summary>
    /// <param name="runtime">The PAWS runtime.</param>
    /// <returns>A task representing the initialization operation.</returns>
    Task Initialise(PawsRuntime runtime);
}

/// <summary>
/// Interface for components that need to perform operations after initialization.
/// </summary>
public interface IPawsAfterInitialisableHook
{
    /// <summary>
    /// Performs operations after initialization.
    /// </summary>
    /// <param name="runtime">The PAWS runtime.</param>
    /// <returns>A task representing the operation.</returns>
    Task AfterInitialise(PawsRuntime runtime);
}

/// <summary>
/// The main runtime class that manages the PAWS system.
/// </summary>
public class PawsRuntime : PawsEventHandler, IDisposable
{
    public PawsInterfaceManager Interfaces { get; private set; } = new PawsInterfaceManager();
    public PawsControllerManager Controllers { get; private set; } = new PawsControllerManager();
    public PawsSceneManager Scenes { get; private set; } = new PawsSceneManager();

    public IPawsScene? ActiveScene => _drawThread.GetScene();

    private readonly PawsDrawingThread _drawThread;
    private bool _disposed = false;

    public PawsRuntime()
    {
        _drawThread = new PawsDrawingThread(Interfaces);
        RegisterCommands();
    }

    public async Task Start()
    {
        if (_disposed) throw new ObjectDisposedException(nameof(PawsRuntime));

        try
        {
            await Interfaces.Initialise(this);
            await Controllers.Initialise(this);
            await Scenes.Initialise(this);
            var initScene = Scenes.GetAllValues().FirstOrDefault();
            Broadcast(PawsCommands.Log.Info($"Starting scene as {initScene}:{initScene?.Id}"));
            _drawThread.SetScene(initScene);
            _drawThread.Start();
            await Interfaces.AfterInitialise(this);
            await Controllers.AfterInitialise(this);
            await Scenes.AfterInitialise(this);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to start PAWSC runtime: {ex}");
            throw;
        }
    }

    public void Dispose()
    {
        if (_disposed) return;

        DeregisterCommands();

        try
        {
            _drawThread?.Dispose();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error during disposal: {ex}");
        }
        finally
        {
            _disposed = true;
        }
    }


    private void RegisterCommands()
    {
        Subscribe<PawsCommands.SetScene>(OnSetScene);
    }

    private void DeregisterCommands()
    {
        Unsubscribe<PawsCommands.SetScene>(OnSetScene);
    }

    private void OnSetScene(PawsCommands.SetScene obj)
    {
        IPawsScene? sceneToSet = Scenes.ById(obj.Payload);
        if (sceneToSet is null)
        {
            Broadcast(PawsCommands.Log.Error($"Cannot find scene {obj.Payload}"));
            return;
        }
        _drawThread.SetScene(sceneToSet);
    }


    private sealed class PawsDrawingThread : IDisposable
    {
        private Thread? _thread;
        private volatile bool _running = false;
        private volatile IPawsScene? _scene;
        private readonly PawsInterfaceManager _interfaceManager;
        private readonly int _frameDelayMs;
        private readonly CancellationTokenSource _cancellationTokenSource = new();

        public IPawsScene? GetScene() => _scene;

        public PawsDrawingThread(PawsInterfaceManager mgr, int targetFps = 120)
        {
            _interfaceManager = mgr ?? throw new ArgumentNullException(nameof(mgr));
            if (targetFps <= 0) throw new ArgumentOutOfRangeException(nameof(targetFps), "Target FPS must be positive");
            _frameDelayMs = 1000 / targetFps;
        }

        public bool IsRunning => _running;

        public void SetScene(IPawsScene? newScene)
        {
            _scene = newScene;
        }

        public void Start()
        {
            if (Interlocked.Exchange(ref _running, true)) return;

            Console.CancelKeyPress += HandleCancelKeyPress;

            _thread = new Thread(DrawLoop)
            {
                IsBackground = true,
                Name = "Paws Drawing Thread"
            };
            _thread.Start();
        }

        private void HandleCancelKeyPress(object? sender, ConsoleCancelEventArgs e)
        {
            Console.WriteLine("Cleaning up...");
            e.Cancel = true;
            Stop();
            Environment.Exit(0);
        }

        public void Stop()
        {
            if (!Interlocked.Exchange(ref _running, false)) return;

            _cancellationTokenSource.Cancel();
            _thread?.Join(TimeSpan.FromSeconds(5)); // Wait up to 5 seconds
        }

        private void DrawLoop()
        {
            try
            {
                var lastFrameTime = DateTime.UtcNow;

                while (_running && !_cancellationTokenSource.Token.IsCancellationRequested)
                {
                    var frameStart = DateTime.UtcNow;
                    var deltaTime = frameStart.Ticks - lastFrameTime.Ticks;

                    _scene?.Draw(_interfaceManager, new DrawInfo
                    {
                        Time = frameStart,
                        Deltatime = deltaTime
                    });

                    lastFrameTime = frameStart;

                    var elapsed = (DateTime.UtcNow - frameStart).TotalMilliseconds;
                    var sleepTime = Math.Max(0, _frameDelayMs - elapsed);

                    if (sleepTime > 0)
                    {
                        Thread.Sleep((int)sleepTime);
                    }
                }
            }
            catch (OperationCanceledException)
            {
                // Normal cancellation, no need to log
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in DrawLoop: {ex}");
                Environment.Exit(-1);
            }
        }

        public void Dispose()
        {
            Stop();
            _cancellationTokenSource.Dispose();
        }
    }
}
