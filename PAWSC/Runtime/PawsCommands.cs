namespace PAWSC.Runtime;

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
        public Exception? Exception { get; init; } = null;

        public enum LogLevel
        {
            TRACE,
            DEBUG,
            INFO,
            WARN,
            ERROR,
            FATAL
        }

        public static Log CreateLog(string message, LogLevel level, Exception? ex = null, [CallerMemberName] string source = "")
        {
            return new Log
            {
                Message = message,
                Source = source,
                Level = level,
                Exception = ex
            };
        }

        public static Log Trace(string message, Exception? ex = null, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.TRACE, ex, source);
        }
        public static Log Debug(string message, Exception? ex = null, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.DEBUG, ex, source);
        }
        public static Log Info(string message, Exception? ex = null, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.INFO, ex, source);
        }
        public static Log Warn(string message, Exception? ex = null, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.WARN, ex, source);
        }
        public static Log Error(string message, Exception? ex = null, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.ERROR, ex, source);
        }
        public static Log Fatal(string message, Exception? ex = null, [CallerMemberName] string source = "")
        {
            return CreateLog(message, LogLevel.FATAL, ex, source);
        }
    }

    public record GattSceneControl(string SceneId, string ControlId, byte[] ControlValue) : IPawsCommand;
    public record GattSceneOutput(string SceneId, string ControlId, byte[] OutputValue) : IPawsCommand;
}
