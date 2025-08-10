using System.Buffers;
using System.Buffers.Binary;

namespace PAWSC.Streaming
{
    public enum VideoStreamMode : byte
    {
        Rgba32 = 0,
        Rgb565 = 1,
        Indexed8 = 2
    }

    // packet types sent over notifications
    public enum VideoStreamPacketType : byte
    {
        Palette = 1,     // palette packet for Indexed8: [PacketType(1)][frameId(4)][paletteBytes...]
        FrameHeader = 2, // frame header: [PacketType(1)][frameId(4)][mode(1)][width(1)][height(1)][totalSize(4)]
        Chunk = 3        // chunk: [PacketType(1)][frameId(4)][offset(4)][payload...]
    }

    public class VideoStreamer : IDisposable
    {
        // event consumers should send the bytes as a BLE notification
        public event Action<ReadOnlyMemory<byte>>? OnNotification;

        private readonly int _width;
        private readonly int _height;
        private readonly int _maxPayloadPerNotification; // user can set (MTU-headers). Default: 180 bytes.
        private readonly SemaphoreSlim _sendLock = new(1,1);

        private readonly ArrayPool<byte> _pool = ArrayPool<byte>.Shared;

        // Keep last palette / last frame for simple redundancy checks
        private byte[]? _lastPalette; // for Indexed8
        private uint _frameCounter = 0;

        public VideoStreamMode Mode { get; private set; } = VideoStreamMode.Indexed8;

        public VideoStreamer(int width, int height, int maxPayloadPerNotification = 180)
        {
            if (width <= 0 || height <= 0) throw new ArgumentException("invalid size");
            _width = width;
            _height = height;
            _maxPayloadPerNotification = Math.Max(16, maxPayloadPerNotification);
        }

        public void SetMode(VideoStreamMode m)
        {
            Mode = m;
        }

        /// <summary>
        /// Push a frame expressed as RGBA bytes (R,G,B,A per pixel).
        /// This method will convert/compress and send via OnNotification events.
        /// </summary>
        public async Task SendFrameAsync(byte[] rgbaSpan, CancellationToken ct = default)
        {
            if (rgbaSpan.Length != _width * _height * 4) throw new ArgumentException("frame length mismatch");

            // ensure only one SendFrame runs at a time to avoid overwhelming BLE stack
            await _sendLock.WaitAsync(ct).ConfigureAwait(false);
            try
            {
                _frameCounter++;
                var frameId = _frameCounter;

                switch (Mode)
                {
                    case VideoStreamMode.Rgba32:
                        await SendRgba32Async(frameId, rgbaSpan, ct).ConfigureAwait(false);
                        break;
                    case VideoStreamMode.Rgb565:
                        await SendRgb565Async(frameId, rgbaSpan, ct).ConfigureAwait(false);
                        break;
                    case VideoStreamMode.Indexed8:
                        await SendIndexed8Async(frameId, rgbaSpan, ct).ConfigureAwait(false);
                        break;
                    default:
                        throw new NotSupportedException("unknown mode");
                }
            }
            finally
            {
                _sendLock.Release();
            }
        }

        #region Mode implementations

        // RGBA32: send raw RGBA bytes (big) chunked
        private async Task SendRgba32Async(uint frameId, byte[] rgbaSpan, CancellationToken ct)
        {
            int totalSize = rgbaSpan.Length;
            // send header
            var header = _pool.Rent(1 + 4 + 1 + 1 + 1 + 4);
            try
            {
                int pos = 0;
                header[pos++] = (byte)VideoStreamPacketType.FrameHeader;
                BinaryPrimitives.WriteUInt32LittleEndian(header.AsSpan(pos), frameId); pos += 4;
                header[pos++] = (byte)VideoStreamMode.Rgba32;
                header[pos++] = (byte)_width;
                header[pos++] = (byte)_height;
                BinaryPrimitives.WriteInt32LittleEndian(header.AsSpan(pos), totalSize); pos += 4;

                RaiseNotification(header.AsMemory(0, pos));

                await SendChunksAsync(frameId, rgbaSpan, ct).ConfigureAwait(false);
            }
            finally
            {
                _pool.Return(header);
            }
        }

        // RGB565: convert and send (2 bytes per pixel)
        // RGB565: convert and send (2 bytes per pixel)
        private async Task SendRgb565Async(uint frameId, byte[] rgbaSpan, CancellationToken ct)
        {
            int pixelCount = _width * _height;
            int totalSize = pixelCount * 2;
            var buf = _pool.Rent(totalSize);
            try
            {
                // pack into little-endian 16-bit RGB565
                int outIdx = 0;
                for (int i = 0; i < pixelCount; ++i)
                {
                    int src = i * 4;
                    byte r = rgbaSpan[src];
                    byte g = rgbaSpan[src + 1];
                    byte b = rgbaSpan[src + 2];

                    ushort rgb565 = (ushort)(((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3));
                    buf[outIdx++] = (byte)(rgb565 & 0xFF);
                    buf[outIdx++] = (byte)(rgb565 >> 8);
                }

                // header
                var headerSmall = _pool.Rent(1 + 4 + 1 + 1 + 1 + 4);
                try
                {
                    int pos = 0;
                    headerSmall[pos++] = (byte)VideoStreamPacketType.FrameHeader;
                    BinaryPrimitives.WriteUInt32LittleEndian(headerSmall.AsSpan(pos), frameId); pos += 4;
                    headerSmall[pos++] = (byte)VideoStreamMode.Rgb565;
                    headerSmall[pos++] = (byte)_width;
                    headerSmall[pos++] = (byte)_height;
                    BinaryPrimitives.WriteInt32LittleEndian(headerSmall.AsSpan(pos), totalSize); pos += 4;

                    RaiseNotification(headerSmall.AsMemory(0, pos));
                }
                finally
                {
                    _pool.Return(headerSmall);
                }

                // SendChunksAsync expects byte[], so pass buf and totalSize explicitly
                await SendChunksAsync(frameId, buf, ct).ConfigureAwait(false);
            }
            finally
            {
                _pool.Return(buf);
            }
        }

        // Indexed8 using uniform 3-3-2 quantization into 256-entry palette
        private async Task SendIndexed8Async(uint frameId, byte[] rgbaSpan, CancellationToken ct)
        {
            int pixelCount = _width * _height;
            int totalSize = pixelCount; // one byte per pixel

            // prepare indices buffer
            var indexBuf = _pool.Rent(pixelCount);
            try
            {
                // Map colors to 3-3-2 index:
                // rIndex = r >> 5 (0..7), gIndex = g >> 5 (0..7), bIndex = b >> 6 (0..3)
                for (int i = 0; i < pixelCount; ++i)
                {
                    int s = i * 4;
                    byte r = rgbaSpan[s];
                    byte g = rgbaSpan[s + 1];
                    byte b = rgbaSpan[s + 2];

                    byte rIdx = (byte)(r >> 5);
                    byte gIdx = (byte)(g >> 5);
                    byte bIdx = (byte)(b >> 6);
                    byte paletteIdx = (byte)((rIdx << 5) | (gIdx << 2) | bIdx);
                    indexBuf[i] = paletteIdx;
                }

                // build palette bytes (256 * 3) deterministically from quantization (de-quantized center)
                var palette = _pool.Rent(256 * 3);
                try
                {
                    for (int pi = 0; pi < 256; ++pi)
                    {
                        byte rIdx = (byte)((pi >> 5) & 0x07);
                        byte gIdx = (byte)((pi >> 2) & 0x07);
                        byte bIdx = (byte)(pi & 0x03);

                        byte r = (byte)((rIdx * 255) / 7);
                        byte g = (byte)((gIdx * 255) / 7);
                        byte b = (byte)((bIdx * 255) / 3);

                        int pOff = pi * 3;
                        palette[pOff + 0] = r;
                        palette[pOff + 1] = g;
                        palette[pOff + 2] = b;
                    }

                    // If palette changed vs lastPalette, send a Palette packet (only once)
                    bool paletteChanged = _lastPalette == null || _lastPalette.Length != (256 * 3);
                    if (!paletteChanged)
                    {
                        for (int i = 0; i < 256 * 3; ++i)
                        {
                            if (_lastPalette![i] != palette[i])
                            {
                                paletteChanged = true;
                                break;
                            }
                        }
                    }

                    if (paletteChanged)
                    {
                        // palette packet: [PacketType(1)][frameId(4)][palette(256*3)]
                        var palPacketSize = 1 + 4 + (256 * 3);
                        var palPacket = _pool.Rent(palPacketSize);
                        try
                        {
                            int pos = 0;
                            palPacket[pos++] = (byte)VideoStreamPacketType.Palette;
                            BinaryPrimitives.WriteUInt32LittleEndian(palPacket.AsSpan(pos), frameId); pos += 4;
                            Array.Copy(palette, 0, palPacket, pos, 256 * 3); pos += 256 * 3;
                            RaiseNotification(palPacket.AsMemory(0, pos));
                        }
                        finally
                        {
                            _pool.Return(palPacket);
                        }

                        // store copy of palette
                        _lastPalette ??= new byte[256 * 3];
                        Buffer.BlockCopy(palette, 0, _lastPalette, 0, 256 * 3);
                    }

                    // send frame header
                    var headerSmall = _pool.Rent(1 + 4 + 1 + 1 + 1 + 4);
                    try
                    {
                        int pos = 0;
                        headerSmall[pos++] = (byte)VideoStreamPacketType.FrameHeader;
                        BinaryPrimitives.WriteUInt32LittleEndian(headerSmall.AsSpan(pos), frameId); pos += 4;
                        headerSmall[pos++] = (byte)VideoStreamMode.Indexed8;
                        headerSmall[pos++] = (byte)_width;
                        headerSmall[pos++] = (byte)_height;
                        BinaryPrimitives.WriteInt32LittleEndian(headerSmall.AsSpan(pos), totalSize); pos += 4;

                        RaiseNotification(headerSmall.AsMemory(0, pos));
                    }
                    finally
                    {
                        _pool.Return(headerSmall);
                    }

                    // send index buffer in chunks
                    await SendChunksAsync(frameId, rgbaSpan, ct).ConfigureAwait(false);
                }
                finally
                {
                    _pool.Return(palette);
                }
            }
            finally
            {
                _pool.Return(indexBuf);
            }
        }

        #endregion

        // Send raw chunked payload (frame content). Each chunk has header [PacketType(1)][frameId(4)][offset(4)] + payload
        private async Task SendChunksAsync(uint frameId, byte[] payload, CancellationToken ct)
        {
            int total = payload.Length;
            int offset = 0;
            while (offset < total)
            {
                ct.ThrowIfCancellationRequested();
                int chunkPayloadSize = Math.Min(_maxPayloadPerNotification - (1 + 4 + 4), total - offset);
                if (chunkPayloadSize <= 0)
                    chunkPayloadSize = Math.Min(_maxPayloadPerNotification, total - offset);

                int packetSize = 1 + 4 + 4 + chunkPayloadSize;
                var packet = _pool.Rent(packetSize);
                try
                {
                    int pos = 0;
                    packet[pos++] = (byte)VideoStreamPacketType.Chunk;
                    BinaryPrimitives.WriteUInt32LittleEndian(packet.AsSpan(pos), frameId);
                    pos += 4;
                    BinaryPrimitives.WriteInt32LittleEndian(packet.AsSpan(pos), offset);
                    pos += 4;

                    // Copy the chunk payload into packet buffer
                    Array.Copy(payload, offset, packet, pos, chunkPayloadSize);
                    pos += chunkPayloadSize;

                    RaiseNotification(packet.AsMemory(0, pos));
                }
                finally
                {
                    _pool.Return(packet);
                }

                offset += chunkPayloadSize;

                // small delay to avoid BLE stack congestion — tune or remove if unnecessary
                await Task.Delay(2, ct).ConfigureAwait(false);
            }
        }


        private void RaiseNotification(ReadOnlyMemory<byte> data)
        {
            // Deliver to consumer; caller must send as BLE notification. We wrap in a Task.Ignore so streaming is not blocked here.
            try
            {
                OnNotification?.Invoke(data);
            }
            catch
            {
                // swallow - the GATT notify may throw if client disconnected etc.
            }
        }

        public void Dispose()
        {
            _sendLock?.Dispose();
        }
    }
}