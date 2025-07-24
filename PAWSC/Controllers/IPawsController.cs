using PAWSC.Runtime;

namespace PAWSC.Controllers;

public interface IPawsController
{
    public void Initialise(PawsRuntime runtime);
}