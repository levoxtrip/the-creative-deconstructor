---
title: Render Different Objects in Different Render Outputs
comments: true
tags:
 - VVVV
 - VVVV/Stride
---
![Generate Dynamic Mesh With Noise Surface Img](/img/vvvv/RenderDifferentElementsInDifferentRenderOutputs.png)

# Render Different Objects in Different Render Outputs
IF you have a multi window setup and you want to only render certain objects in certain window you can use `SetRenderGroup` to define which groups get outputted in what window. In the `SceneWindow` you need to activate `ShowRenderGroupMask` under Configure. You then can input a `RenderGroup` node and select which group you want to show in which window.



