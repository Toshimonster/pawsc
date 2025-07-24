namespace PAWSC.Controllers;

public class PawsControllerManager
{
    private readonly Dictionary<String, IPawsController> Controllers = new Dictionary<string, IPawsController>();
    
    public IPawsController ByID(String id)
    {
        return Controllers[id];
    }

    public List<IPawsController> AllInterfaces()
    {
        return Controllers.Values.ToList();
    }
}