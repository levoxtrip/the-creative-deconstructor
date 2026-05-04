---
title: Chaos Vehicle Basics
tag: Unreal
---

# Chaos Vehicle Basics
For chaos vehicle you need a `Skeletal Mesh` instead of a `Static Mesh` because you need bones that can drive the position of the wheels. Combine the mesh for the chassis and the wheels into one static mesh.

It's important that the chassis is facing it's own local x direction. In model mode you can change the pivot point to adjust that. For the wheel we want the y axis point out of the wheel to the side.


## Rigging Car
You want the pivot of your car at the ground of the mesh. The root bone placement should be where your pivot point of the skeletal mesh is. Where the root bone goes the mesh follows.
For a car we at least 4 more bones for each wheel one. To add more bones click on the top right on `SKM_` and then the skeleton icon and select edit skeleton. In the skeleton tree tab right click toor and click `Add Bone`. The bones need to be properly centered at the wheel mesh. All bones need to be directly or indirectly connected to root bones.
The next step is to skin the mesh to the created bones. This specifies which bone has influence over which polygon on the mesh.

Each mesh part needs to be weighted to the bone. It needs influence over the mesh. To skin mesh to the bone, click on skin icon and select `Edit Weights`. You either can paint that weight or select vertices. A good way to select vertices is to pick an initial vertex and then grow from there. With `Add` you can add the weight paint. For hard surfaces you can try `Flood`. To accept the weight paint click `Apply` 

## Physics Asset
For the chaos vehicle we also need a `Physics Asset` assigned to the mesh. Click on the skeletal mesh in the content browser, go to `Create/Physics Asset/Create and Assign`. For the primitive type use `Convex Hull`. You can add additional collision shapes by clicking on `root` and `Add primitive`.

## Chaos Wheels
Add `Chaos Vehicle` plugin to your game. Then create a blueprint of type `Chaoswheel`class. This allows you to set different settings for your wheels. Make sure you use the right size values for the wheel. In the side views in the editor you can measure size of objects with middle mouse.

## Torque
The physics quantity of how wheels turn is *torque*. It is a rotational force. We apply rotational force to the wheels that makes them turn. Engines have quantity `Rounds Per Minutes`. The higher the RPM the higher the amount of torque. We can create a curve that determines how much RPM create what amount of torque. Go to content browser, right click miscellaneous/curve. 
In the curve we can think of the time value as the RPG and the value as the strength of the torque.

In the next step create `Animation Blueprint` and select `Vehicle Animation Instance` and select your skeletal mesh. In the blueprint we can use `Wheel Controller` from the vehicle wheel instance. It gets all the information how fast it is spinning and whether it is affected by the handbreak, the suspension settings and it translates results to an animation on the bone that the wheel is associated with. Into the wheel controller we input a `MeshSpace Ref Pose`.

## Vehicle Blueprint
The `Vehicle Blueprint` needs to be based on `Wheeled Vehicle Pawn`. For the mesh select the `Skeletal Mesh Asset`, assign the `Animation Blueprint` and tick `Simulate Physics`. Add `Spring Arm` and a `Camera` as it's child to the vehicle. Position the spring arm as you want and activate `Enable Camera Lag` at the camera component as well as `Use Pawn Control Rotation` for the spring arm.