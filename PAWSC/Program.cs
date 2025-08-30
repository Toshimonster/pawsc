using System.Runtime.InteropServices;
using PAWSC;
using PAWSC.Controllers;
using PAWSC.Controllers.Implementations;
using PAWSC.Controllers.Implementations.Gatt;
using PAWSC.Interfaces;
using PAWSC.Interfaces.Implementations;
using PAWSC.Runtime;
using PAWSC.Scenes.Implementations;

class Program
{
    static async Task<int> Main()
    {
        try
        {
            using var runtime = new PawsRuntime();
            runtime.Subscribe<PawsCommands.Log>((e) =>
            {
                Console.WriteLine($"[{e.Level}] {e.Message}");
                if (e.Exception is not null)
                {
                    Console.WriteLine(e.Exception.ToString());
                }
            });

            // Configure interfaces based on environment
            ConfigureInterfaces(runtime);

            // Add controllers
            ConfigureControllers(runtime);

            // Start the runtime
            await runtime.Start();

            // Keep the application running
            Console.WriteLine("PAWSC runtime started. Press Ctrl+C to exit.");
            await Task.Delay(Timeout.Infinite);

            return 0;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Fatal error: {ex}");
            return -1;
        }
    }

    private static void ConfigureInterfaces(PawsRuntime runtime)
    {
        if (File.Exists("/dev/fb0") && !Environment.MachineName.Equals("ToshiArch"))
        {
            // Linux framebuffer interface
            runtime.Interfaces.Add(new FrameBufferInterface("/dev/fb0", 320, 240)
            {
                Id = new Identifier("LEFT_P45")
            });
        }
        else
        {
            bool emulateProto = false;
            if (emulateProto)
            {
                // Terminal interface for development/testing
                runtime.Interfaces.Add(new ToshiProtogenProxy<TerminalInterface>(
                    new Identifier("TEST"),
                    new TerminalInterface(ToshiProtogenProxy<TerminalInterface>.Width,
                        ToshiProtogenProxy<TerminalInterface>.Height)
                    {
                        Id = new Identifier("Term")
                    }));
            }
            else
            {
                runtime.Interfaces.Add(new TerminalInterface(64, 32)
                {
                    Id = new Identifier("LEFT_P45")
                });
            }
        }
    }

    private static void ConfigureControllers(PawsRuntime runtime)
    {
        try
        {
            // Add Bluetooth controller if available
            var testController = new TestController(Identifier.Random());
            runtime.Controllers.Add(testController);
            var terminalController = new TerminalController(Identifier.Random());
            runtime.Controllers.Add(terminalController);
            Console.WriteLine("✅ Controllers added successfully");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"⚠️  Failed to add test controller: {ex.Message}");
            Console.WriteLine("   The application will continue without Bluetooth functionality.");
            Console.WriteLine("   See BLUETOOTH_TROUBLESHOOTING.md for solutions.");
        }
    }
}
