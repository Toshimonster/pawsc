using PAWSC.Runtime;

namespace PAWSC.Runtime;

public abstract class PawsItemManager<T> : IPawsInitialisable where T : IIdentifiable, IPawsInitialisable
{
    private readonly Dictionary<Identifier, T> _items = new Dictionary<Identifier, T>();

    public bool Add(T item)
    {
        return _items.TryAdd(item.Id, item);
    }
    
    public bool Remove(T item)
    {
        return _items.Remove(item.Id);
    }

    public T? ById(Identifier id)
    {
        return _items[id];
    }
    
    public List<T> GetAll()
    {
        return _items.Values.ToList();
    }
    
    public void Initialise(PawsRuntime pawsRuntime)
    {
        GetAll().ForEach(x => x.Initialise(pawsRuntime));
    }
}