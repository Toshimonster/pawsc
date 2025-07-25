using System.Collections.ObjectModel;
using System.Diagnostics;
using PAWSC.Runtime;

namespace PAWSC.Interfaces;

public class PawsInterfaceManager
{
    private readonly Dictionary<string, IPawsInterface> _interfaces = new Dictionary<string, IPawsInterface>();
    
    public IPawsInterface ById(string id)
    {
        return _interfaces[id];
    }

    public List<IPawsInterface> AllInterfaces()
    {
        return _interfaces.Values.ToList();
    }

    public int GetByteSize()
    {
        return _interfaces.Values.Sum(x => x.GetByteSize());
    }

    public void Distribute(byte[] data)
    {
        if (data.Length < GetByteSize()) throw new ArgumentException("Data is too small");
        var offset = 0;
        
        foreach (var inter in _interfaces.Values)
        {
            var byteSize = inter.GetByteSize();
            var dataSegment = new ArraySegment<byte>(data, offset, byteSize);
            offset += byteSize;
            inter.Accept(dataSegment);
        }
    }

    public void Initialise(PawsRuntime runtime)
    {
        foreach (var interfacesValue in _interfaces.Values)
        {
            interfacesValue.Initialise(runtime);
        }
    }

    public void Add(IPawsInterface pawsInterface)
    {
        _interfaces.Add(pawsInterface.ID, pawsInterface);
    }
}