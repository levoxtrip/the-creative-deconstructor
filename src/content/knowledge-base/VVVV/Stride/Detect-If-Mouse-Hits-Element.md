---
title: Detect If Mouse Hits Element
comments: true
tags:
 - VVVV
 - VVVV/Stride
---
![Detect If Mouse Hits Element](/img/vvvv/MousehitsObject.png)

# Detect If Mouse Hits Element
To detect if a user clicked on a mesh or model we can use the *experimental* node `MouseRay` and check with `RayIntersectsBox` node wether any intersections between the ray from the mouse and the box happened. There are also other nodes for other primitives like `RayIntersectsSphere`,`RayIntersectsPlane` and more.