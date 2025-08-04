using DotnetBleServer.Gatt.Description;

namespace PAWSC.Controllers.Implementations.Gatt;

public class PawsGattCharacteristic : GattCharacteristicDescription
{
    public override Task<byte[]> ReadValueAsync()
    {
        throw new NotImplementedException();
    }
}