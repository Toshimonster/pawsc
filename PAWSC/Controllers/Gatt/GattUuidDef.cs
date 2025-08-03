using DotnetBleServer.Gatt.Description;

namespace PAWSC.Controllers.Gatt.Services
{
    public record GattUuidDef
    {
        public Guid Uuid { get; init; }
        public Dictionary<string, Guid> Children { get; init; }
    }
}
