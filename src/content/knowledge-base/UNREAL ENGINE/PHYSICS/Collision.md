---
title: Collisions
tag: Unreal
---
# Collisions
Physics is only enabled on components not actors in Unreal. Collision volumes allow you to trigger logic when another object overlaps with it. Reference the volume in the blueprint and connect `On Component Begin Overlap`. If you want to connect a custom event to the overlapping event use `Bind Event To On Component Begin Overlap`. Make sure that the custom event has all the input parameters that the bind expects. With `Assign On Component Begin Overlap` creates the custom event for you with the necessary input parameters. If you don't want to fire the event anymore at some point you also can use `Unbind Event ...`



## Bigger collision shape than mesh
To set the size of the `Collision Volume` set the `Sphere Radius` not the scale of the volume itself.
If you want to keep your `Collision Volume` at the same size but actual mesh scaled, make the collision volume the parent and apply the scale only on the `Mesh component`.

If you want the mesh and the collision volume independently scaled, create a scene root and don't let them be attached to each other.

## Get Overlapping actors Reference
To get the reference to the actor that is colliding with your actor you can add a `Sphere collision` in your blueprint. Add it to the main shape and let it stick out so it touches with the objects that are close.
In the blueprint create a `Custom Event` that executes the behavior for the overlapping actors. 
With `GetOverlappingActors` you can get the neighboring colliding actors. Make sure that your custom event get's executed on the `Event ActorBeginOverlap`.

## Debugging
If your overlap events aren't working it is possible that `Generate Overlap Events` in the collision volume details is not checked on in the collision presets.