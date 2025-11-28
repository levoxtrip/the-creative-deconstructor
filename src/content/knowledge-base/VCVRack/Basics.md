

# Basics Modular Synthesis
Creating sound waves electronically or digitally is called *Synthesis*.

In comparison to pre-made synthesizer, *modular synthesis* allows us to choose which modules we want to use and in which order we want to connect them.

Synthesizer -> fixed structure, fixed signal path
Modular Synthesis -> modular structure, flexible signal path

## Signal Flow
The basic signal flow is from *source to output*.

Depending on their functionality modules have *input* and *output* which allows us to connect them with each other.

The order in which the modules are connected matter and has an influence on how the sound is gonna be at the end.
*Different order of modules creates different result.*

## 3 Stages
To create sounds in *modular synthesis* we can think of *three processes*:
*Generate A Sound -> Shape The Sound -> Animate The Sound*

### Generate Sound
One fundamental module to generate sound is `VCO`.

#### VCO - Voltage Controlled Oscillator
*Oscillation* is the repetitive variation of a value over time.

A `VCO` generates audio-frequency signals with different waveshapes that create wide range of sound with different timbres. We can think of *timbre* as the tone color.
The four basic waves are:
- *Sine*
- *Triangle*
- *Sawtooth*
- *Square*

[More about the waveforms here](#four-fundamental-waveforms)

Because an oscillator continuously repeats its cycle, the VCO creates a tone the keeps running. To create a single sound that stops after a certain time we need to *shape* the signal in the next step.

To output the sound we need an `Audio` module.

#### Audio
The `Audio` modules in VCV are audio interfaces devices that allow you to pass the sound to an external output unit. 
In VCV there are `Audio2`,`Audio8` and `Audio16` which define the amount of output channels.

#### VCA - Voltage-controlled amplifier
The `VCA` module receives a signal and multiplies it by the value of the *level* slider or the value of the *CV* input. It works similar to a volume control.

#### Scope
A `Scope` module allows us to visualize the shape of a signal. The *Time* knob lets us *"zoom in/out"*

#### Mixer
A `VCA Mix` allows us to combine multiple sound sources and balance and mix them together into on sound signal. Each channel input has it's own VCA. The `Mix Output` gives the mixed input sounds.

So in a *Mixer* we can combine sounds from modules like `VCO` and a `Noise` to create more nuanced and sophisticated sounds. In general for more tonal or pitch driven sounds you generally use a `VCO` module as the source.
For percussion or more textural sounds you can use `Noise` node as the source.

### Shape Sound
When we *shape* the sound we are changing the source shape to alter the sound to our liking.

#### VCF - Voltage-controlled filter
A `VCF` only lets certain frequencies pass and the rest gets *removed/filtered out*. This allows us to create emphasis or reduction of certain frequencies of the input signal.

It has two different outputs to provide
- *lopass* - let all low frequencies through
- *hipass* - let all high frequencies through

The *cutoff* defines how much of the input sound is gonna let through -> the frequencies lower than the knob position can go trough.

*Res* controls the resonance of the filter at the cutoff point - It feeds back a filtered slice around the cutoff back into itself. At high resonance the filter becomes an oscillator. A more generalized description is it introduces different timbre.

*Drive* adds some gain to the input signal which saturates it. The more drive the sharper the edge of the sound signal and the more aggressive/grungy.

#### Delay
The `delay` module records an audio signal and plays it back after some amount of time.

Put the delay at the end when you want the sound to fade out or continue to live although the source stopped emitting sound.

## Four fundamental waveforms
*Sine*,*Triangle*,*Sawtooth* and *Square* are the fundamental waveforms that are commonly used in modular.

The shape of the waves decides what timbre and harmonics the waves create.
- The smoother the wave the less or no harmonics - Sine wave
- The sharper the wave the more harmonics - Triangle, Sawtooth, Square

The sharper corners or jumps of the signal creates extra vibrations at multiples of the base frequency -> these are the harmonics.

### Sine
Sine wave is smooth and creates a mellow and clean tone. It can be used to create subbass sounds or soft melodies. Because the values of the sine-waves are smooth there are no additional harmonics.

### Triangle
A triangle wave moves linear on rise and fall. It creates fundamental frequency plus odd harmonics which diminish quickly.

Triangle waves create a *"brighter"* sound.

### Sawtooth
Sawtooth wave rises linearly and falls abruptly. It contains even and odd harmonics which create the *buzzing* sounds. They a great to generate string and brass sounds.

### Square
Square waves move between *high* and *low* values with a sharp edge/transition between them.
They contain their fundamental frequency and all odd harmonics.
Square waves are good for aggressive voices.

# Subtractive Synthesizer Voice