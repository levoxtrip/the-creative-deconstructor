---
title: Collisions
tag: Unreal
---
# Collisions

## Get Overlapping actors Reference
To get the reference to the actor that is colliding with your actor you can add a `Sphere collision` in your blueprint. Add it to the main shape and let it stick out so it touches with the objects that are close.
In the blueprint create a `Custom Event` that executes the behavior for the overlapping actors. 
With `GetOverlappingActors` you can get the neighboring colliding actors. Make sure that your custom event get's executed on the `Event ActorBeginOverlap`.
