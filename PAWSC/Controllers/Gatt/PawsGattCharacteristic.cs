using DotnetBleServer.Gatt.Description;

namespace PAWSC.Controllers.Gatt.Services;

public class PawsGattCharacteristic : GattCharacteristicDescription
{
    public override Task<byte[]> ReadValueAsync()
    {
        throw new NotImplementedException();
    }
}