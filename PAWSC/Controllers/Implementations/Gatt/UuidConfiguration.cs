using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PAWSC.Controllers.Implementations.Gatt;

/// <summary>
/// Configuration structure for UUID definitions
/// </summary>
public class UuidConfiguration
{
    /// <summary>
    /// Version of the UUID configuration
    /// </summary>
    [JsonPropertyName("version")]
    public string Version { get; set; } = "1.0.0";
    
    /// <summary>
    /// Description of the configuration
    /// </summary>
    [JsonPropertyName("description")]
    public string Description { get; set; } = "PAWSC UUID Configuration";
    
    /// <summary>
    /// Service UUID definitions
    /// </summary>
    [JsonPropertyName("services")]
    public Dictionary<string, ServiceUuidDefinition> Services { get; set; } = new();
    
    /// <summary>
    /// Characteristic UUID definitions
    /// </summary>
    [JsonPropertyName("characteristics")]
    public Dictionary<string, CharacteristicUuidDefinition> Characteristics { get; set; } = new();
}

/// <summary>
/// Service UUID definition
/// </summary>
public class ServiceUuidDefinition
{
    /// <summary>
    /// The UUID string
    /// </summary>
    [JsonPropertyName("uuid")]
    public string Uuid { get; set; } = string.Empty;
    
    /// <summary>
    /// Description of the service
    /// </summary>
    [JsonPropertyName("description")]
    public string Description { get; set; } = string.Empty;
    
    /// <summary>
    /// Whether this is a primary service
    /// </summary>
    [JsonPropertyName("primary")]
    public bool Primary { get; set; } = true;
    
    /// <summary>
    /// Associated characteristic UUIDs
    /// </summary>
    [JsonPropertyName("characteristics")]
    public List<string> Characteristics { get; set; } = new();
}

/// <summary>
/// Characteristic UUID definition
/// </summary>
public class CharacteristicUuidDefinition
{
    /// <summary>
    /// The UUID string
    /// </summary>
    [JsonPropertyName("uuid")]
    public string Uuid { get; set; } = string.Empty;
    
    /// <summary>
    /// Description of the characteristic
    /// </summary>
    [JsonPropertyName("description")]
    public string Description { get; set; } = string.Empty;
    
    /// <summary>
    /// The service this characteristic belongs to
    /// </summary>
    [JsonPropertyName("service")]
    public string Service { get; set; } = string.Empty;
    
    /// <summary>
    /// Characteristic properties (Read, Write, Notify, etc.)
    /// </summary>
    [JsonPropertyName("properties")]
    public List<string> Properties { get; set; } = new();
}

/// <summary>
/// UUID configuration loader and validator
/// </summary>
public static class UuidConfigurationLoader
{
    /// <summary>
    /// Default UUID configuration as embedded resource
    /// </summary>
    private static readonly string DefaultConfiguration = @"
{
  ""version"": ""1.0.0"",
  ""description"": ""PAWSC Default UUID Configuration"",
  ""services"": {
    ""PAWS_SERVICE"": {
      ""uuid"": ""04f9d599-ce17-4397-a65d-cf769397551a"",
      ""description"": ""Main PAWS service for state management and core functionality"",
      ""primary"": true,
      ""characteristics"": [""PAWS_STATES"", ""PAWS_STATE"", ""PAWS_STATE_IMG"", ""PAWS_TIMESTAMP"", ""PAWS_UPTIME"", ""PAWS_CPU_TEMP"", ""PAWS_CPU_LOAD"", ""PAWS_NETWORK"", ""PAWS_MODE"", ""PAWS_MODE_LIST""]
    },
    ""PAWS_EXTRA_SERVICE"": {
      ""uuid"": ""bacc1dbc-f1f3-42f2-b572-bd3e16923f28"",
      ""description"": ""PAWS Extra service for additional features"",
      ""primary"": true,
      ""characteristics"": [""PAWS_EXTRA_PIXELDRAW_ENABLED"", ""PAWS_EXTRA_PIXELDRAW_INTERFACE"", ""PAWS_EXTRA_STREAM_ENABLED"", ""PAWS_EXTRA_STREAM_INTERFACE""]
    },
    ""STATE_SERVICE"": {
      ""uuid"": ""12345678-1234-5678-1234-56789abcdef0"",
      ""description"": ""State management service"",
      ""primary"": true,
      ""characteristics"": []
    },
    ""GAME_SERVICE"": {
      ""uuid"": ""2BC9D63F-F9C6-479E-B815-EAA9D3A03F8D"",
      ""description"": ""Game control service"",
      ""primary"": true,
      ""characteristics"": [""GAME_CONTROLLER""]
    },
    ""STREAM_SERVICE"": {
      ""uuid"": ""0000f00d-0000-1000-8000-00805f9b34fb"",
      ""description"": ""Streaming service for video/audio data"",
      ""primary"": true,
      ""characteristics"": [""STREAM_DATA"", ""STREAM_CONTROL""]
    },
    ""ADVERTISEMENT_SERVICE"": {
      ""uuid"": ""12345678-1234-5678-1234-56789abcdef9"",
      ""description"": ""Advertisement service for device discovery"",
      ""primary"": false,
      ""characteristics"": []
    }
  },
  ""characteristics"": {
    ""PAWS_STATES"": {
      ""uuid"": ""0694bc1c-0064-4bd7-9840-41fa65d7355e"",
      ""description"": ""List of available states"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read""]
    },
    ""PAWS_STATE"": {
      ""uuid"": ""81a6a500-b85e-4951-b6ac-b63c8f97f678"",
      ""description"": ""Current active state"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read"", ""Notify""]
    },
    ""PAWS_STATE_IMG"": {
      ""uuid"": ""780dc226-9378-4a2a-8e39-b3d4fb2f6207"",
      ""description"": ""State image data"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read"", ""Notify""]
    },
    ""PAWS_TIMESTAMP"": {
      ""uuid"": ""fa7abfe6-af90-42bf-a154-c2bdb7eb336a"",
      ""description"": ""Current timestamp"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read"", ""Notify""]
    },
    ""PAWS_UPTIME"": {
      ""uuid"": ""97dcaa87-eaa8-4546-bb33-ad001fc3daf4"",
      ""description"": ""System uptime"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read"", ""Notify""]
    },
    ""PAWS_CPU_TEMP"": {
      ""uuid"": ""31b0159a-d4bd-4396-9e77-7ebb24db6df3"",
      ""description"": ""CPU temperature"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read"", ""Notify""]
    },
    ""PAWS_CPU_LOAD"": {
      ""uuid"": ""26414bca-7991-46e5-a559-376c7d515a1f"",
      ""description"": ""CPU load percentage"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read"", ""Notify""]
    },
    ""PAWS_NETWORK"": {
      ""uuid"": ""4bb22157-34d4-481c-949f-18aaa00f45e4"",
      ""description"": ""Network status information"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read"", ""Notify""]
    },
    ""PAWS_MODE"": {
      ""uuid"": ""18eb891a-8e1b-4a0c-9374-d904f97b0b52"",
      ""description"": ""Current operation mode"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read"", ""Write"", ""Notify""]
    },
    ""PAWS_MODE_LIST"": {
      ""uuid"": ""06d84d50-1e54-49b9-a749-1b4c9c7daf16"",
      ""description"": ""List of available modes"",
      ""service"": ""PAWS_SERVICE"",
      ""properties"": [""Read""]
    },
    ""PAWS_EXTRA_PIXELDRAW_ENABLED"": {
      ""uuid"": ""ea003779-e651-49e8-91ab-05b65e66b95f"",
      ""description"": ""Pixel drawing feature enabled flag"",
      ""service"": ""PAWS_EXTRA_SERVICE"",
      ""properties"": [""Read"", ""Write""]
    },
    ""PAWS_EXTRA_PIXELDRAW_INTERFACE"": {
      ""uuid"": ""65a8fc81-2f01-47e4-b25d-b39b4a90718c"",
      ""description"": ""Pixel drawing interface control"",
      ""service"": ""PAWS_EXTRA_SERVICE"",
      ""properties"": [""Read"", ""Write"", ""Notify""]
    },
    ""PAWS_EXTRA_STREAM_ENABLED"": {
      ""uuid"": ""450c8fdb-9502-4b00-b488-cb2455ab842e"",
      ""description"": ""Streaming feature enabled flag"",
      ""service"": ""PAWS_EXTRA_SERVICE"",
      ""properties"": [""Read"", ""Write""]
    },
    ""PAWS_EXTRA_STREAM_INTERFACE"": {
      ""uuid"": ""21232f3e-fe85-4fda-b204-1d157d2f12c4"",
      ""description"": ""Streaming interface control"",
      ""service"": ""PAWS_EXTRA_SERVICE"",
      ""properties"": [""Read"", ""Write"", ""Notify""]
    },
    ""GAME_CONTROLLER"": {
      ""uuid"": ""327FE31A-3EC0-47AF-A1AD-65C5067D670A"",
      ""description"": ""Game controller input"",
      ""service"": ""GAME_SERVICE"",
      ""properties"": [""Write""]
    },
    ""STREAM_DATA"": {
      ""uuid"": ""0000f00d-0000-1000-8000-00805f9b34fa"",
      ""description"": ""Stream data characteristic"",
      ""service"": ""STREAM_SERVICE"",
      ""properties"": [""Notify""]
    },
    ""STREAM_CONTROL"": {
      ""uuid"": ""300751B6-1450-4D27-BE88-23B53A2FA3E9"",
      ""description"": ""Stream control characteristic"",
      ""service"": ""STREAM_SERVICE"",
      ""properties"": [""Write""]
    }
  }
}";

    /// <summary>
    /// Loads the default UUID configuration
    /// </summary>
    /// <returns>The loaded configuration</returns>
    public static UuidConfiguration LoadDefaultConfiguration()
    {
        try
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            
            return JsonSerializer.Deserialize<UuidConfiguration>(DefaultConfiguration, options) 
                   ?? throw new InvalidOperationException("Failed to deserialize default configuration");
        }
        catch (Exception ex)
        {
            throw new InvalidOperationException("Failed to load default UUID configuration", ex);
        }
    }
    
    /// <summary>
    /// Loads UUID configuration from a JSON file
    /// </summary>
    /// <param name="filePath">Path to the JSON configuration file</param>
    /// <returns>The loaded configuration</returns>
    public static UuidConfiguration LoadFromFile(string filePath)
    {
        try
        {
            if (!File.Exists(filePath))
                throw new FileNotFoundException($"UUID configuration file not found: {filePath}");
            
            var jsonContent = File.ReadAllText(filePath);
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            
            return JsonSerializer.Deserialize<UuidConfiguration>(jsonContent, options) 
                   ?? throw new InvalidOperationException("Failed to deserialize configuration file");
        }
        catch (Exception ex) when (ex is not FileNotFoundException)
        {
            throw new InvalidOperationException($"Failed to load UUID configuration from file: {filePath}", ex);
        }
    }
    
    /// <summary>
    /// Validates a UUID configuration
    /// </summary>
    /// <param name="config">The configuration to validate</param>
    /// <returns>True if valid, false otherwise</returns>
    public static bool ValidateConfiguration(UuidConfiguration config)
    {
        if (config == null) return false;
        
        // Check for duplicate UUIDs
        var allUuids = new HashSet<string>();
        
        foreach (var service in config.Services.Values)
        {
            if (!allUuids.Add(service.Uuid))
                return false;
        }
        
        foreach (var characteristic in config.Characteristics.Values)
        {
            if (!allUuids.Add(characteristic.Uuid))
                return false;
        }
        
        // Check that all characteristic references are valid
        foreach (var characteristic in config.Characteristics.Values)
        {
            if (!config.Services.ContainsKey(characteristic.Service))
                return false;
        }
        
        return true;
    }
} 