using PAWSC.Runtime;

namespace PAWSC.Controllers;

public class PawsControllerManager
{
    private readonly Dictionary<string, IPawsController> _controllers = new Dictionary<string, IPawsController>();
    
    public IPawsController ById(string id)
    {
        return _controllers[id];
    }

    public List<IPawsController> AllInterfaces()
    {
        return _controllers.Values.ToList();
    }

    public void Initialise(PawsRuntime pawsRuntime)
    {
        _controllers.Values.ToList().ForEach(controller => controller.Initialise(pawsRuntime));
    }

    public void Add(IPawsController controller)
    {
        _controllers.Add(controller.ID, controller);
    }
}