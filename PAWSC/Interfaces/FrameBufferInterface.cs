using System.Runtime.InteropServices;
using PAWSC.Runtime;

namespace PAWSC.Interfaces
{
    /// <summary>
    /// Interface to interact with a framebuffer device on a Linux system.
    /// Provides functionality to write pixel data and retrieve framebuffer details via ioctl.
    /// </summary>
    public class FrameBufferInterface(string frameBufferPath, int width, int height) : IPawsInterface
    {
        private string FrameBufferPath { get; } = frameBufferPath;
        private int Width { get; set; } = width;
        private int Height { get; set; } = height;

        /// <inheritdoc />
        public required string ID { get; set; }

        /// <inheritdoc />
        public void Initialise(PawsRuntime runtime)
        {
            //var x = GetFrameBufferInfo();
            //Width = (int)x.xres;
            //Height = (int)x.yres;
        }

        /// <inheritdoc />
        public void Accept(IList<byte> data)
        {
            int expectedSize = GetByteSize();
            if (data.Count != expectedSize)
                throw new ArgumentException($"Data length ({data.Count}) does not match expected framebuffer size ({expectedSize}).");

            try
            {
                using var fb = new FileStream(FrameBufferPath, FileMode.Open, FileAccess.Write);
                fb.Write(data.ToArray(), 0, expectedSize);
            }
            catch (Exception ex)
            {
                throw new IOException($"Failed to write data to framebuffer at '{FrameBufferPath}'.", ex);
            }
        }

        /// <inheritdoc />
        public int GetByteSize()
        {
            // Assuming 4 bytes per pixel (e.g., 32-bit color depth).
            return Width * Height * 4;
        }

        /// <summary>
        /// Currently broken. Segmentation fault.
        /// Retrieves detailed information about the framebuffer device using ioctl.
        /// </summary>
        /// <returns>A <see cref="FbVarScreenInfo"/> structure containing framebuffer info.</returns>
        /// <exception cref="FileNotFoundException">Thrown if the framebuffer device path does not exist.</exception>
        /// <exception cref="IOException">Thrown if the ioctl call fails.</exception>
        public FbVarScreenInfo GetFrameBufferInfo()
        {
            if (!File.Exists(FrameBufferPath))
                throw new FileNotFoundException($"Framebuffer device '{FrameBufferPath}' not found.");

            using var fb = new FileStream(FrameBufferPath, FileMode.Open, FileAccess.ReadWrite);
            var fbInfo = new FbVarScreenInfo();

            int ret = ioctl(fb.SafeFileHandle.DangerousGetHandle(), FBIOGET_VSCREENINFO, ref fbInfo);
            if (ret != 0)
            {
                int errno = Marshal.GetLastWin32Error();
                throw new IOException($"ioctl call to get framebuffer info failed with error code {errno}.");
            }

            return fbInfo;
        }

        #region ioctl and framebuffer native structures

        // ioctl request code to get variable screen info (from linux/fb.h)
        private const int FBIOGET_VSCREENINFO = 0x4600;

        /// <summary>
        /// Native structure corresponding to fb_var_screeninfo in Linux framebuffer API.
        /// Only a subset of fields is included for demonstration.
        /// </summary>
        [StructLayout(LayoutKind.Sequential)]
        public struct FbVarScreenInfo
        {
            public uint xres;           // visible resolution
            public uint yres;
            public uint xres_virtual;   // virtual resolution
            public uint yres_virtual;
            public uint xoffset;        // offset from virtual to visible
            public uint yoffset;
            public uint bits_per_pixel;
            public uint grayscale;
        }

        [DllImport("libc", SetLastError = true)]
        private static extern int ioctl(IntPtr fd, uint request, ref FbVarScreenInfo fbInfo);

        #endregion
    }
}
