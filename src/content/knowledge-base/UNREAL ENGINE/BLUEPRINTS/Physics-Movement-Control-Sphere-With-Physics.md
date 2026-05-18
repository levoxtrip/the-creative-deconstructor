---
title: Physics Movement Control Sphere With Physics 
tag: Unreal
---

# Physics Movement Control Sphere With Physics 
Create a pawn BP. Add a mesh sphere and make it the root component, because when you work with physics they act on the root component. Add `Camera` with `Spring Arm`, select `Use Pawn Control Rotation` in the Spring Arm Details. We want tot control the `Camera` where it is pointing by our mouse.

On `Begin Play` you need to register your `Enhanced Input Control` in the pawn. Select your `Input Mapping Context`.

![Add Mapping Context Img](/img/Unreal/AddMappingContext.png)

Then map your enhanced input action `Look` to the `Add Controller Pitch` and `Add Controller Yaw`.

Activate in the details of your pawn `Simulate Physics`.

To add movement `Add Force` on the `Enhanced Input Action`. The direction you want to go is the direction where the control rotation is facing.

![Add Force By Input Action Img](/img/Unreal/AddForceByInputAction.png)
`Get Control Rotation` is the view rotation of the pawn.

Also register left and right input and add another `Add Force` after but stead of `Get Forward Vector` you use `Get Right Vector`.
