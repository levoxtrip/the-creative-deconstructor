# Combining Shapes
When we draw shapes with SDFs it returns a single number, the distance from the currently calculated point towards the edge of the shape.
When you want to combine multiple shapes you have multiple numbers from the SDFs which need to combine be combined into one and rendered as one.
We then need to ask ourself questions like:
- Do the shapes appear separately?
- Do they merge together?
- Does one cut out or mask the other?

## Union - Combining Shapes
When we combine shapes we create a union out of the single shapes into one. You then are inside the result if you're inside either shape.
```
float circle = length(uv) -0.3;
float square = max(abs(uv.x),abs(uv.y))-0.2;
float combined = min(circle,square);
```
`min()` creates a union of the two shapes because it returns the smaller number of the two inputs so if you are either in one or the other shape you get a "inside the union" result back.



## Intersection - Keeping Only the Overlap
In an intersection we only want to draw where both shapes overlap. You are inside the *intersection* only when you are inside both shapes.
```
float combined = max(circle,square)
To be inside both shapes, both distances must be negative.

If you're inside the circle but outside the square:
 circle = -0.2 (inside)
 square = 0.2 (outside)
 max(-0.2,0.2) = 0.2 -> positive -> outside the intersection

 circle = -0.1(inside)
 square = -0.2(inside)
 max(-0.1,0.2)
```
`max()` works because it always returns the bigger number, if the bigger number is negative than inside is true for both shapes, if it is positive than it is at least outside for one shape.

## Subtraction - Cutting Holes
When we subtract one shape of the the what we do is *show shape A but cutout shape B out of it.* You are insite the result if you are in shape A but not inside shape B.
`float combined = max(circle,-square);`
By negating an SDF we flip it's inside and outside. So where `square` would be negative(inside) `-square` returns positive and the other way around. So `-square` represents everything exept the square. It returns true if you are not in the shape.
This makes `max(circle,-square)` the intersection of:
- inside the circle
- everything exept the square
-> the part part of the circle that doesn't overlap with the square.
```
Point inside circle, outside square (kept):
	circle = -0.2(inside circle)
	square = 0.1 (outside square)
	-square = -0.1
	max(-0.2,-0.1) = -0.1 -> inside combined shape

Point inside circle, inside square (cut out):
  circle = -0.15 (inside circle)
  square = -0.1 (inside square)
  -square = +0.1
  max(-0.15, +0.1) = +0.1 → outside combined shape 
```

These operations now allow us to combine different shapes to create more complex shapes like a pill shape(union), a crescent moon(subtraction), a donut(subtraction).

## Smooth Boolean Operations
The previously discussed operations create combinations with sharp transition edges. When we look at for example `min(a,b)` we see that:
```
when a<b -> output is a
when b>a -> output is b
when a=b -> they are equal and we get the crossover point
```
We first follow `a` and at the crossing-point instantly without any gradual transition we switch to follow `b`. So where the two SDFs meet there is an abrupt change in direction.

For organic shapes you want to blend shapes smoothly into each other. Like two drops of water smoothly merging into each other. The idea of the smooth boolean operation is to replace the sharp corner with a gradual curve.
So instead of instantly switching between `a` and `b`, near the crossover it blends between the two shapesk, dipping below/above what the regular `min()` or `max()` would give. This dipping gives the bulge and the boundary get curved.

### Smooth combination of shapes
For a smooth combination of shapes we create a `smoothMin()` function that creates the smooth transition zone between the shapes at the crossing points.
```
float smoothMin(float a, float b, float k){
	float h = max(k-abs(a-b),0.0)/k;
	return min(a,b) - h*h*k*0.25
}
```
With `k` we control the size of our transition zone - so the softness of the merge of the shapes.

`float h = max(k-abs(a-b),0.0)/k` calculates the blending factor from 0 to 1

`abs(a-b)` - Is the difference between the two SDF values. When the shapes a far apart, one SDF is larger than the other so their difference is too. When shapes are close their difference is small. 

`k-abs(a-b)`we subtract the difference from k. If the difference is larger than k it results in a negative value. If difference smaller than k we get a positive value.

`max(...,0.0)` clamps the negative values to 0.0. When the shapes are far apart we get 0.0, when shapes are close we get a positive value. With `/k` we normalize the result into a 0 to 1 range.
So when the difference between the two sdfs = k -> h = 0 -> we are entering the blend zone.
When the difference = 0 -> h =1 maximum blending.
So `h` tells us how much we should blend. It's 0 when shapes are apart and 1 when shapes are very close for maximum blending. 

Now we want to apply the blend with `return min(a,b)-h*h*k*0.25`.
`min(a,b)` is the regular hard minimum calculation. With `h*h` we square the blend factor which creates a smooth curve, it makes the blend ease in and out rather than changing linearly. Multiplying it with `k*0.25`assures that the blend depth is proportional to the blend radius. LArger `k` means more blending which means a deeper curve. We then subtract the blend amount from the `min(a,b)` calculation. This makes the result smaller, more negative which pushes the surface outward, this creates the bulge at the transition zone. When both SDF are equal, we are exactly at the junction of both shapes, `h` reaches it's maximum 1.0. The blend is strongest here. The result is more negative than the regular `min()` would be, the point that would be exactly at the crossing point is now inside the combines shape. 

```glsl
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circleSDF(vec2 p, vec2 center, float radius){
    vec2 uv = p-center;
    return length(uv)-radius;
    
}

float polygonSDF(vec2 p, vec2 center, int sides, float radius){
    vec2 uv = p-center;
    float angle = atan(uv.y,uv.x);
    float TWO_PI = 3.14159*2.;
    float slice = TWO_PI/float(sides);
    float a = mod(angle,slice) -slice*0.5;
    return length(uv)*cos(a)-radius;
}

float smoothMin(float a, float b, float k){
    float h = max(k-abs(a-b),0.0)/k;
    return min(a,b) - h*h *k *0.25;
}
float smoothMax(float a, float b, float k){
    float h = max(k-abs(a-b),0.0)/k;
    return max(a,b)+h*h*k*0.25;
    
}

float smoothSubtract(float a, float b, float k){
    return smoothMax(a,-b,k);
    
    
}


void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    float s1 = circleSDF(uv,vec2(0.5),0.2);
    float s2 = polygonSDF(uv,vec2(0.590,0.390),5,0.178);
    
    float s = smoothMin(s1,s2,0.064);
    //float s = smoothMax(s1,s2,0.064);
    //float s = smoothSubtract(s1,s2,0.088);
    float r = 1.0-step(0.0,s);
    
    color = vec3(r);

    gl_FragColor = vec4(color,1.0);
}
```




### Smooth Intersection
We can apply the same idea to the intersection with `max()`.
```float smoothMax(float a, float b, float k){
	float h = max(k-abs(a-b),0.0)/k;
	return max(a,b) + h*h*k*0.25
}
```
Here we use `max()` instead of `min() and we add the blend instead of subtracting it. Adding makes the result larger, more positive, which pulls the surface inward at junctions, this rounds of the shape edges where two shapes overlap.

```glsl
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circleSDF(vec2 p, vec2 center, float radius){
    vec2 uv = p-center;
    return length(uv)-radius;
    
}

float polygonSDF(vec2 p, vec2 center, int sides, float radius){
    vec2 uv = p-center;
    float angle = atan(uv.y,uv.x);
    float TWO_PI = 3.14159*2.;
    float slice = TWO_PI/float(sides);
    float a = mod(angle,slice) -slice*0.5;
    return length(uv)*cos(a)-radius;
}

float smoothMin(float a, float b, float k){
    float h = max(k-abs(a-b),0.0)/k;
    return min(a,b) - h*h *k *0.25;
}
float smoothMax(float a, float b, float k){
    float h = max(k-abs(a-b),0.0)/k;
    return max(a,b)+h*h*k*0.25;
    
}

float smoothSubtract(float a, float b, float k){
    return smoothMax(a,-b,k);
    
    
}


void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    float s1 = circleSDF(uv,vec2(0.5),0.2);
    float s2 = polygonSDF(uv,vec2(0.590,0.390),5,0.178);
    
    //float s = smoothMin(s1,s2,0.064);
    float s = smoothMax(s1,s2,0.064);
    //float s = smoothSubtract(s1,s2,0.088);
    float r = 1.0-step(0.0,s);
    
    color = vec3(r);

    gl_FragColor = vec4(color,1.0);
}
```


### Smooth Subtraction
For cutting one shape from another with smooth edges we can use:
```
float smoothSubtract(float a, float b, float k){
return smoothMax(a,-b,k);
}
```

```glsl
// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circleSDF(vec2 p, vec2 center, float radius){
    vec2 uv = p-center;
    return length(uv)-radius;
    
}

float polygonSDF(vec2 p, vec2 center, int sides, float radius){
    vec2 uv = p-center;
    float angle = atan(uv.y,uv.x);
    float TWO_PI = 3.14159*2.;
    float slice = TWO_PI/float(sides);
    float a = mod(angle,slice) -slice*0.5;
    return length(uv)*cos(a)-radius;
}

float smoothMin(float a, float b, float k){
    float h = max(k-abs(a-b),0.0)/k;
    return min(a,b) - h*h *k *0.25;
}
float smoothMax(float a, float b, float k){
    float h = max(k-abs(a-b),0.0)/k;
    return max(a,b)+h*h*k*0.25;
    
}

float smoothSubtract(float a, float b, float k){
    return smoothMax(a,-b,k);
    
    
}


void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    float s1 = circleSDF(uv,vec2(0.5),0.2);
    float s2 = polygonSDF(uv,vec2(0.590,0.390),5,0.178);
    
    //float s = smoothMin(s1,s2,0.064);
    //float s = smoothMax(s1,s2,0.064);
    float s = smoothSubtract(s1,s2,0.088);
    float r = 1.0-step(0.0,s);
    
    color = vec3(r);

    gl_FragColor = vec4(color,1.0);
}
```