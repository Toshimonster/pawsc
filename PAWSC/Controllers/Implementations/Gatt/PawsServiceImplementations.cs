using System.Text;
using DotnetBleServer.Advertisements;
using DotnetBleServer.Core;
using DotnetBleServer.Gatt;
using DotnetBleServer.Gatt.BlueZModel;
using DotnetBleServer.Gatt.Description;
using PAWSC.Runtime;
using PAWSC.Scenes;
using PAWSC.Scenes.Implementations;
using PAWSC.Scenes.Implementations.State;

namespace PAWSC.Controllers.Implementations.Gatt;

public static class PawsServiceImplementations
{
    public abstract class PawsCharacteristic : PawsGattCharacteristic
    {
        protected PawsCharacteristic(PawsRuntime runtime, Guid uuid, CharacteristicFlags flags) : base(uuid, flags)
        {
            Runtime = runtime;
        }

        protected PawsRuntime Runtime { get; }
    }

    public abstract class PawsStateCharacteristic(PawsRuntime runtime, Guid uuid, CharacteristicFlags flags)
        : PawsCharacteristic(runtime, uuid, flags)
    {
        protected StateScene? ActiveStateScene
        {
            get
            {
                if (Runtime.ActiveScene is StateScene stateScene)
                {
                    return stateScene;
                }

                return null;
            }
        }
    }

    public abstract class PawsSceneCharacteristic<T>(PawsRuntime runtime, Guid uuid, CharacteristicFlags flags)
        : PawsCharacteristic(runtime, uuid, flags)
        where T : IPawsScene
    {
        protected T? ActiveScene
        {
            get
            {
                if (Runtime.ActiveScene is T scene)
                {
                    return scene;
                }

                return default;
            }
        }
    }
}
