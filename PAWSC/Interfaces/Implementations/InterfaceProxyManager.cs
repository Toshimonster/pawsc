using PAWSC.Runtime;

namespace PAWSC.Interfaces.Implementations
{
    public abstract class InterfaceProxyManager<T> : IPawsInterface where T : InterfaceProxyManager<T>
    {
        public Identifier Id { get; private set; }
        public IList<InterfaceProxyElement<T>> ProxyElements { get; } = new List<InterfaceProxyElement<T>>();

        protected InterfaceProxyManager(Identifier name)
        {
            Id = name;
        }

        public void Initialise(PawsRuntime runtime)
        {
            runtime.Interfaces.Remove(this);
            foreach (var interfaceProxyElement in ProxyElements)
            {
                interfaceProxyElement.Initialise(runtime);
                runtime.Interfaces.Add(interfaceProxyElement);
            }
        }

        public void Accept(ReadOnlySpan<byte> data)
        {
            throw new NotImplementedException();
        }

        public abstract void AcceptProxy(ReadOnlySpan<byte> data, InterfaceProxyElement<T> test);

        public virtual PawsInterfaceInfo InterfaceInfo { get; } = new PawsInterfaceInfo();

        public int ByteSize => ProxyElements.Sum(e => e.InterfaceInfo.GetByteSize());
    }

    public class ToshiProtogenProxy<T> : InterfaceProxyManager<ToshiProtogenProxy<T>> where T: IPawsInterface
    {
        public T Interface;
        public byte[] Bytes;
        public int SpacerSizeBytes;
        public ToshiProtogenProxy(Identifier name, T rawInterface): base(name)
        {
            Interface = rawInterface;
            
            ProxyElements.Add(
                new InterfaceProxyElement<ToshiProtogenProxy<T>>(new Identifier("LEFT_P45"), this)
                {
                    InterfaceInfo = new PawsInterfaceInfo()
                    {
                        Width = ToshiProtogenProxy<T>.Width,
                        Height = (ToshiProtogenProxy<T>.Height - 1) / 2,
                        ByteRepresentation = PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgb
                    }
                }
            );
            ProxyElements.Add(
                new InterfaceProxyElement<ToshiProtogenProxy<T>>(new Identifier("RIGHT_P45"), this)
                {
                    InterfaceInfo = new PawsInterfaceInfo()
                    {
                        Width = ToshiProtogenProxy<T>.Width,
                        Height = (ToshiProtogenProxy<T>.Height - 1) / 2,
                        ByteRepresentation = PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgb
                    }
                }
            );
            SpacerSizeBytes = ToshiProtogenProxy<T>.Width * 3;
            
            Bytes = new byte[rawInterface.InterfaceInfo.GetByteSize()];

            PopulateSpacers(30);
        }

        private void PopulateSpacers(byte color = 255)
        {
            if (ProxyElements.Count <= 0) return;
            int start = ProxyElements[0].InterfaceInfo.GetByteSize();
            for (int i = 1; i < ProxyElements.Count; i++)
            {
                int byteSize = ProxyElements[i].InterfaceInfo.GetByteSize();
                new Span<byte>(Bytes, start, byteSize).Fill(color);
                start += byteSize;
            }
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

        public override PawsInterfaceInfo InterfaceInfo => Interface.InterfaceInfo;
        public static int Width =>  64 * 2;
        public static int Height => 42 + 42 + 1;
    }
}