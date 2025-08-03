using System.Text;
using DotnetBleServer.Core;
using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;

namespace PAWSC.Controllers.Gatt.Services;

public static class PawsServiceImplementations
{
    public static async Task RegisterGattApplication(ServerContext ctx, PawsRuntime pawsRuntime)
    {
        
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

    public class PawsStatesCharacteristic(PawsRuntime runtime) : PawsCharacteristic(runtime, "0694bc1c-0064-4bd7-9840-41fa65d7355e")
    {
        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult("Hello World"u8.ToArray());
        }
    }
}