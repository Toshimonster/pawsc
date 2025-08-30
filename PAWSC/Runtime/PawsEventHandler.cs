namespace PAWSC.Runtime;

public interface IPawsCommand;

public class PawsEventHandler
{
    private readonly HashSet<Action<IPawsCommand>> _globalHandlers = new HashSet<Action<IPawsCommand>>();
    private readonly Dictionary<Type, HashSet<Action<IPawsCommand>>> _handlers = new Dictionary<Type, HashSet<Action<IPawsCommand>>>();
    private readonly Dictionary<Delegate, Action<IPawsCommand>> _wrappedHandlers = new();

    /// <summary>
    /// Subscribe a handler (lambda or method) to a specific command type.
    /// </summary>
    public void Subscribe<T>(Action<T> handler)
    where T: IPawsCommand
    {
        Action<IPawsCommand> wrapper = cmd => handler((T)cmd);
        _wrappedHandlers[handler] = wrapper;
        Subscribe(typeof(T), wrapper);
    }

    private void Subscribe(Type type, Action<IPawsCommand> handler)
    {
        if (!_handlers.TryGetValue(type, out var value))
        {
            _handlers[type] = [handler];
        }
        else
        {
            value.Add(handler);
        }
    }

    /// <summary>
    /// Unsubscribe a previously registered handler.
    /// </summary>
    public void Unsubscribe<T>(Action<T> handler)
        where T: IPawsCommand
    {
        Action<IPawsCommand>? wrapper = _wrappedHandlers[handler];
        if (wrapper is null)
        {
            throw new ArgumentException("Handler has not been subscribed, and has attempted to be unsubscribed: " + handler.ToString());
        }
        Unsubscribe(typeof(T), wrapper);
        _wrappedHandlers.Remove(handler);
    }

    public void Unsubscribe(Type type, Action<IPawsCommand> handler)
    {
        if (!_handlers.TryGetValue(type, out var list)) return;

        list.Remove(handler);
        if (list.Count == 0)
            _handlers.Remove(type);
    }

    public void SubscribeAll(Action<IPawsCommand> handler)
    {
        _globalHandlers.Add(handler);
    }

    public void UnsubscribeAll(Action<IPawsCommand> handler)
    {
        _globalHandlers.Remove(handler);
    }

    /// <summary>
    /// Broadcasts the command to all subscribed handlers.
    /// </summary>
    public void Broadcast(IPawsCommand command)
    {
        ArgumentNullException.ThrowIfNull(command);

        if (!_handlers.TryGetValue(command.GetType(), out var handlers))
        {
            Console.WriteLine($"No handlers for {command.GetType()} have been subscribed");
            return;
        }

        foreach (var handler in handlers.Union(_globalHandlers))
        {
            handler(command);
        }
    }
}
