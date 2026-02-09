---
title: Draw Normals Of Mesh
comments: true
tags:
 - VVVV
 - VVVV/Stride
 - VVVV/FX



---
![Draw Normals Mesh](/img/vvvv/DrawNormalsOfMesh.png)

# Draw Normals Of Mesh
If we want to draw the normals of a mesh in Stride we first have to split the mesh with `MeshSplit(Pos3Norm3)` and in the `ForEach` Region we convert the vec3 position values into vector4 and add the color value as the *W* values. For the extracted normals, inside the `ForEach` we add them with the *position vector3*. Similar to the position the normal vector3 gets converted into vector4 with the color as the *W* value. 

The flattened values from the `ForEach` get used as the input for a `DynamicMesh` node. `LineList` as the primitive type of the `DynamicMesh` gives us then the normals. We need to use `Pos4` node for the `VertexDeclaration` input of the `DynamicMesh`.

As the color shader for the `MeshRenderer` we use `WColorShader`.


[Download Example File](/files/vvvv/DrawNormalsOfMesh.vl)