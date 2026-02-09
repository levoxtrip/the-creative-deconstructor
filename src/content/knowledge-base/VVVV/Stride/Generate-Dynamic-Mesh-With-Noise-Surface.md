---
title: Generate Dynamic Mesh With Noise Surface
comments: true
tags:
 - VVVV
 - VVVV/Stride



---
![Generate Dynamic Mesh With Noise Surface Img](/img/vvvv/DynamicMeshFromData.png)

# Generate Dynamic Mesh With Noise Surface
To create a *noise surface* as a mesh, we use a `GridSpread(2D)` as a base. In a `ForEach`-Loop we add for the Z values from a `SimplexNoise` to create the depth displacement. With that data we `GenerateNormals` and in another `ForEach` we create the vertex information with `CreateVertexPos3Norm3Tex2`. This data goes into the `DynamicMesh(Indexed)` node. For the `GenerateNormals` and the `DynamicMesh(Indexed)` we need the indices, which we can get with a `GridIndices` node.

To create movement for the noise we can add the values from a continuous growing value like `Integrator` and add it to the input for the `SimplexNoise`.



