---
title: Texture Mask In Stride
comments: true
tags:
 - VVVV
 - VVVV/Stride



---
![Split Mes hInto Its Components Img](/img/vvvv/TextureMaskInStride.png)

# Texture Mask In Stride
We can create a texture mask in Stride which shows only parts of the texture which has *alpha = 1*. 
Pick a texture you want to use, for example from a `FileTexture` and connect it into `FullscreenQuadRenderer`. For the `BlendState` we set a `AlphaBlend` node. That Renderer we connect to a `RenderEntity` with `RenderState` `AfterScene`.



