using DotnetBleServer.Advertisements;
using DotnetBleServer.Core;
using DotnetBleServer.Gatt;
using DotnetBleServer.Gatt.BlueZModel;
using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;
using PAWSC.Scenes;

namespace PAWSC.Controllers.Implementations.Gatt;

public class GattController(Identifier id) : PawsController(id), IPawsAfterInitialisableHook, IDisposable
{
    public bool IsRegistered { get; private set; } = false;
    private GattApplicationBuilder AppBuilder { get; } = new GattApplicationBuilder();
    private HashSet<string> SubscribedServices { get; } = new HashSet<string>();

    /**
     * Only exists after AfterInit is successful (app is running)
     */
    private ServerContext? ServerContext { get; set; } = null;

    protected LEAdvertisement1Properties Advertisement { get; } = new LEAdvertisement1Properties
    {
        Type = "peripheral",
        ServiceUUIDs = new[] { UuidRegistry.AdvertisementService.ToString() },
        LocalName = "ToshiProto",
        Appearance = (ushort)0x0080,
        Discoverable = true,
        IncludeTxPower = true
    };

    private void RegisterService(IGattControllableDefinition definition)
    {
        RegisterService(definition.ServiceDescription, definition.Characteristics);
    }

    private void RegisterService(GattServiceDescription serviceDescription,
        IEnumerable<GattCharacteristicDescription> characteristics)
    {
        if (IsRegistered)
            throw new InvalidOperationException("Gatt Controller is already registered");

        if (!SubscribedServices.Add(serviceDescription.UUID))
        {
            Console.WriteLine(serviceDescription.UUID + " : Gatt Service already registered, skipping...");
            return;
        }

        var builder = AppBuilder.AddService(serviceDescription);
        foreach (var characteristic in characteristics)
        {
            builder.WithCharacteristic(characteristic, []);
        }
    }

    public override Task Initialise(PawsRuntime runtime)
    {
        base.Initialise(runtime);
        return Task.CompletedTask;
    }

    public async Task AfterInitialise(PawsRuntime runtime)
    {
        try
        {
            await ScanForServices(runtime);
            await StartGattServer();
            Console.WriteLine("GATT server started successfully");
        }
        catch (Tmds.DBus.DBusException ex) when (ex.ErrorName?.Contains("org.bluez.Error.Failed") == true)
        {
            Console.WriteLine("⚠️  Bluetooth LE server failed to start due to permission issues.");
            Console.WriteLine("   This is likely due to missing system permissions or Bluetooth service not running.");
            Console.WriteLine("   The application will continue without Bluetooth functionality.");
            Console.WriteLine($"   Error details: {ex.Message}");

            // Continue without Bluetooth - this is a non-fatal error
            // The application can still function with other interfaces
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Failed to start GATT server: {ex.Message}");
            Console.WriteLine("   The application will continue without Bluetooth functionality.");

            // Log the full exception for debugging but don't crash
            Console.WriteLine($"   Full exception: {ex}");
        }
    }

    private Task ScanForServices(PawsRuntime runtime)
    {
        try
        {
            var gattServices = runtime.Scenes.ValuesOfType<IGattControllableDefinition>().ToList();

            Console.WriteLine("Registering Root Servie");
            BuildRootService(runtime);

            if (gattServices.Count == 0)
            {
                Console.WriteLine("ℹ️  No GATT controllable scenes found.");
                return Task.CompletedTask;
            }

            Console.WriteLine($"🔍 Found {gattServices.Count} GATT controllable scenes");
            foreach (var gattControllableDefinition in gattServices)
            {
                RegisterService(gattControllableDefinition);
                Console.WriteLine($"✅ Registered GATT service for: {gattControllableDefinition.GetType().Name}");
            }

            return Task.CompletedTask;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"⚠️  Error scanning for GATT services: {ex.Message}");
            return Task.CompletedTask;
        }
    }

    private async Task<bool> IsBluetoothAvailableAsync()
    {
        try
        {
            Console.WriteLine("🔍 Checking Bluetooth availability...");

            // Simple check: try to create a server context
            // If this fails, Bluetooth is not available
            var testContext = new ServerContext();
            await testContext.ConnectAndSetDefaultAdapter();

            var adapter = testContext.Adapter;
            var powered = await adapter.GetPoweredAsync();
            var address = await adapter.GetAddressAsync();

            Console.WriteLine($"✅ Bluetooth adapter found: {address}, Powered: {powered}");
            return true;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Bluetooth not available: {ex.Message}");
            return false;
        }
    }

    private async Task StartGattServer()
    {
        if (!await IsBluetoothAvailableAsync())
        {
            Console.WriteLine("⚠️  Bluetooth service not available. Skipping GATT server startup.");
            return;
        }

        try
        {
            Console.WriteLine("🚀 Starting GATT server...");

            ServerContext = new ServerContext();
            await ServerContext.ConnectAndSetDefaultAdapter();

            // Ensure adapter is powered on
            await ServerContext.Adapter.SetPoweredAsync(true);
            await Task.Delay(1000); // Give adapter time to power up

            if (!await ServerContext.Adapter.GetPoweredAsync())
            {
                throw new Exception("Could not power adapter.");
            }

            var adapterAddress = await ServerContext.Adapter.GetAddressAsync();
            Console.WriteLine($"✅ Bluetooth adapter ready: {adapterAddress}");

            // Start advertisement first
            await StartAdvertisement(ServerContext);

            // Register the GATT application
            Console.WriteLine("📝 Registering GATT application...");
            var gattManager = new GattApplicationManager(ServerContext);
            await gattManager.RegisterGattApplication(AppBuilder.BuildServiceDescriptions());

            AppDomain.CurrentDomain.ProcessExit += OnProcessExit;
            IsRegistered = true;

            Console.WriteLine("✅ GATT server started successfully with basic service");
        }
        catch (Tmds.DBus.DBusException ex) when (ex.ErrorName?.Contains("org.bluez.Error.Failed") == true)
        {
            throw new InvalidOperationException($"Bluetooth GATT registration failed: {ex.Message}", ex);
        }
        catch (Exception ex)
        {
            throw new InvalidOperationException($"Failed to start GATT server: {ex.Message}", ex);
        }
    }

    private async Task StartAdvertisement(ServerContext serverContext)
    {
        try
        {
            var mgr = new AdvertisingManager(serverContext);

            // Create a proper advertisement with the service UUID
            var advertisement = new LEAdvertisement1Properties
            {
                Type = "peripheral",
                ServiceUUIDs = new[] { UuidRegistry.StateService.ToString() },
                LocalName = "PAWSC-Controller",
                Appearance = (ushort)0x0080, // Generic HID
                Discoverable = true,
                IncludeTxPower = true
            };

            await mgr.CreateAdvertisement(advertisement);
            Console.WriteLine("✅ Bluetooth advertisement started successfully");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"⚠️  Failed to start advertisement: {ex.Message}");
            // Don't throw - advertisement failure shouldn't prevent GATT registration
        }
    }

    private void OnProcessExit(object? sender, EventArgs e)
    {
        ServerContext?.Adapter.SetPoweredAsync(false).Wait();
    }

    private void ReleaseUnmanagedResources()
    {
        ServerContext?.Dispose();
        AppDomain.CurrentDomain.ProcessExit -= OnProcessExit;
    }

    public void Dispose()
    {
        ReleaseUnmanagedResources();
        GC.SuppressFinalize(this);
    }

    ~GattController()
    {
        ReleaseUnmanagedResources();
    }

    #region Root Service & Characteristics

    private static string StringFromIdentifiers(IEnumerable<Identifier> identifiers)
    {
        return string.Join(",", identifiers);
    }

    private static GattServiceDescription RootService = new GattServiceDescription()
    {
        UUID = UuidRegistry.RootService.ToString(),
        Primary = true
    };

    public class SceneListCharacteristic(PawsRuntime runtime) : PawsServiceImplementations.PawsCharacteristic(
        runtime,
        UuidRegistry.RootCharacteristics.SceneList,
        CharacteristicFlags.Read)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(EncodeFromString(StringFromIdentifiers(
                Runtime.Scenes.GetAllIdentifiers()
            )));
        }
    }

    public class ControllerListCharacteristic(PawsRuntime runtime) : PawsServiceImplementations.PawsCharacteristic(
        runtime,
        UuidRegistry.RootCharacteristics.ControllerList,
        CharacteristicFlags.Read)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(EncodeFromString(StringFromIdentifiers(
                Runtime.Controllers.GetAllIdentifiers()
            )));
        }
    }

    public class InterfaceListCharacteristic(PawsRuntime runtime) : PawsServiceImplementations.PawsCharacteristic(
        runtime,
        UuidRegistry.RootCharacteristics.InterfaceList,
        CharacteristicFlags.Read)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(EncodeFromString(StringFromIdentifiers(
                Runtime.Interfaces.GetAllIdentifiers()
            )));
        }
    }

    public class SceneCharacteristic(PawsRuntime runtime) : PawsServiceImplementations.PawsCharacteristic(
        runtime,
        UuidRegistry.RootCharacteristics.ActiveScene,
        CharacteristicFlags.Notify)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(EncodeFromString(Runtime.ActiveScene?.Id.ToString() ?? ""));
        }

        public override Task WriteValueAsync(byte[] value)
        {
            Runtime.Broadcast(new PawsCommands.SetScene(new Identifier(DecodeToString(value))));
            return Task.CompletedTask;
        }
    }

    public class TimestampCharacteristic() : PawsGattCharacteristic(
        UuidRegistry.RootCharacteristics.Timestamp,
        CharacteristicFlags.Read)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(EncodeFromString(DateTime.Now.ToShortDateString()));
        }
    }

    public class UptimeCharacteristic() : PawsGattCharacteristic(
        UuidRegistry.RootCharacteristics.Uptime,
        CharacteristicFlags.Read)
    {
        public override async Task<byte[]> ReadValueAsync()
        {
            string path = "/proc/uptime";

            if (File.Exists(path))
            {
                string raw = await File.ReadAllTextAsync(path);
                raw = raw.Split(" ").FirstOrDefault() ?? "";
                if (int.TryParse(raw.Trim(), out int milliDegrees))
                {
                    return EncodeFromInt(milliDegrees);
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

    public class CpuTempCharacteristic() : PawsGattCharacteristic(
        UuidRegistry.RootCharacteristics.CpuTemp,
        CharacteristicFlags.Read)
    {
        public override async Task<byte[]> ReadValueAsync()
        {
            string path = "/sys/class/thermal/thermal_zone0/temp";

            if (File.Exists(path))
            {
                string raw = await File.ReadAllTextAsync(path);
                if (int.TryParse(raw.Trim(), out int milliDegrees))
                {
                    return EncodeFromInt(milliDegrees);
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

    public class CpuLoadCharacteristic() : PawsGattCharacteristic(
        UuidRegistry.RootCharacteristics.CpuLoad,
        CharacteristicFlags.Read)
    {
        public override async Task<byte[]> ReadValueAsync()
        {
            string path = "/proc/loadavg";

            if (File.Exists(path))
            {
                string raw = await File.ReadAllTextAsync(path);
                raw = raw.Split(" ").FirstOrDefault() ?? "";
                if (int.TryParse(raw.Trim(), out int milliDegrees))
                {
                    return EncodeFromInt(milliDegrees);
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

    public class NetworkCharacteristic() : PawsGattCharacteristic(
        UuidRegistry.RootCharacteristics.Network,
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

    private GattServiceBuilder BuildRootService(PawsRuntime runtime)
    {
        //TODO use register service instead
        var service = AppBuilder.AddService(RootService);
        service.WithCharacteristic(new SceneListCharacteristic(runtime), []);
        service.WithCharacteristic(new ControllerListCharacteristic(runtime), []);
        service.WithCharacteristic(new InterfaceListCharacteristic(runtime), []);
        service.WithCharacteristic(new SceneCharacteristic(runtime), []);
        service.WithCharacteristic(new TimestampCharacteristic(), []);
        service.WithCharacteristic(new UptimeCharacteristic(), []);
        service.WithCharacteristic(new CpuTempCharacteristic(), []);
        service.WithCharacteristic(new CpuLoadCharacteristic(), []);
        service.WithCharacteristic(new UptimeCharacteristic(), []);
        return service;
    }

    #endregion


}
