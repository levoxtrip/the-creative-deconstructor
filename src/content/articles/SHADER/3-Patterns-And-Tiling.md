# Patterns And Tiling
We learned now how to draw a single shape onto our canvas. But to create more complex visuals we don't wont just one shape we maybe want to create a grid of boxes, stars scattered across the sky or a brick wall pattern.

Because drawing each shape would be to much code to write we, instead of copying the shape multiple times we *fold the space itself* so that a single shape appears multiple times simultaneously.
We can imagine this as a space filled with mirrors, where there is only one you but the mirrors dublicate you so it appears to be multiple copies of you.
Tiling in shaders work similarly. 
There is only one shape but we *warp the coordinate system* so that shape get's *evaluated in multiple places*.

The tool we can use to remap out coordinate system is the `fract()` function. It only returns the decimal part of a number, ignoring the whole number part.

```
fract(0.9) -> 0.9
fract(1.4) -> 0.4
fract(1.9) -> 0.9
```
What we are seeing here is that even when the numbers are increasing `fract()` returns the same decimal part of a number and the output is always between 0.0 and 1.0. Everytime the input crosses a whole number the output starts again at 0.0 and raises till 1.0, similar to a sawtooth wave.

When we multiply the UV coordinates by a value x and wrap that with the `fract()` function we get x times the uv coordinates.

`uv = fract(uv*5.0)`
```
Original uv.x    uv.x * 5.0    fract(uv.x * 5.0)
-----------      ----------    -----------------
0.0              0.0           0.0
0.1              0.5           0.5
0.2              1.0           0.0  ← reset!
0.3              1.5           0.5
0.4              2.0           0.0  ← reset!
0.5              2.5           0.5
0.6              3.0           0.0  ← reset!
0.7              3.5           0.5
0.8              4.0           0.0  ← reset!
0.9              4.5           0.5
1.0              5.0           0.0  ← reset!
```
As we see the the range 0.0 -> 1.0 repeats itself five times now and the screen got divided into five vertical columns with each column having it's own local coordinate system that goes from 0.0 to 1.0. When we apply this to both the x and y the y coordinate of uv we get a 5x5 grid each cell with it's own 0.0 -> 1.0 coordinates universe to draw.

```
uniform vec2 u_resolution;
void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;
	
    uv = fract(uv*5.0);
    vec3 color = vec3(0.);
    color = vec3(uv.x,uv.y,0.0);

    gl_FragColor = vec4(color,1.0);
}
```

```glsl
uniform vec2 u_resolution;
void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;
	
    uv = fract(uv*5.0);
    vec3 color = vec3(0.);
    color = vec3(uv.x,uv.y,0.0);

    gl_FragColor = vec4(color,1.0);
}
```
Try to change the resolution of your grid by changing the number you multiply uv with. Start at 1.5 and see how the values affect the tiling of your uv coordinates. The number you multiply by controls how many repetitions you get. More repetitions lead to smaller cells.

Now we have the basics to draw one shape into each grid tile. As before our local coordinate system in each tile is from 0-1. 

```
float circleSDF(vec2 uv,vec2 center, float radius){
    float dist = length(uv-center);
    return length(dist) -radius;
}

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;
	
    uv = fract(uv*5.0);
    vec3 color = vec3(0.);
    float shape = 1.0-step(0.0,circleSDF(uv,vec2(0.5),0.3));
    
    color = vec3(shape);

    gl_FragColor = vec4(color,1.0);
}
```
```glsl
float circleSDF(vec2 uv,vec2 center, float radius){
    float dist = length(uv-center);
    return length(dist) -radius;
}

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;
	
    uv = fract(uv*5.0);
    vec3 color = vec3(0.);
    float shape = 1.0-step(0.0,circleSDF(uv,vec2(0.5),0.3));
    
    color = vec3(shape);

    gl_FragColor = vec4(color,1.0);
}
```
By using `fract()` the whole number part of our currently calculated coordinate gets stripped away. So 4.3 becomes 0.3, 2.3 becomes 0.3. Booth cordinates become identical from the SDF's perspective. The SDF only receives values from 0.0 to 1.0. It doesn't know that the original canvas was scaled or changed. It only evaluates the distance calculation for whatever 0 to 1 coordinate it receives.
Because `fract()` repeats the 0 to 1 range across the scaled canvas, the SDF executes it's calculations multiple times - once per repetition. Any pixel whose local cordinate is close enough to the shape's center will be color as inside the shape.


## Move Tiles
Besides creating a grid where all shapes line up vertically and horizontally we can break this structure by shifting every other row or column from it's center. This allows us to create patterns like a brick wall, hexagonal tiles and other natural textures. 

●  ●  ●  ●  ●
●  ●  ●  ●  ●
●  ●  ●  ●  ●
●  ●  ●  ●  ●

●  ●  ●  ●  ●
  ●  ●  ●  ●  ●
●  ●  ●  ●  ●
  ●  ●  ●  ●  ●

To be able to create these shifts we first need to know in which row the currently caluculate pixel lies. We then shift their x/y coordinate for example for each each odd rows only.

Because using the `fract()` function erases the information in which row we are in, we first need to extract the row number from the uv coordinates and then apply `fract()`
The steps to go:
1. Scale uv
`uv= uv * 5.0;`
2. Extract row number
`floor(uv)` - `floor()` rounds down to the nearest whole number.
3. Apply rounded value to scaled uv.y
`float row = floor(uv.y)`
4. Determine if row is odd or even
`float isOddRow = mod(row,2.0);` - `mod()` gives us the remainder after division
```
mod(0.0, 2.0)   // 0  (0 ÷ 2 = 0 remainder 0)
mod(1.0, 2.0)   // 1  (1 ÷ 2 = 0 remainder 1)
mod(2.0, 2.0)   // 0  (2 ÷ 2 = 1 remainder 0)
mod(3.0, 2.0)   // 1  (3 ÷ 2 = 1 remainder 1)
mod(4.0, 2.0)   // 0  (4 ÷ 2 = 2 remainder 0)
```
5. Calculate and apply offset
```
float offset = isOddRow * 0.5;
uv.x = uv.x + offset
```
6. Tile space and draw shape
```
uv = fract(uv);
uv = uv -0.5;
float d = length(uv)-0.3;
float c = step(0.0,d);
gl_FragColor = vec4(vec3(c),1.0);
```
```glsl
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv = uv * 5.0;                       // scale to 5x5 grid
    
    float row = floor(uv.y);             // which row? 0, 1, 2, 3, 4
    float isOddRow = mod(row, 2.0);      // 0 for even, 1 for odd
    float offset = isOddRow * 0.5;       // 0 or 0.5
    uv.x = uv.x + offset;                // shift odd rows right
    
    uv = fract(uv);                      // tile into repeating cells
    uv = uv - 0.5;                       // center each cell
    
    float d = length(uv) - 0.3;          // circle SDF
    float c = step(0.0, d);
    
    gl_FragColor = vec4(vec3(c), 1.0);
}
```
