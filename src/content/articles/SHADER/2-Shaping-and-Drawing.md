# Shaping and Drawing
## UV Coordinates Deep Dive
In the examples from before we had our coordinate system range from 0.0 -> 1.0 where the origin is in the lower left corner. But often it makes sense to have the origin of the coordinate system in the center of the canvas. 

To center the coordinate system we first subtract `0.5` and then we rescale the uv to `-1 and 1`.
```
vec2 uv = gl_FragCoord.xy/u_resolution;//0 to 1
uv = uv - 0.5;//-0.5 to 0.5
uv = uv * 2.0; // -1.0 to -1.0

// or on one line
vec2 uv = (gl_FragCoord.xy/u_resolution)*2.0-1.0;
```
```glsl
void main(){
	vec2 uv = (gl_FragCoord.xy/u_resolution)*2.0-1.0;
	gl_FragColor = vec4(uv,0.0,1.0);
}
```
Now 0.0 is in the center and negative x is on the left and positive x on the right. Same for y.
Now we can use `length(uv)` to calculate the distance of the current pixel towards the center.
```glsl
void main(){
	vec2 uv = (gl_FragCoord.xy/u_resolution)*2.0-1.0;
	float dist = length(uv);
	gl_FragColor = vec4(vec3(dist),1.0);
}
```

### Aspect Ratio
When your canvas is not square, the recalculation of the coordinate system leeds to a stretched circle because we are mapping x and y to the same range of -1 and 1. If the screen is wider than tall the x range covers more pixels and the coordinate space stretched.

```
Image a 1600x800 screen.
When we normalize both axes to -1 and 1
x axis maps 1600 pixels to the range -1 and 1
y axis maps 800 pixels to the range -1 and 1
So 1 unit in x = 800 pixels. But 1 unit in y = 400 pixels.
The same distance in UV space convers different amounts of screen.
```
We want 1 unit to mean the same physical distance in both directions.
To fix the aspect ratio we stretch the x axis. The convention is keep y normalized, let x extend as needed.
```
vec2 uv = (gl_FragCoord.xy/u_resolution)*2.0-1.0;
uv.x *= u_resolution.x/u_resolution.y; // stretch x to match
```

## Essential Functions
### step
`step(edge,x)`
This function returns 0.0 if x < edge and returns 1.0 if x >=edge
The `step()` function creates a hard cutoff,Binary,On or off.

```
step(0.5,0.3) // 0.0 (0.3 is below 0.5)
step(0.5,0.7) // 1.0 (0.7 is above 0.5)
step(0.5,0.5) // 1.0 (edge case: equals returns 1)
```

We can use it to split the screen
```
float brightness = step(0.5,uv.x);
```
```glsl
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	float bright = step(0.5,uv.x);
	gl_FragColor = vec4(vec3(bright),1.0);

}
```
### smoothstep
`smoothstep(edge0,edge1,x)` smoothstep works similar to `step()` but creates smooth transition between the edges.
```
smoothstep(0.3, 0.7, 0.0)   // 0.0 (below lower edge)
smoothstep(0.3, 0.7, 0.5)   // 0.5 (middle of transition)
smoothstep(0.3, 0.7, 1.0)   // 1.0 (above upper edge)
```
```
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	float bright = smoothstep(0.25,0.75,uv.x);
	gl_FragColor = vec4(vec3(bright),1.0);

}
```
```glsl
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	float bright = smoothstep(0.25,0.75,uv.x);
	gl_FragColor = vec4(vec3(bright),1.0);

}
```
So smoothstep allows you to create soft edges and transitions.

### mix
`mix(a,b,t)`
Blends between two values. When t = 0 mix returns a, when t = 1 mix returns b. Between it interpolates.
```
mix(0.0, 1.0, 0.5)   // 0.5 (halfway)
mix(0.0, 1.0, 0.25)  // 0.25 (quarter way toward 1)
mix(10.0, 20.0, 0.5) // 15.0 (halfway between 10 and 20)

Mix also works for vectors.
vec3 red = vec3(1.0, 0.0, 0.0);
vec3 blue = vec3(0.0, 0.0, 1.0);
vec3 purple = mix(red, blue, 0.5);  // vec3(0.5, 0.0, 0.5)
```
```
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	vec3 red = vec3(1.0,0.0,0.0);
	vec3 blue = vec3(0.0,0.0,1.0);
	vec3 color = mix(red,blue,uv.x);
	gl_FragColor = vec4(color,1.0);
}
```
```glsl
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	vec3 red = vec3(1.0,0.0,0.0);
	vec3 blue = vec3(0.0,0.0,1.0);
	vec3 color = mix(red,blue,uv.x);
	gl_FragColor = vec4(color,1.0);
}
```
The `mix()` function is useful for gradients, color blending, transitions between states.

### clamp
`clamp(x,min,max)`
Constrains a value to a range.
```
clamp(1.5, 0.0, 1.0)   // 1.0 (capped at max)
clamp(-0.3, 0.0, 1.0)  // 0.0 (raised to min)
clamp(0.7, 0.0, 1.0)   // 0.7 (already in range)
```
`clamp()` is useful when values might exceed valid bounds.

### fract
`fract(x)`
Returns the fractional part of a decimal. Throws away the integer part.
```
fract(1.7)   // 0.7
fract(3.2)   // 0.2
fract(0.5)   // 0.5
fract(5.0)   // 0.0
```
```
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	float brightness = fract(uv.x *5.0);
	gl_FragColor = vec4(vec3(brightness),1.0);
}
```
```glsl
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	float brightness = fract(uv.x *5.0);
	gl_FragColor = vec4(vec3(brightness),1.0);
}
```

### mod()
`mod(x,y)`
Gives back the remainder after divsion. Similar to fract but with any divisor.
```
mod(5.0, 3.0)   // 2.0 (5 = 1*3 + 2)
mod(7.5, 2.0)   // 1.5
mod(1.0, 1.0)   // 0.0
```
`fract(x)` is equivalent to mod(1.0)


Ten vertical stripes, alternating black and white
```
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	vec3 color = vec3(0.0);
	float c = step(mod(5.*uv.y,1.),0.5);
	// alternative float c = floor(mod(uv.x * 10.0, 2.0));
	gl_FragColor = vec4(vec3(c),1.0);
}
```
```glsl
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	vec3 color = vec3(0.0);
	float c = step(mod(5.*uv.y,1.),0.5);
	gl_FragColor = vec4(vec3(c),1.0);
}
```
A screen split into thirds—left third red, middle third green, right third blue
```
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	vec3 color = vec3(0.0);
    color.r = step(uv.x,.333);
    color.g = step(uv.x,0.666)-step(uv.x,0.333);
	color.b = 1.-step(uv.x,0.666);
    gl_FragColor = vec4(color,1.0);

}
```
```glsl
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	vec3 color = vec3(0.0);
    color.r = step(uv.x,.333);
    color.g = step(uv.x,0.666)-step(uv.x,0.333);
	color.b = 1.-step(uv.x,0.666);
    gl_FragColor = vec4(color,1.0);
}
```
A smooth gradient only in the center band of the screen (left and right edges solid black)

```
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	vec3 color = vec3(0.0);
    float c = smoothstep(0.4,0.5,st.x)*smoothstep(0.6,0.5,st.x);
	// alternative float c = smoothstep(0.2, 0.0, abs(st.x - 0.5));
	color = vec3(c);
    gl_FragColor = vec4(color,1.0);

}
```
```glsl
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution.xy;
	vec3 color = vec3(0.0);
    float c = smoothstep(0.4,0.5,st.x)*smoothstep(0.6,0.5,st.x);
	color = vec3(c);
    gl_FragColor = vec4(color,1.0);
}
```
`abs(uv - center)` is fundamental for anything symmetric.

## Drawing Shapes
When we want to draw shapes in shaders, the distance of each pixel towards certain points allows us to define if that pixel is inside a shape or not. We can achieve that by measuring how far the pixel is from the shapes edge. This gives us the information of inside vs. outside and how far we are away. We then can draw depending on that information.

### Distance Field Concept
From thinking "draw a circle at position X with radius R" we change our thinking to "for each pixel, how far am I from the circles edge?"

If my distance is negative -> I'm inside the shape
If my distance is 0 -> I'm exactly on the edge
If my distance is positive -> I'm outside the shape

This representation - distance to edge, negative inside, positive outside is called *Signed Distance Field(SDF)*.
"Signed" because it has a sign: negative inside, positive outside.
"Distance" because it measures how far.
"Field" because every point in space has a value—it's a field of numbers.

Once we have the distance we can choose how to render this.
```
// hard edge: inside black, outside white
step(0.0,dist) 

// soft edge: anti-aliased
smoothstep(-0.01,0.01,dist)

// Ring/outline: only show pixels near the edge
1.0 - smoothstep(0.0, 0.02, abs(dist))

// outline: thin ring around the shape
abs(dist) -0.02 

// Glow: brightness falls off with distance
1.0 / (1.0 + dist * 10.0)
```
We have the same distance calculattion but completely different looks. The SDF defines the shape and the rendering happens in second decision. 

### Circle
A circle is defined as all points in the exact distance R from it's center point.
The shader for that is
```
uniform vec2 u_resolution;
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	//Normalize coordinates to -1 to 1, centered
	uv= uv* 2.0-1.0;
	//Fix aspect ration so circles aren't ovals
	uv.x*= u_resolution.x/u_resolution.y;

	//Circle SDF: centered at origin, radius 0.5
	float d = length(uv) -0.5;
	//Render: black inside (d<0),white outside (d>0)
	float c = step(0.0,d);
	gl_FragColor = vec4(vec3(v),1.0);

}
```
```glsl
uniform vec2 u_resolution;
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	//Normalize coordinates to -1 to 1, centered
	uv= uv* 2.0-1.0;
	//Fix aspect ration so circles aren't ovals
	uv.x*= u_resolution.x/u_resolution.y;

	//Circle SDF: centered at origin, radius 0.5
	float d = length(uv) -0.5;
	//Render: black inside (d<0),white outside (d>0)
	float c = step(0.0,d);
	gl_FragColor = vec4(vec3(c),1.0);

}
```
`step(0.0,d)` returns 0 when d<0(inside) and 1 when d>=0(outside). Inside pixels get color 0(black) and outside pixels get 1.0 (white).

When you want the circle to be white and the background black you flip the result around:
```
float c = 1.0 - step(0.0,d);
```
```glsl
uniform vec2 u_resolution;
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	//Normalize coordinates to -1 to 1, centered
	uv= uv* 2.0-1.0;
	//Fix aspect ration so circles aren't ovals
	uv.x*= u_resolution.x/u_resolution.y;

	//Circle SDF: centered at origin, radius 0.5
	float d = length(uv) -0.5;
	//Render: black inside (d<0),white outside (d>0)
	float c = 1.0-step(0.0,d);
	gl_FragColor = vec4(vec3(c),1.0);

}
```
### Rectangle
When we want to draw a rectangle we have to thing about what "inside a rectangle* means.
For a rectangle centered at origin with a width W and a height H:
- A point is inside if its x-coordinates are between -W/2 and +W/2
- AND its y-coordinates are between -H/2 and H/2

So now we want to think about the distance of a point, that is outside the rectangle, towards the nearest edge of the shape.
Because a rectangle is symmetric we can fold space and put our focus on only one quadrant. A point at (-0.3,0.2) has the same distance to the rectangle as a point at (0.3,0.2). So the sign doesn't matter for the distance - only its magnitude. 
For that can use `abs(uv)`. We then subtract half the size of the rectangle `size*0.5` to get the distance of the point towards the edge of the rectangle. Negative means inside and positive means outside.


```
float rectSDF(vec2 uv,vec2 size){
	vec2 dist = abs(uv) - size * 0.5;
	return max(dist.x,dist.y);

}



