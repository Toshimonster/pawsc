using System.Collections.Concurrent;
using PAWSC.Runtime;

namespace PAWSC.Scenes.Implementations.State;

public class StateEffectScene: StateScene
{
    public StateEffectScene(Identifier id, ConcurrentDictionary<Identifier, IPawsState> definitions) : base(id, definitions)
    {
    }

    public StateEffectScene(Identifier id) : base(id)
    {
    }
}
