using DotnetBleServer.Core;
using DotnetBleServer.Gatt.BlueZModel;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Tmds.DBus;

namespace DotnetBleServer.Advertisements
{
    public class AdvertisingManager
    {
        private readonly ServerContext _context;

        public AdvertisingManager(ServerContext context)
        {
            _context = context;
        }

        public async Task RegisterAdvertisement(Advertisement advertisement)
        {
            await _context.Connection.RegisterObjectAsync(advertisement);

            await GetAdvertisingManager().RegisterAdvertisementAsync(((IDBusObject)advertisement).ObjectPath, new Dictionary<string, object>());
        }

        private ILEAdvertisingManager1 GetAdvertisingManager()
        {
            return _context.Connection.CreateProxy<ILEAdvertisingManager1>(Constants.DbusServicePath, _context.Adapter.ObjectPath);
        }

        public async Task CreateAdvertisement(LEAdvertisement1Properties advertisementProperties)
        {
            var advertisement = new Advertisement($"{_context.Adapter.ObjectPath}/advertisement0", advertisementProperties);
            await new AdvertisingManager(_context).RegisterAdvertisement(advertisement);
        }
    }
}