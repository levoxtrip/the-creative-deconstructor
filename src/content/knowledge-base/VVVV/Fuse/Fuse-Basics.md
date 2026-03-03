---
title: Fuse Basics
tags:
  - VVVV
---
# Fuse Basics
Fuse is a library for visual programming on the GPU in VVVV. It get's used for creating performant graphics, logic and computation. Similar to VVVV it has an "always" runtime without any build or compile process. It uses the Stride 3D rendering engine and allows PBR materials, lighting and postFX like in game engines.

## Delegate
A delegate lets you define a function once and then reuse it in many different places of your patch. You are not saying - use this function here - your are saying here is a function, take it and use it where ever you want. It's like a cookie cutter(the shape definition), you can press it into dough, foam or clay - different materials but same shape. So you create a function that takes "something" as an input and then pass that function around.

Normally data goes into a function and a result comes out. In delegates it's the other way around - a function flows through the data. The raw data is somewhere and you bring the function to it. With `Invoke` we are saying now execute this function using the data that is passed via the `Args` input of the node. So the `Delegate` holds the function definition, and the `Invoke` calls that function with the data as an argument. This allows to plug any function and keep the existing structure. So the node can stay generic - it doesn't care what shape you are rendering, it just needs some function with a specific type.

So the basic flow is you have your *function*, wrapped by a `Delegate` region. This *function* get's connected to the `Invoke` to call the function with the data as the argument for the function.

![Fuse Basic Flow Img](/img/VVVV/Fuse-Basic-Flow.png)




## SDF

### How to Execute a SDF
If you want to show a SDF you create your SDF in a `Delegate` region and then connect it's output to a `RayMarch` node.

![How To Execute a SDF](/img/VVVV/HowToExecuteSDF.png)

### How to Combine SDF
To combine two SDFs we can use the `CombineSDF`. It allows to set combination operations like *Union*,*Intersect*,*Difference* and more.
![How To Execute a SDF](/img/VVVV/CombineSDF.png)
