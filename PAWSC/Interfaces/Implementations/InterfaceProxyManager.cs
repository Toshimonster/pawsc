using PAWSC.Runtime;

namespace PAWSC.Interfaces.Implementations
{
    public abstract class InterfaceProxyManager<T> : IPawsInterface where T : InterfaceProxyManager<T>
    {
        public string Id { get; private set; }
        public IList<InterfaceProxyElement<T>> ProxyElements { get; } = new List<InterfaceProxyElement<T>>();

        protected InterfaceProxyManager(string name)
        {
            Id = name;
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

        public int ByteSize => ProxyElements.Sum(e => e.InterfaceInfo.GetByteSize());
    }

    public class ToshiProtogenProxy<T> : InterfaceProxyManager<ToshiProtogenProxy<T>> where T: IPawsInterface
    {
        public T Interface;
        public byte[] Bytes;
        public int SpacerSizeBytes;
        public ToshiProtogenProxy(string name, T rawInterface): base(name)
        {
            Interface = rawInterface;
            
            ProxyElements.Add(
                new InterfaceProxyElement<ToshiProtogenProxy<T>>("LEFT_P45", this)
                {
                    InterfaceInfo = new PawsInterfaceInfo()
                    {
                        Width = 128,
                        Height = 64,
                        ByteRepresentation = PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgb
                    }
                }
            );
            ProxyElements.Add(
                new InterfaceProxyElement<ToshiProtogenProxy<T>>("RIGHT_P45", this)
                {
                    InterfaceInfo = new PawsInterfaceInfo()
                    {
                        Width = 128,
                        Height = 64,
                        ByteRepresentation = PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgb
                    }
                }
            );
            SpacerSizeBytes = 128 * 3;

            Bytes = new byte[ByteSize + (SpacerSizeBytes * (ProxyElements.Count - 1))];
        }

        public override void AcceptProxy(ReadOnlySpan<byte> data, InterfaceProxyElement<ToshiProtogenProxy<T>> test)
        {
            int idx = ProxyElements.IndexOf(test);
            if (idx < 0) return;

            int start = 0;
            for (int i = 0; i < idx; i++)
            {
                start += ProxyElements[i].InterfaceInfo.GetByteSize();
                start += SpacerSizeBytes;
            }

            Span<byte> toEdit = new Span<byte>(Bytes, start, test.InterfaceInfo.GetByteSize());
            
            data.CopyTo(toEdit);
            Interface.Accept(Bytes);
        }
    }
}