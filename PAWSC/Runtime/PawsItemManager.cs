using PAWSC.Runtime;

namespace PAWSC.Runtime;

/// <summary>
/// Generic manager for PAWS items that provides common functionality for collections of identifiable and initializable components.
/// </summary>
/// <typeparam name="T">The type of items to manage, must implement IIdentifiable and IPawsInitialisable.</typeparam>
public abstract class PawsItemManager<T> : IPawsInitialisable where T : IIdentifiable, IPawsInitialisable
{
    private readonly Dictionary<Identifier, T> _items = new();

    /// <summary>
    /// Adds an item to the manager.
    /// </summary>
    /// <param name="item">The item to add.</param>
    /// <returns>True if the item was added successfully; false if an item with the same ID already exists.</returns>
    /// <exception cref="ArgumentNullException">Thrown when item is null.</exception>
    public bool Add(T item)
    {
        if (item == null) throw new ArgumentNullException(nameof(item));
        return _items.TryAdd(item.Id, item);
    }
    
    /// <summary>
    /// Removes an item from the manager.
    /// </summary>
    /// <param name="item">The item to remove.</param>
    /// <returns>True if the item was removed successfully; false if the item was not found.</returns>
    /// <exception cref="ArgumentNullException">Thrown when item is null.</exception>
    public bool Remove(T item)
    {
        if (item == null) throw new ArgumentNullException(nameof(item));
        return _items.Remove(item.Id);
    }

    /// <summary>
    /// Retrieves an item by its identifier.
    /// </summary>
    /// <param name="id">The identifier of the item to retrieve.</param>
    /// <returns>The item if found; null otherwise.</returns>
    public T? ById(Identifier id)
    {
        _items.TryGetValue(id, out var item);
        return item;
    }

    /// <summary>
    /// Retrieves multiple items by their identifiers.
    /// </summary>
    /// <param name="ids">The identifiers of the items to retrieve.</param>
    /// <returns>An enumerable of found items.</returns>
    /// <exception cref="ArgumentNullException">Thrown when ids is null.</exception>
    public IEnumerable<T> ById(IEnumerable<Identifier> ids)
    {
        if (ids == null) throw new ArgumentNullException(nameof(ids));
        return ids.Select(ById).Where(item => item != null)!;
    }
    
    /// <summary>
    /// Gets all items in the manager.
    /// </summary>
    /// <returns>A read-only list of all items.</returns>
    public IReadOnlyList<T> GetAll()
    {
        return _items.Values.ToList().AsReadOnly();
    }

    /// <summary>
    /// Gets all items of a specific type.
    /// </summary>
    /// <typeparam name="T2">The type to filter by.</typeparam>
    /// <returns>An enumerable of items of the specified type.</returns>
    public IEnumerable<T2> ValuesOfType<T2>() where T2 : class
    {
        return _items.Values.OfType<T2>();
    }
    
    /// <summary>
    /// Initializes all items in the manager.
    /// </summary>
    /// <param name="pawsRuntime">The PAWS runtime.</param>
    /// <returns>A task representing the initialization operation.</returns>
    /// <exception cref="ArgumentNullException">Thrown when pawsRuntime is null.</exception>
    public async Task Initialise(PawsRuntime pawsRuntime)
    {
        if (pawsRuntime == null) throw new ArgumentNullException(nameof(pawsRuntime));
        
        var tasks = GetAll().Select(x => x.Initialise(pawsRuntime));
        await Task.WhenAll(tasks);
    }

    /// <summary>
    /// Performs after-initialization operations on all items that support it.
    /// </summary>
    /// <param name="pawsRuntime">The PAWS runtime.</param>
    /// <returns>A task representing the operation.</returns>
    /// <exception cref="ArgumentNullException">Thrown when pawsRuntime is null.</exception>
    public async Task AfterInitialise(PawsRuntime pawsRuntime)
    {
        if (pawsRuntime == null) throw new ArgumentNullException(nameof(pawsRuntime));
        
        var tasks = GetAll()
            .Where(x => x is IPawsAfterInitialisableHook)
            .Cast<IPawsAfterInitialisableHook>()
            .Select(x => x.AfterInitialise(pawsRuntime));
        
        await Task.WhenAll(tasks);
    }
}