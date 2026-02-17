# POP Basics

## Foundation
POPs(Point Operators) are GPU-accelerated operators that generate and manipulate (3D) data. POP operators are more performant than SOP operators because POPs run on the GPU on your computer.

The foundation of POPs are points with attributes.
POP data is made out of a set of points with attributes. Attributes can be:
- position of point
- normal vector of point
- texture coordinates
- color

Every POP contains three lists:
Point List - index, point position, normal attributes, color
Vertex List - index, prim:vindex (which vertex make up the primitive), pindex(to cross reference to point list)
- Primitive List - index, type of primitive, vertices(List of points that make up the vertex; numbers are the index of the point in point list)


In the viewer of the POP nodes we can see what attributes the POP has/we can change.

### Attributes
Attributes are data attached to points/vertices/primitives.
Essential attributes are:
P	Position(x,y,z)
N	Normal direction
Color	RGBA color
Tex	Texture coordinates(u,v,w)
PointScale	Size per point

To access components of the attributes we  can use
```
P(0) - X component
P(1) - Y component
P(2) - Z component

or use *Swizzling*
P.x = X component
P.y = Y component
P.z = Z component

Color.rgb - same as Color(0) Color(1) Color(2)

P.yxz - Y, X, Z (reordered!)
```
POPs run as *compute shaders* on the GPU what makes them memory efficient and allows to process points in parallel simultaneously.

If a POP doesn't modify an attribute, it references the upstream data. 
POPs use references unchanged data, and only make "copies" when something actually gets modified. In the node viewer—attributes marked with (r) are references, not copies.

POPs create chain of data we can work with. You can add an in initial attribute for the initial position and a life attribute and when life is bigger than max life set position to init position.
if life > lifemax do reset attribute from 0 to 1
To add attribute with random value you can use a random pop

### Primitive Types - How points connect to form shapes
POPs have five primitive types:
- Point - 1 vertex - single renderable point
- Line - 2 vertices - straight line segment
- Line Strip - 1+ vertices - connected chain of lines
- Triangle - 3 vertices - filled 3-sided surface
- Quad - 4 vertices - filled 4-sided surface

Point data alone doesn't get rendered. You need a Point *primitive* to make a point visible in the RenderTOP.

#### How Vertices Work
Vertices are indices that point into your points list. 
```
Points list:
  0: P(0, 0, 0)
  1: P(1, 0, 0)
  2: P(1, 1, 0)
  3: P(0, 1, 0)

Quad primitive:
  vertices = [0, 1, 2, 3]  →  "use points 0, 1, 2, 3 to make this quad"
```
Why this separation? One point can be shared by multiple primitives. A cube has 8 points but 6 quad faces -> each corner point is used by 3 different quads.

#### Line Strips
Line strips are sequences of connected poitns. They can be:
- open - starts at point A and ends at point B
- closed - last vertex index equals first vertex index(forms a loop)

Closed line strips make loops but don't fill to a surface. They are like drawing a circle with a pen - just the outline.


### Generators and Filters
We need point data generator to create basic point positions source.


POPs have two categories:
*Generators*  create import new geometry/3D data:
- CirclePOP
- PointGeneratorPOP
- SpherePOP
- FileInPOP
- and more

*Filters* modify incoming geometry:
- TransformPOP
- MathPOP
- NoisePOP
- NormalizePOP


To create special attributes you can use a POP operator and then set output attribute scope to for example color






## Math POP - Swiss Army Knife
The `MathPOP` lets you manipulate any attribute with arithmetic and functions. It takes an input attribute, applies mathematical operations and outputs the result to the same or to a different attribute.
`Input Attribute -> Operation -> Output Attribute`.

Common operations that we can compute with the `MathPOP` are:
```
Add   Adds a value    Offset positions
Multiply  Scales value  Scale geometry, fade colors
Pow Raises to Power   Exponential falloffs
Fit   Remaps range    Normalize values to 0-1
Sin 
```
## Parameter Size
Some of the POP nodes have the parameter `Parameter Size`. This allows to define if you want one values to affect all components equally or if you want separate controls for each component.

On top of just manipulating the existing attributes with the operators you also can use the modification and create a new attribute with it. The `Output Attribute field` allows you to create new attributes that have the result of the operation assigned.

## TransformPOP
`TransformPOP` allows to apply transformations to the data like rotation, scaling or transformations.

To visualize attributes and their behavior we can use `POP Viewer` from the pallette.

The points data allows us to work with particle systems, polygons any 3D geometrical shape, point clouds, polygons, lines etc as well as data points.

POPs can be renderer in the `RenderTOP` but also passed to DMX devices, LED arrays, lasers or other systems.


The `index` lets us reference specific elements from the list.

## Attribute class

`Attribute Class` parameter defines to which *attribute class* the changes get applied
If you apply it to primitive instead of point the whole primitive has the same value.


## Primitive Types
Point - single point - no connectivity just points

Positions on the vertex of the operator shapes.

Line - two points
Connectivity lines
combines point pairs

Line strips - one or more points - Connectivity Linestrip - this allows to have open and closed line strips; closed linestrip- multiple primitives are connected in one point/ last point same as first.


Triangle - three points - three vertices for primitive


Quads - four points - requires 4 vertices per primitive.


We don't need primive assigned to our POP data. If we use the info just for instancing we don'T need the primitive type. But to render geometry in a scene you need primitive.


## ConvertPOP
Allows to convert triangle into line strips.


## Instancing POP
When you use POP info for instancing you don't need primitive information, but if you want to render the info to the scene you need primitive assigned.
Use POP as the shape that gets instanced.
Use pop shape to create the instancing data.

## Accumulative Movement


## Operators
The available POP operators can be seperated in *Generators* and *Filter*:
- Generators create or input 3D data
- Filter modifiy existing data



## Point Generator POP
The `PointGeneratorPOP` allows to select a shape where we want to distribute points. We can decide to distribute them on the surface or the volume of the shape. With `Random` flag off points get distributed evenly spaced.

## Normalize POP
To normalize attributes of POP. Also allows to assign lookup curves which generates intresting effects.

## SprinklePOP
The `SprinklePOP` allows to sprinkle points over a given geometry. 

## TrailPOP
Generates a trail effect when points are moving around in space. It generates linestrips

## ProximityPOP
allows to connect points depending on their distance to each other. plexus effect.


## NoisePOP
Adds nosie attribute to the data.
Allows to choose where we want to apply some noise. 

NoisePOP gives a noise value every fram.e

In a feedbackpop loop it can displace the position every frame by a value. 





## Create Own Particle System behavior
Feedback POP + apply movement with for example noise + add forces with FieldPOP + Mathmix to update/add ne point position + null to close feedback





## How to convert primitive type
`ConvertPOP` allows us to convert primitive types

## How to apply attributes to lists

## How to apply color attribute to point/how to convert point position to color of point?
`NormalizePOP`-input P
lookup curve sin,cos,triangle
output attribute Scope Color.rgb

## To apply color to points from a top
`LookupTextPOP` assign color top.

## How to move point?


# LookupTextPOP
Allows you to assign a texture to manipulate attributes of the pop.
For example we can use a texture to set the size or color attributes of our points.
The TOP has to have the resolution of amount of points/particles.
Use for example Top with width = number points and height =1

![Assign Color To Points From TOP](/img/TD/AssignColorToPointsFromTOP.png)
You need to set a `LookupIndexAttribute U` to apply the values their dedicated indexes.

# ParticlePOP
Generates number of points over time with different attributes.

With `Init` you can initialize the particle system or reset it to initalize initial state.
On `Start` we start the Particle system behavior.

The `ParticlePOP` acts similar to `FeedbackPOP`, you have to drag a null to its `Target Particle Update POP` field as teh feed that updates the particle state. Everything you put inside the feedback loop has an effect on the attributes.




## Create Life in Particle System
To create life attribute in particle system after particlePOP use `MathMix` and divide particle age by `PartLifeSpan` as the result you set `Life`.

## Add Noise Movement to Particle System
We connect the `ParticlePOP` with a `NoisePOP` to add some noise movement to each point.

## Add Force to Particle System
We can use a `ForceRadialPOP` to add some forces to the particle of your system.

## Create a Push forward effect
Add a transform and scale to 1.1

## Add Rotation To particle system
ParticlePOP attributes new attributes rot - mathmix Rot + P

To get amount of points of a POP
op('pointgen1').numPoints()


# FeedbackPOP
Feedback POP works similar to nromal feedback system. We put some data in, manipulate it and feed it back in and it is incrementing changes step by step.


# How to increment an attribute over time
Inside a feedbvack loop we can use a mathmixpop, create a life inc uniform with 0.01, then in the combine tab we add a+b and add the life inc to the life. 

How to move along normals


## Generating Points
`PointGeneratorPOP` allows us number of shapes as the source and distribute a number of points across the surface or volume of the shape.


## Attributes
Attributes are numbers(single number,vectors) that are assigned to a point, vertex or primitive of geometry.

*Point* Attribute is `float3` 
*Color* Attribute is `float4`


## MathMixPOP
Allows to create new attributes or combine the input attributes to apply calculations between them. 

## TopToPOP
A `TopToPop` creates for each pixel in a TOP a point in the POP.


## Loading 3D Models
When you load 3D models from the internet it can make sense to first normalize it with `NormalizePOP`. Also set `aspect correct` so keep the proper aspect ratio. With a `TransformPOP` you then can center the POP data. In the `align` tab click `Align TranslateX/Y/Z`  to `Origin`

## Creating Points Inside Volume of Source Shape
The `SprinklePOP` allows you to create points inside the volume of the input or it's surface.

## FieldPOP
`FieldPOP` adds new attribute `weight` to the points of your source data. The node allows you to et the basic shape of the field. It returns 0 or 1 if point is sinde field or not. The `Transition Range` allows to create smoother weight values and transitions. Afterwards you then can calculate in an `MaxMixPOP` how `weight` affects the point position or other data.


### How to apply field weight to point position
To get the direction the point should move we can multiply the weigth with the normal so it moves along its normal. We output Offsetweight as result scope. We then need to create a "strength" value in new tab because we want to define how much the point should be affected. This we multiply with the offset weight and store it back into the offset weight. At the end we add P point with the offset weight.
In Output of the `FieldPOP` we can set delete new attrubtes to keep the passed attribute clean and don't clutter them. 


## Create Random Value Per Point
If you want to create a random for every instance in your POP data you can plug the POP into a `RandomPOP` and create an output attribute scope with the new random values.

## AttributeCombinePOP
`AttributeCombinePOP` allows you ccombine and add new attributes to your data.

## MathCombinePOP
With the mathcombinepop we can execute some logic for example test if our particle life already > bigger than maxlife, if true we can create a doreset/stay attribute. We tell the particle when and how to move. You also can mix different states of the sattributes.

## DeletePOP
allows you to delete some data. 
Under `Thin` you can reduce the amount of data points.

## AnalysePOP
allows to avergage data
so for exmaple use pattern, add noise pop and the nanalyse to get the centeroid.


You can use POP to sort TOPS

## PointCloudPOP
allows you to input pointcloud and also rerange the attributes that are coming in with the file.
For example colors are often 0 to 255 but td expects 0 to 1

# TwistPOP
Allows to create twist operations on the POP

# BlendPOP
Allows to blend between different points