using DotnetBleServer.Advertisements;
using DotnetBleServer.Core;
using DotnetBleServer.Gatt;
using DotnetBleServer.Gatt.BlueZModel;
using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;

namespace PAWSC.Controllers.Implementations.Gatt;

public class GattController(Identifier id, string localName = "ToshiProto") : PawsController(id), IDisposable
{
    /**
     * Only exists after AfterInit is successful (app is running)
     */
    private ServerContext? ServerContext { get; set; }

    private LEAdvertisement1Properties Advertisement { get; } = new()
    {
        Type = "peripheral",
        ServiceUUIDs = [UuidRegistry.PawsBaseService.ToString()],
        LocalName = localName,
        Appearance = 0x0080,
        Discoverable = true,
        IncludeTxPower = true
    };

    public override async Task Initialise(PawsRuntime runtime)
    {
        try
        {
            var builder = BuildServices(runtime);
            await StartGattServer(builder);
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

    private static GattApplicationBuilder BuildServices(PawsRuntime runtime)
    {
        var appBuilder = new GattApplicationBuilder();
        appBuilder.AddService(new PawsBaseServiceImplementation(runtime).Instance);
        appBuilder.AddService(new PawsSceneInteractionService(runtime).Instance);
        appBuilder.AddService(new PawsDeviceInfoService().Instance);
        return appBuilder;
    }

    private static async Task<bool> IsBluetoothAvailableAsync()
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

    private async Task StartGattServer(GattApplicationBuilder builder)
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
                throw new InvalidOperationException("Could not power adapter.");
            }

            var adapterAddress = await ServerContext.Adapter.GetAddressAsync();
            Console.WriteLine($"✅ Bluetooth adapter ready: {adapterAddress}");

            // Start advertisement first
            await StartAdvertisement(ServerContext);

            // Register the GATT application
            Console.WriteLine("📝 Registering GATT application...");
            var gattManager = new GattApplicationManager(ServerContext);
            await gattManager.RegisterGattApplication(builder.BuildServiceDescriptions());

            AppDomain.CurrentDomain.ProcessExit += OnProcessExit;

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

            await mgr.CreateAdvertisement(Advertisement);
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

    protected virtual void Dispose(bool disposing)
    {
        ServerContext?.Dispose();
        AppDomain.CurrentDomain.ProcessExit -= OnProcessExit;
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    ~GattController()
    {
        Dispose(false);
    }
}
