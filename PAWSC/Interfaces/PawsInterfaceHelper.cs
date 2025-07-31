namespace PAWSC.Interfaces;

public static class PawsInterfaceHelper
{
    public static void ConvertToRgbaPixels(ReadOnlySpan<byte> source, Span<Pixel> destination)
        => ConvertToPixels(source, destination, 4, hasAlpha: true);

    public static Pixel[] ConvertToRgbaPixels(ReadOnlySpan<byte> data)
    {
        var pixelBuffer = new Pixel[data.Length / 4];
        ConvertToRgbaPixels(data, pixelBuffer);
        return pixelBuffer;
    }

    public static void ConvertToRgbPixels(ReadOnlySpan<byte> source, Span<Pixel> destination)
        => ConvertToPixels(source, destination, 3, hasAlpha: false);

    public static Pixel[] ConvertToRgbPixels(ReadOnlySpan<byte> data)
    {
        var pixelBuffer = new Pixel[data.Length / 3];
        ConvertToRgbPixels(data, pixelBuffer);
        return pixelBuffer;
    }

    // General internal converter
    private static void ConvertToPixels(ReadOnlySpan<byte> source, Span<Pixel> destination, int stride, bool hasAlpha)
    {
        if (source.Length / stride != destination.Length)
            throw new ArgumentException("Mismatched pixel data size.");

        for (int i = 0; i < destination.Length; i++)
        {
            int baseIndex = i * stride;
            byte r = source[baseIndex];
            byte g = source[baseIndex + 1];
            byte b = source[baseIndex + 2];
            byte a = hasAlpha ? source[baseIndex + 3] : (byte)255;

            destination[i] = new Pixel(r, g, b, a);
        }
    }
    
    /// <summary>
    /// Reduces the byte size of pixel data by dropping excess bytes per pixel.
    /// </summary>
    /// <param name="from">The source byte array containing pixel data with <paramref name="bfrom"/> bytes per pixel.</param>
    /// <param name="size">The size of the resulting byte array to produce (usually width * height * bto).</param>
    /// <param name="bfrom">The number of bytes per pixel in the source data (must be greater than or equal to <paramref name="bto"/>).</param>
    /// <param name="bto">The target number of bytes per pixel in the output data.</param>
    /// <returns>
    /// A new byte array containing the reduced pixel data with <paramref name="bto"/> bytes per pixel.
    /// </returns>
    /// <exception cref="ArgumentException">Thrown if <paramref name="bfrom"/> is less than <paramref name="bto"/>.</exception>
    public static byte[] DropBytes(byte[] from, int size, int bfrom, int bto)
    {
        if (from == null)
            throw new ArgumentNullException(nameof(from));
        if (bfrom < bto)
            throw new ArgumentException("bfrom must be greater than or equal to bto", nameof(bfrom));
        if (bto <= 0)
            throw new ArgumentOutOfRangeException(nameof(bto), "bto must be positive");
        if (size <= 0)
            throw new ArgumentOutOfRangeException(nameof(size), "size must be positive");
        if (from.Length < (size / bto) * bfrom)
            throw new ArgumentException("Source array length is insufficient for the given parameters.");

        if (bfrom == bto)
            return from;

        var result = new byte[size];
        int pixelCount = size / bto;

        for (int pixelIndex = 0; pixelIndex < pixelCount; pixelIndex++)
        {
            int srcOffset = pixelIndex * bfrom;
            int dstOffset = pixelIndex * bto;
            Buffer.BlockCopy(from, srcOffset, result, dstOffset, bto);
        }

        return result;
    }

    /// <inheritdoc cref="DropBytes(byte[],int,int,int)"/>
    public static byte[] DropBytes(byte[] from, int bfrom, int bto)
    {
        return DropBytes(from, from.Length * (bfrom / bto), bfrom, bto);
    }
}