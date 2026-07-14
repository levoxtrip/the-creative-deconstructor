---
title: TD Mastery
tag: TD
---
# TD Mastery

# CHOP
CHOPs are channel operators that let you handle values in TD.

They are used to:
- Timebased animations
    - Smoothing Data
    - Processing Motion
    - Controlling Movieplayback
    - Controlling FX
    - Timing Events, Speed Control, State Machines, Counting
    - Blending Motion Channels
    - Procedurally generate Motion(LFO, Loops, Beat)
- Handling non time based data
    - Pre shaped numerical data
    - analysing data - from images or other sources
    - intermediary holding data for instancing
- Audio
    - From files and audiostream
    - Mixing and effects
    - Synthesis generation
- Time Channels
    - Clock
    - Timer
    - Beat - Periodic values - control a midi
    - LFO
- Altering shape of channels
- Get data from devices - MIDI, Keyboard, Sensors, DMX, Serial
- Controlling devices

## Viewer
In the chop viewer you can show a dot per sample to make more clear how many samples your CHOP information has.

## AudioFileIn
Often you wnt to change Audiodata into something with lower frequency. You can do that with a `ResampleCHOP`.
## Detect Motion Of Value Changes
With a `SlopeCHOP` we can detect if a value is changing and if it is in- or decreasing. It is used to figure out the speed of things, how much they are changing. If the values are not changing it is 0, if the values are rising, slope returns a positive value and a negative value if it is falling.

You for example can connect your input values like mouse or sensor data with a `SlopeCHOP` for motion detection.


## NoiseCHOP
A `NoiseCHOP` generates pseudo random/noise values.

In the channel page you can set the length of the CHOP.
## TimerCHOP
`TimerCHOP` has callbacks that allow us to execute code when timer events happen.

When you use cycles in `TimerCHOP` you can create a counter up to the max amount of cycles. You can use it to show different text depending on the cycles value.
![Cycle Through Table Data With TimerCHOP](/img/TD/Cycle-Through-Table-Data-With-TimerChop.png)

The timer also allows you to use segments. With segments you can define how long each part of the timer is.

![Timer Segments](/img/TD/Timer-Segments.png)
In the callback `onSegmentExit` you can assign values to other operator
`op('text1').par.text = op('table1')[segment+1,'text']`.

An `InfoDat` of the `TimerCHOP` allows you to get the time code from that timer.

## Smoothing Values 
To smooth your CHOP data you can use a `FilterCHOP`.

## Trigger Things
We can combine a `LogicCHOP` with a `TriggerCHOP` to trigger some logic if a value reaches a certain condition.

![Trigger Some Logic With Trigger and LogicCHOP](/img/TD/Trigger-With-LogicCHOP.png)

A `TriggerCHOP` has a attack, decay, sustain and release phase. With a `TrailCHOP` you can visualize the flow of the trigger.

## Trigger Shaped CHOP data
We can trigger chop data that has a specific shape by using a `LookupCHOP`. For the first input we need a normalized index value that defines which index of the *Lookup Table* gets played.
![Trigger Shaped Chop Data](/img/TD/Trigger-Shaped-Chop-Data.png)
## Switch Between Different Values
To Blend or switch between different values you can use a `CrossCHOP` or a `SwitchCHOP`. For the transition value between the input values you could use a `TriggerCHOP`.
## Get Time History Of Channel
`TrailCHOP` allows to see how the channel values behaved over a specified period of time.

## CHOP To TOP
A `CHOPtoTOP` allows you to convert channel data into color data. If you want to convert it into a full color data select `RGBA` for the `Data Format`. Be aware that you need sufficient channels `R,G,B,A` to convert it properly. 

## Resample CHOP
To resample a CHOP you can set `start`and `end` of the CHOP in ether *samples,frames or seconds*. Then set how many samples per second you want.

## PanelCHOP
`PanelCHOP` gives you channel data from a `ContainerCOMP`. It gives you channels like `inside` to define if you are are inside/over your container window. 
## Convert Input keys into index value of input
We can use a `FanCHOP` with `Fan In` operation to take multiple logic channels and turn them into an single integer.
`FanOut`allows to convert a single integer into multiple logic channels.

![Input Keys To Index Value](/img/TD/Input-Keys-To-Index-Value.png)
# COMP
## Panels
We use Panel COMPs in TD to create UI elements like buttons or slider in our projects. They all allow us to use a `PanelCHOP`.
### Base
`BaseCOMP` allows to create hierachy and folder structure for your projects. 
You can navigate them with `i` to go inside and `u` for leaving them.
With `In/Out` nodes we can pass data in and out of comps.

A base also allows us to group some code and export it as a tox.
### Container
`ContainerCOMP` has connectors that allow us to set the hierachy of panel elements. How you connect the "children" defines how they get aligned.

## Internal Operators
Panel COMPs allow us to add internal operator shortcuts which make the referencing of these operators more comfortable. In the *Common* tab of the add a Shortcut name and the operator.
Inside you then can reference the operator with `iop.shortcutName`.
![Internal Operator Shortcut](/img/TD/Internal-Operator-Shortcut.png)

## Extensions
Extensions allow us to create new functionality for our operators. With Python we can create new functions and variables for our program.

# Network Communication
## TouchIn/Out
`TouchIn/Out` operators allow us to communicate between touchdesigner instances that are in the same network but on others machines.
You give them the same network port and the right ip. If you run multiple instances on the same machine you can use `localhost` for the ip. For each port you can send one stream of information.

There are `TouchIn/Out` for different operator types like TOPs, CHOPs or DATs. There are none for SOPs or POPs so you would convert the information into other formats so you can send them via `TouchIn/Out`.

In network communication we have to thing about lag and latency and how much they can affect our program. 
In extensive projects it can make sense to use one machine for data handling and another machine for rendering and eventually a machine for audiohandling.

## OSC
OSC stands for *Open Sound Control* and is a protocol that allows us to communicate to a lot of different platforms not just TouchDesigner.
TD has `OSCIn/Out` CHOPs and DATs.

To send osc data out you need to put your message together as a package - an osc formatted information.
Osc allows us to not just send one value at a time but include a list of information into the message that we send.


![OSC Networking](/img/TD/OSC-Networking.png)
# Parameter
In TD we can *bind* parameters which allows us to change this parameter values from both sides.

# Panel / UI

# Python Expressions
# Replicator
# Programming
Instead of calling the code from a far away dat you can create a text dat where you want to execute something, put the code in that textDat and execute `text.run()`. This keeps the execution code close to the operators where the action is happening.

# Scripting
`me.time.rate` Framerate
