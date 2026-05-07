---
title: Move Object Toward Point
tag: Unreal
---

# Move Object Toward Point
To move an object towards another point you have to calculate the direction vector between your object and the goal point. Then we `Normalize` it and connect it into `Add World Offset`. To define the speed you can add a *scaler* variable to define the speed.

![Move Object Toward Point Img](/img/Unreal/MoveObjectTowardsPoint)

Be aware that when you move an object and you are not taking the framerate into account your objects can get slow when you have bad framerate. To build your movement independent from framerate you need to scale the value your are moving by with `Delta Seconds`.
