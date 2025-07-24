using PAWSC.Interfaces;
using PAWSC.Runtime;

namespace PAWSC.Scenes;

public interface IPawsScene
{
    public void Initialize(PawsRuntime runtime);
    public Task Draw(PawsInterfaceManager mgr, DrawInfo drawInfo);
}

public record DrawInfo
{
    public int Time { get; init; }
    public int Deltatime { get; init; }
}