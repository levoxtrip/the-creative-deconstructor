---
title: Character Class
tag:UNREAL
---
# Character Class
The `Character` class is derived from the `Pawn` class. It has a `Character Movement Component`, which moves characters the way how they should be moved. A `Skeletal Component`, `Arrow Component` which shows what the forward direction of the character is. Often the character has also a camera with a spring arm.

## Skeletal Mesh Component
It has a skeleton - a hierarchy of bones which are skinned to the mesh. When a bone moves, some of the polygons of a mesh move with the bone. It is based on a *parent-child* bone hierarchy. The `Skeletal Mesh Component` doesn't have collision hulls. It can have multiple collision shapes which are attached to the bones. These shapes are called `Physics Bodies`.

In the skeletal mesh view under the eye icon *Mesh/Selected Bone Weight* you can see the weighting of a bone. The red color indicates where the polygon is weighted to the bone mostly.

Animations are handled by moving the bones and the mesh moves along with the bones.

## Create Character
When you create the blueprint choose the `Character` class. You want to be the mesh of your character to be on the lowest point of the capusle mesh, and the capsules height to be the highest point of the character mesh.

`Character Component` uses the capsule for lots of collisions.

Instead of implementing movement on the character class itself we can implement it in the `Player Controller` class, so the `Character Class` stays uncluttered. You then will also have access to the `Enhanced Input Actions` in the `Character Pawn`.
In the `Player Controller` you use `Add Mapping Context With Enhanced Input Local Player Subsystem` and on you input actions you add yaw input for x and pitch input for y. 
Make sure you deactivate `User Controller Rotation Yaw` in the `BP_...(self)` component on the character and activate `Use Pawn Control Rotation`.

## WASD Movement
The `Character Movement Component` is designed to handle movement of the character. You don't have to set the location of the character or add forces. You only add movement input to the component and it handles moving the character for you. You only need to tell it that we are moving and the direction, we are moving in. We do this on the `Player Controller` by accessing the `Character Movement Component` from the pawn. `Get Controlled Pawn` allows us to access the pawn the `Player Controller` controls.

`Get Controlled Pawn -> Get Movement Component-> Add Input Vector`


To add input to movement component assign value to `Add Input Vector`

If you want to move your character always in the direction the camera is looking you use the controllers rotation with `Get Control Rotation`

```
Get Controller Rotation -> Get Forward Vector x Get IA Move -> 
```

To have the capsule of your character rotate smoothly towards the look rotation tick `Use Controller Desired Rotation` in the details. This smoothly interpolates towards the control rotation. With `Orient Rotation To Movement` the character orients towards the movement direction. If you move the right, the character orients itself to the right. `Rotation Rate` defines how fast it rotates.
Make sure you don't conflict the settings with `Use Controller Rotation` settings of your pawn.

## Jumping Movement
The `Character` class has actually a function for jumping called `Jump`.
To access some behaviours of a child we to cast the value. Casting can affect performance, so it makes sense to cache the variable in `Begin Play`. You want to execute jump on `started` of the IA event.
