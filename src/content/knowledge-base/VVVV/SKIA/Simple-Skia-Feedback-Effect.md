---
title: Simple Skia Feedback Effect
comments: true
tags:
 - VVVV
 - VVVV/Skia
 - VVVV/FX



---
![Simple Skia Feedback Effect Img](/img/vvvv/BasicSkiaFeedback.png)

# Simple Skia Feedback Effect

To create a SKIA feedback effect you render the output but you also create a second `Renderer(Offscreen)` connected to a `FrameDelay` which you then feed back into a `Group` with the desired transformations and changes.

[Download Example File](/files/vvvv/SkiaFeedbackEffect.vl)