namespace PAWSC.Controllers.Implementations.Gatt
{
    public record GattUuidDef
    {
        public Guid Uuid { get; init; }
        public Dictionary<string, Guid> Children { get; init; } = new();
    }
}
