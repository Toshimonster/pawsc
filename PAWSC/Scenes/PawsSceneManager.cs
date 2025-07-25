namespace PAWSC.Scenes;

public class PawsSceneManager
{
    private readonly Dictionary<String, IPawsScene> Scenes = new Dictionary<string, IPawsScene>();

    public IPawsScene AddScene(IPawsScene scene)
    {
        Scenes.Add(scene.ID, scene);
        return scene;
    }

    public IPawsScene ByID(String id)
    {
        return Scenes[id];
    }

    public List<IPawsScene> AllInterfaces()
    {
        return Scenes.Values.ToList();
    }
}