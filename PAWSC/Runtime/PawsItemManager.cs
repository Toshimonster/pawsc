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

    public IEnumerable<T> ById(IEnumerable<Identifier> id)
    {
        return id.Select(ById).Where(o => o != null)!;
    }
    
    public List<T> GetAll()
    {
        return _items.Values.ToList();
    }

    public IEnumerable<T2> ValuesofType<T2>() where T2 : class
    {
        return _items.Values.Where(o => o is T2).Cast<T2>()!;
    }
    
    public Task Initialise(PawsRuntime pawsRuntime)
    {
        GetAll().ForEach(x => x.Initialise(pawsRuntime));
        return Task.CompletedTask;
    }

    public void AfterInitialise(PawsRuntime pawsRuntime)
    {
        GetAll().ForEach(x =>
        {
            if (x is IPawsAfterInitialisableHook hooked)
            {
                hooked.AfterInitialise(pawsRuntime);
            }
        });
    }
}