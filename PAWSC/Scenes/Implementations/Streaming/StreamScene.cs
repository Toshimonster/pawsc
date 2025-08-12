using System.Buffers;
using System.Threading.Channels;
using DotnetBleServer.Gatt.Description;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces;
using PAWSC.Runtime;

namespace PAWSC.Scenes.Implementations.Streaming;

public class StreamScene(Identifier identifier) : BaseScene(identifier), IGattControllableDefinition
{
    private PawsStreamInput? _streamChar = null;
    
    // Single latest frame; overwritten as new frames arrive.
    // We keep a separate buffer to avoid holding onto ArrayPool arrays.
    private readonly object _frameLock = new();
    private byte[]? _latestFrame;

    public GattServiceDescription ServiceDescription { get; } =
        new GattServiceDescription()
        {
            UUID = "0000f00d-0000-1000-8000-00805f9b34fb",
            Primary = true
        };

    public IEnumerable<GattCharacteristicDescription> Characteristics { get; private set; } = [];
    
    public override Task Initialise(PawsRuntime runtime)
    {
        _streamChar = new PawsStreamInput(runtime);
        _streamChar.FrameReady += OnFrameReady;
        
        Characteristics =
        [
            _streamChar
        ];
        
        return Task.CompletedTask;
    }

    public override void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
    {
        byte[]? frameToDraw = null;

        lock (_frameLock)
        {
            if (_latestFrame != null)
            {
                frameToDraw = _latestFrame;
                _latestFrame = null; // Consume frame — only draw once
            }
        }

        if (frameToDraw != null && frameToDraw.Length >= mgr.GetByteSize())
        {
            mgr.Distribute(frameToDraw);
        }
    }

    private void OnFrameReady(object? sender, byte[] frame)
    {
        // Replace old frame with new one — no queuing, latest always wins
        lock (_frameLock)
        {
            _latestFrame = frame;
        }
    }
}

public class PawsStreamInput(PawsRuntime runtime) : PawsServiceImplementations.PawsSceneCharacteristic<StreamScene>(
    runtime, 
    "0000f00d-0000-1000-8000-00805f9b34fa", 
    CharacteristicFlags.Write)
{
    // Small protocol: first byte of a write is a frame header:
    // 0x01 = start-of-frame, followed by 2-byte big-endian length, then payload (may be chunked).
    // 0x02 = continuation chunk (payload only).
    // 0x03 = end-of-frame (payload only) [optional — we'll accept start + conts until length satisfied].
    // This keeps frame boundaries explicit and robust for MTU-limited writes.

    private readonly ArrayPool<byte> _pool = ArrayPool<byte>.Shared;
    private readonly Lock _lock = new();
    private byte[]? _currentFrameBuffer;
    private int _currentFrameExpected = 0;
    private int _currentFrameOffset = 0;
    
    public event EventHandler<byte[]>? FrameReady; // raised when a full frame is assembled
    
    // Reads are not used in streaming write scenario; return empty.
    public override Task<byte[]> ReadValueAsync() => Task.FromResult(Array.Empty<byte>());

    // Efficiently handle writes from BLE. Avoid allocations when possible by using ArrayPool
    public override Task WriteValueAsync(byte[]? value)
    {
        Console.WriteLine("Values:");
        Console.WriteLine(value);
        if (value == null || value.Length == 0) return Task.CompletedTask;

        // Very small parse. Expect: value[0] header (1=start), then maybe length, then payload.
        // Defensive: handle both single-chunk full-frame writes and chunked writes.
        var offset = 0;
        while (offset < value.Length)
        {
            var header = value[offset++];
            switch (header)
            {
                // start-of-frame
                case 0x01 when offset + 2 > value.Length:
                    // malformed - not enough for length; ignore
                    Console.WriteLine("Malformed");
                    return Task.CompletedTask;
                case 0x01:
                {
                    Console.WriteLine("Start");
                    var len = (value[offset++] << 8) | value[offset++];

                    // allocate buffer for frame
                    lock (_lock)
                    {
                        _currentFrameBuffer = _pool.Rent(len);
                        _currentFrameExpected = len;
                        _currentFrameOffset = 0;
                    }

                    var remainingInThisWrite = value.Length - offset;
                    var toCopy = Math.Min(remainingInThisWrite, len - _currentFrameOffset);
                    Array.Copy(value, offset, _currentFrameBuffer, _currentFrameOffset, toCopy);
                    _currentFrameOffset += toCopy;
                    offset += toCopy;

                    if (_currentFrameOffset >= _currentFrameExpected)
                    {
                        EmitFrameAndReset();
                    }

                    break;
                }
                // continuation chunk
                case 0x02:
                {
                    Console.WriteLine("Continuation");
                    lock (_lock)
                    {
                        if (_currentFrameBuffer == null) return Task.CompletedTask; // out of sync - drop
                    }
                    var remainingInThisWrite = value.Length - offset;
                    lock (_lock)
                    {
                        var toCopy = Math.Min(remainingInThisWrite, _currentFrameExpected - _currentFrameOffset);
                        Array.Copy(value, offset, _currentFrameBuffer, _currentFrameOffset, toCopy);
                        _currentFrameOffset += toCopy;
                        offset += toCopy;
                        if (_currentFrameOffset >= _currentFrameExpected)
                            EmitFrameAndReset();
                    }

                    break;
                }
                default:
                    Console.WriteLine("Ignoring");
                    // unknown header: ignore remainder
                    return Task.CompletedTask;
            }
        }

        // Optionally notify subscribers that we got data (base.WriteValueAsync does notification behaviour).
        return base.WriteValueAsync(value);
    }

    private void EmitFrameAndReset()
    {
        byte[] frameToDeliver;
        lock (_lock)
        {
            var len = _currentFrameExpected;
            frameToDeliver = new byte[len];
            Array.Copy(_currentFrameBuffer ?? [], 0, frameToDeliver, 0, len);
            _pool.Return(_currentFrameBuffer ?? [], clearArray: true);
            _currentFrameBuffer = null;
            _currentFrameExpected = 0;
            _currentFrameOffset = 0;
        }
        // Raise frame ready on threadpool; listeners should be careful about long work.
        _ = Task.Run(() => FrameReady?.Invoke(this, frameToDeliver));
    }
}
