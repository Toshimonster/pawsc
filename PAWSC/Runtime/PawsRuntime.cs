using System.Diagnostics.CodeAnalysis;
using System.Security.Cryptography;
using PAWSC.Controllers;
using PAWSC.Interfaces;
using PAWSC.Scenes;

namespace PAWSC.Runtime;

public struct Identifier(string id) : IEquatable<Identifier>
{
    private string Id { get; init; } = id;

    public static Identifier Random()
    {
        return new Identifier() {
            Id = RandomNumberGenerator.GetString("abcdefghijklmnopqrstuvwxyz1234567890", 5)
        };
    }

    public override string ToString()
    {
        return "ID[" + Id + "]";
    }

    public override int GetHashCode()
    {
        return Id.GetHashCode();
    }

    public bool Equals(Identifier other)
    {
        return Id == other.Id;
    }

    public override bool Equals(object? obj)
    {
        return obj is Identifier other && Equals(other);
    }
}

public interface IIdentifiable
{
    public Identifier Id { get; }
}

public interface IPawsInitialisable
{
    public void Initialise(PawsRuntime runtime);
}

public class PawsRuntime : PawsEventHandler
{
    public PawsInterfaceManager Interfaces { get; private set; } = new PawsInterfaceManager();
    public PawsControllerManager Controllers { get; private set; } = new PawsControllerManager();
    public PawsSceneManager Scenes { get; private set; } = new PawsSceneManager();

    public IPawsScene? ActiveScene => _drawThread.GetScene();

    private readonly PawsDrawingThread _drawThread;

    public PawsRuntime()
    {
        _drawThread = new PawsDrawingThread(Interfaces);
    }

    public void Start()
    {
        Interfaces.Initialise(this);
        Controllers.Initialise(this);
        Scenes.Initialise(this);
        _drawThread.SetScene(Scenes.GetAll().FirstOrDefault());
        _drawThread.Start();
    }

    class PawsDrawingThread()
    {
        private Thread? _thread;
        private volatile bool _running = false;
        private volatile IPawsScene? _scene;
        private readonly PawsInterfaceManager _interfaceManager = null!;
        private readonly int _frameDelayMs;

        public IPawsScene? GetScene()
        {
            return _scene;
        }

        public PawsDrawingThread(PawsInterfaceManager mgr, int targetFps = 120) : this()
        {
            _frameDelayMs = 1000 / targetFps;
            _interfaceManager = mgr;
        }

        public bool IsRunning => _running;

        public void SetScene(IPawsScene newScene)
        {
            _scene = newScene;
        }

        public void Start()
        {
            if (Interlocked.Exchange(ref _running, true)) return;

            Console.CancelKeyPress += HandleCancelKeyPress;
            
            _thread = new Thread(DrawLoop)
            {
                IsBackground = false,
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

            _thread?.Join();
        }

        private void DrawLoop()
        {
            try
            {
                long tm1 = DateTime.Now.Ticks;

                while (_running)
                {
                    var start = DateTime.Now;
                    _scene?.Draw(_interfaceManager, new DrawInfo
                    {
                        Time = start,
                        Deltatime = start.Ticks - tm1
                    });

                    tm1 = start.Ticks;

                    var elapsed = (DateTime.Now - start).TotalMilliseconds;
                    var sleepTime = Math.Max(0, _frameDelayMs - elapsed);

                    Thread.Sleep((int)sleepTime);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception in DrawLoop: " + ex);
                Environment.Exit(-1);
            }
        }
    }
}