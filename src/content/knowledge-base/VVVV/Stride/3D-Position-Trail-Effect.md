---
title: 3D Position Trail Effect
comments: true
tags:
 - VVVV
 - VVVV/Stride
---
![3D Position Trail Effect](/img/vvvv/3DPositionTrail.png)

# 3D Position Trail Effect
To create the trail data for multiple elements we can start with a `Wanderer2D`, as a movement source, inside a `Repeat` region. We then use `Queue` node to store the positions for a certain amount of frames. The `FrameCount` input defines for how many frames we store the data - how long will the trail be. We use a `ForEach` region to then convert with a `ToVector4` all the stored data so we have the right position data format for a `Dynamic Mesh`. We then add the `Pos4` definition for the `Vertex Declaration` of the `Dynamic Mesh` and set the `Topology` to `LineList`.
