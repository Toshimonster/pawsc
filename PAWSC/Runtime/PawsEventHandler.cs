namespace PAWSC.Runtime;

public enum PawsCommandType
{
    TEST
}

public interface IPawsCommand
{
    PawsCommandType Type { get; }
}

public class PawsCommand(PawsCommandType type) : IPawsCommand
{
    public PawsCommandType Type { get; private set; } = type;
}

public class PawsEventHandler
{
    private readonly HashSet<Action<IPawsCommand>> _globalHandlers = new HashSet<Action<IPawsCommand>>();
    private readonly Dictionary<PawsCommandType, HashSet<Action<IPawsCommand>>> _handlers = new Dictionary<PawsCommandType, HashSet<Action<IPawsCommand>>>();

    /// <summary>
    /// Subscribe a handler (lambda or method) to a specific command type.
    /// </summary>
    public void Subscribe(PawsCommandType type, Action<IPawsCommand> handler)
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
    public void Unsubscribe(PawsCommandType type, Action<IPawsCommand> handler)
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

        if (!_handlers.TryGetValue(command.Type, out var handlers)) return;
        
        foreach (var handler in handlers.Union(_globalHandlers))
        {
            handler(command);
        }
    }
}