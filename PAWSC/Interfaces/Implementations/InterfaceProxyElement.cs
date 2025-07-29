using PAWSC.Runtime;

namespace PAWSC.Interfaces.Implementations;

public class InterfaceProxyElement<T> : IPawsInterface where T : InterfaceProxyManager<T>
{
    public string Id { get; }
    public T ProxyManager { get; }

    public InterfaceProxyElement(string name, T mgr)
    {
        Id = name;
        ProxyManager = mgr;
    }

    public void Initialise(PawsRuntime runtime)
    {
        // Optional implementation
    }

    public void Accept(ReadOnlySpan<byte> data)
    {
        ProxyManager.AcceptProxy(data, this);
    }

    public PawsInterfaceInfo InterfaceInfo { get; init; } = new PawsInterfaceInfo();
}