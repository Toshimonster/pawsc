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
    public static readonly Guid CharacteristicUserDescription = new("00002901-0000-1000-8000-00805f9b34fb");
    public static readonly Guid CharacteristicPropertyDescription = new("00002902-0000-1000-8000-00805f9b34fb");

    #region Service UUIDs

    /// <summary>
    /// Main PAWS service UUID
    /// UUID is "PAWS"-version-serviceID-CharacteristicID-descriptorID
    /// </summary>
    public static readonly Guid PawsBaseService = new("50415753-0001-0001-0000-000000000000");

    /// <summary>
    /// Scene interaction service UUID
    /// </summary>
    public static readonly Guid SceneInteractionService = new("50415753-0001-0002-0000-000000000000");

    /// <summary>
    /// Device Info service UUID
    /// </summary>
    public static readonly Guid DeviceInfoService = new("50415753-0001-0003-0000-000000000000");

    #endregion

    #region Characteristic UUIDs

    public static class PawsBaseCharacteristics
    {
        public static readonly Guid SceneList = new("50415753-0001-0001-0001-000000000000");
        public static readonly Guid ControllerList = new("50415753-0001-0001-0002-000000000000");
        public static readonly Guid InterfaceList = new("50415753-0001-0001-0003-000000000000");

        public static readonly Guid ActiveScene = new("50415753-0001-0001-0004-000000000000");
        public static readonly Guid ActiveSceneCapabilities = new("50415753-0001-0001-0005-000000000000");
    }

    public static class SceneInteractionCharacteristics
    {
        public static readonly Guid InputControl = new("50415753-0001-0002-0001-000000000000");
        public static readonly Guid OutputEvents = new("50415753-0001-0002-0002-000000000000");
    }

    public static class DeviceInfoCharacteristics
    {
        public static readonly Guid Timestamp = new("50415753-0001-0003-0001-000000000000");
        public static readonly Guid Uptime = new("50415753-0001-0003-0002-000000000000");
        public static readonly Guid CpuTemp = new("50415753-0001-0003-0003-000000000000");
        public static readonly Guid CpuLoad = new("50415753-0001-0003-0004-000000000000");
        public static readonly Guid Network = new("50415753-0001-0003-0005-000000000000");
    }

    #endregion
}
