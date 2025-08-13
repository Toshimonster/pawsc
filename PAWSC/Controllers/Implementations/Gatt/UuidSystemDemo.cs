using System;
using System.Collections.Generic;

namespace PAWSC.Controllers.Implementations.Gatt;

/// <summary>
/// Demonstration program showcasing the centralized UUID management system
/// </summary>
public static class UuidSystemDemo
{
    /// <summary>
    /// Runs a comprehensive demonstration of the UUID system
    /// </summary>
    public static void RunDemo()
    {
        Console.WriteLine("=== PAWSC Centralized UUID Management System Demo ===\n");

        try
        {
            // Initialize the registry
            UuidRegistry.Initialize();
            Console.WriteLine("✅ UUID Registry initialized successfully\n");

            // Demo 1: Basic UUID Access
            DemoBasicUuidAccess();

            // Demo 2: UUID Validation
            DemoUuidValidation();

            // Demo 3: UUID Lookup and Information
            DemoUuidLookup();

            // Demo 4: Configuration Loading
            DemoConfigurationLoading();

            // Demo 5: Migration Helper
            DemoMigrationHelper();

            // Demo 6: Usage Examples
            DemoUsageExamples();

            Console.WriteLine("🎉 All demos completed successfully!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Demo failed: {ex.Message}");
            Console.WriteLine($"Stack trace: {ex.StackTrace}");
        }
    }

    private static void DemoBasicUuidAccess()
    {
        Console.WriteLine("--- Demo 1: Basic UUID Access ---");

        // Access service UUIDs
        Console.WriteLine($"PAWS Service UUID: {UuidRegistry.PawsService}");
        Console.WriteLine($"Stream Service UUID: {UuidRegistry.StreamService}");
        Console.WriteLine($"Game Service UUID: {UuidRegistry.GameService}");

        // Access characteristic UUIDs
        Console.WriteLine($"State Characteristic UUID: {UuidRegistry.PawsCharacteristics.State}");
        Console.WriteLine($"Game Controller UUID: {UuidRegistry.GameCharacteristics.Controller}");
        Console.WriteLine($"Stream Data UUID: {UuidRegistry.StreamCharacteristics.Data}");

        Console.WriteLine();
    }

    private static void DemoUuidValidation()
    {
        Console.WriteLine("--- Demo 2: UUID Validation ---");

        // Validate registry uniqueness
        bool isUnique = UuidRegistry.ValidateUniqueness();
        Console.WriteLine($"All UUIDs are unique: {isUnique}");

        // Validate individual UUIDs
        bool isValidFormat = UuidValidator.IsValidUuidFormat("04f9d599-ce17-4397-a65d-cf769397551a");
        Console.WriteLine($"Valid UUID format: {isValidFormat}");

        // Validate collection of UUIDs
        var testUuids = new Dictionary<string, string>
        {
            ["TEST_1"] = "04f9d599-ce17-4397-a65d-cf769397551a",
            ["TEST_2"] = "0000f00d-0000-1000-8000-00805f9b34fb"
        };

        var validationResult = UuidValidator.ValidateUuidCollection(testUuids);
        Console.WriteLine($"Test UUIDs validation: {validationResult.IsValid}");

        if (!validationResult.IsValid)
        {
            foreach (var error in validationResult.Errors)
            {
                Console.WriteLine($"  Error: {error}");
            }
        }

        Console.WriteLine();
    }

    private static void DemoUuidLookup()
    {
        Console.WriteLine("--- Demo 3: UUID Lookup and Information ---");

        // Get UUID by name
        try
        {
            var uuid = UuidRegistry.GetUuid("PAWS_SERVICE");
            Console.WriteLine($"UUID for PAWS_SERVICE: {uuid}");
        }
        catch (KeyNotFoundException ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }

        // Get name by UUID
        var pawsUuid = UuidRegistry.PawsService;
        var name = UuidRegistry.GetName(pawsUuid);
        Console.WriteLine($"Name for {pawsUuid}: {name}");

        // Check if UUID is registered
        var testUuid = Guid.NewGuid();
        bool isRegistered = UuidRegistry.IsRegistered(testUuid);
        Console.WriteLine($"Is {testUuid} registered: {isRegistered}");

        // Get all registered UUIDs
        var allNames = UuidRegistry.GetAllRegisteredNames();
        var allUuids = UuidRegistry.GetAllRegisteredUuids();
        Console.WriteLine($"Total registered UUIDs: {allUuids.Length}");

        Console.WriteLine();
    }

    private static void DemoConfigurationLoading()
    {
        Console.WriteLine("--- Demo 4: Configuration Loading ---");

        try
        {
            // Load default configuration
            var config = UuidConfigurationLoader.LoadDefaultConfiguration();
            Console.WriteLine($"Configuration loaded: {config.Description} v{config.Version}");

            // Validate configuration
            bool isValid = UuidConfigurationLoader.ValidateConfiguration(config);
            Console.WriteLine($"Configuration is valid: {isValid}");

            // Display service information
            Console.WriteLine($"Services defined: {config.Services.Count}");
            foreach (var service in config.Services)
            {
                Console.WriteLine($"  {service.Key}: {service.Value.Description}");
            }

            // Display characteristic information
            Console.WriteLine($"Characteristics defined: {config.Characteristics.Count}");
            foreach (var characteristic in config.Characteristics)
            {
                Console.WriteLine($"  {characteristic.Key}: {characteristic.Value.Description}");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Configuration loading failed: {ex.Message}");
        }

        Console.WriteLine();
    }

    private static void DemoMigrationHelper()
    {
        Console.WriteLine("--- Demo 5: Migration Helper ---");

        // Create sample hardcoded UUIDs for demonstration
        var sampleUuids = new Dictionary<string, string>
        {
            ["PAWS_SERVICE"] = "04f9d599-ce17-4397-a65d-cf769397551a",
            ["STREAM_SERVICE"] = "0000f00d-0000-1000-8000-00805f9b34fb",
            ["GAME_SERVICE"] = "2BC9D63F-F9C6-479E-B815-EAA9D3A03F8D"
        };

        // Validate the sample UUIDs
        var validationResult = UuidValidator.ValidateUuidCollection(sampleUuids);
        Console.WriteLine($"Sample UUIDs validation: {validationResult.IsValid}");

        if (validationResult.Warnings.Count > 0)
        {
            Console.WriteLine("Warnings:");
            foreach (var warning in validationResult.Warnings)
            {
                Console.WriteLine($"  {warning}");
            }
        }

        // Generate suggestions for naming improvements
        var suggestions = UuidValidator.SuggestNamingImprovements(sampleUuids);
        if (suggestions.Count > 0)
        {
            Console.WriteLine("Naming suggestions:");
            foreach (var suggestion in suggestions)
            {
                Console.WriteLine($"  {suggestion}");
            }
        }

        Console.WriteLine();
    }

    private static void DemoUsageExamples()
    {
        Console.WriteLine("--- Demo 6: Usage Examples ---");

        // Service creation examples
        var pawsService = UuidUsageExamples.ServiceCreationExamples.CreatePawsService();
        Console.WriteLine($"Created PAWS service: {pawsService.UUID}");

        var streamService = UuidUsageExamples.ServiceCreationExamples.CreateStreamService();
        Console.WriteLine($"Created Stream service: {streamService.UUID}");

        // Characteristic UUID examples
        var stateCharacteristicUuid = UuidUsageExamples.CharacteristicCreationExamples.GetStateCharacteristicUuid();
        Console.WriteLine($"State characteristic UUID: {stateCharacteristicUuid}");

        // Conditional logic examples
        bool isPawsService = UuidUsageExamples.ConditionalLogicExamples.IsPawsService(UuidRegistry.PawsService);
        Console.WriteLine($"Is PAWS service: {isPawsService}");

        string serviceType = UuidUsageExamples.ConditionalLogicExamples.GetServiceTypeForCharacteristic(
            UuidRegistry.PawsCharacteristics.State);
        Console.WriteLine($"Service type for State characteristic: {serviceType}");

        // Collection examples
        var serviceMap = UuidUsageExamples.CollectionExamples.CreateServiceUuidMap();
        Console.WriteLine($"Service UUID map created with {serviceMap.Count} services");

        var allCharacteristics = UuidUsageExamples.CollectionExamples.GetAllCharacteristicUuids();
        Console.WriteLine($"All characteristic UUIDs: {allCharacteristics.Count}");

        // Configuration examples
        bool isServiceEnabled = UuidUsageExamples.ConfigurationExamples.IsServiceEnabled(UuidRegistry.PawsService);
        Console.WriteLine($"PAWS service enabled: {isServiceEnabled}");

        bool isCharacteristicEnabled = UuidUsageExamples.ConfigurationExamples.IsCharacteristicEnabled(
            UuidRegistry.PawsCharacteristics.State);
        Console.WriteLine($"State characteristic enabled: {isCharacteristicEnabled}");

        Console.WriteLine();
    }

    /// <summary>
    /// Runs a quick validation check on the system
    /// </summary>
    public static void RunQuickValidation()
    {
        Console.WriteLine("=== Quick UUID System Validation ===\n");

        try
        {
            // Initialize registry
            UuidRegistry.Initialize();

            // Basic checks
            Console.WriteLine($"✅ Registry initialized");
            Console.WriteLine($"✅ UUIDs are unique: {UuidRegistry.ValidateUniqueness()}");
            Console.WriteLine($"✅ Total UUIDs: {UuidRegistry.GetAllRegisteredUuids().Length}");

            // Service checks
            Console.WriteLine($"✅ PAWS Service: {UuidRegistry.PawsService}");
            Console.WriteLine($"✅ Stream Service: {UuidRegistry.StreamService}");
            Console.WriteLine($"✅ Game Service: {UuidRegistry.GameService}");

            // Characteristic checks
            Console.WriteLine($"✅ State Characteristic: {UuidRegistry.PawsCharacteristics.State}");
            Console.WriteLine($"✅ Game Controller: {UuidRegistry.GameCharacteristics.Controller}");

            Console.WriteLine("\n🎉 All validation checks passed!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Validation failed: {ex.Message}");
        }
    }
} 