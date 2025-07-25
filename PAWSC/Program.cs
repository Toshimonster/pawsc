using System.Runtime.InteropServices;
using PAWSC;
using PAWSC.Controllers;
using PAWSC.Interfaces;
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
                ID = "!"
            });
        }
        else
        {
            x.Interfaces.Add(new TerminalInterface(10, 10)
            {
                ID = "!"
            });
        }
        
        x.Controllers.Add(new TestController("!!"));
        
        x.Start();
    }
}
