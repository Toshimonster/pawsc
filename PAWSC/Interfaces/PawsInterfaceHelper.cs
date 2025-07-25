namespace PAWSC.Interfaces;

public static class PawsInterfaceHelper {
    public static IEnumerable<Pixel> ConvertToRGBAPixels(IList<Byte> data) {
        if (data == null || data.Count % 4 != 0)
        {
            throw new ArgumentException("Buffer of pixels cannot be converted into pixels");
        }

        return Enumerable.Range(0, data.Count / 4)
            .Select(i => new Pixel(
                data[i * 4],
                data[i * 4 + 1],
                data[i * 4 + 2],
                data[i * 4 + 3]
            ));
    }
}