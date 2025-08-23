using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DotnetBleServer.Gatt.Description
{
    public abstract class GattCharacteristicDescription : ICharacteristic
    {
        private bool _notify;
        private readonly IList<GattDescriptorDescription> _descriptors = new List<GattDescriptorDescription>();

        public IEnumerable<GattDescriptorDescription> Descriptors => _descriptors;

        public string UUID { get; set; }

        public CharacteristicFlags Flags { get; set; }

        public void AddDescriptor(GattDescriptorDescription gattDescriptorDescription)
        {
            _descriptors.Add(gattDescriptorDescription);
        }

        public bool CanUpdate => Flags.HasFlag(CharacteristicFlags.Notify);

        public event EventHandler<CharacteristicUpdatedEventArgs> ValueUpdated;

        /// <summary>
        /// Called by the BLE stack when a client writes to this characteristic.
        /// </summary>
        public virtual Task WriteValueAsync(byte[] value)
        {
            if (_notify)
                OnValueUpdated();

            return Task.CompletedTask;
        }

        public abstract Task<byte[]> ReadValueAsync();

        /// <summary>
        /// Called by BlueZ when the client subscribes (writes 0x0100 to CCCD).
        /// </summary>
        public Task StartUpdatesAsync(CancellationToken cancellationToken = default)
        {
            Console.WriteLine("START UPDATES");
            _notify = true;
            return Task.CompletedTask;
        }

        /// <summary>
        /// Called by BlueZ when the client unsubscribes (writes 0x0000 to CCCD).
        /// </summary>
        public Task StopUpdatesAsync(CancellationToken cancellationToken = default)
        {
            Console.WriteLine("STOP UPDATES");
            _notify = false;
            return Task.CompletedTask;
        }

        /// <summary>
        /// Explicit method your subclass can call to send a notification.
        /// </summary>
        protected void OnValueUpdated()
        {
            if (_notify)
            {
                Console.WriteLine("NOTIFY");
                ValueUpdated?.Invoke(this, new CharacteristicUpdatedEventArgs(this));
                
            }
        }

        /// <summary>
        /// Public helper for subclasses to trigger notifications.
        /// </summary>
        public void NotifyUpdate()
        {
            OnValueUpdated();
        }
    }
}
