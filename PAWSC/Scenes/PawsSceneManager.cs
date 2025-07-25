using PAWSC.Runtime;

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

    public List<IPawsScene> AllScenes()
    {
        return Scenes.Values.ToList();
    }


    public void Initialise(PawsRuntime pawsRuntime)
    {
        Scenes.Values.ToList().ForEach(scene => scene.Initialise(pawsRuntime));
    }
}