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
}