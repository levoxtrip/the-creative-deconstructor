---
title: Materials
tag: Unreal
---
# Materials
To create material you do in the content browser a right click and select `Material` in the pop up.

When you hold down 3 and do a left click in the graph you can create a RGB color node.

When you hold down 1 you can create a float value.

You can convert a node into a parameter by right clicking the node and choosing `Convert into Parameter`

## Change material in runtime
Create a material and for the values that you want to change convert them into a parameters. Be aware of the names because you need to reference them later in your blueprint. Then create your blueprint and on `BeginPlay` add `Create Dynamic Material Instance` node. Promote it's return value into a variable. The dynamic material needs a reference to the actor that should have the material, so drag the actor into your event graph and reference it.

To set the parameters of your material, you could create custom event and then depending on if the parameter in your material is a vector or float you can use `Set Vector/Scalar Parameter`. Reference the correct parameter name from the material.


## To assign a material
The meshes hav a material slot where you can assign the material. You also can drag it into the mesh in the scene. 
In a blueprint you can use a `Set Material` node and pick your material.

## Glow up on interaction
You make a material and then you create a parameter for `Emit color` and `Emit amount`. You multiply the color with the amount and then plug into the `Emissive Color. In a blueprint you change the emit amount of the color.


