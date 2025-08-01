using System.Collections.Concurrent;
using PAWSC.Interfaces;
using PAWSC.Runtime;
using SkiaSharp;

namespace PAWSC.Scenes.Implementations;

public abstract class SkiaSharpScene : SkiaSharpRasterScene
{
    protected SKImageInfo SceneImageInfo { get; }
    protected SKSurface Surface { get; }
    protected SKCanvas Canvas => Surface.Canvas;

    protected SkiaSharpScene(Identifier name, int width = 255, int height = 255, SKColorType colorType = SKColorType.Bgra8888) : base(name)
    {
        SceneImageInfo = new SKImageInfo(width, height, colorType);
        Surface = SKSurface.Create(SceneImageInfo);
    }

    public override void Initialise(PawsRuntime runtime)
    {
    }

    public override void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
    {
        // Clear or prepare the main canvas
        Canvas.Clear(SKColors.Transparent);

        // Draw the full scene once
        RenderScene(drawInfo);

        // Snapshot the whole scene after render
        using var snapshot = Surface.Snapshot();

        // For each interface, generate a view and send its image data
        foreach (var iface in mgr.GetAll())
        {
            var viewInfo = GetViewForInterface(iface);
            if (viewInfo is null) continue;

            var data = GetBytesForIface(iface, snapshot, viewInfo ?? throw new AccessViolationException());
            
            iface.Accept(new ReadOnlySpan<byte>(data));
        }
    }

    /// <summary>
    /// Override to implement the scene rendering on the full canvas.
    /// </summary>
    protected abstract void RenderScene(DrawInfo drawInfo);
    
    /// <summary>
    /// Defines a camera/view to crop or transform the main scene for an interface.
    /// </summary>
    protected virtual SKRect? GetViewForInterface(IPawsInterface iface)
    {
        // Default: full scene
        return new SKRect(0, 0, SceneImageInfo.Width, SceneImageInfo.Height);
    }
}

public abstract class SkiaSharpRasterScene(Identifier identifier) : BaseScene(identifier)
{
    public static SKImage ScaleImage(SKImage image, PawsInterfaceInfo ifaceInterfaceInfo)
    {
        // If the cropped size matches target resolution, return directly
        if (image.Width == ifaceInterfaceInfo.Width && 
            image.Height == ifaceInterfaceInfo.Height &&
            image.ColorType == GetColorType(ifaceInterfaceInfo))
        {
            return image;
        }
        
        var scaledInfo = new SKImageInfo(ifaceInterfaceInfo.Width, ifaceInterfaceInfo.Height, GetColorType(ifaceInterfaceInfo), image.AlphaType);
        using var modSurface = SKSurface.Create(scaledInfo);

        var modCanvas = modSurface.Canvas;
        modCanvas.Clear(SKColors.Transparent);

        // Draw cropped image scaled to target size
        var destRect = new SKRect(0, 0, ifaceInterfaceInfo.Width, ifaceInterfaceInfo.Height);
        modCanvas.DrawImage(image, destRect);

        // Return the scaled image snapshot
        return modSurface.Snapshot();
    }
    
    private static SKColorType GetColorType(PawsInterfaceInfo info)
    {
        return info.ByteRepresentation switch
        {
            PawsInterfaceInfo.PawsInterfaceByteRepresentation.Byte => SKColorType.Gray8,
            PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgb => SKColorType.Rgb888x,
            PawsInterfaceInfo.PawsInterfaceByteRepresentation.Rgba => SKColorType.Rgba8888,
            _ => throw new NotImplementedException()
        };
    }

    /// <summary>
    /// Creates a cropped or transformed image from the main snapshot based on the view rectangle.
    /// </summary>
    public static SKImage CreateViewImage(SKRect view, IPawsInterface iface, SKImage snapshot, SKImageInfo info)
    {
        if (snapshot == null)
            throw new InvalidOperationException("Main image snapshot is not ready.");

        // Clamp the view rect to valid bounds
        var clampedView = SKRect.Intersect(view, new SKRect(0, 0, info.Width, info.Height));
        var subset = new SKRectI(
            (int)clampedView.Left,
            (int)clampedView.Top,
            (int)clampedView.Right,
            (int)clampedView.Bottom);

        var cropped = snapshot.Subset(subset) ?? snapshot;
        return ScaleImage(cropped, iface.InterfaceInfo);
    }

    protected byte[] GetBytesForIface(IPawsInterface iface, SKImage img)
    {
        return GetBytesForIface(iface, img, new SKRect(0, 0, img.Width, img.Height));
    }
    
    protected byte[] GetBytesForIface(IPawsInterface iface, SKImage img, SKRect customView)
    {
        using SKImage viewImage = SkiaSharpScene.CreateViewImage(customView,
            iface,
            img,
            img.Info
        );

        var pixels = viewImage.PeekPixels();

        var len = iface.InterfaceInfo.GetByteSize();
        var interfaceBytes = iface.InterfaceInfo.ByteRepresentation.GetBytesPerPixel();
        var data = new byte[pixels.BytesSize];
        System.Runtime.InteropServices.Marshal.Copy(pixels.GetPixels(), data, 0, data.Length);

        return PawsInterfaceHelper.DropBytes(data, len, pixels.BytesPerPixel, interfaceBytes);
    }
}