using PAWSC.Runtime;

namespace PAWSC.Interfaces.Implementations;

public class P45Matrix : IPawsInterface
{
    public void Initialise(PawsRuntime runtime)
    {
        throw new NotImplementedException();
    }

    public void Accept(ReadOnlySpan<byte> data)
    {
        throw new NotImplementedException();
    }

    public required PawsInterfaceInfo InterfaceInfo { get; init; }

    public int GetByteSize()
    {
        throw new NotImplementedException();
    }

    public required Identifier Id { get; init; }
}