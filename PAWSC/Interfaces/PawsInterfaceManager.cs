using System.Collections.ObjectModel;
using System.Diagnostics;

namespace PAWSC.Interfaces;

public class PawsInterfaceManager
{
    private readonly Dictionary<String, IPawsInterface> Interfaces = new Dictionary<string, IPawsInterface>();
    
    public IPawsInterface ByID(String id)
    {
        return Interfaces[id];
    }

    public List<IPawsInterface> AllInterfaces()
    {
        return Interfaces.Values.ToList();
    }

    public int GetByteSize()
    {
        return Interfaces.Values.Sum(x => x.GetByteSize());
    }

    public void Distribute(Byte[] data)
    {
        if (data.Length < GetByteSize()) throw new ArgumentException("Data is too small");
        int offset = 0;
        
        foreach (var inter in Interfaces.Values)
        {
            int byteSize = inter.GetByteSize();
            ArraySegment<Byte> dataSegment = new ArraySegment<Byte>(data, offset, byteSize);
            offset += byteSize;
            inter.Accept(dataSegment);
        }
    }
}