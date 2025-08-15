using System.Diagnostics;

namespace PAWSC.Runtime;

public enum PawsCommandType
{
    SetScene
}

public interface IPawsCommand
{
    //PawsCommandType Type { get; }
}

public static class PawsCommands
{
    public record SetScene(Identifier Payload) : IPawsCommand
    {
    }

    public record Log : IPawsCommand
    {
        public LogLevel Level { get; init; } = LogLevel.TRACE;
        public string Message { get; init; } = "";
        public string Source { get; init; } = "";

        public enum LogLevel
        {
            TRACE,
            DEBUG,
            INFO,
            WARN,
            ERROR,
            FATAL
        }

        public static Log CreateLog(string message, LogLevel level, [CallerMemberName] string source = "")
        {
            return new Log
            {
                Message = message,
                Source = source,
                Level = level
            };
        }

        public static Log Trace(string message, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.TRACE, source);
        }
        public static Log Debug(string message, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.DEBUG, source);
        }
        public static Log Info(string message, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.INFO, source);
        }
        public static Log Warn(string message, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.WARN, source);
        }
        public static Log Error(string message, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.ERROR, source);
        }
        public static Log Fatal(string message, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.FATAL, source);
        }
    }
}

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

        if (!_handlers.TryGetValue(command.GetType(), out var handlers)) return;

        foreach (var handler in handlers.Union(_globalHandlers))
        {
            handler(command);
        }
    }
}
