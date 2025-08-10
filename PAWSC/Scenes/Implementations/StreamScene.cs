/*
using PAWSC.Interfaces;
using PAWSC.Runtime;
using PAWSC.Controllers.Implementations.Gatt;
using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace PAWSC.Scenes.Implementations
{
    public class StreamScene : BaseScene
    {
        private readonly PawsRuntime _runtime;

        // Buffer for incoming streamed chunks (thread-safe)
        private readonly ConcurrentQueue<byte[]> _streamBuffer = new();

        // Control & data characteristics exposed by this scene
        private StreamControlCharacteristic _controlCharacteristic;
        private StreamDataCharacteristic _dataCharacteristic;

        // Flag whether streaming is active
        private volatile bool _isStreaming = false;

        public StreamScene(Identifier identifier, PawsRuntime runtime) : base(identifier)
        {
            _runtime = runtime;
        }

        public override void Initialise(PawsRuntime runtime)
        {
            // Create characteristics bound to this scene/runtime
            _controlCharacteristic = new StreamControlCharacteristic(runtime, this);
            _dataCharacteristic = new StreamDataCharacteristic(runtime, this);

            // Register or hook characteristics to your GATT service here
            // (Depending on how your GATT app registration is done, you might need to register the service here)

            // Subscribe to control commands and data notifications
            _controlCharacteristic.CommandReceived += OnControlCommandReceived;
            _dataCharacteristic.StreamChunkReceived += OnStreamChunkReceived;
        }

        public override void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
        {
            if (!_isStreaming)
            {
                // Not streaming - clear output or do nothing
                mgr.Distribute(new byte[0]);
                return;
            }

            // Try to dequeue the latest buffered chunk(s)
            while (_streamBuffer.TryDequeue(out var chunk))
            {
                // Here we assume chunk is raw RGB565 or RGB888 data to send to mgr

                // Example: directly distribute raw chunk bytes to output
                // In practice you may need to convert format or process chunks accordingly

                mgr.Distribute(chunk);
            }
        }

        private void OnControlCommandReceived(string command)
        {
            switch (command.ToLowerInvariant())
            {
                case "start":
                    _isStreaming = true;
                    Console.WriteLine("StreamScene: Streaming started");
                    break;
                case "stop":
                    _isStreaming = false;
                    Console.WriteLine("StreamScene: Streaming stopped");
                    break;
                default:
                    Console.WriteLine($"StreamScene: Unknown control command '{command}'");
                    break;
            }
        }

        private void OnStreamChunkReceived(byte[] chunk)
        {
            if (!_isStreaming) return;

            // Enqueue the chunk for processing in Draw
            _streamBuffer.Enqueue(chunk);
        }
    }

    // Extended characteristics now know about StreamScene to raise events

    public class StreamControlCharacteristic : PawsServiceImplementations.PawsCharacteristic
    {
        private readonly StreamScene _scene;

        public event Action<string> CommandReceived;

        public StreamControlCharacteristic(PawsRuntime runtime, StreamScene scene)
            : base(runtime, "300751B6-1450-4D27-BE88-23B53A2FA3E9", CharacteristicFlags.Write)
        {
            _scene = scene;
        }

        public override Task WriteValueAsync(byte[] value)
        {
            var command = DecodeToString(value).ToLowerInvariant();
            CommandReceived?.Invoke(command);
            return Task.CompletedTask;
        }
    }

    public class StreamDataCharacteristic : PawsServiceImplementations.PawsCharacteristic
    {
        private readonly StreamScene _scene;

        public event Action<byte[]> StreamChunkReceived;

        public StreamDataCharacteristic(PawsRuntime runtime, StreamScene scene)
            : base(runtime, StreamGattUuids.DataCharacteristic, CharacteristicFlags.Notify)
        {
            _scene = scene;
        }

        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(Array.Empty<byte>());
        }

        // This is called internally by your BLE stack when data notifications come in
        public async Task NotifyStreamChunkAsync(byte[] chunk)
        {
            StreamChunkReceived?.Invoke(chunk);
            await RaiseNotification(chunk.AsMemory(0, chunk.Length));
        }
    }
}
*/
