---
title: Materials
tag: Unreal
---
# Materials
To create material you do in the content browser a right click and select `Material` in the pop up.

Materials have a material graph where you create you material with nodes. 

When you hold down 3 and do a left click in the graph you can create a RGB color node.

When you hold down 1 you can create a float value.

To duplicate nodes `ctrl +d`.

You can convert a node into a parameter by right clicking the node and choosing `Convert into Parameter`

If you want to preview your specific mesh, select mesh in content browser, and the click on the brick icon in the view.

The `Apply` button doesn't save the changes in your material. It only applies them to the scene so you can see them.

If you want to change the material for only one instance of a mesh select the static mesh in the *Outliner* and under `Details/Materials` set the material. This doesn't change the asset file.

## Material properties
`Metallic` - how metallic looks your material from 0 to 1

`Specular` - makes non metallic materials more shiny 0 to 1 values

`Roughness` - 0 smooth like mirror; 1 rough completely matte - specular needs to have value > 0.0.

`Normal` - takes in a normal map which contains color information that tells teh engine how to bounce of light off the surface of the mesh. It has RGB values and each values corresponds with a direction that light should bounce off. The normal map tells the lights renderer how to bounce of light at a given pixel.

`Ambient Occlusion` is simulating shadows on the mesh

## Texture Sample
A `Texture Sample` allows to use textures in the material. You can drag you textures directly from the content browser and then create a texture sample node. 


## Change material in runtime
Create a material and for the values that you want to change convert them into a parameters. Be aware of the names because you need to reference them later in your blueprint. Then create your blueprint and on `BeginPlay` add `Create Dynamic Material Instance` node. Promote it's return value into a variable. The dynamic material needs a reference to the actor that should have the material, so drag the actor into your event graph and reference it.

To set the parameters of your material, you could create custom event and then depending on if the parameter in your material is a vector or float you can use `Set Vector/Scalar Parameter`. Reference the correct parameter name from the material.


## To assign a material
The meshes have a material slot where you can assign the material. You also can drag it into the mesh in the scene. 
In a blueprint you can use a `Set Material` node and pick your material.

## Glow up on interaction
You make a material and then you create a parameter for `Emit color` and `Emit amount`. You multiply the color with the amount(e.g 30/40) and then plug into the `Emissive Color`. In a blueprint you change the emit amount of the color.

## Material Instances
To reuse a material for different cases where only specific aspects of the material are changed we can create instances of a material.
You use a parent material as a base to make a variety of child materials each with it's own variation of the base using material parameters. 
The nodes that you want to be variable you convert into *parameters*. You also can group the parameter by creating groups in the details. 
`MI_` prefix for the instances.
