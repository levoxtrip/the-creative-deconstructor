---
title: Move Objects Along A Sphere Surface
comments: true
tags:
 - VVVV
 - VVVV/Stride

---
![Move Objects Along A Sphere Surface Img](/img/vvvv/MoveObjectsAlongSphereSurface.png)

# Move Objects Along A Sphere Surface

To execute the movement for multiple objects we create inside a `Repeat` a movement source like `Wanderer(2D)`. We then convert the 2D position data into positions on a sphere shape with the `FromGeographic` node. It takes in `Longitude` and `Latitude` values. We then can use the converted vector3 data as the input for a `Translation` node.