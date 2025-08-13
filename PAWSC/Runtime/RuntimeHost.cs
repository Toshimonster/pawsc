namespace PAWSC.Runtime;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

public static class RuntimeHost
{
    public static async Task MainHosted()
    {
        var x = Host.CreateApplicationBuilder([]);
        x.Services.AddSingleton<PawsRuntime>();

        await x.Build().StartAsync();
    }
}
