using PAWSC.Interfaces;
using PAWSC.Runtime;

namespace PAWSC.Scenes;

public interface IPawsScene : IIdentifiable
{
    public void Initialise(PawsRuntime runtime);
    public void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo);
}

public record DrawInfo
{
    public DateTime Time { get; init; }
    public long Deltatime { get; init; }
}

public abstract class BaseScene(String name) : IPawsScene
{
    public string ID { get; private set; } = name;
    public abstract void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo);
    public abstract void Initialise(PawsRuntime runtime);
}