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

    protected static byte[] EncodeFromInt(int value)
    {
        return BitConverter.GetBytes(value);
    }

    protected static int DecodeFromInt(byte[]? value)
    {
        try
        {
            return BitConverter.ToInt32(value);
        }
        catch
        {
            return 0;
        }
    }

    protected static byte[] EncodeFromDouble(double value)
    {
        return BitConverter.GetBytes(value);
    }

    protected static double DecodeFromDouble(byte[]? value)
    {
        try
        {
            return BitConverter.ToDouble(value);
        }
        catch
        {
            return 0;
        }
    }
}
