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
POPs have two categories:
*Generators*  create new geometry:
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

## Math POP - Swiss Army Knife
The `MathPOP` lets you manipulate any attribute with arithmetic and functions. It takes an input attribute, applies mathematical operations and outputs the result to the same or to a differnt attribute.

## Parameter Size
Some of the POP nodes have the parameter `Parameter Size`. This allows to define if you want one values to affect all components equally or if you want separate controls for each component.

On top of just manipulating the existing attributes with the operators you also can use the modification and create a new attribute with it. The `Output Attribute field` allows you to create new attributes that have the result of the operation assigned.

## TransformPOP
`TransformPOP` allows to apply transformations to the data.

To visualise attributes and their behavior we can use `POP Viewer` from the pallette.

The points data allows us to work with particle systems, polygons any 3D geometrical shape, point clouds, polygons, lines etc as well as data points.

POPs can be renderer in the `RenderTOP` but also passed to DMX devices, LED arrays, lasers or other systems.


The `index` lets us reference specific elements from the list.

## Attribute class

`Attribute Class` parameter defines to which *attribute class* the changes get applied



## Primitive Types
Point - single point

Line - two points

Line strips - one or more points - this allows to have open and closed line strips; closed linestrip- multiple primitives are connected in one point

Triangle - three points

Quads - four points

We don't need primive assigned to our POP data. If we use the info just for instancing we don'T need the primitive type. But to render geometry in a scene you need primitive.



## Accumulative Movement


## Operators
The available POP operators can be seperated in *Generators* and *Filter*:
- Generators create or input 3D data
- Filter modifiy existing data



## Point Generator POP
The `PointGeneratorPOP` allows to select a shape where we want to distribute points on. We can decide to distribute them on the surface or the volume of the shape. With `Random` flag off points get distributed evenly spaced.

## Normalize POP
To normalize attributes of POP. Also allows to assign lookup curves which generates intresting effects.

## SprinklePOP
The `SprinklePOP` allows to sprinkle points over a given geometry. 

## TrailPOP
Generates a trail effect when points are moving around in space. It generates linestrips







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