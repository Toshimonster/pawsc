using PAWSC.Runtime;

namespace PAWSC.Scenes;

/// <summary>
/// Base class for GATT-capable scenes that can receive and handle BLE control commands.
/// </summary>
/// <remarks>
/// Provides a framework for registering controls, decoding BLE payloads, and safely dispatching commands
/// to the appropriate handlers. Subclasses should use <see cref="RegisterControl{T}"/> to define
/// scene-specific GATT controls.
/// </remarks>
public abstract class GattCapableScene(Identifier identifier) : BaseScene(identifier), IGattCapableScene
{
    /// <summary>
    /// The runtime context for the scene, set during initialization.
    /// </summary>
    protected PawsRuntime? Runtime { get; private set; }

    private readonly Dictionary<string, Func<byte[], Task>> _controlHandlers = [];

    /// <summary>
    /// Returns the list of control IDs registered for this scene.
    /// </summary>
    public virtual IEnumerable<string> GetCapabilities() => _controlHandlers.Keys;

    /// <summary>
    /// Initializes the scene with the given runtime.
    /// </summary>
    /// <param name="runtime">The runtime instance to use for subscribing to commands and broadcasting events.</param>
    public override Task Initialise(PawsRuntime runtime)
    {
        Runtime = runtime;
        runtime.Subscribe<PawsCommands.GattSceneControl>(OnGattControlCommand);
        return Task.CompletedTask;
    }

    /// <summary>
    /// Handles incoming GATT control commands for this scene.
    /// </summary>
    /// <param name="command">The command containing the target scene ID, control ID, and payload.</param>
    private void OnGattControlCommand(PawsCommands.GattSceneControl command)
    {
        _ = OnGattControlCommandAsync(command);
    }

    /// <summary>
    /// Asynchronously dispatches a GATT control command to the appropriate handler.
    /// Exceptions are caught and logged via the runtime.
    /// </summary>
    /// <param name="e">The GATT control command to process.</param>
    private async Task OnGattControlCommandAsync(PawsCommands.GattSceneControl e)
    {
        if (!Id.Matches(e.SceneId)) return;

        try
        {
            if (_controlHandlers.TryGetValue(e.ControlId, out var handler))
            {
                await handler(e.ControlValue);
            }
            else
            {
                await OnUnknownGattCommand(e.ControlId, e.ControlValue);
            }
        }
        catch (Exception ex)
        {
            Runtime?.Broadcast(PawsCommands.Log.Error(
                $"Exception for '{e.ControlId}' in scene '{Id}'", ex));
        }
    }

    /// <summary>
    /// Called when a control command is received that has not been registered.
    /// Can be overridden to provide custom behavior for unknown controls.
    /// </summary>
    /// <param name="controlId">The unknown control identifier.</param>
    /// <param name="controlValue">The raw payload of the command.</param>
    protected virtual Task OnUnknownGattCommand(string controlId, byte[] controlValue)
    {
        Runtime?.Broadcast(PawsCommands.Log.Warn(
            $"Unknown GATT control '{controlId}' for scene '{Id}'"));
        return Task.CompletedTask;
    }

    private sealed record VoidReturn;
    private static readonly VoidReturn Void = new();

    /// <summary>
    /// Registers a control with a typed value handler.
    /// </summary>
    /// <typeparam name="T">The type of the value expected for this control.</typeparam>
    /// <typeparam name="TRes">The type of the returned type to be broadcasted (notified).</typeparam>
    /// <param name="controlId">The unique identifier for the control.</param>
    /// <param name="handler">The async handler to invoke when this control is triggered.</param>
    /// <exception cref="ArgumentException">Thrown if <paramref name="controlId"/> is null or empty.</exception>
    /// <exception cref="ArgumentNullException">Thrown if <paramref name="handler"/> is null.</exception>
    protected void RegisterControl<T, TRes>(string controlId, Func<T, Task<TRes>> handler)
    {
        if (string.IsNullOrWhiteSpace(controlId)) throw new ArgumentException("ControlId must be provided");
        ArgumentNullException.ThrowIfNull(handler);

        _controlHandlers[controlId] = async payload =>
        {
            var value = DecodeValue<T>(payload);
            var result = await handler(value);
            if (typeof(TRes) != typeof(VoidReturn))
            {
                if (Runtime is null)
                {
                    await Console.Error.WriteLineAsync("Could not find runtime to export gatt return result");
                    return;
                }
                Runtime?.Broadcast(new PawsCommands.GattSceneOutput(Id.ToString(), controlId, EncodeValue(result)));
            }
            else
            {
                Runtime?.Broadcast(PawsCommands.Log.Trace($"{Id}|{controlId} Not notifying gatt result of void"));
            }
        };
    }

    /// <summary>
    /// Registers a control with no input parameter that may produce a result.
    /// </summary>
    /// <typeparam name="TRes">The type of the result returned by the handler.</typeparam>
    /// <param name="controlId">The unique identifier for the control.</param>
    /// <param name="handler">The asynchronous handler to invoke when this control is triggered.</param>
    /// <remarks>
    /// This overload is useful when the control does not require input but still produces
    /// an output to be broadcasted.
    /// </remarks>
    protected void RegisterControl<TRes>(string controlId, Func<Task<TRes>> handler)
    {
        RegisterControl<byte[], TRes>(controlId, async _ => await handler());
    }

    /// <summary>
    /// Registers a control with a typed value handler that does not produce a result.
    /// </summary>
    /// <typeparam name="T">The type of the input value expected for this control.</typeparam>
    /// <param name="controlId">The unique identifier for the control.</param>
    /// <param name="handler">The asynchronous handler to invoke when this control is triggered.</param>
    /// <remarks>
    /// This overload is used when the control affects internal state or behavior
    /// but does not produce a value to broadcast back to the client.
    /// </remarks>
    protected void RegisterControl<T>(string controlId, Func<T, Task> handler)
    {
        RegisterControl<T, VoidReturn>(controlId, async e =>
        {
            await handler(e);
            return Void;
        });
    }


    /// <summary>
    /// Registers a control with no input parameter and no result.
    /// </summary>
    /// <param name="controlId">The unique identifier for the control.</param>
    /// <param name="handler">The asynchronous handler to invoke when this control is triggered.</param>
    /// <remarks>
    /// This is the simplest overload, for cases where the control only triggers
    /// an action with no inputs or outputs.
    /// </remarks>
    protected void RegisterControl(string controlId, Func<Task> handler)
    {
        RegisterControl<byte[]>(controlId, async _ =>
        {
            await handler();
        });
    }

    /// <summary>
    /// Decodes a byte array payload into a typed value.
    /// </summary>
    /// <typeparam name="T">The type to decode the payload into.</typeparam>
    /// <param name="payload">The raw byte array received from the GATT command.</param>
    /// <returns>The decoded value of type <typeparamref name="T"/>.</returns>
    /// <exception cref="NotSupportedException">Thrown if the type <typeparamref name="T"/> is not supported.</exception>
    private static T DecodeValue<T>(byte[] payload)
    {
        var targetType = typeof(T);

        object result = targetType switch
        {
            var t when t == typeof(int) => BitConverter.ToInt32(payload, 0),
            var t when t == typeof(double) => BitConverter.ToDouble(payload, 0),
            var t when t == typeof(bool) => payload.Length > 0 && payload[0] != 0,
            var t when t == typeof(string) => Encoding.UTF8.GetString(payload),
            var t when t == typeof(byte[]) => payload,
            var t when t == typeof(Identifier) => new Identifier(Encoding.UTF8.GetString(payload)),

            // Generic enum support: decode as int, then cast
            _ when targetType.IsEnum => Enum.ToObject(targetType, BitConverter.ToInt32(payload, 0)),

            _ => throw new NotSupportedException($"Type {typeof(T)} is not supported for GATT decoding")
        };

        return (T)result;
    }

    /// <summary>
    /// Encodes a typed value into a byte array suitable for GATT transmission.
    /// </summary>
    /// <typeparam name="T">The type of the value to encode.</typeparam>
    /// <param name="value">The value to encode.</param>
    /// <returns>A byte array representing the encoded value.</returns>
    /// <exception cref="NotSupportedException">Thrown if the type <typeparamref name="T"/> is not supported.</exception>
    private static byte[] EncodeValue<T>(T value)
    {
        return value switch
        {
            int i => BitConverter.GetBytes(i),
            double d => BitConverter.GetBytes(d),
            bool b => [(byte)(b ? 1 : 0)],
            string s => Encoding.UTF8.GetBytes(s),
            byte[] arr => arr,
            Identifier id => EncodeValue(id.ToString()),

            // Generic enum support: store as underlying int
            Enum e => BitConverter.GetBytes(Convert.ToInt32(e)),

            _ => throw new NotSupportedException($"Type {typeof(T)} is not supported for GATT encoding")
        };
    }


    /// <summary>
    /// Destructor to unsubscribe from runtime events when the scene is disposed.
    /// </summary>
    ~GattCapableScene()
    {
        Runtime?.Unsubscribe<PawsCommands.GattSceneControl>(OnGattControlCommand);
    }
}
