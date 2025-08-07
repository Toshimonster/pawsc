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

    public class PawsStatesCharacteristic : PawsStateCharacteristic
    {
        public PawsStatesCharacteristic(PawsRuntime runtime) : base(runtime, "0694bc1c-0064-4bd7-9840-41fa65d7355e")
        {
            Flags = CharacteristicFlags.Read | CharacteristicFlags.Write;
        }

        public override Task<byte[]> ReadValueAsync()
        {
            Console.WriteLine("!!!");
            var states = ActiveStateScene?.GetAllStates().ToList() ?? [];
            return Task.FromResult(Encoding.Unicode.GetBytes(string.Join(',', states.Select(x => x.Id))));
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