using DotnetBleServer.Gatt.Description;

namespace PAWSC.Controllers.Implementations.Gatt;

public class PawsGattCharacteristic : GattCharacteristicDescription
{
    public PawsGattCharacteristic(Guid UUID, CharacteristicFlags flags) : this(UUID.ToString(), flags)
    {

    }

    public PawsGattCharacteristic(string uuid, CharacteristicFlags flags)
    {
        UUID = uuid;
        Flags = flags;
    }

    public override Task<byte[]> ReadValueAsync()
    {
        throw new NotImplementedException();
    }
}

public static class StandardDescriptors
{
    public static GattDescriptorDescription UserDescription(string description) => new()
    {
        UUID = UuidRegistry.CharacteristicUserDescription.ToString(), // CUD
        Value = Encoding.UTF8.GetBytes(description)
    };
}
