using PAWSC.Runtime;

namespace PAWSC.Interfaces;

/// <summary>
/// Represents information about a PAWS interface including dimensions and byte representation.
/// </summary>
public record PawsInterfaceInfo
{
    /// <summary>
    /// Gets the width of the interface in pixels.
    /// </summary>
    public int Width { get; init; } = 1;
    
    /// <summary>
    /// Gets the height of the interface in pixels.
    /// </summary>
    public int Height { get; init; } = 1;
    
    /// <summary>
    /// Gets the byte representation format for the interface.
    /// </summary>
    public PawsInterfaceByteRepresentation ByteRepresentation { get; init; }

    /// <summary>
    /// Defines the byte representation formats for pixel data.
    /// </summary>
    public enum PawsInterfaceByteRepresentation
    {
        /// <summary>
        /// Single byte per pixel (grayscale).
        /// </summary>
        [ByteSize(1)]
        Byte,
        
        /// <summary>
        /// Three bytes per pixel (RGB).
        /// </summary>
        [ByteSize(3)]
        Rgb,
        
        /// <summary>
        /// Four bytes per pixel (RGBA).
        /// </summary>
        [ByteSize(4)]
        Rgba
    }
    
    /// <summary>
    /// Calculates the total byte size needed for the interface.
    /// </summary>
    /// <returns>The total number of bytes required.</returns>
    public int GetByteSize()
    {
        return ByteRepresentation.GetBytesPerPixel() * Width * Height;
    }
}

/// <summary>
/// Represents a PAWS interface that can accept data and provide display information.
/// </summary>
public interface IPawsInterface : IIdentifiable, IPawsInitialisable
{
    /// <summary>
    /// Accepts data to be processed by the interface.
    /// </summary>
    /// <param name="data">The data to be processed.</param>
    void Accept(ReadOnlySpan<byte> data);
    
    /// <summary>
    /// Gets information about the interface.
    /// </summary>
    PawsInterfaceInfo InterfaceInfo { get; }
}

/// <summary>
/// Represents a pixel with RGBA color components.
/// </summary>
public readonly struct Pixel
{
    /// <summary>
    /// Gets the red component (0-255).
    /// </summary>
    public readonly byte R { get; }
    
    /// <summary>
    /// Gets the green component (0-255).
    /// </summary>
    public readonly byte G { get; }
    
    /// <summary>
    /// Gets the blue component (0-255).
    /// </summary>
    public readonly byte B { get; }
    
    /// <summary>
    /// Gets the alpha component (0-255).
    /// </summary>
    public readonly byte A { get; }

    /// <summary>
    /// Initializes a new instance of the Pixel struct.
    /// </summary>
    /// <param name="r">Red component.</param>
    /// <param name="g">Green component.</param>
    /// <param name="b">Blue component.</param>
    /// <param name="a">Alpha component.</param>
    public Pixel(byte r, byte g, byte b, byte a)
    {
        R = r;
        G = g;
        B = b;
        A = a;
    }

    /// <summary>
    /// Applies the alpha channel to the RGB components.
    /// </summary>
    /// <returns>A new pixel with alpha-applied RGB values.</returns>
    public Pixel ApplyToRgb()
    {
        var delta = A / 255f;
        return new Pixel(
            (byte)(R * delta), 
            (byte)(G * delta), 
            (byte)(B * delta), 
            255);
    }
}