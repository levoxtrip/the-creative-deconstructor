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
We have the same distance calculation but completely different looks. The SDF defines the shape/distance data as raw information and the rendering happens in a second decision in a later step. To be more flexible keep these steps separated. 

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
When we want to draw a rectangular shape, again the core question is: for every pixel on the screen, how far is it away from the shape? A negative distance means inside and positive outside.

A rectangle centered at the origin is symmetric. A point at (-0.3,0.2) has the same distance as the point (0.3,0.2). This means the sign of the coordinate doesn't affect how far away you are from the shape.This allows us to fold space and put our focus only on quadrant of the shape.
![Symmetric Distances Img](/img/Shader/SymmetricRectangle.png)

So the first move is to fold all four quadrants into one with `abs(uv)`. Now you only need to think about the top right quadrant of your rectangle and every calculation you there applied for the other three equally.

After folding you subtract half the size of the rectangle to get the distance of our currently calculated point towards the edge of the rectangle.

`vec2 d = abs(uv) - size * 0.5;`

To evaluate if a point is in the shape or not we have three different cases we want to look at:
**Case1: Horizontal and Vertical Distance Are Negative**
When both distances `d.x` and `d.y` are negative we know the point is inside the shape. The edge closest to your point is which ever axis you are least inside the shape.

![Distance To Sides In Rectangle Img](/img/Shader/DistanceToSidesRectangle.png)

We can evaluate the closest edge of the shape with `max(d.x,d.y)`, which returns the bigger component, in this case the one closer to 0.0.
`max(-0.2,-0.5) ->-0.2`
To make sure that the distances inside the shape are not bigger than 0.0 we need to wrap the `max()` calculation into a `min()` which always returns the smaller values.
`min(max(d.x,d.y),0.0)`
This assures that this case is only relevant when the point is inside the shape otherwise 0.0 gets returned.

**Case2: One Distance Is Positive One Negative**
![Distance To Sides In Rectangle Img](/img/Shader/DistanceToSidesRectangleCase2.png)
In this case only the positive component matters because that is the distance to the nearest face of the shape. With `max(d,0.0)` we can zero out the negative component and `length()` of the result gives us the distance of the positive component.


**Case3: Both Distances Are Positive**
When both distances are positive the point has overshot the rectangle on both axis. The closest distance to the shape is the diagonal distance to the corner - the hypotenuse of the two overshoots.
![Distance To Sides In Rectangle Img](/img/Shader/DistanceToSidesRectangleCase3.png)
`max(d,0.0)` from the second case passes both components through unchanged and `length()` computes `sqrt(d.x² + d.y²)` the euclidean distance of the point towards the corner.

Now we have everything together and we get our rectangle SDF with: 
``` 
float rectSDF(vec2 uv, vec2 size) {
    vec2 d = abs(uv) - size * 0.5;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
```
`length(max(d,0.0))` handles cases 2 and 3(outside distance) and `min(max(d.x, d.y), 0.0)` handles the inside distance. We add them together because only one of them is ever nonzero - when you'inside, the length term is zero, when you're outside the min term is zero.

To draw a rectangle we pass can pass our SDF into a `step()` or `smoothstep()` function.

```
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rectSDF(vec2 p, vec2 center, vec2 size){
	vec2 uv = p -center;
	vec2 d = abs(uv)-size*0.5;
	return length(max(d,0.0))+min(max(d.x,d.y),0.0);
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	uv.x *= u_resolution.x/u_resolution.y;

	float d = rectSDF(uv,vec2(0.5),vec2(0.3,0.1));
	float rect = 1.0 -step(0.0,d);
	// For smooth edges
	//float rect = 1.0-smoothstep(-0.005,0.005,d);
	
	vec3 color = vec3(rect);

	gl_FragColor = vec4(color,1.0);
}
```
```glsl

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rectSDF(vec2 p, vec2 center, vec2 size){
	vec2 uv = p -center;
	vec2 d = abs(uv)-size*0.5;
	return length(max(d,0.0))+min(max(d.x,d.y),0.0);
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	uv.x *= u_resolution.x/u_resolution.y;

	float d = rectSDF(uv,vec2(0.5),vec2(0.3,0.1));
	float rect = 1.0 -step(0.0,d);
	// For smooth edges
	//float rect = 1.0-smoothstep(-0.005,0.005,d);
	
	vec3 color = vec3(rect);

	gl_FragColor = vec4(color,1.0);
}
```
#### Rounded Rectangle
When we look back at case3 where both `d.x` and `d.y` are possible `length(max(d,0.0))` calculates the diagonal distance to the corner point. This creates a distance field that fans out radially from the corner where the lines of equal distance around the corner form an circular arc.

![Equal Distances Form Circular Arc Img](/img/Shader/EqualDistancesFormCircularArc.png)

What we want to do in a rounded rectangle is to take a sharp rectangle and shave of the corners, placing each sharp 90° corner with a circular arc with the radius of the arc as the rounding amount.
What it means for the distance field is that a rounded rectangle is a smaller rectangle where you've pushed the "zero boundary" of the edges outward by the size of the radius of the corner.
![Equal Distances Form Circular Arc Img](/img/Shader/RoundedRectangleDrawing.png)
To push the "zero boundary" of the shape you subtract a constant r from every distance value. Every point that used to be at distance r is now at distance 0. That means the boundary moves outward by r. You've inflated the shape, like blowing air into it.
![Equal Distances Form Circular Arc Img](/img/Shader/InflatingTheShapeWithSubtracting.png)

So for a rounded rectangle we shrink it by `r` by adding `r` to the distance calculation.
`vec2 d = abs(uv)-size*0.5 +r;`
Then we subtract `r` from the distance field calculation.
`length(max(d,0.0)) + min(max(d.x,d.y),0.0)-r`
Along the flat edge pushing it outward by r gives another straight line just shifted out. The edge moves back to where the original rectangles edge was. The shrink and the subtract cancel each other out perfectly.
At a corner the isolines are circular arcs. PUshing a circular arc outward by `r` gives you a bigger circular arc. The sharp corner point becomes a smooth curve.
A physical way to see it to imagine the shrunken rectangle as a wooden block. Now wrap a string of length `r` around the outside, keeping it taut. Along the flat sides, the string just runs parallel — the traced outline is still flat. But at the corner, the string swings around the corner point, tracing a quarter-circle of radius r. The shape you trace is the rounded rectangle.

To sum it up, the distance field near a sharp corner is already circular (because diagonal distance uses `length()`). Subtracting a constant from the whole field pushes the boundary outward — flat parts stay flat, but the circular parts near corners become visible as smooth arcs.
```
float roundedRectSDF(vec2 uv, vec2 size, float r) {
    vec2 d = abs(uv) - size * 0.5 + r;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r;
}
```

```glsl
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float roundedRectSDF(vec2 p, vec2 center, vec2 size, float r) {
    vec2 uv = p -center;
    vec2 d = abs(uv) - size * 0.5 + r;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r;
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	uv.x *= u_resolution.x/u_resolution.y;

	float d = roundedRectSDF(uv,vec2(0.5),vec2(0.6,0.4),0.1);
	float rect = 1.0 -step(0.0,d);
	// For smooth edges
	//float rect = 1.0-smoothstep(-0.005,0.005,d);
	
	vec3 color = vec3(rect);

	gl_FragColor = vec4(color,1.0);
}
```






### LineSDF
A line segment is a straight path from point A to B. Imagine you are standing somewhere in space. What you want to know is *how far* is the *nearest point on that line segment* from you? So you want to reach the line by moving the shortest possible distance. 
This is only possible if:
*You are alongside the path*
You walk straight torward it, perpendicular to the path.
```
        You •
            |
            ↓  (straight down, perpendicular)
    A ======×====== B
            ↑
        closest point
```
*You are "behind" point A*
So the closest point on the path is A itself. By walking perpendicular you would miss the path entirely.
```
You •
         
            (diagonal to A)
           ↘
    	A ============ B
```
*You are "past" point B*
```
                        You •
                       
                        (diagonal to B)
                     ↙
    A ============ B
```
So what we have to figure out is which case we are currently in, and find the closes point, then measure the distance.

What do we have?
`a` position of point A (start of line)
`b` position of point B (end of line)
`uv` position of pixel you are evaluating(where "you" are standing)

So given these inputs we need to find the *closest point on segment AB to pixel, then return the distance.

We start by creating to vectors that describe the line geometry.
```
vec2 pa = uv-a; // Vector from A to the pixel
vec2 ba = b -a; // Vector from A to B (Line itself)
`` 
If we have a point A = (0,0), B = (4,0) and the pixel is at (1,3)

```
        pixel (1, 3)
          •
         /|
      pa/ |
       /  |
      /   |
     /    |
    A-----+--------B
   (0,0)  ↑       (4,0)
          |
    closest point is somewhere here
    
    pa = (1, 3) - (0, 0) = (1, 3)    // points from A toward pixel
    ba = (4, 0) - (0, 0) = (4, 0)    // points from A toward B
```

Next we want to find where along the line the closest point is. We do this by dropping a perpendicular line from the currently calculated pixel down to the line.

We can express this as a number `t` between 0 and 1 where:
t=0 -> closest point is A
t=1 -> closest point is B
t=0.5 -> closest point is halfway between

To find `t` we can use *dot product*. It measures how much one vector points in the direction of the other or *how much of vector pa goes in the direction of ba?*.

```
float t = dot(pa,ba)/dot(ba,ba);
```
Because the dot product gives us an absolute amount we want to normalize it. We can do this by dividing it with the line's squared length, which converts this to a fraction of the line's total length and a normalized value for t.

As an example:
```
A = (0,0), B =(4,0), pixel at (1,3)
pa = (1,3)
ba=(4,0)

dot(pa,ba) = 1*4 + 0*3 = 4
dot(ba,ba)= 4*4 + 0*0 = 16

t = 4/16 = 0.25 -> the closest point is 25% of the way from A to B.

closest = a + t *ba
		= (0,0) + 0.25 *(4,0)
		= (0,0) + (1,0)
		= (1,0)
```
We then evaluate the distance from the closest point on the line to our currently calculated pixel
`distance = length(pixel-closest)`

For now we just handled the cases where the point lies *over* the line. Now we still need to handle the edge cases for the endpoints of the line.

The question that we need to ask is **what if t comes out negative or bigger than 1?*

`If t < 0 -> Projection falls "before" point A -> closest point on line is A itself`

`If t > 1 -> Projection falls "past" point B -> closest point on the line is B itself`

```
A = (0,0), B = (4,0), pixel at (-2,1)

pa = (-2,1) - (0,0) = (-2,1)
ba = (4,0)

dot(pa,ba) = (-2)*4 +1*0 = -8
dot(ba,ba) = 16

t = -8/16 = -0.5 -> negative t -> pixel behind A
```
To avoid that we find a point that is not even on the line we need to clamp t for values between 0.0 and 1.0.

`t = clamp(t,0.0,1.0);//Forces t to stay between 0 and 1`

Now we got everything to draw our line. Here the whole code 
```
float lineSDF(vec2 uv,vec2 a, vec2 b, float thickness){
	vec2 pa = uv -a;//Vector from A to point
	vec2 ba = b -a;//Vector from A to B

	// Project pixel onto line - what fraaction along AB?
	float t = dot(pa,ba) / dot(ba,ba);

	//Clamp to line (don't go past endpoints)
	t = clamp(t,0.0,1.0);

	//find actual closest point
	vec2 closest = a + t *ba;

	//return distance to that point, minus thickness
	return length(uv-closest) -thickness;
}
```
```glsl
uniform vec2 u_resolution;

float lineSDF(vec2 uv,vec2 a, vec2 b, float thickness){
	vec2 pa = uv -a;
	vec2 ba = b - a;

	float t = dot(ba,pa)/dot(ba,ba);

	t = clamp(t,0.0,1.0);

	vec2 closest = a + t*ba;

	return length(closest-uv)-thickness;
}

void main(){
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    float shape = lineSDF(uv,vec2(0.1,0.1),vec2(0.9,0.9),0.007);
	shape = 1.0-step(0.0,shape);
    color = vec3(shape);
    gl_FragColor = vec4(color,1.0);
}
```
So the lineSDF answers: "Which point on this line segment is nearest to me and how far away is it?.

We find this in three steps. First, project our position onto the infinite line to find where we  would land if we dropped straight onto it. 
Second, we clamp that projection so it stays within the actual line segment. 
Third we measure distance from ourselves to that closest point.

This pattern repeats throughout SDFs. Whenever you need the distance to a bounded shape, you project onto its surface, constrain to its boundaries and then measure it.

