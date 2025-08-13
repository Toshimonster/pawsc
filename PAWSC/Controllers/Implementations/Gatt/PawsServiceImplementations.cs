using System.Text;
using DotnetBleServer.Advertisements;
using DotnetBleServer.Core;
using DotnetBleServer.Gatt;
using DotnetBleServer.Gatt.BlueZModel;
using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;
using PAWSC.Scenes;
using PAWSC.Scenes.Implementations;

namespace PAWSC.Controllers.Implementations.Gatt;

public static class PawsServiceImplementations
{
    public static async Task RegisterGattApplication(ServerContext ctx, PawsRuntime pawsRuntime)
    {
        Console.WriteLine("START");
        var advert = new LEAdvertisement1Properties
        {
            Type = "peripheral",
            ServiceUUIDs = new [] {UuidRegistry.AdvertisementService.ToString()},
            LocalName = "ToshiProto",
            Appearance = (ushort)0x0080,
            Discoverable = true,
            IncludeTxPower = true
        };

        var mgr = new AdvertisingManager(ctx);
        await mgr.CreateAdvertisement(advert);


        Console.WriteLine("AD");
        var gattServiceDescription = new GattServiceDescription
        {
            UUID = UuidRegistry.StateService.ToString(),
            Primary = true
        };

        var x = new PawsStatesCharacteristic(pawsRuntime);

        var gab = new GattApplicationBuilder();
        var service = gab
            .AddService(gattServiceDescription);

        service.WithCharacteristic(x, []);
        service.WithCharacteristic(new PawsActiveStateCharacteristic(pawsRuntime), []);


        Console.WriteLine("BUILD");

        await new GattApplicationManager(ctx)
            .RegisterGattApplication(gab.BuildServiceDescriptions());
        Console.WriteLine("Done");

        AppDomain.CurrentDomain.ProcessExit += async (_, _) =>
        {
            Console.WriteLine("Cleaning up...");
            await ctx.Adapter.SetPoweredAsync(false);
        };

        await Task.Delay(Timeout.Infinite);
    }

    public abstract class PawsCharacteristic : GattCharacteristicDescription
    {
        protected PawsCharacteristic(PawsRuntime runtime, string uuid, CharacteristicFlags flags)
        {
            UUID = uuid;
            Runtime = runtime;
            Flags = flags;
        }

        protected static byte[] EncodeFromString(string value)
        {
            try
            {
                return Encoding.Unicode.GetBytes(value ?? "");
            }
            catch
            {
                return [];
            }
        }

        protected static string DecodeToString(byte[]? value)
        {
            try
            {
                return Encoding.Unicode.GetString(value ?? []);
            }
            catch
            {
                return "";
            }
        }

        protected PawsRuntime Runtime { get; }
    }

    public abstract class PawsStateCharacteristic(PawsRuntime runtime, string uuid, CharacteristicFlags flags) : PawsCharacteristic(runtime, uuid, flags)
    {
        protected StateScene? ActiveStateScene { get {
            if (Runtime.ActiveScene is StateScene stateScene)
            {
                return stateScene;
            }

            return null;
        }}
    }

    public abstract class PawsSceneCharacteristic<T>(PawsRuntime runtime, string uuid, CharacteristicFlags flags) : PawsCharacteristic(runtime, uuid, flags)
    where T: IPawsScene
    {
        protected T? ActiveScene { get {
            if (Runtime.ActiveScene is T scene)
            {
                return scene;
            }

            return default;
        }}
    }

    public class PawsStatesCharacteristic(PawsRuntime runtime) : PawsServiceImplementations.PawsStateCharacteristic(runtime,
        UuidRegistry.PawsCharacteristics.States.ToString(),
        CharacteristicFlags.Read)
    {
        public override Task<byte[]> ReadValueAsync()
        {
            var states = ActiveStateScene?.GetAllStates().ToList() ?? [];
            return Task.FromResult(
                EncodeFromString(
                    string.Join(',', states.Select(x => x.Id))
                    )
                );
        }
    }

    public class PawsActiveStateCharacteristic(PawsRuntime runtime)
        : PawsServiceImplementations.PawsStateCharacteristic(runtime, UuidRegistry.PawsCharacteristics.State.ToString(), CharacteristicFlags.Notify)
    {

        public override Task<byte[]> ReadValueAsync()
        {
            var activeState = ActiveStateScene?.ActiveState;
            return Task.FromResult(
                EncodeFromString(activeState?.ToString() ?? "")
                );
        }

        public override Task WriteValueAsync(byte[]? value)
        {
            var stringId = DecodeToString(value);
            var identifier = new Identifier(stringId);
            Console.WriteLine(identifier);
            ActiveStateScene?.SetStateFromId(identifier);
            return base.WriteValueAsync(value);
        }
    }

    /*
    public class StreamControlCharacteristic : PawsSceneCharacteristic<StreamScene
    {
        public StreamControlCharacteristic(PawsRuntime runtime)
            : base(runtime, "300751B6-1450-4D27-BE88-23B53A2FA3E9", CharacteristicFlags.Write)
        {
        }

        public override Task WriteValueAsync(byte[] value)
        {
            var command = DecodeToString(value).ToLowerInvariant();

            switch (command)
            {
                case "start":
                    Runtime.StreamingManager?.StartStreaming();
                    Console.WriteLine("Streaming started");
                    break;

                case "stop":
                    Runtime.StreamingManager?.StopStreaming();
                    Console.WriteLine("Streaming stopped");
                    break;

                default:
                    Console.WriteLine($"Unknown command: {command}");
                    break;
            }
            return Task.CompletedTask;
        }
    }

    public class StreamDataCharacteristic : PawsServiceImplementations.PawsCharacteristic
    {
        public StreamDataCharacteristic(PawsRuntime runtime)
            : base(runtime, UuidRegistry.StreamCharacteristics.Data.ToString(), CharacteristicFlags.Notify)
        {
        }

        // Method to notify connected clients with stream chunk data
        public async Task NotifyStreamChunkAsync(byte[] chunk)
        {
            await RaiseNotification(chunk.AsMemory(0, chunk.Length));
        }

        public override Task<byte[]> ReadValueAsync()
        {
            byte[] toRet = [];
            return Task.FromResult(toRet);
        }
    }*/

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
            ServiceUUIDs = new [] {UuidRegistry.AdvertisementService.ToString()},
            LocalName = "ToshiProto",
            Appearance = (ushort)0x0080,
            Discoverable = true,
            IncludeTxPower = true
        };

        private void RegisterService(IGattControllableDefinition definition)
        {
            RegisterService(definition.ServiceDescription, definition.Characteristics);
        }

        public void RegisterService(GattServiceDescription serviceDescription, IEnumerable<GattCharacteristicDescription> characteristics)
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

                if (gattServices.Count == 0)
                {
                    Console.WriteLine("ℹ️  No GATT controllable scenes found. Using basic service.");
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
    }
}
