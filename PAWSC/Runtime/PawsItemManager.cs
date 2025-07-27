using PAWSC.Runtime;

namespace PAWSC.Runtime;

public abstract class PawsItemManager<T> : IPawsInitialisable where T : IIdentifiable, IPawsInitialisable
{
    private readonly Dictionary<string, T> _items = new Dictionary<string, T>();

    public bool Add(T item)
    {
        return _items.TryAdd(item.Id, item);
    }
    
    public bool Remove(T item)
    {
        return _items.Remove(item.Id);
    }

    public T ById(string id)
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