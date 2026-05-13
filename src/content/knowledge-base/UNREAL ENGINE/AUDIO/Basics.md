---
title: Basics Audio
tag: Unreal
---
# Basics Audio
For audio files in unreal we are using wav files.

With `Play Sound` you can trigger a sound in your blueprint. `Play Sound 2D` plays the sound with the same volume no matter where in the scene. `Play Sound At Location` plays it at a certain point in the level and when we are a too far away we don't hear the sound. You also can trigger meta sounds in `Play Sound` nodes.

## Meta Sound
In the content browser under create you can find `Meta Sound Source` in the audio category.

To add your sounds into the meta sound and use it create a variable of type `Wave Asset` and then assign your sound as it's default value.
![Set Meta Sound Variable Img](/img/Unreal/SetMetaSoundVariable.png)
To play the wave asset add a `Wave Player` node.

When the meta sound plays `Input On Play` gets triggered. It's output needs to get connected with `Play` of the `Wave Player`. We also need to connect `On Finished` with the `Output On Finished` as well as `Out Mono` with it's output.

![Meta Sound Wave Player Img](/img/Unreal/MetaSoundWavePlayer.png)

`Start Time` allows to set where the audio starts playing. Useful when you want your sound to be more immediate.

To change your meta sound from *mono* to *stereo* sound you can go to the meta sound gear and change `Output Format` to stereo.
![Change output format Img](/img/Unreal/ChangeOutputFormat.png)

## Fade Sound over distance
To have your sound more quiet from distance you need a fall off. Under `Source/Attenuation` you can create a new sound attention asset. In there set `Inner Radius`. This is where the fall of begins. 400 = 400 cm = 4m

![Sound Attenuation Img](/img/Unreal/SoundAttenuation.png)

### Play random sound 
You also can create an array of sounds and then with a `Random Get WaveAsset` you can randomly select. If you want to you can bias it towards sounds by passing in `Weights Array`. Another way to randomize your sound is by adding a `Random(Float)` to the `Pitch Shift` of the `Wave Player`


