---
title: Follow A Target

---


![Look At Target Img](/img/VVVV/StrideLookAt.png)

# Follow A Target With Camera
With the `LookAt(RightHanded)` node we can look *from one point(eye position)* to a *target point*.

When we animate the *target position* we create a shifting gaze effect.

The `LookAt` creates a *LookAt-Matrix* which we plug into the `ViewMatrix` input of the camera.

[Look At Patch](/files/VVVV/LookAtStride.vl)