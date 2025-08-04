using System.Text;
using DotnetBleServer.Advertisements;
using DotnetBleServer.Core;
using DotnetBleServer.Gatt;
using DotnetBleServer.Gatt.BlueZModel;
using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;
using PAWSC.Scenes.Implementations;

namespace PAWSC.Controllers.Implementations.Gatt;

public static class PawsServiceImplementations
{

    public static async Task RegisterGattApplication(PawsRuntime runtime)
    {
        using var ctx = new ServerContext();
        await RegisterGattApplication(ctx, runtime);
    }
    public static async Task RegisterGattApplication(ServerContext ctx, PawsRuntime pawsRuntime)
    {
        var advert = new LEAdvertisement1Properties()
        {
            Type = "device",
            ServiceUUIDs = ["12345678-1234-5678-1234-56789abcdef0"],
            LocalName = "ToshiProto"
        };

        await new AdvertisingManager(ctx).CreateAdvertisement(advert);
            
        var gattServiceDescription = new GattServiceDescription
        {
            UUID = "12345678-1234-5678-1234-56789abcdef0",
            Primary = true
        };

        var x = new PawsStatesCharacteristic(pawsRuntime);

        var y = new GattDescriptorDescription
        {
            Value = new[] { (byte)'t' },
            UUID = "12345678-1234-5678-1234-56789abcdef2",
            Flags = new[] { "read", "write" }
        };
        
        var gab = new GattApplicationBuilder();
        gab
            .AddService(gattServiceDescription)
            .WithCharacteristic(x, [y]);

        await new GattApplicationManager(ctx)
            .RegisterGattApplication(gab.BuildServiceDescriptions());
        Console.WriteLine("Done");
    }

    public abstract class PawsCharacteristic : GattCharacteristicDescription
    {
        protected PawsCharacteristic(PawsRuntime runtime, string uuid)
        {
            UUID = uuid;
            Runtime = runtime;
        }

        protected PawsRuntime Runtime { get; }
    }

    public abstract class PawsStateCharacteristic(PawsRuntime runtime, string uuid) : PawsCharacteristic(runtime, uuid)
    {
        protected StateScene? ActiveStateScene { get {
            if (Runtime.ActiveScene is StateScene stateScene)
            {
                return stateScene;
            }

            return null;
        }}
    }

    public class PawsStatesCharacteristic(PawsRuntime runtime) : PawsStateCharacteristic(runtime, "0694bc1c-0064-4bd7-9840-41fa65d7355e")
    {
        public override Task<byte[]> ReadValueAsync()
        {
            var states = ActiveStateScene?.GetAllStates().ToList() ?? [];
            return Task.FromResult(Encoding.Unicode.GetBytes(string.Join(',', states)));
        }
    }

    public class PawsActiveStateCharacteristic(PawsRuntime runtime)
        : PawsStateCharacteristic(runtime, "81a6a500-b85e-4951-b6ac-b63c8f97f678")
    {
        public override Task<byte[]> ReadValueAsync()
        {
            var activeState = ActiveStateScene?.ActiveState;
            
            throw new NotImplementedException();
        }

        public override Task WriteValueAsync(byte[] value)
        {
            return base.WriteValueAsync(value);
        }
    }
}