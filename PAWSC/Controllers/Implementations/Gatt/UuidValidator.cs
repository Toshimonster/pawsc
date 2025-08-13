using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace PAWSC.Controllers.Implementations.Gatt;

/// <summary>
/// UUID validation and conflict detection utility
/// </summary>
public static class UuidValidator
{
    private static readonly Regex UuidRegex = new(
        @"^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
        RegexOptions.Compiled | RegexOptions.IgnoreCase);

    /// <summary>
    /// Validation result for UUID checks
    /// </summary>
    public class ValidationResult
    {
        public bool IsValid { get; set; }
        public List<string> Errors { get; set; } = new();
        public List<string> Warnings { get; set; } = new();
        public List<string> Info { get; set; } = new();
    }

    /// <summary>
    /// Validates a UUID string format
    /// </summary>
    /// <param name="uuidString">The UUID string to validate</param>
    /// <returns>True if the format is valid, false otherwise</returns>
    public static bool IsValidUuidFormat(string uuidString)
    {
        if (string.IsNullOrWhiteSpace(uuidString))
            return false;

        return UuidRegex.IsMatch(uuidString.Trim());
    }

    /// <summary>
    /// Validates a collection of UUIDs for conflicts and issues
    /// </summary>
    /// <param name="uuids">Dictionary of name-value pairs to validate</param>
    /// <returns>Validation result with detailed information</returns>
    public static ValidationResult ValidateUuidCollection(Dictionary<string, string> uuids)
    {
        var result = new ValidationResult();
        var uuidSet = new HashSet<string>();
        var guidSet = new HashSet<Guid>();

        foreach (var kvp in uuids)
        {
            var name = kvp.Key;
            var uuidString = kvp.Value;

            // Check format
            if (!IsValidUuidFormat(uuidString))
            {
                result.IsValid = false;
                result.Errors.Add($"Invalid UUID format for '{name}': {uuidString}");
                continue;
            }

            // Check for duplicate UUID strings
            if (!uuidSet.Add(uuidString))
            {
                result.IsValid = false;
                result.Errors.Add($"Duplicate UUID string '{uuidString}' found for '{name}'");
                continue;
            }

            // Check for duplicate GUIDs (case-insensitive)
            try
            {
                var guid = Guid.Parse(uuidString);
                if (!guidSet.Add(guid))
                {
                    result.IsValid = false;
                    result.Errors.Add($"Duplicate GUID '{guid}' found for '{name}'");
                    continue;
                }
            }
            catch (Exception ex)
            {
                result.IsValid = false;
                result.Errors.Add($"Failed to parse UUID '{uuidString}' for '{name}': {ex.Message}");
                continue;
            }

            // Check for potentially problematic UUIDs
            if (uuidString.StartsWith("00000000-", StringComparison.OrdinalIgnoreCase))
            {
                result.Warnings.Add($"UUID '{name}' starts with all zeros, which may cause issues");
            }

            if (uuidString.StartsWith("ffffffff-", StringComparison.OrdinalIgnoreCase))
            {
                result.Warnings.Add($"UUID '{name}' starts with all F's, which may cause issues");
            }
        }

        if (result.Errors.Count == 0)
        {
            result.IsValid = true;
            result.Info.Add($"Successfully validated {uuids.Count} UUIDs");
        }

        return result;
    }

    /// <summary>
    /// Validates UUIDs against common Bluetooth UUID patterns
    /// </summary>
    /// <param name="uuids">Dictionary of name-value pairs to validate</param>
    /// <returns>Validation result with Bluetooth-specific information</returns>
    public static ValidationResult ValidateBluetoothUuids(Dictionary<string, string> uuids)
    {
        var result = ValidateUuidCollection(uuids);
        
        if (!result.IsValid)
            return result;

        foreach (var kvp in uuids)
        {
            var name = kvp.Key;
            var uuidString = kvp.Value;

            // Check for Bluetooth SIG reserved ranges
            if (uuidString.StartsWith("0000", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0001", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0002", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0003", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0004", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0005", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0006", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0007", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0008", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("0009", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("000A", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("000B", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("000C", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("000D", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("000E", StringComparison.OrdinalIgnoreCase) ||
                uuidString.StartsWith("000F", StringComparison.OrdinalIgnoreCase))
            {
                result.Warnings.Add($"UUID '{name}' may conflict with Bluetooth SIG reserved ranges");
            }

            // Check for vendor-specific UUIDs (should start with company-specific prefix)
            if (uuidString.StartsWith("0000", StringComparison.OrdinalIgnoreCase) &&
                !name.Contains("SIG", StringComparison.OrdinalIgnoreCase) &&
                !name.Contains("Standard", StringComparison.OrdinalIgnoreCase))
            {
                result.Warnings.Add($"UUID '{name}' uses 16-bit format but may not be a standard Bluetooth UUID");
            }
        }

        return result;
    }

    /// <summary>
    /// Generates a summary report of UUID validation
    /// </summary>
    /// <param name="result">The validation result to summarize</param>
    /// <returns>Formatted summary string</returns>
    public static string GenerateValidationReport(ValidationResult result)
    {
        var report = new System.Text.StringBuilder();
        
        report.AppendLine("=== UUID Validation Report ===");
        report.AppendLine($"Overall Status: {(result.IsValid ? "PASSED" : "FAILED")}");
        report.AppendLine();
        
        if (result.Errors.Count > 0)
        {
            report.AppendLine("ERRORS:");
            foreach (var error in result.Errors)
            {
                report.AppendLine($"  ❌ {error}");
            }
            report.AppendLine();
        }
        
        if (result.Warnings.Count > 0)
        {
            report.AppendLine("WARNINGS:");
            foreach (var warning in result.Warnings)
            {
                report.AppendLine($"  ⚠️  {warning}");
            }
            report.AppendLine();
        }
        
        if (result.Info.Count > 0)
        {
            report.AppendLine("INFO:");
            foreach (var info in result.Info)
            {
                report.AppendLine($"  ℹ️  {info}");
            }
            report.AppendLine();
        }
        
        report.AppendLine($"Total Issues: {result.Errors.Count + result.Warnings.Count}");
        
        return report.ToString();
    }

    /// <summary>
    /// Suggests improvements for UUID naming conventions
    /// </summary>
    /// <param name="uuids">Dictionary of name-value pairs to analyze</param>
    /// <returns>List of naming convention suggestions</returns>
    public static List<string> SuggestNamingImprovements(Dictionary<string, string> uuids)
    {
        var suggestions = new List<string>();
        
        foreach (var kvp in uuids)
        {
            var name = kvp.Key;
            var uuidString = kvp.Value;
            
            // Check for inconsistent naming patterns
            if (name.Contains(' ') && !name.Contains('_'))
            {
                suggestions.Add($"Consider using underscores instead of spaces in '{name}' for consistency");
            }
            
            if (name.Contains('-') && !name.Contains('_'))
            {
                suggestions.Add($"Consider using underscores instead of hyphens in '{name}' for consistency");
            }
            
            // Check for overly long names
            if (name.Length > 50)
            {
                suggestions.Add($"Consider shortening the name '{name}' (currently {name.Length} characters)");
            }
            
            // Check for inconsistent casing
            if (name != name.ToUpperInvariant() && name != name.ToLowerInvariant())
            {
                suggestions.Add($"Consider using consistent casing for '{name}' (e.g., all uppercase or all lowercase)");
            }
        }
        
        return suggestions;
    }
} 