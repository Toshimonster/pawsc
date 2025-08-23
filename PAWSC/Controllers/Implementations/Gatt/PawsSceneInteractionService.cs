using System.Reflection;
using DotnetBleServer.Core;
using DotnetBleServer.Gatt;
using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;
using Tmds.DBus;

namespace PAWSC.Controllers.Implementations.Gatt;

public class PawsSceneInteractionService(PawsRuntime runtime) : IGattService
{
    public GattServiceDescription Instance { get; } = new()
    {
        UUID = UuidRegistry.SceneInteractionService.ToString(),
        Primary = true,
        GattCharacteristicDescriptions =
        {
            new InputControlCharacteristic(runtime),
            new OutputEventsCharacteristic(runtime),
            new CounterCharacteristic()
        }
    };

    private static class ScenePayloadEncoder
    {
        public static byte[] Encode(string sceneId, string controlOrEventId, byte[] value)
        {
            var sceneBytes = Encoding.UTF8.GetBytes(sceneId);
            var idBytes = Encoding.UTF8.GetBytes(controlOrEventId);

            using var ms = new MemoryStream();
            ms.WriteByte((byte)sceneBytes.Length);
            ms.Write(sceneBytes, 0, sceneBytes.Length);

            ms.WriteByte((byte)idBytes.Length);
            ms.Write(idBytes, 0, idBytes.Length);

            ms.Write(value, 0, value.Length);

            return ms.ToArray();
        }

        public static (string sceneId, string controlOrEventId, byte[] value) Decode(byte[] payload)
        {
            try
            {
                int index = 0;

                // SceneID
                int sceneLen = payload[index++];
                var sceneId = Encoding.UTF8.GetString(payload, index, sceneLen);
                index += sceneLen;

                // Control/EventID
                int idLen = payload[index++];
                var controlOrEventId = Encoding.UTF8.GetString(payload, index, idLen);
                index += idLen;

                // Value (rest of bytes)
                index += 2;
                var value = payload.Skip(index).ToArray();

                return (sceneId, controlOrEventId, value);
            }
            catch
            {
                return ("", "", []);
            }
        }
    }

    /// <summary>
    /// Generic Input Control characteristic
    /// Clients write commands here for the currently active scene
    /// Payload is self-describing: SceneID + ControlID + Value
    /// </summary>
    private sealed class InputControlCharacteristic(PawsRuntime runtime) : ConstructedCharacteristic(
        UuidRegistry.SceneInteractionCharacteristics.InputControl,
        CharacteristicFlags.Write)
    {
        public override Task WriteValueAsync(byte[] value)
        {
            runtime.Broadcast(new PawsCommands.GattSceneOutput("test", "test", []));
            // Decode generic payload
            var (sceneId, controlId, controlValue) = ScenePayloadEncoder.Decode(value);

            // Broadcast to runtime so the active scene receives the input
            runtime.Broadcast(new PawsCommands.GattSceneControl(sceneId, controlId, controlValue));

            return Task.CompletedTask;
        }

        public override Task<byte[]> ReadValueAsync()
        {
            throw new NotImplementedException();
        }
    }

    public abstract class NotificationCharacterisitc : ConstructedCharacteristic
    {
        private static readonly FieldInfo EventField =
            typeof(GattCharacteristicDescription).GetField("ValueUpdated",
                BindingFlags.Instance | BindingFlags.NonPublic)!;

        public void RaiseValueUpdated()
        {
            var handler = (EventHandler<CharacteristicUpdatedEventArgs>)EventField.GetValue(this)!;
            handler?.Invoke(this, new CharacteristicUpdatedEventArgs(this));
        }
        protected NotificationCharacterisitc(Guid uuid, CharacteristicFlags flags) : base(uuid, flags)
        {
        }
    }

    /// <summary>
    /// Generic Output Events characteristic
    /// Device notifies clients of scene events
    /// Payload is self-describing: SceneID + EventID + Value
    /// </summary>
    protected class OutputEventsCharacteristic : ConstructedCharacteristic
    {
        private byte[] _currentValue = [];

        public OutputEventsCharacteristic(PawsRuntime runtime): base(
            UuidRegistry.SceneInteractionCharacteristics.OutputEvents,
            CharacteristicFlags.Notify)
        {
            runtime.Subscribe<PawsCommands.GattSceneOutput>(OnSceneOutput);
            UpdateTest();
        }

        private async void UpdateTest()
        {
            SetValueAndNotify(BitConverter.GetBytes(Random.Shared.Next()));
            await Task.Delay(2000);
            UpdateTest();
        }

        private void OnSceneOutput(PawsCommands.GattSceneOutput e)
        {
            // Encode SceneID + EventID + Value
            var payload = ScenePayloadEncoder.Encode(e.SceneId, e.ControlId, e.OutputValue);

            // Notify all connected clients
            WriteValueAsync(payload);
        }

        protected void SetValueAndNotify(byte[] value)
        {
            _currentValue = value;
            NotifyUpdate();
        }

        public override Task WriteValueAsync(byte[] value)
        {
            // Ignore
            return Task.CompletedTask;
        }

        public override Task<byte[]> ReadValueAsync()
        {
            return Task.FromResult(_currentValue);
        }
    }
}
