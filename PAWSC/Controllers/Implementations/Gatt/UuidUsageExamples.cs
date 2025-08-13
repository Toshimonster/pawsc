using System;
using System.Collections.Generic;
using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;
using System.Threading.Tasks;

namespace PAWSC.Controllers.Implementations.Gatt;

/// <summary>
/// Comprehensive examples showing how to use the centralized UUID system
/// </summary>
public static class UuidUsageExamples
{
    /// <summary>
    /// Example 1: Creating GATT services using the centralized UUID registry
    /// </summary>
    public static class ServiceCreationExamples
    {
        /// <summary>
        /// Creates a PAWS service with all its characteristics
        /// </summary>
        public static GattServiceDescription CreatePawsService()
        {
            return new GattServiceDescription
            {
                UUID = UuidRegistry.PawsService.ToString(),
                Primary = true
            };
        }

        /// <summary>
        /// Creates a streaming service using the centralized UUID
        /// </summary>
        public static GattServiceDescription CreateStreamService()
        {
            return new GattServiceDescription
            {
                UUID = UuidRegistry.StreamService.ToString(),
                Primary = true
            };
        }

        /// <summary>
        /// Creates a game service using the centralized UUID
        /// </summary>
        public static GattServiceDescription CreateGameService()
        {
            return new GattServiceDescription
            {
                UUID = UuidRegistry.GameService.ToString(),
                Primary = true
            };
        }
    }

    /// <summary>
    /// Example 2: Getting characteristic UUIDs using the centralized UUID registry
    /// </summary>
    public static class CharacteristicCreationExamples
    {
        /// <summary>
        /// Gets the UUID for a state characteristic using the centralized registry
        /// </summary>
        public static string GetStateCharacteristicUuid()
        {
            return UuidRegistry.PawsCharacteristics.State.ToString();
        }

        /// <summary>
        /// Gets the UUID for a stream data characteristic using the centralized registry
        /// </summary>
        public static string GetStreamDataCharacteristicUuid()
        {
            return UuidRegistry.StreamCharacteristics.Data.ToString();
        }

        /// <summary>
        /// Gets the UUID for a game controller characteristic using the centralized registry
        /// </summary>
        public static string GetGameControllerCharacteristicUuid()
        {
            return UuidRegistry.GameCharacteristics.Controller.ToString();
        }

        /// <summary>
        /// Example of how to create a concrete characteristic class
        /// This shows the pattern used in the actual PAWSC implementation
        /// </summary>
        public class ExampleConcreteCharacteristic : PawsServiceImplementations.PawsCharacteristic
        {
            public ExampleConcreteCharacteristic(PawsRuntime runtime) 
                : base(runtime, UuidRegistry.PawsCharacteristics.State.ToString(), CharacteristicFlags.Read)
            {
            }

            public override Task<byte[]> ReadValueAsync()
            {
                // Implementation would go here
                return Task.FromResult(Array.Empty<byte>());
            }
        }
    }

    /// <summary>
    /// Example 3: Using UUIDs in conditional logic and comparisons
    /// </summary>
    public static class ConditionalLogicExamples
    {
        /// <summary>
        /// Checks if a UUID matches a specific service
        /// </summary>
        public static bool IsPawsService(Guid uuid)
        {
            return uuid == UuidRegistry.PawsService;
        }

        /// <summary>
        /// Checks if a UUID matches any PAWS characteristic
        /// </summary>
        public static bool IsPawsCharacteristic(Guid uuid)
        {
            return uuid == UuidRegistry.PawsCharacteristics.States ||
                   uuid == UuidRegistry.PawsCharacteristics.State ||
                   uuid == UuidRegistry.PawsCharacteristics.StateImage ||
                   uuid == UuidRegistry.PawsCharacteristics.Timestamp ||
                   uuid == UuidRegistry.PawsCharacteristics.Uptime ||
                   uuid == UuidRegistry.PawsCharacteristics.CpuTemp ||
                   uuid == UuidRegistry.PawsCharacteristics.CpuLoad ||
                   uuid == UuidRegistry.PawsCharacteristics.Network ||
                   uuid == UuidRegistry.PawsCharacteristics.Mode ||
                   uuid == UuidRegistry.PawsCharacteristics.ModeList;
        }

        /// <summary>
        /// Gets the service type for a given characteristic UUID
        /// </summary>
        public static string GetServiceTypeForCharacteristic(Guid characteristicUuid)
        {
            if (characteristicUuid == UuidRegistry.PawsCharacteristics.States ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.State ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.StateImage ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.Timestamp ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.Uptime ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.CpuTemp ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.CpuLoad ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.Network ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.Mode ||
                characteristicUuid == UuidRegistry.PawsCharacteristics.ModeList)
            {
                return "PAWS";
            }

            if (characteristicUuid == UuidRegistry.PawsExtraCharacteristics.PixelDrawEnabled ||
                characteristicUuid == UuidRegistry.PawsExtraCharacteristics.PixelDrawInterface ||
                characteristicUuid == UuidRegistry.PawsExtraCharacteristics.StreamEnabled ||
                characteristicUuid == UuidRegistry.PawsExtraCharacteristics.StreamInterface)
            {
                return "PAWS_EXTRA";
            }

            if (characteristicUuid == UuidRegistry.GameCharacteristics.Controller)
            {
                return "GAME";
            }

            if (characteristicUuid == UuidRegistry.StreamCharacteristics.Data ||
                characteristicUuid == UuidRegistry.StreamCharacteristics.Control)
            {
                return "STREAM";
            }

            return "UNKNOWN";
        }
    }

    /// <summary>
    /// Example 4: Using UUIDs in collections and data structures
    /// </summary>
    public static class CollectionExamples
    {
        /// <summary>
        /// Creates a dictionary mapping service names to their UUIDs
        /// </summary>
        public static Dictionary<string, Guid> CreateServiceUuidMap()
        {
            return new Dictionary<string, Guid>
            {
                ["PAWS"] = UuidRegistry.PawsService,
                ["PAWS_EXTRA"] = UuidRegistry.PawsExtraService,
                ["STATE"] = UuidRegistry.StateService,
                ["GAME"] = UuidRegistry.GameService,
                ["STREAM"] = UuidRegistry.StreamService,
                ["ADVERTISEMENT"] = UuidRegistry.AdvertisementService
            };
        }

        /// <summary>
        /// Creates a list of all characteristic UUIDs
        /// </summary>
        public static List<Guid> GetAllCharacteristicUuids()
        {
            return new List<Guid>
            {
                // PAWS characteristics
                UuidRegistry.PawsCharacteristics.States,
                UuidRegistry.PawsCharacteristics.State,
                UuidRegistry.PawsCharacteristics.StateImage,
                UuidRegistry.PawsCharacteristics.Timestamp,
                UuidRegistry.PawsCharacteristics.Uptime,
                UuidRegistry.PawsCharacteristics.CpuTemp,
                UuidRegistry.PawsCharacteristics.CpuLoad,
                UuidRegistry.PawsCharacteristics.Network,
                UuidRegistry.PawsCharacteristics.Mode,
                UuidRegistry.PawsCharacteristics.ModeList,

                // PAWS Extra characteristics
                UuidRegistry.PawsExtraCharacteristics.PixelDrawEnabled,
                UuidRegistry.PawsExtraCharacteristics.PixelDrawInterface,
                UuidRegistry.PawsExtraCharacteristics.StreamEnabled,
                UuidRegistry.PawsExtraCharacteristics.StreamInterface,

                // Game characteristics
                UuidRegistry.GameCharacteristics.Controller,

                // Stream characteristics
                UuidRegistry.StreamCharacteristics.Data,
                UuidRegistry.StreamCharacteristics.Control
            };
        }

        /// <summary>
        /// Creates a dictionary mapping characteristic UUIDs to their properties
        /// </summary>
        public static Dictionary<Guid, string[]> GetCharacteristicProperties()
        {
            return new Dictionary<Guid, string[]>
            {
                [UuidRegistry.PawsCharacteristics.States] = new[] { "Read" },
                [UuidRegistry.PawsCharacteristics.State] = new[] { "Read", "Notify" },
                [UuidRegistry.PawsCharacteristics.StateImage] = new[] { "Read", "Notify" },
                [UuidRegistry.PawsCharacteristics.Timestamp] = new[] { "Read", "Notify" },
                [UuidRegistry.PawsCharacteristics.Uptime] = new[] { "Read", "Notify" },
                [UuidRegistry.PawsCharacteristics.CpuTemp] = new[] { "Read", "Notify" },
                [UuidRegistry.PawsCharacteristics.CpuLoad] = new[] { "Read", "Notify" },
                [UuidRegistry.PawsCharacteristics.Network] = new[] { "Read", "Notify" },
                [UuidRegistry.PawsCharacteristics.Mode] = new[] { "Read", "Write", "Notify" },
                [UuidRegistry.PawsCharacteristics.ModeList] = new[] { "Read" },

                [UuidRegistry.PawsExtraCharacteristics.PixelDrawEnabled] = new[] { "Read", "Write" },
                [UuidRegistry.PawsExtraCharacteristics.PixelDrawInterface] = new[] { "Read", "Write", "Notify" },
                [UuidRegistry.PawsExtraCharacteristics.StreamEnabled] = new[] { "Read", "Write" },
                [UuidRegistry.PawsExtraCharacteristics.StreamInterface] = new[] { "Read", "Write", "Notify" },

                [UuidRegistry.GameCharacteristics.Controller] = new[] { "Write" },

                [UuidRegistry.StreamCharacteristics.Data] = new[] { "Notify" },
                [UuidRegistry.StreamCharacteristics.Control] = new[] { "Write" }
            };
        }
    }

    /// <summary>
    /// Example 5: Using UUIDs in logging and debugging
    /// </summary>
    public static class LoggingExamples
    {
        /// <summary>
        /// Logs UUID information in a human-readable format
        /// </summary>
        public static void LogUuidInfo(Guid uuid)
        {
            var name = UuidRegistry.GetName(uuid);
            if (!string.IsNullOrEmpty(name))
            {
                Console.WriteLine($"UUID {uuid} is registered as: {name}");
            }
            else
            {
                Console.WriteLine($"UUID {uuid} is not registered in the system");
            }
        }

        /// <summary>
        /// Logs all registered UUIDs for debugging purposes
        /// </summary>
        public static void LogAllRegisteredUuids()
        {
            Console.WriteLine("=== All Registered UUIDs ===");
            var names = UuidRegistry.GetAllRegisteredNames();
            var uuids = UuidRegistry.GetAllRegisteredUuids();

            for (int i = 0; i < names.Length; i++)
            {
                Console.WriteLine($"{names[i]}: {uuids[i]}");
            }
            Console.WriteLine();
        }

        /// <summary>
        /// Logs UUID validation results
        /// </summary>
        public static void LogUuidValidation()
        {
            Console.WriteLine("=== UUID Validation ===");
            Console.WriteLine($"All UUIDs are unique: {UuidRegistry.ValidateUniqueness()}");
            Console.WriteLine($"Total registered UUIDs: {UuidRegistry.GetAllRegisteredUuids().Length}");
            Console.WriteLine();
        }
    }

    /// <summary>
    /// Example 6: Using UUIDs in configuration and settings
    /// </summary>
    public static class ConfigurationExamples
    {
        /// <summary>
        /// Creates a configuration object with UUID information
        /// </summary>
        public static class UuidConfig
        {
            public static readonly Guid[] EnabledServices = 
            {
                UuidRegistry.PawsService,
                UuidRegistry.StateService,
                UuidRegistry.GameService
            };

            public static readonly Guid[] EnabledCharacteristics = 
            {
                UuidRegistry.PawsCharacteristics.State,
                UuidRegistry.PawsCharacteristics.Mode,
                UuidRegistry.GameCharacteristics.Controller
            };

            public static readonly Dictionary<string, Guid[]> ServiceCharacteristics = new()
            {
                ["PAWS"] = new[]
                {
                    UuidRegistry.PawsCharacteristics.States,
                    UuidRegistry.PawsCharacteristics.State,
                    UuidRegistry.PawsCharacteristics.Mode
                },
                ["GAME"] = new[]
                {
                    UuidRegistry.GameCharacteristics.Controller
                }
            };
        }

        /// <summary>
        /// Checks if a service is enabled in the configuration
        /// </summary>
        public static bool IsServiceEnabled(Guid serviceUuid)
        {
            return Array.Exists(UuidConfig.EnabledServices, uuid => uuid == serviceUuid);
        }

        /// <summary>
        /// Checks if a characteristic is enabled in the configuration
        /// </summary>
        public static bool IsCharacteristicEnabled(Guid characteristicUuid)
        {
            return Array.Exists(UuidConfig.EnabledCharacteristics, uuid => uuid == characteristicUuid);
        }
    }
} 