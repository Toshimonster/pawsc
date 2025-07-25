using PAWSC.Runtime;

namespace PAWSC.Interfaces;

public class P45Matrix : IPawsInterface
{
    public void Initialise(PawsRuntime runtime)
    {
        throw new NotImplementedException();
    }

    public void Accept(IList<byte> data)
    {
        throw new NotImplementedException();
    }

    public int GetByteSize()
    {
        throw new NotImplementedException();
    }
    
    public required string ID { get; set; }
}