---
title: Combine Layers Of Materials
comments: true
tags:
 - VVVV
 - VVVV/Stride
---
![Combine Layers Of Materials Img](/img/vvvv/LevelOfMaterialStride.png)

# Combine Layers Of Materials
If you want to combine multiple materials you can use the `MaterialLayer` node. It needs the material plus a black and white blendmap to define where which material get shown and where not. The `MaterialLayer` gets connected with `FromValue` and set as `Layers` input of the material that is connected to the model.


