using PAWSC.Runtime;

namespace PAWSC.Interfaces.Implementations;

public class InterfaceProxyElement<T> : IPawsInterface where T : InterfaceProxyManager<T>
{
    public Identifier Id { get; }
    public T ProxyManager { get; }

    public InterfaceProxyElement(Identifier identifier, T mgr)
    {
        Id = identifier;
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