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

        protected static string DecodeToString(byte[] value)
        {
            try
            {
                return Encoding.Unicode.GetString(value);
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

    public class PawsStatesCharacteristic(PawsRuntime runtime) : PawsStateCharacteristic(runtime,
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
        : PawsStateCharacteristic(runtime, "81a6a500-b85e-4951-b6ac-b63c8f97f678", CharacteristicFlags.Notify)
    {
        
        public override Task<byte[]> ReadValueAsync()
        {
            var activeState = ActiveStateScene?.ActiveState;
            return Task.FromResult(
                EncodeFromString(activeState?.ToString() ?? "")
                );
        }

        public override Task WriteValueAsync(byte[] value)
        {
            var stringId = DecodeToString(value);
            var identifier = new Identifier(stringId);
            Console.WriteLine(identifier);
            ActiveStateScene?.SetStateFromId(identifier);
            return base.WriteValueAsync(value);
        }
    }
}