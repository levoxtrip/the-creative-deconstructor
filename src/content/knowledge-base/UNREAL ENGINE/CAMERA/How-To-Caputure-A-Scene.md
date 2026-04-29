---
title: How To Capture A Scene
tag: Unreal
---

# How To Capture A Scene
In Unreal we can capture our scene and use it as a material for objects. This makes sense if you for example want to create a surveillance camera of a part of your scene. This technique is also part of feedback effect.

Create a `RenderTarget` and set it's size in the details panel of it. Make a material and add a `TextureSample` node with the render target assigned to `Texture`
![How To Capture A Scene Img](/img/Unreal/RenderTextureMaterial.png)


Next create a blueprint where you add a `SceneCapture2DComponent` and also assign to it the `RenderTarget` you created before.

Then assign the material to a shape in your scene. It will have the *view* of the `SceneCaptureComponent` as a material.