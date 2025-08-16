using System.Collections.ObjectModel;
using System.Diagnostics;
using PAWSC.Runtime;

namespace PAWSC.Interfaces;

public class PawsInterfaceManager : PawsItemManager<IPawsInterface>
{
    public int GetByteSize()
    {
        return GetAllValues().Sum(x => x.InterfaceInfo.GetByteSize());
    }

    public void Distribute(byte[]? data)
    {
        if (data == null) throw new ArgumentNullException(nameof(data));
        if (data.Length < GetByteSize()) throw new ArgumentException("Data is too small");

        var offset = 0;

        foreach (var inter in GetAllValues())
        {
            var byteSize = inter.InterfaceInfo.GetByteSize();
            var dataSegment = new ArraySegment<byte>(data, offset, byteSize);
            offset += byteSize;
            inter.Accept(dataSegment);
        }
    }
}
