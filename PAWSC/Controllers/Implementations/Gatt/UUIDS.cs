namespace PAWSC.Controllers.Implementations.Gatt;

public static class UUIDS
{
    public static readonly Dictionary<string, GattUuidDef> Services = new Dictionary<string, GattUuidDef>
    {
        ["PAWS"] = new GattUuidDef
        {
            Uuid = Guid.Parse("04f9d599-ce17-4397-a65d-cf769397551a"),
            Children = new Dictionary<string, Guid>
            {
                ["STATES"] = Guid.Parse("0694bc1c-0064-4bd7-9840-41fa65d7355e"),
                ["STATE"] = Guid.Parse("81a6a500-b85e-4951-b6ac-b63c8f97f678"),
                ["STATE_IMG"] = Guid.Parse("780dc226-9378-4a2a-8e39-b3d4fb2f6207"),
                ["TIMESTAMP"] = Guid.Parse("fa7abfe6-af90-42bf-a154-c2bdb7eb336a"),
                ["UPTIME"] = Guid.Parse("97dcaa87-eaa8-4546-bb33-ad001fc3daf4"),
                ["CPU_TEMP"] = Guid.Parse("31b0159a-d4bd-4396-9e77-7ebb24db6df3"),
                ["CPU_LOAD"] = Guid.Parse("26414bca-7991-46e5-a559-376c7d515a1f"),
                ["NETWORK"] = Guid.Parse("4bb22157-34d4-481c-949f-18aaa00f45e4"),
                ["MODE"] = Guid.Parse("18eb891a-8e1b-4a0c-9374-d904f97b0b52"),
                ["MODE_LIST"] = Guid.Parse("06d84d50-1e54-49b9-a749-1b4c9c7daf16")
            }
        },
        ["PAWS_EXTRA"] = new GattUuidDef
        {
            Uuid = Guid.Parse("bacc1dbc-f1f3-42f2-b572-bd3e16923f28"),
            Children = new Dictionary<string, Guid>
            {
                ["PIXELDRAW_ENABLED"] = Guid.Parse("ea003779-e651-49e8-91ab-05b65e66b95f"),
                ["PIXELDRAW_INTERFACE"] = Guid.Parse("65a8fc81-2f01-47e4-b25d-b39b4a90718c"),
                ["STREAM_ENABLED"] = Guid.Parse("450c8fdb-9502-4b00-b488-cb2455ab842e"),
                ["STREAM_INTERFACE"] = Guid.Parse("21232f3e-fe85-4fda-b204-1d157d2f12c4")
            }
        }
    };
}