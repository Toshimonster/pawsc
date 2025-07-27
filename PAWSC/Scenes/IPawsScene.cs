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

public abstract class BaseScene(string name) : IPawsScene
{
    public string Id { get; private set; } = name;
    public abstract void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo);
    public abstract void Initialise(PawsRuntime runtime);
}