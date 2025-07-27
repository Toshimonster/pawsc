using System.Reflection;
using PAWSC.Interfaces;

namespace PAWSC;

public static class Extensions
{
    public static int GetBytesPerPixel(this PawsInterfaceInfo.PawsInterfaceByteRepresentation representation)
    {
        var memberInfo = typeof(PawsInterfaceInfo.PawsInterfaceByteRepresentation)
            .GetMember(representation.ToString())
            .FirstOrDefault();

        var attr = memberInfo?.GetCustomAttribute<ByteSizeAttribute>();

        if (attr != null)
            return attr.Value;

        throw new ArgumentException($"Byte size not defined for representation: {representation}");
    }
}

[AttributeUsage(AttributeTargets.Field)]
public sealed class ByteSizeAttribute(int value) : Attribute
{
    public int Value { get; } = value;
}
