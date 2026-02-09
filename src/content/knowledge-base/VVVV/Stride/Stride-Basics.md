---
title: Stride Basics
comments: true
tags:
 - VVVV
 - VVVV/Stride
 - VVVV/FX
---
# Stride Basics

## Stride Scene

### Entity

A *Scene* in Stride contains *Entities* which are the building blocks of the 3D scene - `Plane`, `Sphere`,`Box`, `Camera`, `Lights`.

Each entity can also be a parent of spread of child entities. We can plug them into the `Children` input of an entity. This also allows us to create herachies where the children transformations behave relative to the parent transformation. A way to group the children is either with `Cons` node or a `Spread`.

![Children Entities Img](/img/vvvv/StrideChildrenEntities.png)

On the `Components` input of the entity we can add special behavior and functionality - for example physics behavior, Instancing and more.

### Scene Window
The `SceneWindow` node allows us to output and show our created scene.

#### Get size Of Window
To get the size of our `SceneWindow` we can connect a `Size(2D.Rectangle)` node to the `Clientbounds` output of the `SceneWindow`

![Scene Size img](/img/vvvv/SceneSize.png)

## Stride Transformations
Stride has different ways to transform an entity. We can use `TransformSRT` but also use instead the *matrix operations* `Translation`,`Rotation`,`Scaling` of type `3D.Matrix` as well as `Translate`,`Rotate`,`Scale` of type `3D.Transform`.

==??? What is the actual different between them?===

## 2D Primitives 
In *Stride* we have the 2D primitives `Disc`,`Plane` and `RoundRectangle`

![Stride 2D Primitives Img](/img/vvvv/Stride2DPrimitives.png)

## 2D Meshes
If you specifically want to draw meshes you need a `MeshRenderer` which then gets connected to a `RenderEntity`.

![Meshes In Stride Img](/img/vvvv/MeshRenderer.png)

## Draw Wireframe Mesh
To render as Mesh as wireframe we need to add `RasterizerStateDescription` and set the Fill mode to `Wireframe`. For the color of the wireframe we add a `ConstantColorShader`. The `Topology` parameter of the `MeshRenderer` allows different kinds of Wireframes. It is worth experimenting with them.

![Stride WireFrame Mesh Img](/img/vvvv/StrideWireFrameMesh.png)

## 3D Primitives
Stride provides basic 3D primitives like `Box`,`Sphere`,`Cylinder`,`Cone`,`Torus` or `Capsule` as well as `GeoSphere`. These primitives are also available as Meshes.


### Draw a Ray
![Draw A Ray Img](/img/vvvv/DrawARay.png)

To draw a ray we can use `Ray(Join)` node and connect it with a `RayRenderer`.

## Instancing
There are several ways to instance shapes in VVVV.

### Instancing Spread Component
One way to instance shapes in VL.Stride is to use the `InstancingSpreadComponent`. For that we create *Transformation Matrix data* in a Sequence like a `Spread` and use it as the `Instance Transformations` input.
For a random position of our primitive we can for example use a `RandomSpread(3D)`, set its values in an `ForEach` to the `Translation` or `Rotation` and then use that data for the `Instance Transfromations` of the `InstancingSpreadComponent`.
![Instancing Spread Component Img](/img/vvvv/InstancingSpreadComponent.png)

To be able to use the data for the `Components` input of the primitive, with a `FromValue(Spread)` node, we need to convert it into `Spread<EntityComponents>`.

The `InstancingSpreadComponent` has a `ModelTransformUsage` parameter that allows to define how the world matrix data of the instanced shape gets multiplied with the transformations of the main instance.

### Instancing Component
Another option is to take the data and create for each entry an *Entity* where we pass `InstanceComponent`. The entities we then pass as a children to the mesh.
![Instancing Spread Component Img](/img/vvvv/InstancingComponent.png)

### GPU Buffer
For more flexibility we can use *GPU buffer* to do instancing. But you have to patch the buffers yourself.

![Instancing With GPU buffer Img](/img/vvvv/InstancingGPUBuffer.png)

After creating the transformation data we need to create the inverse matrices to get the correct normal transformation during the light calculations. When you transform geometry with transformation matrix the vertices and normals need to be treated differently.
`transformedVertex = matrix * originalVertex`
`transformedNormal = inverseTranspose(matrix) * original Normal`

We pass the converted data into `DynamicBuffer` that we then can use as the inputs for the `InstancingBufferComponent`.

With the `InternalArray(Spread)` we convert a spread to a mutable array datatype.

The `FromPointCloud` node constructs a bounding box with all points.


## Lights
The lights that are available in Stride are `AmbientLight`,`DirectionalLight`,`PointLight`,`SpotLight`,`ProjectorLight` and `SkyboxLight`.


### Skybox Light
We can add cubemaps and other textures to a `SkyboxLight`.



## Materials
To manipulate or exaggerated certain material properties we can use the `Vl.Stride.TextureFX` library.

### Texture maps for materials
If you want to use textures to set values like brightness or metallness for your material you can use `FileTextureGrayscale`.
To use a *normal texture* you can use `FileTextureNormalMap`, connect it to a `ColorMap` node, to convert the texture into vector4 data that we then can use in a `Normal` node. We then have the normal data that we can input into a `PBRMaterial(Metallic)`

### Emissive Material
With the `Emissive` node we can create a material that emits lights. If you want that the material don't emits the same amount over the the surface you can use a texture to define where you want the material to be emissive. Connect the texture with a `ColorMap` into the `Emissive` node. To be able to see the emission we post effects applied with `PostFX` and `Bloom` node connected to the `SceneWindow`    

![Emissive Material Img](/img/vvvv/EmissiveMaterial.png)

### Material Displacement
The `Displacement` node allows us to create *Displacement textures* and there intensity. Adapt the *tesselation* of the model to get more or less detailed displacement.

![Displacement Material Img](/img/vvvv/DisplacementMap.png)

### Material Layers
![Combine Layers Of Materials](/files/vvvv/Combine-Layers-Of-Materials.md)


## Render Settings
### Render Model With Outline
To render the outline of a mesh we can use `MeshOutlineComponent`, connect it to `FromValue` and add it to the `Components` input of our mesh.

![Mesh Outline Component Img](/img/vvvv/MeshOutlineComponent.png)

### Render Model With Wireframe
If you want to add wireframe on top of your material you can add `WireframeComponent` combined with `FromValue` and set it as the `Components` input of the model.

![Wireframe Component Img](/img/vvvv/WireFrameComponent.png)

### Render Mesh With Wireframe
To render a mesh with a wireframe we can use `Wireframe` node as the *Rasterization State* of a `MeshRenderer` and set `ConstantColorShader` for the color of the wireframe.

![Wireframe Mesh Img](/img/vvvv/RenderWireframeMesh.png)

If you want to draw the wireframe without the diagonals you can use `SuppressDiagonalsShader` as the `Effect Instance` of the `MeshRenderer`.

![Wireframe Without Diagonals Mesh Img](/img/vvvv/WireframeSupressDiagonalsStride.png)

### RenderGroups
To assign which elements of your scene get renderer in what output window you can use `SetRenderGroup` before you connect your element to the `RootScene`. In the `SceneWindow` you can input a `RenderGroupSelector` with the *render group* that you want to use and connect it to the `RenderGroupMask` input.

## Draw Image In Stride
To show an image inside our stride scene we can use `QuadRenderer` or `FullScreenQuadRenderer` and assign a `FileTexture` or a generative texture from `VL.Stride.TextureFX`

### Show QuadRenderer With Aspect Ratio Of Texture
You can use `WithinCommonSpace` to show your `QuadRenderer` in the Aspect Ratio of your texture input.

![Show QuadRenderer With Aspect Ratio Of Texture Img](/img/vvvv/ShowQuadRendererInAspectRatioTexture.png)

## Draw Fixed Background In Stride
`Background` node allows to add a fixed background texture to your scene. It also allows us to decide if we want 2D or spherical mapping of the texture.



## Keyboard Shortcuts
F2 - Performance meter
F3 - Profiler - When active you can hit F5 to cylcle through cpu,gpu events.
F4 - Debug View - Grid with measurments, coordinate system, light source, camera
R - Reset OrbitCamera View in Window