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

    public static async Task RegisterGattApplication(PawsRuntime runtime)
    {
        try
        {
            using var ctx = new ServerContext();
            await ctx.ConnectAndSetDefaultAdapter();
            await ctx.Adapter.SetPoweredAsync(true);

            if (!await ctx.Adapter.GetPoweredAsync())
            {
                throw new Exception("Cant power adapter");
            }

            await RegisterGattApplication(ctx, runtime);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
    }
    public static async Task RegisterGattApplication(ServerContext ctx, PawsRuntime pawsRuntime)
    {
        Console.WriteLine("START");
        var advert = new LEAdvertisement1Properties
        {
            Type = "peripheral",
            ServiceUUIDs = new [] {"12345678-1234-5678-1234-56789abcdef9"},
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
            UUID = "12345678-1234-5678-1234-56789abcdef0",
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
        "0694bc1c-0064-4bd7-9840-41fa65d7355e",
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
        : PawsServiceImplementations.PawsStateCharacteristic(runtime, "81a6a500-b85e-4951-b6ac-b63c8f97f678", CharacteristicFlags.Notify)
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
            : base(runtime, StreamGattUuids.DataCharacteristic, CharacteristicFlags.Notify)
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
        private GattApplicationBuilder AppBuilder { get; set; } = new GattApplicationBuilder();
        /**
         * Only exists after AfterInit is successful (app is running)
         */
        private ServerContext? ServerContext { get; set; } = null;
        protected LEAdvertisement1Properties Advertisement { get; } = new LEAdvertisement1Properties
        {
            Type = "peripheral",
            ServiceUUIDs = new [] {"12345678-1234-5678-1234-56789abcdef9"},
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
            await ScanForServices(runtime);
            await StartGattServer();
            IsRegistered = true;
        }

        private Task ScanForServices(PawsRuntime runtime)
        {
            foreach (var gattControllableDefinition in runtime.Scenes.ValuesofType<IGattControllableDefinition>())
            {
                RegisterService(gattControllableDefinition);
            }
            return Task.CompletedTask;
        }
        
        private async Task StartGattServer()
        {
            ServerContext = new ServerContext();
            await ServerContext.ConnectAndSetDefaultAdapter();
            await ServerContext.Adapter.SetPoweredAsync(true);

            if (!await ServerContext.Adapter.GetPoweredAsync())
            {
                throw new Exception("Could not power adapter.");
            }
            
            await StartAdvertisement(ServerContext);
            
            await new GattApplicationManager(ServerContext)
                .RegisterGattApplication(AppBuilder.BuildServiceDescriptions());

            AppDomain.CurrentDomain.ProcessExit += OnProcessExit;
            
            
        }

        private async Task StartAdvertisement(ServerContext serverContext)
        {
            var mgr = new AdvertisingManager(serverContext);
            await mgr.CreateAdvertisement(Advertisement);
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