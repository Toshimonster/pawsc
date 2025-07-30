using PAWSC.Interfaces;
using PAWSC.Runtime;

namespace PAWSC.Scenes.Implementations;

public class PulserScene(Identifier name) : BaseScene(name)
{
    private double Frequency { get; set; } = 0.001;
    private PulserLed[] _pulsers = [];

    public override void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
    {
        var buffer = new byte[_pulsers.Length];
        for (var i = 0; i < buffer.Length; i += 3)
        {
            var intencity = _pulsers[i / 3].GetIntencity(drawInfo.Time.Ticks);
            buffer[i] = intencity;
            buffer[i + 1] = intencity;
            buffer[i + 2] = intencity;
        }
        mgr.Distribute(buffer);
    }

    public override void Initialise(PawsRuntime runtime)
    {
        var leds = runtime.Interfaces?.GetByteSize() ?? 1000;
        _pulsers = new PulserLed[leds];
        for (int i = 0; i < leds; i++)
        {
            _pulsers[i] = new PulserLed(Frequency * Random.Shared.NextDouble());
        }
    }

    private class PulserLed(double frequency)
    {
        private double Frequency { get; set; } = frequency;
        public int Offset { get; private set; } = System.Random.Shared.Next();

        public byte GetIntencity(long t)
        {
            return (byte)(0xff &
                          (Convert.ToInt32(
                              Math.Max(0,
                                  255 * Math.Sin(Frequency * (t / 2000)))
                          ))
                );
        }
    }
}