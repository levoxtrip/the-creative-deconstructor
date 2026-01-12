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
