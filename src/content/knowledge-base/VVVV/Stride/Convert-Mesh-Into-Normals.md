---
title: Convert Mesh Into Normals
comments: true
tags:
 - VVVV
 - VVVV/Stride
---
![Convert Mesh Into Normals Img](/img/vvvv/ConvertMeshIntoNormals.png)

# Convert Mesh Into Normals
To show instead of the mesh the normals at the vertex points, a select a Mesh like `SphereMesh` and connect the `MeshSplit`. This gives us the *Positions*,*Normals*,*Indices* of the mesh. In an `ForEach` loop we we convert the *position* data into a vector4 with `ToVector4` and we add *position* and *normals* together and then convert the result with `ToVector4`. Before we output the data we group it together in an `Cons` node. Outside we have to `Flatten` the `Spread<Spread<Vector4>>` into `Spread<Vector4>`. This we can input into `DynamicMesh` node. It also needs a `Pos4` for the `Vertex Declaration` input to define how each vertex is defined. Set for the `Topology` input `LineList`
The `DynamicMesh` we then can set as the Mesh input for a `MeshRenderer`.
