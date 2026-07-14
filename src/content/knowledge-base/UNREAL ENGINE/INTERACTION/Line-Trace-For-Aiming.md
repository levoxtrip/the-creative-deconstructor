---
title: Line Trace For Aiming
tag: UNREAL
---
# Line Trace For Aiming
When you want to shoot where ever you crosshair is aiming, you want to use a `Line Trace`. You shoot from the center straight out into the world outward. The `Line Trace` will hit whatever is under the crosshair. You then get a `Hit` result from it and the `Location` of the `Hit` result is where the projectile orient towards. 

In serious games a custom trace channel is created for line traces associated with the weapon attacks. 

Make sure your enemies block the line trace so you get a hit event.

In case where you don't hit anything like shooting into the sky you want to orient the projectiles to the end of the trace. If you hit something you want to orient them towards the `Hit` event `Location`. So we check if `Blocking Hit` is true for the `hit` event.
With `Find Look At Rotation` we can create the rotation so the projectiles move towards the target end.
