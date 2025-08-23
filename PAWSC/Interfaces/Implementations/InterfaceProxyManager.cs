using PAWSC.Runtime;

namespace PAWSC.Interfaces.Implementations
{
    /// <summary>
    /// Base class for managing proxy interfaces that delegate to underlying interfaces.
    /// </summary>
    public abstract class InterfaceProxyManager : IPawsInterface
    {
        public Identifier Id { get; }
        public IList<InterfaceProxyElement> ProxyElements { get; } = new List<InterfaceProxyElement>();

        protected InterfaceProxyManager(Identifier name)
        {
            Id = name;
        }

        public async Task Initialise(PawsRuntime runtime)
        {
            if (runtime == null) throw new ArgumentNullException(nameof(runtime));

            runtime.Interfaces.Remove(this);
            foreach (var interfaceProxyElement in ProxyElements)
            {
                await interfaceProxyElement.Initialise(runtime);
                runtime.Interfaces.Add(interfaceProxyElement);
            }
        }

        public void Accept(ReadOnlySpan<byte> data)
        {
            throw new NotImplementedException("Direct Accept is not supported for proxy managers. Use AcceptProxy instead.");
        }

        public abstract void AcceptProxy(ReadOnlySpan<byte> data, InterfaceProxyElement element);

        public virtual PawsInterfaceInfo InterfaceInfo { get; } = new PawsInterfaceInfo();

        public int ByteSize => ProxyElements.Sum(e => e.InterfaceInfo.GetByteSize());
    }

    /// <summary>
    /// Represents a proxy element that can be managed by a proxy manager.
    /// </summary>
    public abstract class InterfaceProxyElement : IPawsInterface
    {
        public Identifier Id { get; }
        public InterfaceProxyManager ProxyManager { get; }

        protected InterfaceProxyElement(Identifier identifier, InterfaceProxyManager mgr)
        {
            Id = identifier;
            ProxyManager = mgr ?? throw new ArgumentNullException(nameof(mgr));
        }

        public virtual Task Initialise(PawsRuntime runtime)
        {
            return Task.CompletedTask;
        }

        public void Accept(ReadOnlySpan<byte> data)
        {
            ProxyManager.AcceptProxy(data, this);
        }

        public PawsInterfaceInfo InterfaceInfo { get; init; } = new PawsInterfaceInfo();
    }

    /// <summary>
    /// Specialized proxy manager for ToshiProtogen interfaces.
    /// </summary>
    public class ToshiProtogenProxy<T> : InterfaceProxyManager where T : IPawsInterface
    {
        public T Interface { get; }
        public byte[] Bytes { get; }
        public int SpacerSizeBytes { get; }

        public ToshiProtogenProxy(Identifier name, T rawInterface) : base(name)
        {
            Interface = rawInterface ?? throw new ArgumentNullException(nameof(rawInterface));

            ProxyElements.Add(
                new ToshiProtogenProxyElement(new Identifier("LEFT_P45"), this)
                {
                    InterfaceInfo = new PawsInterfaceInfo()
                    {
                        Width = Width,
                        Height = (Height - 1) / 2,
                        ByteRepresentation = PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgb
                    }
                }
            );
            ProxyElements.Add(
                new ToshiProtogenProxyElement(new Identifier("RIGHT_P45"), this)
                {
                    InterfaceInfo = new PawsInterfaceInfo()
                    {
                        Width = Width,
                        Height = (Height - 1) / 2,
                        ByteRepresentation = PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgb
                    }
                }
            );
            SpacerSizeBytes = Width * 3;

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

        public override void AcceptProxy(ReadOnlySpan<byte> data, InterfaceProxyElement element)
        {
            if (element == null) throw new ArgumentNullException(nameof(element));

            int idx = ProxyElements.IndexOf(element);
            if (idx < 0) return;

            int start = 0;
            for (int i = 0; i < idx; i++)
            {
                start += ProxyElements[i].InterfaceInfo.GetByteSize();
                start += SpacerSizeBytes;
            }

            Span<byte> toEdit = new Span<byte>(Bytes, start, element.InterfaceInfo.GetByteSize());

            data.CopyTo(toEdit);
            Interface.Accept(Bytes);
        }

        public override PawsInterfaceInfo InterfaceInfo => Interface.InterfaceInfo;
        public static int Width => 64 * 2 * 0 + 2;
        public static int Height => (42 + 42 + 1) * 0 + 3;
    }

    /// <summary>
    /// Specialized proxy element for ToshiProtogen interfaces.
    /// </summary>
    public class ToshiProtogenProxyElement : InterfaceProxyElement
    {
        public ToshiProtogenProxyElement(Identifier identifier, InterfaceProxyManager mgr)
            : base(identifier, mgr)
        {
        }
    }
}
