using System;
using System.Collections.Generic;
using System.Linq;

namespace PAWSC.Controllers.Implementations.Gatt;

/// <summary>
/// Centralized UUID registry for the PAWSC system.
/// Provides a single source of truth for all UUIDs used across the application.
/// </summary>
public static class UuidRegistry
{
    private static readonly Dictionary<string, Guid> _uuidCache = new();
    private static readonly Dictionary<Guid, string> _reverseLookup = new();
    private static readonly object _lock = new();
    private static bool _isInitialized = false;

    #region Service UUIDs
    
    /// <summary>
    /// Main PAWS service UUID
    /// </summary>
    public static readonly Guid PawsService = Register("PAWS_SERVICE", "04f9d599-ce17-4397-a65d-cf769397551a");
    
    /// <summary>
    /// PAWS Extra service UUID
    /// </summary>
    public static readonly Guid PawsExtraService = Register("PAWS_EXTRA_SERVICE", "bacc1dbc-f1f3-42f2-b572-bd3e16923f28");
    
    /// <summary>
    /// State management service UUID
    /// </summary>
    public static readonly Guid StateService = Register("STATE_SERVICE", "12345678-1234-5678-1234-56789abcdef0");
    
    /// <summary>
    /// Game service UUID
    /// </summary>
    public static readonly Guid GameService = Register("GAME_SERVICE", "2BC9D63F-F9C6-479E-B815-EAA9D3A03F8D");
    
    /// <summary>
    /// Stream service UUID
    /// </summary>
    public static readonly Guid StreamService = Register("STREAM_SERVICE", "0000f00d-0000-1000-8000-00805f9b34fb");
    
    /// <summary>
    /// Advertisement service UUID
    /// </summary>
    public static readonly Guid AdvertisementService = Register("ADVERTISEMENT_SERVICE", "12345678-1234-5678-1234-56789abcdef9");
    
    #endregion

    #region Characteristic UUIDs
    
    /// <summary>
    /// PAWS service characteristics
    /// </summary>
    public static class PawsCharacteristics
    {
        public static readonly Guid States = Register("PAWS_STATES", "0694bc1c-0064-4bd7-9840-41fa65d7355e");
        public static readonly Guid State = Register("PAWS_STATE", "81a6a500-b85e-4951-b6ac-b63c8f97f678");
        public static readonly Guid StateImage = Register("PAWS_STATE_IMG", "780dc226-9378-4a2a-8e39-b3d4fb2f6207");
        public static readonly Guid Timestamp = Register("PAWS_TIMESTAMP", "fa7abfe6-af90-42bf-a154-c2bdb7eb336a");
        public static readonly Guid Uptime = Register("PAWS_UPTIME", "97dcaa87-eaa8-4546-bb33-ad001fc3daf4");
        public static readonly Guid CpuTemp = Register("PAWS_CPU_TEMP", "31b0159a-d4bd-4396-9e77-7ebb24db6df3");
        public static readonly Guid CpuLoad = Register("PAWS_CPU_LOAD", "26414bca-7991-46e5-a559-376c7d515a1f");
        public static readonly Guid Network = Register("PAWS_NETWORK", "4bb22157-34d4-481c-949f-18aaa00f45e4");
        public static readonly Guid Mode = Register("PAWS_MODE", "18eb891a-8e1b-4a0c-9374-d904f97b0b52");
        public static readonly Guid ModeList = Register("PAWS_MODE_LIST", "06d84d50-1e54-49b9-a749-1b4c9c7daf16");
    }
    
    /// <summary>
    /// PAWS Extra service characteristics
    /// </summary>
    public static class PawsExtraCharacteristics
    {
        public static readonly Guid PixelDrawEnabled = Register("PAWS_EXTRA_PIXELDRAW_ENABLED", "ea003779-e651-49e8-91ab-05b65e66b95f");
        public static readonly Guid PixelDrawInterface = Register("PAWS_EXTRA_PIXELDRAW_INTERFACE", "65a8fc81-2f01-47e4-b25d-b39b4a90718c");
        public static readonly Guid StreamEnabled = Register("PAWS_EXTRA_STREAM_ENABLED", "450c8fdb-9502-4b00-b488-cb2455ab842e");
        public static readonly Guid StreamInterface = Register("PAWS_EXTRA_STREAM_INTERFACE", "21232f3e-fe85-4fda-b204-1d157d2f12c4");
    }
    
    /// <summary>
    /// Game service characteristics
    /// </summary>
    public static class GameCharacteristics
    {
        public static readonly Guid Controller = Register("GAME_CONTROLLER", "327FE31A-3EC0-47AF-A1AD-65C5067D670A");
    }
    
    /// <summary>
    /// Stream service characteristics
    /// </summary>
    public static class StreamCharacteristics
    {
        public static readonly Guid Data = Register("STREAM_DATA", "0000f00d-0000-1000-8000-00805f9b34fa");
        public static readonly Guid Control = Register("STREAM_CONTROL", "300751B6-1450-4D27-BE88-23B53A2FA3E9");
    }
    
    #endregion

    #region Legacy Support
    
    /// <summary>
    /// Legacy GATT UUID definitions for backward compatibility
    /// </summary>
    public static readonly Dictionary<string, GattUuidDef> LegacyServices = new()
    {
        ["PAWS"] = new GattUuidDef
        {
            Uuid = PawsService,
            Children = new Dictionary<string, Guid>
            {
                ["STATES"] = PawsCharacteristics.States,
                ["STATE"] = PawsCharacteristics.State,
                ["STATE_IMG"] = PawsCharacteristics.StateImage,
                ["TIMESTAMP"] = PawsCharacteristics.Timestamp,
                ["UPTIME"] = PawsCharacteristics.Uptime,
                ["CPU_TEMP"] = PawsCharacteristics.CpuTemp,
                ["CPU_LOAD"] = PawsCharacteristics.CpuLoad,
                ["NETWORK"] = PawsCharacteristics.Network,
                ["MODE"] = PawsCharacteristics.Mode,
                ["MODE_LIST"] = PawsCharacteristics.ModeList
            }
        },
        ["PAWS_EXTRA"] = new GattUuidDef
        {
            Uuid = PawsExtraService,
            Children = new Dictionary<string, Guid>
            {
                ["PIXELDRAW_ENABLED"] = PawsExtraCharacteristics.PixelDrawEnabled,
                ["PIXELDRAW_INTERFACE"] = PawsExtraCharacteristics.PixelDrawInterface,
                ["STREAM_ENABLED"] = PawsExtraCharacteristics.StreamEnabled,
                ["STREAM_INTERFACE"] = PawsExtraCharacteristics.StreamInterface
            }
        }
    };
    
    #endregion

    #region Public Methods
    
    /// <summary>
    /// Gets a UUID by its registered name
    /// </summary>
    /// <param name="name">The registered name of the UUID</param>
    /// <returns>The GUID if found, otherwise throws KeyNotFoundException</returns>
    public static Guid GetUuid(string name)
    {
        lock (_lock)
        {
            if (_uuidCache.TryGetValue(name, out var uuid))
                return uuid;
            
            throw new KeyNotFoundException($"UUID '{name}' not found in registry");
        }
    }
    
    /// <summary>
    /// Gets the registered name for a UUID
    /// </summary>
    /// <param name="uuid">The UUID to look up</param>
    /// <returns>The registered name if found, otherwise null</returns>
    public static string? GetName(Guid uuid)
    {
        lock (_lock)
        {
            _reverseLookup.TryGetValue(uuid, out var name);
            return name;
        }
    }
    
    /// <summary>
    /// Checks if a UUID is registered in the system
    /// </summary>
    /// <param name="uuid">The UUID to check</param>
    /// <returns>True if the UUID is registered, false otherwise</returns>
    public static bool IsRegistered(Guid uuid)
    {
        lock (_lock)
        {
            return _reverseLookup.ContainsKey(uuid);
        }
    }
    
    /// <summary>
    /// Gets all registered UUID names
    /// </summary>
    /// <returns>Array of all registered UUID names</returns>
    public static string[] GetAllRegisteredNames()
    {
        lock (_lock)
        {
            return _uuidCache.Keys.ToArray();
        }
    }
    
    /// <summary>
    /// Gets all registered UUIDs
    /// </summary>
    /// <returns>Array of all registered UUIDs</returns>
    public static Guid[] GetAllRegisteredUuids()
    {
        lock (_lock)
        {
            return _uuidCache.Values.ToArray();
        }
    }
    
    /// <summary>
    /// Validates that all UUIDs in the registry are unique
    /// </summary>
    /// <returns>True if all UUIDs are unique, false otherwise</returns>
    public static bool ValidateUniqueness()
    {
        lock (_lock)
        {
            var uniqueUuids = _uuidCache.Values.Distinct();
            return uniqueUuids.Count() == _uuidCache.Count;
        }
    }
    
    #endregion

    #region Private Methods
    
    /// <summary>
    /// Registers a UUID with the system
    /// </summary>
    /// <param name="name">The name to register the UUID under</param>
    /// <param name="uuidString">The UUID string to parse</param>
    /// <returns>The parsed GUID</returns>
    private static Guid Register(string name, string uuidString)
    {
        lock (_lock)
        {
            if (_isInitialized)
                throw new InvalidOperationException("Cannot register new UUIDs after initialization");
            
            var uuid = Guid.Parse(uuidString);
            
            if (_uuidCache.ContainsKey(name))
                throw new InvalidOperationException($"UUID name '{name}' is already registered");
            
            if (_reverseLookup.ContainsKey(uuid))
                throw new InvalidOperationException($"UUID '{uuid}' is already registered under name '{_reverseLookup[uuid]}'");
            
            _uuidCache[name] = uuid;
            _reverseLookup[uuid] = name;
            
            return uuid;
        }
    }
    
    /// <summary>
    /// Initializes the registry and performs validation
    /// </summary>
    internal static void Initialize()
    {
        lock (_lock)
        {
            if (_isInitialized)
                return;
            
            // Validate uniqueness
            if (!ValidateUniqueness())
            {
                var duplicates = _uuidCache.Values
                    .GroupBy(x => x)
                    .Where(g => g.Count() > 1)
                    .Select(g => g.Key);
                
                throw new InvalidOperationException($"Duplicate UUIDs found: {string.Join(", ", duplicates)}");
            }
            
            _isInitialized = true;
        }
    }
    
    #endregion
} 