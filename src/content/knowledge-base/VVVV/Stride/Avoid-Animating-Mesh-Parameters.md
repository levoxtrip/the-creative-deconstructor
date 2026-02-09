---
title: Avoid Animating Mesh Parameters
comments: true
tags:
 - VVVV
 - VVVV/Stride
 - VVVV/FX
 - VVVV/Performance
---
![Avoid Animating Mesh Parameters](/img/vvvv/AvoidAnimatingMeshParameters.png)

# Avoid Animating Mesh Parameters

If we animate the parameter of a mesh parameter like `Size` in the `Box` node in the background vvvv hast to rebuild the whole geometry which can be expensive for the performance.  It is better to animate the *Size* by using a `TransformSRT` node and set the *Scaling*. This is just a multiplication in the background which is more performant.