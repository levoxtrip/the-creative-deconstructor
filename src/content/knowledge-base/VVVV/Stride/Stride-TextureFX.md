---
title: Stride TextureFX
comments: true
tags:
 - VVVV
 - VVVV/Stride
 - VVVV/FX
---
# Stride TextureFX

## Convert RGBA to GPU<RGBA>
If you want to convert a color value from a `RGBA` node into a `GPU<RGBA>` value, you need a `ColorIn` node. This allows to control shader parameter with that color value.

## Control values with texture
To control the values in our patch with the color values of a texture we can use `ValueMap`,`VectorMap` and `ColorMap` to set the values via our texture. This creates different values for each pixel of the texture. These nodes have many hidden pins that make these nodes even more versatile.

`ValueMap` - Texture -> GPU<Float32>
`VectorMap` - Texture -> GPU<T2> - Allows the conversion to different data types.
`ColorMap` - Texture -> GPU<RGBA>

![Value Map and ColorMap Nodes in StrideFX img](/img/vvvv/StrideFXValueColorMap.png)


## Get Size Of Texture
`Info` node gives us information about the texture like width or height.



## Change Size Of Texture
With a `Resize` node we can change the size the texture of our texture.

