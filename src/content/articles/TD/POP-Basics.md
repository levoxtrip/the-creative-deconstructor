---
title: POP Basics
tag: TD
---
# POP Basics
POPs are a the new operator family in TouchDesigner. They are about working with *points* and their *attributes.*

When working with POPs you create/take some source data and use it to create or modify some attributes which you then can apply back on the data.
Generate Source Data - Add Attributes - Create values for attributes - Modify values of attributes -  Apply Attributes to Change Data

In the operator you take a

## Points, Vertices, Primitives

### Point
A point is a position in 3D space, defined by x,y,z coordinates. One point = One position.
Point information is used for positioning, instancing, simulations like particle systems or applying forces.
Points are defined with attributes like index, Normal or Position.

### Vertices
A vertex is the link between the primitive shape and a point. It can have uv coordinates, normals, colors or per vertex usage.
You can have multiple vertices referencing the same point, each with unique data attached.
Vertices are used to control the mapping of a texture onto a shape, to control the normals per face or use custom attributes per polygon corner of the shape.
If a shared point belongs to two triangles there are two vertices, on per triangle.

### Primitives
Primitives are geometric shapes build from vertices and points. 
Some types of primitives are:
- Point (one point primitive)
- Line (two point primitive)
- Polygon
- Quad
- LineStrip
- Sphere
- NURBS patch

Attributes of primitives are `material info`,`group names` or `IDs`.
Primitives are used for topological structures determining how points are connected.

A cube has 6 primitive faces(Quads), each made out of 4 vertices.

#### PrimitivePOP

With the `PrimitivePOP` we can create different primitive types. When you input point data you can create primitives from the point input. You go to the `Primitives` tab and select for example Method `By Set` and set `Primitive Type` to `Triangle` every 3 points create a triangle. 

![Points To Primitive Triangle](/img/TD/PointsToPrimitiveTriangle.png)

When you use method `By Pattern` points are matched by pattern matching.
For example `Primitive Type` Line Strip and then you select a pattern like [*:50]

![Lines From Points With Pattern](/img/TD/LinesFromPointsWithPattern.png)

#### Convert primitive types
With the `ConvertPOP` you  can convert your primitive data from one type to another.
## Attributes
In an attribute we can store anything that can be expressed as numbers. Declaring attributes in POPs allows us to create our own information for each point. They can hold data like Color, Normals, Velocity. With a `POPDAT` you can see the attributes for your points, vertex and primitives. You can also display it in a graph from by converting it into CHOP data.

### Build-In Attributes
By default most points come with certain build-in attributes:
P - position
N - normal
Tex - Texture Coordinates
_PointI - Index Point
_PointU - Normalized Point Index (0-1)
_NumPoints - Total amount of points
_DimI[0] - 
_stepSeconds - 1/current Framerate
_PI

To convert the build in 

If you want to use the build-in attributes you need to explicitly convert them to conventional attributes. You can do that in a `MathMixPOP`.
![Convert Build In Attribute Img](/img/TD/ConvertBuildInAttribute.png)
You use `Operation A` and reference the build-in attribute as the scope and create your own attribute for the `Result Scope`.

### Add new Attributes
One way to add attributes to your existing source POP data is with an `AttributePOP`. You add it by clicking on *New Attribute* `+`. 
It also allows you to create new attributes by duplicating existing ones, rename your existing attributes or even delete attributes.

You also can create new attributes in POPs by simply giving a new name to the `Output Attribute Scope` parameter. The operator figures out the type and size.

### Overwriting Attributes
To overwrite the values of an attribute you basically need the same attribute for the input scope and the result scope.

### Accessing Components of Attributes
The components of an attribute can be accessed with `P(0) P(1) P(2)`, as a list with `P(0,1,2)` or similar to GLSL swizzling `P.x P.y P.z`. `()` are used to specify components of your multi-component attributes. The POP operators try to map the amount of components of the input attribute scope to the output attribute. If both have the same amount, perfect! If input has one and output N it also works fine because it copies the single component to all the destination components, similar to a scaler.
If the amount of input components is not corresponding with the output components the parameter columns get disabled. If parameter size is smaller than number of components, only one parameter column is enabled and copied to all attribute components. When input parameter size is bigger than number of attribute component, the extra column gets disabled. 
To only output certain components of the attributes you can specify them in the output scope.

### Swizzling Components of Attributes
You can swap the order of the components of vectors by respecifying the order in the input attribute scope. `Input Scope P(1) P(0) P(2)` Result Scope `P`. Or you can use a `MathMixPOP` with `Operation A` and set Scope `P(1) P(0) P(2)`.


### Combine components of different attributes
You also can combine the components of different attributes into a new Result Scope.

![Using Components From Different Attributes Img](/img/TD/UsingComponentsFromDifferentAttributes.png)

### From Float Attribute To Float3 Attribute
![From Float Attribute To Float3 Attribute With Math Img](/img/TD/SingleFloatAttributeTothree0.png)

![From Float Attribute To Float3 Attribute With MathMix Img](/img/TD/SingleFloatAttributeTothree.png)

### Move Attribute between Attribute types
`AttributeConvertPOP` allows to move attributes between point, vertex or primitive.

### Deleting Attributes
Unchanged attributes don't cost extra memory. They don'T get copied or stored when unchanged. Deleting unchanged attributes mostly for cleanness of data.

### Show attributes
`POPViewer` from the palette allows to visualize the attributes of your POPs.

### Weights
We can think of *weights* in the context of POPs as a factor of how much an attribute gets affected by out values.

![Using Weights To Affect Attribute](/img/TD/UsingWeightsToAffectAttribute.png)


determines how much each point is within a 3D shape.

#### Weights in FieldPOP
The `FieldPOP` generates a 0 to 1 weight value based on how much each point of our source data is within the chosen field shape. You can smoothen the transition between inside and outside with the `Transition Range` paramter.
![Transform Based On How Much In Field Img](/img/TD/TransformBasedOnHowMuchInField.png)

With the `FieldPOP` we also can output the signed distance value `Dist` which returns the distance of each points towards the surface of the shape.

## Generators
Generator POPs create position or surface data.

### CirclePOP
Creates circle POP data. `Connectivitiy`allows to define what primitive types construct the shape.

### PlanePOP
Creates plane/grid data.

### GridPOP
Allows to create grid structures with different connectivity. 
It has random parameter to assign random positions.

3D grid has columns, rows and slices.

Allows to create 3D random grid points with one random point per cell of the grid.

### BoxPOP
Box with edges or rounded corner.

### SpherePOP
Allows to create different type of spheres. Under the `Detail` tab we can create subparts of a sphere.

### TorusPOP
Allows to create Torus shape. Similar to `SpherePOP` we can create subparts of a torus under `Detail` tab.

### TubePOP
Allows to create a Tube shape

### PatternPOP
With the `PatternPOP` you can create shapes and point data from math functions. If you input source data into the `PatternPOP` you also can modify attributes of the source with math functions.

### PrimitivePOP
Allows to create a primitive from points and other inputs. 

![Convert From Points Into Primitives Img](/img/TD/ConvertFromPointsIntoPrimitives.png)

### PointPOP
You can use the `PointPOP` to create single or multiple point data with or without a point primitive.
To add attributes in `PointPOP` go to Setup tab and under new attributes give a name for your custom attribute. You then can define what type that attribute is. In the *Point* tab you can assign the value for the attribute for the points.

### LinePOP
With the `LinePOP` we can create points along a line or shape a line with a number of points.
You also can just create two points for the start and the end of the line and then subdivide that line information to create smoother transitions between your point data. The `LinePOP` also let's you decide how you want to interpolate between the points of your line. 
If you want to create some custom attributes for each point of your line you can go to `Setup` tab and add these as attributes.

#### Split Line In LineStrips
The `LinePOP` lets you split your line in multiple linestrips. Activate under `Setup` `Multiple Line Strips`. You then can define at which point each linestrip starts and ends. 

![Split Line In LineStrips Img](/img/TD/BreakingLineIntoLineStrips.png)

After properly dividing your line into different strips you the ncan do a post subdivision to make sure you have certain amount of points for each linestrip.

### CurvePOP
Allows you to create curves with different curve types like `Linear`,`EaseInOut`.

### PointGenPOP
Create a number of points either randomly or in a pattern on the surface or withing the volume of a shape.

### PointFileInPOP
Allows to import files with point data into TD.

### PolygonizePOP
Allows to convert TOP information into POP shape.

### RectanglePOP
To create rectangle pop data.

## Filter
Filter operators take the value of an attribute, do something to it and then output to a new attribute or to the same attribute.

### AttributePOP
Creates attributes on points, vertices and primitives and assigns a constant value that you can specify.
Adds constant-value attributes and allows to rename, duplicate or delete attributes.

You also can create arrays of attributes or even matrices up to 4x4.

### AttributeCombinePOP
Is similar to the first page of `MathCombinePOP` You can decite which attributes you want to work with.

### DeletePOP
In the `DeletePOP` we can delete and thin out our source data. We can thin out a specified range or randomly.
We can delete by an attribute like `weight` from a `FieldPOP` or by a specified pattern.
![Delete Points By Attribute Or Pattern Img](/img/TD/DeletePointsByAttributeOrPattern.png)



### GroupPOP
The `GroupPOP` allows to create groups for points or primitives. You can group by attributes. Create a group name on the `Create` tab, and on the `Attribute` tab you select the attribute you want to use and the condition that defines if your point should be in the group or not.

![Translate Grouped Points POP](/img/TD/TranslateGroupedPointsPOP.png)

Another way to create a group by selection the points with thinning out. You can enable it on the `Thin` tab and select the thin steps.

## LineDividePOP
The `LineDividePOP` allows to define how to subdivide your line data. We also can set the interpolation between the points of the line.

## LineMetricsPOP
With the `LineMetricsPOP` you can output information about the linestrip attributes. It also computes measurements of directions, distance the points travel between each other and more.
So it for example allows us to evaluate the distance of the points to the start or the end of a line strip or the length of the line strip. 
It also allows you to get the tangents of your line. 
Another useful application is to get the direction vector to the next point.
![Direction To Next Point On Line Img](/img/TD/DirectionToNextPointOnLine.png)

## Define If Hard Or Soft Curve
Output with the `LineMetricsPOP` the `Curvature` attribute. Then in a `MathMixPOP` you define a condition `A>B` `Curv>Threshold` and as a result `Hard`
![ Define If Hard Or Soft Curve Img](/img/TD/DefineIfHardCurve.png)


## Assign Color By Distance To Start
Under the `LineStrip` tab we find attributes like `Distance From Start/End`. We can use them to assign the distance to the color attribute.
![Distance From Start To Color Img](/img/TD/DistanceFromStartToColor.png)



### NormalizePOP
You can use the `NormalizePOP` to rescale your position values to the range of 0-1. It also allows you to convert XYZ position into polar or cylindrical coordinates, i.e. radius or latitude/longitude expresses into 0-1 range.

For example you can take an attribute from a source POP, use a `NormalizePOP` to take the position data and map it to the color value for the point.

![Use NormalizePOP To Assign Colors](/img/TD/UseNormalizePOPToAssignColors.png)

You could then in a `MathCombine` take the color attributes and differently blend them.

#### Normalizing Single Component
When you normalize only one component like P(1) we still have to select `Box X` instead of `Box Y` or `Box Z` because the y is the only component passed to be affected so it's treated as the first component/x.
![Normalizing Single Component Img](/img/TD/Normalizing-Single-Component.png)


### SprinklePOP
Allows to distribute points randomly over given volume or surface. It needs triangle or quads as input primitives.


## Referencing other points
The most efficient way to reference points is to use `GLSLPOP`. You can create an `Output Attribute`in the parameters of the operator and map it to the desired outcome.
``

## Transformations

### Rotate instanced shapes 
If you want to rotate instanced shapes dependen on the index of the point you can add a `Rotation` attribute to your source data with an `AttributePOP`. In an `MathMixPOP` the first thing you do is to convert the build-in attribute `_PointU` into `NormalizedIndex` with `Operation A`. You then map that normalized point index data by multiplying it with 360 and define a `Result Scope` like `FullCycle`. You then can set this value to the one of the components of the `Rotation` attribute.

![Rotate With Normalized Point Index](/img/TD/RotateWithNormalizedPointIndex.png)


### Move points along normal direction
To move the point along their normal direction you can use a `MathMixPOP`. To apply some movement every frame you can wrap around a feedback network. You create a uniform which defines how fast it moves. You then on the `Combine` tab add that uniform to the `N` normal direction and call it for example delta. In the next step you add `delta` to the current point position. This moves the point `delta` units along the normal direction.

![push points along normal direction img](img/TD/MovePointsAlongNormalDirection.png)

[Download Example File](/files/TD/MovePointsAlongNormals.tox)


## Changing Direction of Normals
Most generators have a `Normal Direction` parameter where you can set the direction of the normals. Depending to the generator there are different options to set the normals. Another way is to modify the `N` attribute in a `MathMixPOP`.


## Math
The `MathPOP` allows to apply som math to either single componentsof an attribute or all components equally.


The `MathCombinePOP` is similar to the `MathMixPOP` but with some more options. You can create new attributes in the `MathCombinePOP`.

To keep your data clean you can delete the attributes that you don't need after the calculations in the math POPs.

### MathPOP
Allows you to remap your values.


### MathMixPOP
Allows to combine multiple attributes with math functions and operations. On the `Inputs` page you can select which attribute you want to use, optionally rename them. On `Mix` tab you decide how you want the attributes combined.
The `Uniform` page allows to create attributes with constant values.

If you input attributes from multiple sources for example Color, the input 0 attributes will go in with the same attribute name `Color`. The other inputs have `in1_Color`, `in2_Color` etc. Only the inputs from input 0 get outputted plus newly created attributes.


### MathCombinePOP
Is like `MathMixPOP` but it lets you gather together attributes.


#### Work with angles
When you want to work with angles in a `MathMixPOP` you can set the unit on the `INput` page to `Degrees`,`Radiant` or `Cycles`.

If you use degrees you would need to multiply `P.x` based on the angle units the `sin` function expects.
Degrees - `P.x * 360 = angle -> sin(angle) = P.y` 
Radians - `P.x * _PI * 2 = angle -> sin(angle) = P.y` 
Degrees - `P.x * 1 = angle -> sin(angle) = P.y` 

### Scripting
If you want to use PI as a value to for example convert attributes you can use `math.pi`.


## Taper Geometry
You can taper geometry with a combination of `NormalizePOP` and `MathMixPOP`. In the `NormalizePOP` you take `P.x` from the source shape, select `Box X` for the mode, output `bbox` attribute and then in the `MathMixPOP`you multiply `P.x` with `bbox`.

![Taper Of Geometry Img](/img/TD/TaperOfGeometry.png)

[Download Example File](/files/TD/TaperOfGeometry.tox)


## CHOP into Attributes
There are multiple ways to channels from CHOP into your POP attributes.

First is to create a uniform in the `MathMix` and assign the value from the CHOP. For example assign some r,g,b color values. Then in the `Combine` tab use operation A and reference the uniform and assign it to `Color` result scope.

![Assign Color From CHOP Img](/img/TD/AssignColorFromChop.png)

## Rendering
To be able to render your POP data it needs to contain Primitive information. If you just instance from your POP data you don't need to have primitives, just the point information.

## Copying Vs. Instancing
Using instancing is faster and more performant than using `CopyPOP`. When you work with small instancing counts it might not be noticeable. Use instancing whenever possible.

## GLSL
We can use `GLSLPOP` to process points. The pattern to access attributes from an input `TD[Attribute]_[AttributeName](input,pointID). 
For example if you want to assign new position data to the input points you can use `P[id] = newValues`. The `GLSLPOP` then needs `P` as `Output Attribute` to be able to assign it in the code.

```
void main(){
	const uint id = TDIndex(); // uint is uniform integer
	if(id >= TDNumElements())
		return;
	
	vec3 p = TDIn_P(0,id); // Read from given attribute in first input

	p[id] = p * 2.0;



	scale[id] = TDIn_Scale(1,id);
	color[id] = TDIn_Color(2,id);
}
```

When you add uniforms in the `GLSLPOP` you don't need to declare them on the top of the code like you need to for `GLSLTOP`.
So you create it for example in the `Vectors` tab as `uLimitScale` and then you directly can use it in your code.
```
vec3 p = TDInP(0,id);
p[id] = p.x * uLimitScale;
```

## Using Attributes in other parts of patch
You can create attributes with POPs and then later use these in for example a `GLSLMAT`

When you want to pass attributes into glsl mat you need to pass from vertex shadr to pixel shader via in out