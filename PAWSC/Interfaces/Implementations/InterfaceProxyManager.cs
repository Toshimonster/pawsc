using PAWSC.Runtime;

namespace PAWSC.Interfaces.Implementations
{
    public abstract class InterfaceProxyManager<T> : IPawsInterface where T : InterfaceProxyManager<T>
    {
        public string Id { get; private set; }
        public IList<InterfaceProxyElement<T>> ProxyElements { get; private set; }

        public InterfaceProxyManager(string name, IList<InterfaceProxyElement<T>> elements)
        {
            Id = name;
            ProxyElements = elements;
        }

        public void Initialise(PawsRuntime runtime)
        {
            runtime.Interfaces.Remove(this);
            foreach (var interfaceProxyElement in ProxyElements)
            {
                interfaceProxyElement.Initialise(runtime);
            }
        }

        public void Accept(ReadOnlySpan<byte> data)
        {
            throw new NotImplementedException();
        }

        public abstract void AcceptProxy(ReadOnlySpan<byte> data, InterfaceProxyElement<T> test);

        public PawsInterfaceInfo InterfaceInfo { get; } = new PawsInterfaceInfo();
    }

    public class ToshiProtogenProxy : InterfaceProxyManager<ToshiProtogenProxy>
    {
        public ToshiProtogenProxy(string name, IList<InterfaceProxyElement<ToshiProtogenProxy>> elements) : base(name, elements)
        {
        }

        public override void AcceptProxy(ReadOnlySpan<byte> data, InterfaceProxyElement<ToshiProtogenProxy> test)
        {
            throw new NotImplementedException();
        }
    }
}