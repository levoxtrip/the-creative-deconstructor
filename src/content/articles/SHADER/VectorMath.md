# Vector math

## What is a vector?
A *vector* is a list of numbers that respresent two things simultaneously:
- a *point* - location in space
- an arrow - a direction and distance from the origin.

```
vec2 a = vec2(0.4,0.5);
// point - The location 0.4 right and 0.5 up
// arrow - A movement of 0.4 right and 0.5 up
```

## Addition
Vector addition is the operation of adding multiple vectors together into a vector sum. For two vectors A and B, the sum AB is obtained by placing them head to tail and drawing the vector from the free tail to the free head.

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





---

https://lindenreidblog.com/2018/08/25/basic-math-for-shaders/
https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=1