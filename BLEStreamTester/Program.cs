using System;
using System.Buffers.Binary;
using System.Linq;
using System.Threading.Tasks;
using InTheHand.Bluetooth;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;

class Program
{
    static Guid ServiceUuid = Guid.Parse("0000f00d-0000-1000-8000-00805f9b34fb");
    static Guid CharUuid    = Guid.Parse("0000f00d-0000-1000-8000-00805f9b34fa");
    const int MaxChunkSize = 180; // safe chunk size for BLE MTU

    static async Task Main(string[] args)
    {
        if (args.Length < 1)
        {
            Console.WriteLine("Usage: dotnet run <path-to-gif>");
            return;
        }

        string gifPath = args[0];
        Console.WriteLine("Scanning for BLE devices...");

        var devices = (await Bluetooth.ScanForDevicesAsync()).ToList();

        // List devices so user can choose
        int index = 0;
        foreach (var dev in devices)
        {
            Console.WriteLine($"[{index}] {dev.Name}");
            index++;
        }

        Console.Write("Select device index: ");
        if (!int.TryParse(Console.ReadLine(), out int choice) || choice < 0 || choice >= devices.Count)
        {
            Console.WriteLine("Invalid choice.");
            return;
        }

        var device = devices[choice];

        Console.WriteLine($"Connecting to {device.Name}...");
        await device.Gatt.ConnectAsync();

        var services = await device.Gatt.GetPrimaryServicesAsync();;
        var service = services.FirstOrDefault(s => s.Uuid == ServiceUuid);
        if (service == null)
        {
            Console.WriteLine("Service not found.");
            return;
        }

        var characteristics = await service.GetCharacteristicsAsync();
        var characteristic = characteristics.FirstOrDefault(c => c.Uuid == CharUuid);
        if (characteristic == null)
        {
            Console.WriteLine("Characteristic not found.");
            return;
        }

        Console.WriteLine("Loading GIF frames...");
        using var gif = Image.Load<Rgb24>(gifPath);
        var frameCount = gif.Frames.Count;

        for (int i = 0; i < frameCount; i++)
        {
            var frame = gif.Frames.CloneFrame(i);
            var pixelBytes = new byte[frame.Width * frame.Height * 3];
            frame.CopyPixelDataTo(pixelBytes);

            Console.WriteLine($"Sending frame {i + 1}/{frameCount} ({pixelBytes.Length} bytes)...");
            await SendFrame(characteristic, pixelBytes);
            await Task.Delay(100); // adjust to match animation speed
        }

        Console.WriteLine("Done.");
    }

    static async Task SendFrame(GattCharacteristic characteristic, byte[] frameData)
    {
        // Start packet
        var firstLen = Math.Min(MaxChunkSize, frameData.Length);
        var startPacket = new byte[3 + firstLen];
        startPacket[0] = 0x01;
        BinaryPrimitives.WriteUInt16BigEndian(startPacket.AsSpan(1, 2), (ushort)frameData.Length);
        Array.Copy(frameData, 0, startPacket, 3, firstLen);
        await characteristic.WriteValueWithoutResponseAsync(startPacket);

        // Continuation packets
        int offset = firstLen;
        while (offset < frameData.Length)
        {
            var chunkLen = Math.Min(MaxChunkSize, frameData.Length - offset);
            var chunk = new byte[1 + chunkLen];
            chunk[0] = 0x02;
            Array.Copy(frameData, offset, chunk, 1, chunkLen);
            await characteristic.WriteValueWithoutResponseAsync(chunk);
            offset += chunkLen;
        }
    }
}
