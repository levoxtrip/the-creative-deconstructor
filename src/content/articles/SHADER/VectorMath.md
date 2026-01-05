# Vector math

In 2D space we have the horizontal x axis and the vertical y axis. Where they intersect is called *origin*, which we can think of as the center of the space and the root of all vectors.

The coordinates of a vector is a collections of numbers that give instructions on how to get from the tail of the vector(it's origin) to the tip of the vector. The first number defines how far to move on the x axis (negative number to the left; positive number to the right). The second number defines how far to move on the y axis(negative numbers to downward motion;positive numbers upward motion).

We write vectors in brackets `[-2,3]` and points in round brackets `(2,3)`

In 3D space we have a third axis z which is perpendicular to the other axis. The vector then is a triplet `[x,y,z]`. This gives you one unique vector in space.

## What is a vector?
A *vector* is a list of numbers that respresent two things simultaneously:
- a *point* - location in 2D/3D space
- an *arrow* - a direction and distance from the origin.

```
vec2 a = vec2(0.4,0.5);
// point - The location 0.4 right and 0.5 up
// arrow - A movement of 0.4 right and 0.5 up
```

## Addition
Vector addition is the operation of adding multiple vectors together into a vector sum. Mathematically we add the corresponding components of each vector.

For two vectors A and B, the sum AB is obtained by placing them head to tail and drawing the vector from the free tail to the free head. So adding the vectors means applying the displacement of the added vectors from the position.

![Vector Addition](/img/Math/VectorAddition.png)

```
vec2 A = vec2(0.4,0.2);
vec2 B = vec2(0.2,0.5);
vec2 C = A+B
// C.x = A.x + B.x = 0.4 + 0.2
// C.y = A.y + B.y = 0.2 + 0.5
// C = (0.6,0.7)
```

Each vector represents a certain movement, a step with a certain distance and direction in space. If you take a step along the first vector and then take another step along the second vector you moved the same distance as if you would have moved along the sum of these two vectors.

### Use case - Offsetting Position
We can use *Addition* to move the whole coordinate system
```glsl
void main(){
	vec2 offset = vec2(0.5,0.5);
	uv = uv + offset;
	vec3 color = vec3(uv.x,uv.y,0.0);
	gl_FragColor = vec4(color,1.0);
}
```

## Subtraction
Subtracting vectors gives the *vector between two points*.
```
vec2 A = vec2(0.6,0.4);
vec2 B = vec2(0.9,0.7);
vec2 AtoB = B - A;
// AtoB is the arrow pointing from A to B
```
![Vector Subtraction](/img/Math/VectorSubtraction.png)

### Use case - Direction to center
```glsl
void main(){
	vec2 center = vec2(0.5,0.5);
	vec2 toCenter = center -uv; //from pixel toward center
	vec2 fromCenter = uv -center; // from center toward center;
	vec3 color = vec3(fromCenter,0.0);
	gl_FragColor = vec4(color,1.0);
}
```

## Scalar Multiplication
Multiplying a vector by a *scalar* *stretches out the vector /scales its length*.
Mathematically we multiply each of the component of the vector with the scalar.
`[x,y]*3 = [3x,3y]`
```
vec2 A = vec2(0.3,0.4);
vec2 B = v*2.0;//doubled
vec2 C = v*0.5;//halved
vec2 D = v * -1.0;// flipped
```
![Vector Scalar Multiplication](/img/Math/VectorScalarMulti.png)

The direction stays the same - unless it is negative.

### Use case - Controlling movement speed
```glsl
void main(){
	vec2 direction = vec2(0.1,0.0);
	float speed = 0.3;
	vec2 velocity = direction * speed + u_time;
	gl_FragColor = vec4(fract(uv.x+velocity.x),fract(uv.y+velocity.y),0.0,0.0);
}
```

## Length(Magnitude)
The magnitude of a vector is calculated as the square root of the sum of each component squared. The math behind it is *Pythagorean theorem* `sqrt(x*x + y*y)` or for vector 3 `sqrt(x*x+y*y+z*z)`

GLSL has the build in `length()` functions to determine how long a vector is.
```
vec2 v = vec2(0.2,0.8);
float len_v = length(v);
```
![Vector Scalar Multiplication](/img/Math/VectorMagnitude.png)

### Use case - Distance from center
```glsl
void main(){
	vec2 center = vec2(0.5);
	float dist = length(uv-center);
	gl_FragColor = vec4(vec3(dist),1.0);
	
}
```

## Normalization
`normalize(v)` returns a vector that points in the same direction but with length 1. This vector is called *unit vector*. The unit vector is important because it represents pure direction without magnitude information. Useful when you want to seperate "which direction" with "how far/fast". Math behind normalize is, you divide each component by the magnitude `v = (v.x/length(v),v.y/length(v),v.z/length(v))`
```
vec2 A = vec2(0.3,0.2);
vec2 N = normalize(v)
```
![Vector Scalar Multiplication](/img/Math/VectorNormalized.png)

### Use case - move a fixed distance in a direction
```glsl
void main(){
	float myTime = floor(mod(u_time,3.0)); 
	vec2 target = vec2(1.0);
	vec2 current = uv;
	vec2 toTarget = target -current;
	vec2 direction = normalize(toTarget);
	float stepSize = 0.2*myTime;
	if(length(toTarget)>0.0){
	
	current = current + direction *stepSize;
	} else {
		current = uv;
	}
	
	gl_FragColor = vec4(vec3(current.x,current.y,0.0),1.0);
}
```
## Dot Product
For unit vectors the dot product is the cosine of the angle between the vectors`cos(theta)`.
The dot product between two normalized vectors is always a scalar/single number between -1 to 1.

It gives us information about the angle between the two normalized vectors.
If the dot product:
- is 1.0 -> both vectors have the same direction
- is 0.0 -> both vectors are Perpendicular(90°)
- is -1.0 -> both vectors are Opposite direction(180°)
- is between 0.0 to 1.0 -> both vectors are less than 90° apart
- is between -1.0 to 1.0 -> both vectors more than 90° apart

![Vector DotProduct Img](/img/Math/VectorDotProduct.png)

```
vec2 A = vec2(0.2,0.3);
vec2 B = vec2(0.4,0.1);
float dot = dot(A,B);
// The sum of component-wise products
// 0.2*0.4 + 0.3 *0.1
```
The dot product is super useful for example for light calculations:
It allows to determine how much a surface of a shape is facing a light source and calculate the light/brightness of the surface.
*facing directly toward light -> high dot prodcut -> bright*
*facing away from light -> low/negative dot product -> dark*

Another application is to use the dot product to check if an objeczt is in front or behind another object(positive dot product -> in front; negative -> behind)

### Use case - 

## Projection
The dot product also gives you how much one vector points in the direction of another.




## Component-Wise Multiplication
When you multiply two vectors you get component-wise multiplication.
```
vec3 a = vec3(0.1,0.2,0.3);
vec3 b = vec3(1.0,0.0,1.0);
vec3 c = a * b;
//vec3(0.1,0.0,0.3)
```

### Use case - Masking or tinting
```glsl
void main(){
	vec3 mask = vec3(1.0,0.0,1.0);
	vec3 tint = vec3(1.0,0.5,0.5);
	vec3 color = vec3(uv.x,uv.y,0.0);
	vec3 final = color*tint;
	gl_FragColor = vec4(final,1.0);
}
```

## Cross-product


## Matrices
Matrices are tables of numbers with distinct rows and columns. They are used to represent coordinate spaces with origin and orientation of a space in which all positions in that space are place relative to. Two applications are for example object space(origin at the center of the object) and world space(origin at the center of the world).


https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=2

## Deeper concepts
