using DotnetBleServer.Gatt.Description;

namespace PAWSC.Controllers.Implementations.Gatt;

public class PawsDeviceInfoService : IGattService
{
    public GattServiceDescription Instance { get; } = new()
    {
        UUID = UuidRegistry.DeviceInfoService.ToString(),
        Primary = false,
        GattCharacteristicDescriptions =
        {
            new TimestampCharacteristic(),
            new UptimeCharacteristic(),
            new CpuTempCharacteristic(),
            new CpuLoadCharacteristic(),
            new NetworkCharacteristic()
        }
    };

    private sealed class TimestampCharacteristic() : ConstructedCharacteristic(
        UuidRegistry.DeviceInfoCharacteristics.Timestamp,
        CharacteristicFlags.Read)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(EncodeFromString(DateTime.Now.ToShortDateString()));
        }
    }

    private sealed class UptimeCharacteristic() : ConstructedCharacteristic(
        UuidRegistry.DeviceInfoCharacteristics.Uptime,
        CharacteristicFlags.Read)
    {
        public override async Task<byte[]> ReadValueAsync()
        {
            string path = "/proc/uptime";

            if (File.Exists(path))
            {
                string raw = await File.ReadAllTextAsync(path);
                raw = raw.Split(" ").FirstOrDefault() ?? "";
                if (double.TryParse(raw.Trim(), out double milliDegrees))
                {
                    return EncodeFromDouble(milliDegrees);
                }
                else
                {
                    Console.WriteLine("Could not parse uptime : " + raw);
                }
            }
            else
            {
                Console.WriteLine("Uptime file not found.");
            }
            return [];
        }
    }

    private sealed class CpuTempCharacteristic() : ConstructedCharacteristic(
        UuidRegistry.DeviceInfoCharacteristics.CpuTemp,
        CharacteristicFlags.Read)
    {
        public override async Task<byte[]> ReadValueAsync()
        {
            string path = "/sys/class/thermal/thermal_zone0/temp";

            if (File.Exists(path))
            {
                string raw = await File.ReadAllTextAsync(path);
                if (double.TryParse(raw.Trim(), out double milliDegrees))
                {
                    return EncodeFromDouble(milliDegrees);
                }
                else
                {
                    Console.WriteLine("Could not parse temperature : " + raw);
                }
            }
            else
            {
                Console.WriteLine("Temperature file not found.");
            }
            return [];
        }
    }

    private sealed class CpuLoadCharacteristic() : ConstructedCharacteristic(
        UuidRegistry.DeviceInfoCharacteristics.CpuLoad,
        CharacteristicFlags.Read)
    {
        public override async Task<byte[]> ReadValueAsync()
        {
            string path = "/proc/loadavg";

            if (File.Exists(path))
            {
                string raw = await File.ReadAllTextAsync(path);
                raw = raw.Split(" ").FirstOrDefault() ?? "";
                if (double.TryParse(raw.Trim(), out double milliDegrees))
                {
                    return EncodeFromDouble(milliDegrees);
                }
                else
                {
                    Console.WriteLine("Could not parse cpu load : " + raw);
                }
            }
            else
            {
                Console.WriteLine("Cpu load file not found.");
            }
            return [];
        }
    }

    private sealed class NetworkCharacteristic() : ConstructedCharacteristic(
        UuidRegistry.DeviceInfoCharacteristics.Network,
        CharacteristicFlags.Read)
    {
        public override async Task<byte[]> ReadValueAsync()
        {
            string path = "/proc/net/dev";

            if (!File.Exists(path))
            {
                Console.WriteLine("Network stats file not found.");
                return Array.Empty<byte>();
            }

            try
            {
                var lines = await File.ReadAllLinesAsync(path);
                // Skip first two lines (headers)
                var stats = lines.Skip(2)
                    .Select(line =>
                    {
                        var parts = line.Split(':');
                        if (parts.Length != 2) return null;

                        string iface = parts[0].Trim();
                        var values = parts[1].Trim().Split(' ', StringSplitOptions.RemoveEmptyEntries);

                        if (values.Length < 16) return null;

                        // Receive bytes and transmit bytes
                        ulong rxBytes = ulong.Parse(values[0]);
                        ulong txBytes = ulong.Parse(values[8]);

                        return $"{iface}: RX={rxBytes} TX={txBytes}";
                    })
                    .Where(s => s != null);

                string result = string.Join("\n", stats);
                return EncodeFromString(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Failed to read network stats: " + ex.Message);
                return Array.Empty<byte>();
            }
        }
    }
}
