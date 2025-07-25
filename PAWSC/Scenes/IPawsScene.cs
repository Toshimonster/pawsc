using System.Data.SqlTypes;
using PAWSC.Interfaces;
using PAWSC.Runtime;

namespace PAWSC.Scenes;

public interface IPawsScene : IIdentifiable
{
    public void Initialize(PawsRuntime runtime);
    public Task Draw(PawsInterfaceManager mgr, DrawInfo drawInfo);
}

public record DrawInfo
{
    public DateTime Time { get; init; }
    public long Deltatime { get; init; }
}

public abstract class BaseScene : IPawsScene
{
    public BaseScene(String name)
    {
        ID = name;
    }
    public String ID { get; private set; }
    public abstract Task Draw(PawsInterfaceManager mgr, DrawInfo drawInfo);
    public abstract void Initialize(PawsRuntime runtime);
}

public class PulserScene : BaseScene
{
    public int Frequency { get; private set; } = 1000;
    private PulserLED[] Pulsers = [];

    public PulserScene(string name) : base(name)
    {
    }

    public override Task Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
    {
        byte[] buffer = new byte[Pulsers.Length];
        for (int i = 0; i < buffer.Length; i++)
        {
            buffer[i] = Pulsers[i].GetIntencity(drawInfo.Time.Ticks);
        }
        mgr.Distribute(buffer);

        return Task.CompletedTask;
    }

    public override void Initialize(PawsRuntime runtime)
    {
        int leds = runtime.Interfaces?.GetByteSize() ?? 1000;
        Pulsers = new PulserLED[leds];
        for (int i = 0; i < leds; i++)
        {
            Pulsers[i] = new PulserLED(Frequency);
        }
    }

    public class PulserLED(int Frequency)
    {
        public int Frequency { get; private set; } = Frequency;
        public int Offset { get; private set; } = System.Random.Shared.Next();

        public byte GetIntencity(long t)
        {
            return (byte)(0xff &
                (Convert.ToInt32(
                    Math.Max(0,
                        255 * Math.Sin(Frequency * t / 1000))
                ))
            );
        }
    }
}