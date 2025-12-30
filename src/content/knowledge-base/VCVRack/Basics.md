---
title:modular
---

https://de.wikipedia.org/wiki/Klangsynthese
https://de.wikipedia.org/wiki/Synthesizer
https://de.wikipedia.org/wiki/Modularer_Synthesizer

# Basics Modular Synthesis
Creating sound waves electronically or digitally is called *Synthesis*.

A pre-made synthesizer has predefined amount of generators, filters and modulators which are combined in a fixed order.

In comparison to pre-made synthesizer, *modular synthesis* allows us to choose which components/modules we want to use and in which order we want to connect them.

Synthesizer -> fixed structure, fixed signal path
Modular Synthesis -> modular structure, flexible signal path

## Signal Flow
The basic signal flow is from *source to output*.

Depending on their functionality modules have *input* and *output* which allows us to connect them with each other.

The order in which the modules are connected matter and has an influence on how the sound is gonna be at the end.
*Different order of modules creates different result.*

The signal to communicate between the modules is *voltage*. Voltage is the *force* that pushes electrical charges(eletrons) through a circuit. The VCVRack/Eurorack modules work in a maximum value span of 10 Volt. 
Example voltage spans are : 
-5V to 5V
0 to 10V
0 to 1V

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

*Res* controls the resonance of the filter at the cutoff point - It feeds back a filtered slice around the cutoff back into itself. At high resonance the filter becomes an oscillator and produces a sine wave at the cutoff frequency. A more generalized description is it introduces different timbre.

*Drive* adds some gain to the input signal which saturates it. The more drive the sharper the edge of the sound signal and the more aggressive/grungy.

### Animate Sound
When we have the sound shaped we want to animate it over time or make it reactive to other values or even interact with it ourself via keyboard, slider etc.

In modular synthesis a process called *modulation* is used, where a signal(modulator) affects another signal(the carrier) or parameters of a module over time. 

#### Control Voltage(CV)
To apply the modulation we use a *control voltage(CV)*. *Control Voltage* is one of the fundamentals of modular synthesis. It allows the communication between modules to control and manipulate parameters like *pitch, frequency, filter cutoff, amplitude* and more.

In VCV the cables carry the same type of signal - a floating-point audio-rate signal(44.1 kHz or 48 khz). Conceptually this represents a continuous voltage(smooth signal without step) that can vary over time, measured in volts.

The *CV* can be unipolar or bipolar:
*bipolar:*A control voltage signal that can have positive and negative values. For example a `LFO` signal that has its center at 0V and its peaks and troths at 5V and -5V. Useful when you want your modulation to swing above and below a center.

*unipolar:* A control voltage signal that is only positive usually between 0V and 10V. It is useful when you want your modulation to go only in one direction from a baseline.

To be able to control how much a control voltage is effecting a parameter of a module they have *attenuator/attenuverter*. They work like a light dimmer - when a cable is connected to the input, the signal flows the whole time but you control how much of it is going through.

*Attenuator*: Zero position is on the left down - rotation to the right applies positive modulation

*Attenuverter*: Zero position in the middle. - rotation to the right applies positive modulations and rotation to the left applies negative modulation; it inverts the modulation/flips it upside down and inverts it to the negative. So the *Attenuverter* is useful when you want the modulation to move in the opposite direction.

In analog modular hardware the voltage range differs between audio(AC coupled) and control voltage(DC coupled).

##### Low Frequency Oscillator(LFO)
A `LFO` generates a low frequency waveform lower than 20 Hz that is typically used to modulate other modules. Similar to `VCO`, we can use sine, triangle, sawtooth and square waveforms.  

The `Freq` controls the pitch of the oscillator.

`OFST` toogles between uni- and bipolar signal.

The `Pulse Width` allows to control the high portion of the square wave.


##### Trigger and Gates
`Trigger` and `Gate` signal get used to control the timing of events like:
- synchronizing modules
- Initiation of envelopes
- Turning modules active/inactive

They have to states `HIGH` and `LOW`.

![Trigger Gate Difference](/img/VCV/TriggerGateDifference.png)

A `trigger` is a short burst voltage that goes `HIGH` and directly changes its state back to `LOW`. There is no *ON* phase. We use a trigger as clock signal or to trigger sounds in an envelope that don't have a sustain phase, for example percussion sounds like a kick or a hi-hat where you don't need a sustain phase.

A `Gate` is a longer, sustained signal that stays `HIGH` for a period of time till it returns to `LOW`. This could be a note playing for example or controlling the on/off state of modules and audio signals.

With a `SQRT` signal of a LFO we can create `Trigger`/`Clock` and `Gate` signals. `Pulse Width` definees how long the `HIGH/ON`signal is.


##### Clock
A *clock* signal is a steady stream of pulses/triggers that can be used to synchronize modules. This synchronization is essential to produce precise and complex rhythms and pattern that align to an overall tempo.

But the clock signal does not necessarily mean the speed of something. In `Sequencer` modules one clock pulse means go one step further or next order of operation.

To create a *clock* signal you can use a `LFO` with a square-wave which has a pulse with of 1%. In VCV there are also special clock modules.

The `LFO` doesn't show a measurement like BPMs so we need this little formula
*BPM = Hz * 60*

Here are also some common BPM values:
BPM     Hz          Style/Use
60      1.0 Hz      Very slow, one beat per second
80      1.33 Hz     Slow ballad
90      1.5 Hz      Hip-hop, downtempo
100     1.67 Hz     Mid-tempo pop 
110     1.83 Hz     House, disco
120     2.0 Hz      Standard house/techno
128     2.13 Hz     EDM, trance 
140     2.33 Hz     Drum & bass, dubstep 
150     2.5 Hz      Hardstyle 
160     2.67 Hz     Hardcore, fast techno 
174     2.9 Hz      Jungle/DnB

We can create a *variable clock* where the frequency of the clock signal changes over time. For that we modulate the frequency of our *clock* `LFO` with a signal from another `LFO` signal.

## V/OCT
*Volt per Octave* is a standard way of controlling musical pitch with voltage:
- one octave equals 1 Volt difference. Going from C4 to C5 requires 1 Volt increase
- one semitone equals 1/12 volt(approx. 0.0833 volts)

A semitone is the smallest step between notes in Western music. Each semitone requires adding or subtracting 0.0833 volts.

An octave has 12 semitones, including the 8 whitekeys on a piano - CDEFGABC. Different octaves create higher or lower sounds. When working with midi devices, they output a certain value for the specific nodes - midi value 48 -> c3. In synthesis we work with Volt:
-1V = C1
0V = C2
1V = C3
2V = C4
3V = C5
4V = C6

The `Rescale` or `Quantizer` module in VCV is helpful to map your *control voltage* into a voltage range of the pitch that you want to create.

### Quantizer
The `Quantizer` modules converts a CV signal into steps on a scale and allows us to stay in a specific scale and choose musical intervals.

It maps the incoming CV signal to the values of the scales.
!!!
https://www.youtube.com/watch?v=FYJiFe2S_II

#### Tuning Oscillators
If you want that the *oscillators* are all tuned and in the same octave you can use `Quantizer`, only activate the lowest c key. Then you output that into a `Mult` node, which copies the input into multiple outputs and then you can connect these to all your `V/Oct` inputs of your oscillators.

## Subtractive Synthesizer Voice
Because the `VCO` or `Noise` modules are outputting a continuous audio signal we want to convert them into notes with a start and an end. For that we can create a *subtractive synthesizer voice*.

The idea of a *subtractive synthesizer voice* is that we use modules like an `Envelope` or `Filter` to subtract parts of a source signal. 

You can begin with a `VCA` to regulate the amplitude/volume information of the sound. To control how the `VCA` modulates the input signal we use an `ADSR Envelope Generator`. It needs a trigger/gate signal to be executed.

![Sequencer Module Img](/img/VCV/BasicSubstractingPatch.png)

We then can further shape the note with for example a `VCF`.

#### Sequencer
A sequencer holds a sequence of voltages or events like triggers that allow to control for examples pitches or modulation. By inputting a clock signal it jumps one step further per input signal.

![Sequencer Module Img](/img/VCV/Sequencer.png)
The VCV `Sequencer` has an internal clock signal. Every time the clock signal triggers the `Sequencer` goes one step further through the values of the attenuator of the first row.

##### Gate Sequencer
A `Gate Sequencer` allows us to create rhythmic pattern where on each `CLK` input there will be outputted a Gate/Trigger signal or not.
![Basic Gate Sequencer Module Img](/img/VCV/BasicGateSequencerVCV.png)

##### Polymeter
When you use different rhythmic cycles that run independently and that doesn't repeat at the same time, it is called *polymeter*. To create a *polymeter* we can use two sequencer that have the same `CLK` input and give each sequencer different amount of steps.

![PolymeterSequencer Img](/img/VCV/PolymeterSequencer.png)

The two sequencees will cycle through a certain amount of steps before they realign at the same starting point together. This creates evolving, shifting rhythmic relationships.

#### Envelope Generator
Envelope Generator can shape the amplitude or the timbre of a sound over time. The most commonly used is an `ADSR` which stands for *Attack*,*Decay*,*Sustain* and *Release*. There are also envelopes which have only *AD*,*ADR* or *AD* with less stages.

![ADSR Module with its stages](/img/VCV/ADSR.png)

When using a `Gate` signal it triggers the envelope to start, going through the *Attack* and *Decay* phases and it stays in the *sustain* phase as long as the signal is `HIGH`. When the `Gate` signal goes to `LOW` the ADSR goes through the *Release* phase.


#### Delay
The `delay` module records an audio signal and plays it back after some amount of time.

Put the delay at the end when you want the sound to fade out or continue to live although the source stopped emitting sound.

#### S+H - Sample And Hold
The `S+H` module captures and holds an input signal at a specific moment. The sampled value gets outputted continuously until there is a new trigger input to capture the next value.
With a `S+H` we can *freeze* an input signal when the module gets triggered.
=== better
To make the transition smoother between the stepped values we can use a `Process` module and use the *slew limiter* to make the transition smoother.
===

#### Process


## Basic Sounds
### Snare
To generate a snare sound you want a `Noise` module which is connected to filter module like `VCF` where only the high frequencies can pass. With an `ADSR` connected to a `VCA` at the end we can shape how the amplitudes behaves when the snare should get triggered.
![Basic Snare Patch](/img/VCV/BasicSnare.png)

### Kick Drum
To create a Kick Drum we build a basic subtractive synthesizer voice with an `VCO`, `ADSR`, `VCA` and a `Sequencer` for the trigger source. Because a kick drums pitch drops rapidly at the start of the sound we add another `ADSR` which signal we use to control the `V/OCT` input of the `VCO`. To be able to control the influence from the envelope we add a `VCA Mixer`. 

Both `ADSR` have low *Attack*,*Decay* and *Sustain*. Playing with the `Release` values of the envelopes create interesting effects. 

![Basic Kick Patch](/img/VCV/BasicKick.png)

Another way is to send the signal from the second `ADSR` into the FM input of the VCO without the mixer and regulate the effect via the attenuverter. 

![Basic Kick Patch](/img/VCV/BasicKick2.png)


To add some character you can add a `Filter` or `Noise`.



### Hi-Hat
For a *Hi-hat* we use a `Noise` as a source because it is a non-tonal, percussive sound. We need also a `Filter` to keep only the bright, sizzly frequencies. Then shape it with an `ADSR` which goes into a `VCA` with a short envelope for quick, crisp hit.


## Basic Terminology

### Four fundamental waveforms
*Sine*,*Triangle*,*Sawtooth* and *Square* are the fundamental waveforms that are commonly used in modular.

The shape of the waves decides what timbre and harmonics the waves create.
- The smoother the wave the less or no harmonics - Sine wave
- The sharper the wave the more harmonics - Triangle, Sawtooth, Square

The sharper corners or jumps of the signal creates extra vibrations at multiples of the base frequency -> these are the harmonics.

#### Sine
Sine wave is smooth and creates a mellow and clean tone. It can be used to create subbass sounds or soft melodies. Because the values of the sine-waves are smooth there are no additional harmonics.

#### Triangle
A triangle wave moves linear on rise and fall. It creates fundamental frequency plus odd harmonics which diminish quickly.

Triangle waves create a *"brighter"* sound.

#### Sawtooth
Sawtooth wave rises linearly and falls abruptly. It contains even and odd harmonics which create the *buzzing* sounds. They a great to generate string and brass sounds.

#### Square
Square waves move between *high* and *low* values with a sharp edge/transition between them.
They contain their fundamental frequency and all odd harmonics.
Square waves are good for aggressive voices.

### Amplitude
The *amplitude* is the level/strength of an audio or control voltage signal.
For audio the *amplitude* controls how load the sound is.

### Frequency
*Frequency* is the rate a signal oscillates. It is measured in Hertz(hz).

It often gets used to control the pitch of a tone, although it can control many aspects of a module. 

### Audio-Rate
*Audio-Rate* frequencies(between 20Hz and 20kHz) create pitch so they lie within the range of human hearing. These frequencies get used in synthesizer to create sounds and play notes.

Note A4 -> 440Hz
