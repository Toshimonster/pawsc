using DotnetBleServer.Gatt.Description;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces;
using PAWSC.Runtime;

namespace PAWSC.Scenes;

public interface IPawsScene : IIdentifiable, IPawsInitialisable
{
    public void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo);
}

public record DrawInfo
{
    public DateTime Time { get; init; }
    public long Deltatime { get; init; }
    
    public long Fps => 10000000 / Deltatime;
}

public abstract class BaseScene(Identifier identifier) : IPawsScene
{
    public Identifier Id { get; } = identifier;
    public abstract void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo);
    public abstract void Initialise(PawsRuntime runtime);
}

public abstract class GattControllableScene(Identifier identifier) : BaseScene(identifier)
{
    public abstract GattServiceDescription ServiceDescription { get; }
    public abstract IEnumerable<GattCharacteristicDescription> Characteristics { get; }

    public override void Initialise(PawsRuntime runtime)
    {
        var gattController = runtime.Controllers.FirstValueOfType<PawsServiceImplementations.GattController>();
        if (gattController is null)
            throw new NullReferenceException("A GattController has not been initialised in runtime");

        gattController.RegisterService(ServiceDescription, Characteristics);
    }
}