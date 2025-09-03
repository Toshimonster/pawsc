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
        await base.Initialise(runtime);
        var builder = BuildServices(runtime);
        try
        {
            await StartGattServer(builder);
            Runtime?.Broadcast(PawsCommands.Log.Info("GATT server started successfully"));
        }
        catch (Tmds.DBus.DBusException ex) when (ex.ErrorName?.Contains("org.bluez.Error.Failed") == true)
        {
            Runtime?.Broadcast(PawsCommands.Log.Warn("Bluetooth LE server initially failed to start due to permission issues.", ex));

            await StartGattServer(builder);
            Runtime?.Broadcast(PawsCommands.Log.Info("GATT server started successfully"));
        }
        catch (Exception ex)
        {
            Runtime?.Broadcast(PawsCommands.Log.Error($"❌ Failed to start GATT server: {ex.Message}", ex));
            Runtime?.Broadcast(PawsCommands.Log.Error("The application will continue without Bluetooth functionality."));
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

    private async Task<bool> IsBluetoothAvailableAsync()
    {
        try
        {
            Runtime?.Broadcast(PawsCommands.Log.Trace("Checking Bluetooth availability..."));

            // Simple check: try to create a server context
            // If this fails, Bluetooth is not available
            var testContext = new ServerContext();
            await testContext.ConnectAndSetDefaultAdapter();

            var adapter = testContext.Adapter;
            var powered = await adapter.GetPoweredAsync();
            var address = await adapter.GetAddressAsync();

            Runtime?.Broadcast(PawsCommands.Log.Debug($"Bluetooth adapter found: {address}, Powered: {powered}"));
            return true;
        }
        catch (Exception ex)
        {
            Runtime?.Broadcast(PawsCommands.Log.Error($"Bluetooth not available: {ex.Message}", ex));
            return false;
        }
    }

    private async Task StartGattServer(GattApplicationBuilder builder)
    {
        if (!await IsBluetoothAvailableAsync())
        {
            Runtime?.Broadcast(PawsCommands.Log.Error("Bluetooth service not available. Skipping GATT server startup."));
            return;
        }

        try
        {
            Runtime?.Broadcast(PawsCommands.Log.Debug("Starting GATT server..."));

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
            Runtime?.Broadcast(PawsCommands.Log.Debug($"Bluetooth adapter ready: {adapterAddress}"));

            // Start advertisement first
            await StartAdvertisement(ServerContext);

            // Register the GATT application
            Runtime?.Broadcast(PawsCommands.Log.Debug("Registering GATT application..."));
            var gattManager = new GattApplicationManager(ServerContext);
            await gattManager.RegisterGattApplication(builder.BuildServiceDescriptions());

            AppDomain.CurrentDomain.ProcessExit += OnProcessExit;

            Runtime?.Broadcast(PawsCommands.Log.Info("GATT server started successfully with basic service"));
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

    private async Task StartAdvertisement(ServerContext serverContext, int attemptNo = 0)
    {
        const int maxAttempts = 3;
        try
        {
            var mgr = new AdvertisingManager(serverContext);

            await mgr.CreateAdvertisement(Advertisement);
            Runtime?.Broadcast(PawsCommands.Log.Info("Bluetooth advertisement started successfully"));
        }
        catch (Exception ex)
        {
            Runtime?.Broadcast(PawsCommands.Log.Error($"Failed to start advertisement, attempt {attemptNo}: {ex.Message}", ex));
            if (attemptNo >= maxAttempts)
            {
                throw;
            }

            await StartAdvertisement(serverContext, attemptNo + 1);
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
