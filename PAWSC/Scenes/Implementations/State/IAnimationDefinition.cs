namespace PAWSC.Scenes.Implementations.State;

public interface IAnimationDefinition
{
    public string FilePath { get; }
    public PawsStateDescription Description { get; }
    public IInterfaceDrawingScheme InterfaceScheme { get; }


    public interface IInterfaceDrawingScheme
    {

    }
}

public record AnimationDefinition : IAnimationDefinition
{

}
