﻿using PAWSC.Controllers;
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

    private PawsDrawingThread _drawThread;

    public PawsRuntime()
    {
        _drawThread = new PawsDrawingThread(Interfaces);
    }
    
    public void Start()
    {
        Interfaces.Initialise(this);
        Controllers.Initialise(this);
        Scenes.Initialise(this);
        _drawThread.SetScene(Scenes.AllScenes().FirstOrDefault());
        _drawThread.Start();
    }

    class PawsDrawingThread()
    {
        private Thread? _thread;
        private volatile bool _running = false;
        private volatile IPawsScene? _scene;
        private readonly PawsInterfaceManager _interfaceManager = null!;
        private readonly int _frameDelayMs;

        public PawsDrawingThread(PawsInterfaceManager mgr, int targetFps = 120) : this()
        {
            _frameDelayMs = 1000 / targetFps;
            _interfaceManager = mgr;
        }
        
        public bool IsRunning => _running;

        public void SetScene(IPawsScene newScene) {
            _scene = newScene;
        }

        public void Start()
        {
            if(Interlocked.Exchange(ref _running, true)) return;

            _thread = new Thread(DrawLoop)
            {
                IsBackground = false,
                Name = "Paws Drawing Thread"
            };
            _thread.Start();
        }

        public void Stop()
        {
            if(!Interlocked.Exchange(ref _running, false)) return;
            
            _thread?.Join();
        }

        private void DrawLoop()
        {
            long tm1 = 0;

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
    }
}