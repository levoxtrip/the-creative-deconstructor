---
title: Create A Attraction Force Well
tag: Unreal
---
# Create A Attraction Force Well
The idea is that you create a collision volume like a `Sphere Collision` and everything that enters it gets a force applied.
You take the *overlapping components* of the collision shape and check for each if it is simulating physics. If it is apply some force this creates a repulsion well which pushes objects away when they enter the collision sphere.

![Basic Force Well Img](/img/Unreal/Basic-Force-Well.png)

To create a force that is pointing to the center of the collision component you need to create a vector that points to the center of the collision shape.

![Attraction Force Well Img](/img/Unreal/AttractionForceWell.png)
