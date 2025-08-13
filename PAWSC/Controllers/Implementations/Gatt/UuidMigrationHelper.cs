using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace PAWSC.Controllers.Implementations.Gatt;

/// <summary>
/// Helper utility for migrating from scattered UUIDs to the centralized UUID registry
/// </summary>
public static class UuidMigrationHelper
{
    private static readonly Regex UuidPattern = new(
        @"[""']([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})[""']",
        RegexOptions.Compiled | RegexOptions.IgnoreCase);

    private static readonly Regex GuidParsePattern = new(
        @"Guid\.Parse\([""']([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})[""']\)",
        RegexOptions.Compiled | RegexOptions.IgnoreCase);

    /// <summary>
    /// Migration suggestion for a found UUID
    /// </summary>
    public class MigrationSuggestion
    {
        public string FilePath { get; set; } = string.Empty;
        public int LineNumber { get; set; }
        public string OriginalCode { get; set; } = string.Empty;
        public string SuggestedReplacement { get; set; } = string.Empty;
        public string UuidValue { get; set; } = string.Empty;
        public string RegistryPath { get; set; } = string.Empty;
        public MigrationType Type { get; set; }
    }

    /// <summary>
    /// Type of migration needed
    /// </summary>
    public enum MigrationType
    {
        StringLiteral,
        GuidParse,
        Unknown
    }

    /// <summary>
    /// Scans a directory for hardcoded UUIDs and suggests migrations
    /// </summary>
    /// <param name="directoryPath">Directory to scan</param>
    /// <param name="fileExtensions">File extensions to scan (default: .cs)</param>
    /// <returns>List of migration suggestions</returns>
    public static List<MigrationSuggestion> ScanDirectoryForUuids(string directoryPath, params string[] fileExtensions)
    {
        var suggestions = new List<MigrationSuggestion>();
        var extensions = fileExtensions.Length > 0 ? fileExtensions : new[] { ".cs" };

        if (!Directory.Exists(directoryPath))
            return suggestions;

        var files = Directory.GetFiles(directoryPath, "*.*", SearchOption.AllDirectories)
            .Where(f => extensions.Any(ext => f.EndsWith(ext, StringComparison.OrdinalIgnoreCase)));

        foreach (var file in files)
        {
            try
            {
                var fileSuggestions = ScanFileForUuids(file);
                suggestions.AddRange(fileSuggestions);
            }
            catch (Exception ex)
            {
                // Log error but continue scanning other files
                Console.WriteLine($"Error scanning file {file}: {ex.Message}");
            }
        }

        return suggestions;
    }

    /// <summary>
    /// Scans a single file for hardcoded UUIDs
    /// </summary>
    /// <param name="filePath">File to scan</param>
    /// <returns>List of migration suggestions for this file</returns>
    public static List<MigrationSuggestion> ScanFileForUuids(string filePath)
    {
        var suggestions = new List<MigrationSuggestion>();
        var lines = File.ReadAllLines(filePath);

        for (int i = 0; i < lines.Length; i++)
        {
            var line = lines[i];
            var lineNumber = i + 1;

            // Check for string literal UUIDs
            var stringMatches = UuidPattern.Matches(line);
            foreach (Match match in stringMatches)
            {
                var uuidValue = match.Groups[1].Value;
                var suggestion = CreateMigrationSuggestion(filePath, lineNumber, line, uuidValue, match.Value, MigrationType.StringLiteral);
                if (suggestion != null)
                    suggestions.Add(suggestion);
            }

            // Check for Guid.Parse calls
            var guidParseMatches = GuidParsePattern.Matches(line);
            foreach (Match match in guidParseMatches)
            {
                var uuidValue = match.Groups[1].Value;
                var suggestion = CreateMigrationSuggestion(filePath, lineNumber, line, uuidValue, match.Value, MigrationType.GuidParse);
                if (suggestion != null)
                    suggestions.Add(suggestion);
            }
        }

        return suggestions;
    }

    /// <summary>
    /// Creates a migration suggestion for a found UUID
    /// </summary>
    private static MigrationSuggestion? CreateMigrationSuggestion(string filePath, int lineNumber, string line, string uuidValue, string originalCode, MigrationType type)
    {
        // Try to find this UUID in our registry
        var registryPath = FindUuidInRegistry(uuidValue);
        if (string.IsNullOrEmpty(registryPath))
            return null;

        var suggestion = new MigrationSuggestion
        {
            FilePath = filePath,
            LineNumber = lineNumber,
            OriginalCode = originalCode,
            UuidValue = uuidValue,
            RegistryPath = registryPath,
            Type = type
        };

        // Generate appropriate replacement based on type
        switch (type)
        {
            case MigrationType.StringLiteral:
                suggestion.SuggestedReplacement = $"UuidRegistry.{registryPath}.ToString()";
                break;
            case MigrationType.GuidParse:
                suggestion.SuggestedReplacement = $"UuidRegistry.{registryPath}";
                break;
            default:
                suggestion.SuggestedReplacement = $"UuidRegistry.{registryPath}";
                break;
        }

        return suggestion;
    }

    /// <summary>
    /// Finds the registry path for a given UUID
    /// </summary>
    private static string FindUuidInRegistry(string uuidValue)
    {
        try
        {
            var guid = Guid.Parse(uuidValue);
            
            // Check service UUIDs
            if (guid == UuidRegistry.PawsService) return "PawsService";
            if (guid == UuidRegistry.PawsExtraService) return "PawsExtraService";
            if (guid == UuidRegistry.StateService) return "StateService";
            if (guid == UuidRegistry.GameService) return "GameService";
            if (guid == UuidRegistry.StreamService) return "StreamService";
            if (guid == UuidRegistry.AdvertisementService) return "AdvertisementService";

            // Check characteristic UUIDs
            if (guid == UuidRegistry.PawsCharacteristics.States) return "PawsCharacteristics.States";
            if (guid == UuidRegistry.PawsCharacteristics.State) return "PawsCharacteristics.State";
            if (guid == UuidRegistry.PawsCharacteristics.StateImage) return "PawsCharacteristics.StateImage";
            if (guid == UuidRegistry.PawsCharacteristics.Timestamp) return "PawsCharacteristics.Timestamp";
            if (guid == UuidRegistry.PawsCharacteristics.Uptime) return "PawsCharacteristics.Uptime";
            if (guid == UuidRegistry.PawsCharacteristics.CpuTemp) return "PawsCharacteristics.CpuTemp";
            if (guid == UuidRegistry.PawsCharacteristics.CpuLoad) return "PawsCharacteristics.CpuLoad";
            if (guid == UuidRegistry.PawsCharacteristics.Network) return "PawsCharacteristics.Network";
            if (guid == UuidRegistry.PawsCharacteristics.Mode) return "PawsCharacteristics.Mode";
            if (guid == UuidRegistry.PawsCharacteristics.ModeList) return "PawsCharacteristics.ModeList";

            if (guid == UuidRegistry.PawsExtraCharacteristics.PixelDrawEnabled) return "PawsExtraCharacteristics.PixelDrawEnabled";
            if (guid == UuidRegistry.PawsExtraCharacteristics.PixelDrawInterface) return "PawsExtraCharacteristics.PixelDrawInterface";
            if (guid == UuidRegistry.PawsExtraCharacteristics.StreamEnabled) return "PawsExtraCharacteristics.StreamEnabled";
            if (guid == UuidRegistry.PawsExtraCharacteristics.StreamInterface) return "PawsExtraCharacteristics.StreamInterface";

            if (guid == UuidRegistry.GameCharacteristics.Controller) return "GameCharacteristics.Controller";

            if (guid == UuidRegistry.StreamCharacteristics.Data) return "StreamCharacteristics.Data";
            if (guid == UuidRegistry.StreamCharacteristics.Control) return "StreamCharacteristics.Control";

            return string.Empty;
        }
        catch
        {
            return string.Empty;
        }
    }

    /// <summary>
    /// Generates a migration report
    /// </summary>
    /// <param name="suggestions">List of migration suggestions</param>
    /// <returns>Formatted migration report</returns>
    public static string GenerateMigrationReport(List<MigrationSuggestion> suggestions)
    {
        if (suggestions.Count == 0)
            return "No UUIDs found that need migration.";

        var report = new StringBuilder();
        report.AppendLine("=== UUID Migration Report ===");
        report.AppendLine($"Total UUIDs found: {suggestions.Count}");
        report.AppendLine();

        var groupedByFile = suggestions.GroupBy(s => s.FilePath).OrderBy(g => g.Key);

        foreach (var fileGroup in groupedByFile)
        {
            report.AppendLine($"File: {fileGroup.Key}");
            report.AppendLine(new string('-', fileGroup.Key.Length + 6));

            foreach (var suggestion in fileGroup.OrderBy(s => s.LineNumber))
            {
                report.AppendLine($"Line {suggestion.LineNumber}:");
                report.AppendLine($"  Original: {suggestion.OriginalCode}");
                report.AppendLine($"  Replace with: {suggestion.SuggestedReplacement}");
                report.AppendLine($"  Registry path: {suggestion.RegistryPath}");
                report.AppendLine();
            }
            report.AppendLine();
        }

        return report.ToString();
    }

    /// <summary>
    /// Generates a summary of migration statistics
    /// </summary>
    /// <param name="suggestions">List of migration suggestions</param>
    /// <returns>Migration statistics summary</returns>
    public static string GenerateMigrationSummary(List<MigrationSuggestion> suggestions)
    {
        if (suggestions.Count == 0)
            return "No UUIDs found that need migration.";

        var summary = new StringBuilder();
        summary.AppendLine("=== Migration Summary ===");
        summary.AppendLine($"Total UUIDs to migrate: {suggestions.Count}");
        summary.AppendLine($"Files affected: {suggestions.Select(s => s.FilePath).Distinct().Count()}");
        summary.AppendLine();

        var typeBreakdown = suggestions.GroupBy(s => s.Type)
            .Select(g => new { Type = g.Key, Count = g.Count() })
            .OrderByDescending(x => x.Count);

        summary.AppendLine("Breakdown by type:");
        foreach (var breakdown in typeBreakdown)
        {
            summary.AppendLine($"  {breakdown.Type}: {breakdown.Count}");
        }

        summary.AppendLine();
        summary.AppendLine("Top files to migrate:");
        var topFiles = suggestions.GroupBy(s => s.FilePath)
            .Select(g => new { File = g.Key, Count = g.Count() })
            .OrderByDescending(x => x.Count)
            .Take(5);

        foreach (var file in topFiles)
        {
            summary.AppendLine($"  {file.File}: {file.Count} UUIDs");
        }

        return summary.ToString();
    }
} 