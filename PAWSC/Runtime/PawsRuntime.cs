using PAWSC.Controllers;
using PAWSC.Interfaces;
using PAWSC.Scenes;

namespace PAWSC.Runtime;

public interface IIdentifiable
{
    public String ID { get; }
}

public class PawsRuntime : PawsEventHandler
{
    public PawsInterfaceManager Interfaces { get; private set; } = new PawsInterfaceManager();
    public PawsControllerManager Controllers { get; private set; } = new PawsControllerManager();
    public PawsSceneManager Scenes { get; private set; } = new PawsSceneManager();
    public IPawsScene? ActiveScene { get; private set; }

    public void Start()
    {

    }

    class PawsDrawingThread()
    {
        private Thread? _thread;
        private volatile bool _running = false;
        private volatile IPawsScene _scene;
        private readonly PawsInterfaceManager _interfaceManager;
        private readonly int _frameDelayMs;

        public PawsDrawingThread(PawsInterfaceManager mgr, int targetFps = 120)
        {
            _frameDelayMs = 1000 / targetFps;
            _interfaceManager = mgr;
        }

        public void SetScene(IPawsScene newScene) {
            _scene = newScene;
        }

        public void Start()
        {
            if (_running) return;
            _running = true;

            _thread = new Thread(DrawLoop)
            {
                IsBackground = true,
                Name = "Paws Drawing Thread"
            };
        }

        public void Stop()
        {
            _running = false;
            _thread?.Join();
        }

        public async Task DrawLoop()
        {
            long tm1 = 0;

            while (_running)
            {
                var start = DateTime.Now;
                await _scene.Draw(_interfaceManager, new DrawInfo
                {
                    Time = start,
                    Deltatime = start.Ticks - tm1
                });

                tm1 = start.Ticks;

                var elapsed = (int)(DateTime.Now - start).TotalMilliseconds;
                int sleepTime = Math.Max(0, _frameDelayMs - elapsed);

                Thread.Sleep(sleepTime);
            }
        }
    }
}