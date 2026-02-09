---
title: Instancing Shapes in Stride
comments: true
tags:
 - VVVV
 - VVVV/Stride



---
![Instancing Elements In Stride Img](/img/vvvv/InstancingElementInStride.png)

# Instancing Shapes in Stride

If you want to instance a shape in Stride we first create the shape that we want to instance. We then can input the position data for the instances into the *Components* Input of the shape.

To be able to use the data from a spread as transformation data for the instances we need to convert the data from the spread into transformation data and then recollect it into `InstancingSpreadComponent`.
The `FromValue` then constructs a spread that we need in the *Components* input.

To translate all the instances we can plug 3D transformation nodes like `Scale(3D)`,`Translate(3D)` etc. into the *Transformation* Input of the base shape.

*Example patch is available in the Help Browser in VVVV*

## Setting material values for each instance
If we want to create different material properties for each instance we can use `ColorPerInstance` and `ValuePerInstance` and plug them into the material node. 