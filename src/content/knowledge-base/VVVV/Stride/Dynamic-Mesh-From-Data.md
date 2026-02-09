---
title: Dynamic Mesh From Data
comments: true
tags:
 - VVVV
 - VVVV/Stride



---
![Instancing Elements In Stride Img](/img/vvvv/DynamicMeshFromData.png)

# Dynamic Mesh From Data
If you want to create your own dynamic mesh with your own data we can use a `Dynamic Buffer Mesh`. It requires information about the vertex position stored in a vertex buffer. For that we can use a `DynamicBuffer` node and set `IsVertexBuffer` to  `true`. To see the parameter you need right click node and configure and activate `IsVertexBuffer`.
For random position data we use `RandomSpread(3D)` and generate normals from it with `GenerateNormals`. In a `ForEach` we combine the position data and the normal data in a `Create(VertexPos3Norm3Tex2)` node.

To define how the single vertices get connected to full triangles we create an index buffer. For that we use another `Dynamic Buffer`, activate `IsIndexBuffer` in the configure menu and after that count the amount of elements in our data source here - `RandomSpread` and create with `I` an indexed spread. This gives us values from 0,1,2,3... till the amount of counted entries. You can randomize it with a `Randomizer` after the `I`. To get the lighting right you would need to pass the randomized indices into the `GenerateNormals`.

To affect how many vertex of our mesh actually get drawn we can use `DynamicDrawArgsBuffer` as *Draw Args* input of the `DynamicBufferMesh`. With `StartIndexLocation` we can define which part we want to draw and with `IndecesCount` we define how many vertices we want to draw.