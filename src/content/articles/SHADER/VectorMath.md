# Vector math

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
Vector addition is the operation of adding multiple vectors together into a vector sum. Mathematically we add value of each

For two vectors A and B, the sum AB is obtained by placing them head to tail and drawing the vector from the free tail to the free head.

![Vector Addition](/img/Math/VectorAddition.png)

```
vec2 A = vec2(0.4,0.2);
vec2 B = vec2(0.2,0.5);
vec2 C = A+B
```

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
Multiplying a vector by a scalar *scales its length*.

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
GLSL has the build in `length()` functions to determine how long a vector is.
```
vec2 v = vec2(0.2,0.8);
float len_v = length(v);

//Math behind the length() function is Pythagorean theorem - sqrt(x*x + y*y)  
// and for vector3 sqrt(x*x+y*y+z*z)
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
`normalize(v)` returns a vector that points in the same direction but with length 1. This vector is called *unit vector*. The unit vector is important because it represents pure direction without magnitude information. Useful when you want to seperate "which direction" with "how far/fast".
```
vec2 A = vec2(0.3,0.2);
vec2 N = normalize(v)
// Math behind normalize is divide each component by the length v/length(v)
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
For unit vectors the dot product is the cosing of the angle between the vectors.
The dot product returns a signle number.

If the dot product:
- is 1.0 -> both vectors have the same direction
- is 0.0 -> both vectors are Perpendicular(90°)
- is -1.0 -> both vectors are Opposite direction(180°)
- is between 0.0 to 1.0 -> both vectors are less than 90° apart
- is between -1.0 to 1.0 -> both vectors more than 90° apart

```
vec2 A = vec2(0.2,0.3);
vec2 B = vec2(0.4,0.1);
float dot = dot(A,B);
// The sum of component-wise products
// 0.2*0.4 + 0.3 *0.1
```
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

## Matrices
Matrices are tables of numbers with distinct rows and columns. They are used to represent coordinate spaces with origin and orientation of a space in which all positions in that space are place relative to. Two applications are for example object space(origin at the center of the object) and world space(origin at the center of the world).



https://lindenreidblog.com/2018/08/25/basic-math-for-shaders/
https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=1