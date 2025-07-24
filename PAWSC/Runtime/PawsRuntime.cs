using PAWSC.Controllers;
using PAWSC.Interfaces;
using PAWSC.Scenes;

namespace PAWSC.Runtime;

public class PawsRuntime : PawsEventHandler
{
    public PawsInterfaceManager Interfaces { get; private set; }
    public PawsControllerManager Controllers { get; private set; }
    public PawsSceneManager Scenes { get; private set; }
}