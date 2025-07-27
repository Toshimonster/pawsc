using System.Runtime.InteropServices;
using PAWSC;
using PAWSC.Controllers;
using PAWSC.Controllers.Implementations;
using PAWSC.Interfaces;
using PAWSC.Interfaces.Implementations;
using PAWSC.Runtime;

class Program
{
    static void Main()
    {
        var x = new PawsRuntime();

        if (File.Exists("/dev/fb0"))
        {
            x.Interfaces.Add(new FrameBufferInterface("/dev/fb0", 320, 240)
            {
                Id = "!"
            });
        }
        else
        {
            x.Interfaces.Add(new TerminalInterface(10, 10)
            {
                Id = "!"
            });
        }
        
        x.Controllers.Add(new TestController("!!"));
        
        x.Start();
    }
}
