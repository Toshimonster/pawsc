using System;

namespace DotnetBleServer.Gatt.Description
{
    [Flags]
    public enum CharacteristicFlags
    {
        Read = 1,
        Write = 2,
        Notify = 4,
        Indicate = 8,
        WritableAuxiliaries = 16
    }
}