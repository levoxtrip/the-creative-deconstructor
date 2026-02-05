# Color Noise Texture
# Color
## Color Manipulation
We have seen that when we pass a single brightness value into our `gl_FragColor` output we get just a grayscale image.

Colors on screens are made of three lights: red, green and blue. Each pixel on our screen contains RGB subpixel which can emit these three colors. By combining these three colors we can create every colors you see on your screen.

In GLSL we represent this with a `vec3()` with values for each channel from 0.0 to 1.0.
`color = vec3(red_amount,green_amount,blue_amount)`
Some example colors:
```
# Primary Colors
vec3 red = vec3(1.0,0.0,0.0);
vec3 green = vec3(0.0,1.0,0.0);
vec3 blue = vec3(0.0,0.0,1.0);

# Secondary Colors
vec3 yellow = vec3(1.0,1.0,0.0);
vec3 cyan = vec3(0.0,1.0,1.0);
vec3 magenta = vec3(1.0,0.0,1.0);

# Grayscale
vec3 white = vec3(1.0,1.0,1.0);
vec3 gray = vec3(0.5,0.5,0.5);
vec3 black = vec3(0.0,0.0,0.0);
When all three channels have the same values there is no color bias and you get a neutral gray at different brightness levels.

vec3 orange = vec3(1.0,0.5,0.0);
vec3 pink = vec3(1.0,0.7,0.7);
```

## Gradients
When we want to create a gradient from one color to another we can use the `mix()` function.
```
vec3 red = vec3(1.0,0.0,0.0);
vec3 blue = vec3(0.0,0.0,1.0);
mix(red,blue,0.0);// pure red
mix(red,blue,0.5);//purple
mix(red,blue,1.0);//pure blue
```
By assigning the currently processed pixel position from uv and use it as the mix factor we can generate a horizontal gradient across the screen.

```
uniform vec2 u_resolution;

void main(){
vec2 uv = gl_FragCoord.xy/u_resolution;
vec3 leftCol = vec3(1.0,0.0,0.0);//red
vec3 rightCol = vec3(0.0,0.0,1.0);//blue
vec3 color = mix(leftCol,rightCol,uv.x);
gl_FragColor = vec4(color,1.0);
}
```
```glsl
uniform vec2 u_resolution;

void main(){
vec2 uv = gl_FragCoord.xy/u_resolution;
vec3 leftCol = vec3(1.0,0.0,0.0);
vec3 rightCol = vec3(0.0,0.0,1.0);
vec3 color = mix(leftCol,rightCol,uv.x);
gl_FragColor = vec4(color,1.0);
}
```
`uv.x` on the left is 0.0 which sets the mix factor on the left to 0.0 -> red. And on the right uv.x is 1.0 which sets the mix factor on the right to 1.0 -> blue. Inbetween me have a smooth transition between these colors. 
Every pixel calculates it's own mix factor relative to it's horizontal position on the screen.
If you want to create a vertical gradient you just assign `uv.y` instead.
```
vec3 bottomColor = vec3(1.0, 0.0, 0.0);  // red
vec3 topColor = vec3(0.0, 1.0, 0.0);     // green

vec3 color = mix(bottomColor, topColor, uv.y);
```

If you want to create a gradient with multiple colors you need to chain `mix()` functions, with each handling a different segment of the gradient.

We could use `if else` logic to assign a different `mix()` functions but they can create performance issues. An optimized approach for shader is to use `smoothstep()` function and assign the transition points into the `smoothstep()`.

```
vec3 color = vec3(0.);
vec3 red = vec3(1.0,0.0,0.0);
vec3 green = vec3(0.0,1.0,0.0);
vec3 blue = vec3(0.0,0.0,1.0);

vec3 colorMix1 = mix(red,green,smoothstep(0.25,0.5,uv.y));
vec3 colorMix2 = mix(green,blue,smoothstep(0.5,0.75,uv.y));
color = mix(colorMix1,colorMix2,uv.y);
```
```glsl
uniform vec2 u_resolution;
void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;
	vec3 color = vec3(0.);
    vec3 red = vec3(1.0,0.0,0.0);
    vec3 green = vec3(0.0,1.0,0.0);
    vec3 blue = vec3(0.0,0.0,1.0);

    vec3 color1 = mix(red,green,smoothstep(0.25,0.5,uv.y));
    vec3 color2 = mix(green,blue,smoothstep(0.5,0.75,uv.y));
	color = mix(color1,color2,uv.y);
    gl_FragColor = vec4(color,1.0);
}
```
The `smoothstep()` defines in which area which color is active. By adding more color mixes you can create more complex color mixtures.

## Coloring Shapes
We can now use what we know about SDF and colors to color our SDF shapes how we like.
SDFs return values smaller than 0.0 when pixel is inside the shape and bigger than 0.0 when we outside the shape.
We take advantage of these indicator values to assign them to the mix factor of the `mix()` function and get two distinct colors for inside and outside the shape.
```
float circleSDF(vec2 uv,vec2 center,float radius){
	vec2 centered = uv - center;
	float dist = length(centered)-radius;
	return dist;
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	vec3 color = vec3(0.0);
	vec3 colorInside = vec3(1.0,0.5,0.0);
	vec3 colorOutside = vec3(0.1,0.1,0.3);


	float shape = circleSDF(uv,vec2(0.5),0.2);
    float mask = step(0.0,shape);
	vec3 colored = mix(colorInside,colorOutside,mask);

	gl_FragColor = vec4(colored,1.0);
}
```
```glsl
float circleSDF(vec2 uv,vec2 center,float radius){
	vec2 centered = uv - center;
	float dist = length(centered)-radius;
	return dist;
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	vec3 color = vec3(0.0);
	vec3 colorInside = vec3(1.0,0.5,0.0);
	vec3 colorOutside = vec3(0.1,0.1,0.3);


	float shape = circleSDF(uv,vec2(0.5),0.2);
    float mask = step(0.0,shape);
	vec3 colored = mix(colorInside,colorOutside,mask);

	gl_FragColor = vec4(colored,1.0);
}
```
When `dist < 0` the `step()` function returns 0 so the mix factor for `mix()` is 0 -> insideColor. When `dist > 0` we get 1.0 from the `step()` function and `mix()` gets 1.0 -> outsideColor.

For softer edges you would use `smoothstep()` function instead of `step()` for the *shape*.

To combine what we know of how to color shapes and how to draw gradients we can create gradients inside the shapes.
We would use `mix()` to create the gradient from the center of the shape to its edges and also the transition between shape and outside the shape.
For the gradient inside we want to create a 0.0 to 1.0 value from center to edge of the shape so we can assign that as the mix factor for the colors. 

We know that distance from center `length(uv)` is and distance from the edge `shape = length(uv)-radius`. So we add the radius back in to get back the distance from center `shape + radius`. To normalize the value we divide it by `radius`.

```
vec3 centerColor = vec3(1.0,0.0,0.0);
vec3 edgeColor = vec3(1.0,0.5,0.0);
vec3 colorOutside = vec3(0.1,0.1,0.3);


vec2 center = vec2(0.5);
float radius = 0.3;
float shape = circleSDF(uv,center,radius);

float mask = smoothstep(-0.05,0.05,shape);

float distFromCenter = shape + radius;
float gradientInside = distFromCenter / radius;  // normalize to 0-1  - 0 at center, 1 at edge

vec3 insideColor = mix(centerColor,edgeColor,gradientInside);

color = mix(insideColor,outsideColor,mask);
```
```glsl
float circleSDF(vec2 uv,vec2 center,float radius){
	vec2 centered = uv - center;
	float dist = length(centered)-radius;
	return dist;
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	vec3 color = vec3(0.0);
    vec3 centerColor =  vec3(1.0,0.0,0.0);
	vec3 edgeColor = vec3(1.0,0.5,0.0);
	vec3 colorOutside = vec3(0.1,0.1,0.3);
    vec2 center = vec2(0.5);
    float radius = 0.3;
    float shape = circleSDF(uv,center,radius);

    float mask = smoothstep(-0.05,0.05,shape);

    float gradientT = (shape + radius)/radius;
    vec3 insideColor = mix(centerColor,edgeColor,gradientT);
	
    color = mix(insideColor,colorOutside,mask);
	gl_FragColor = vec4(color,1.0);

}
```

# Randomness and Noise
SDFs allow us to create clear and sharp shapes. But when we want to create something more similar to shapes from nature we would need to introduce some irregularity to create more organic-looking visuals. For that we need *controlled* randomness.

If we would use *uncontrolled* randomness and just create random numbers for each pixel each of the 60 frames per second, the image would completely change every frame and we would get pure chaos as output. That is most of the times not what we want.

Instead what we want is a *deterministic* randomness where we get for the same input the same output. At any given pixel position we always get the same random output value. This is called *noise* - a mathematical function that mimics randomness while being predictable and repeatable.

## Creating fake randomness from position
To create fake randomness we can create a hash function that takes coordinates as input and convert them into pseudo random numbers where the same input generates the same output. The output appears randomly distributed with no visible pattern. 

```
float hash(vec2 p){
	return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);
}
```
The dot product combines x and y coordinates into a single number. The unrelated numbers `127.1` and `311.7` are chosen to avoid pattern. They assure that nearby points create very different dot products.
The `sin()` function oscillates between -1 and 1. But when the input into sine is large, tiny changes in the input value produce large changes in the output.
```
sin(157.06) = some value
sin(157.07) = completely different value
```
Sine wave oscillates so rapidly at large inputs that neighboring coordinates land on completely different parts of wave. Similar inputs create seemingly unrelated outputs.

`*43758.5453`
To amplify the result of sine we multiply it by a great arbitrary number. 
`-1 to 1 -> -43758.5453 to 43758.5453`

In our hash function we only want the decimal part of a number as the result. For that we use `fract()`. If our numbers inside it are small the decimal numbers might show some pattern. Multiplying by huge numbers mean even tiny difference in sine value result in huge differences in the resulting integer part of the number, scrambling the decimal part into a pseudo random number.
```
fract(43721.83472) = 0.83472
fract(-8234.12845) = 0.87155
```

So the steps that we took to create from our coordinate position data pseudo random numbers are:
1. Combine x and y into one number(dot product)
2. Scramble it wildly(sine of large numbers)
3. Amplify the differences(multiply by large constants)
4. Extract just decimal part(fract)

The output looks random but is created purely mathematical.

Now we can use our `hash()` and apply its result to the color of our pixel
```
float hash(vec2 p){
	return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	float c = hash(uv*10.);
	gl_FragColor = vec4(vec3(c),1.0);
}
```
```glsl
float hash(vec2 p){
	return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	float c = hash(uv*10.);
	gl_FragColor = vec4(vec3(c),1.0);
}
```
The multiplier inside the hash function defines how quickly the noise changes across the space of the screen. We can think of it as zooming in and out.

With the hash function we created independent values at every pixel with no relation to it's neighboring pixel. The pixel next to each other have completely different values.
This chaotic noise is useful for effects like film grain, stipping or sand. But for many natural pattern we want a relation between the different pixels. In clouds for example we have bright and dark regions that blend in smoothly into each other without any abrupt value jumps. Similar to this are terrains where the values smoothly roll up and down. For this kind of behavior we need a noise where the values change gradually, where neighboring pixel have similar values and are in a relation with each other.

## Smooth Randomness
How we solve the smoothness problem is using something called *value noise*. We divide the space into a grid of cells and assign a random value(with our hash function) to each corner of the grid. Then for any point inside the grid we smoothly blend between the corner values. The corner provide the randomness, the blending the smoothness.

```
float valueNoise(vec2 p){
	vec2 i = floor(p); // which grid cell are we in
	vec2 f = fract(p); // Where inside the cell are we
	//create random values at corners of the cell
	float a = hash(p)*vec2(0.0,0.0);
	float b = hash(p)*vec2(1.0,0.0);
	float c = hash(p)*vec2(0.0,1.0);
	float d = hash(p)*vec2(1.0,1.0);

	//create smooth interpolation curve
	vec2 u = f * f *(3.0-2.0*f);

	//blend between corners
	return mix(mix(a,b,uv.x),mix(c,d,uv.x),uv.y);
}
```
`floor()` rounds down to the nearest integer and `fract()` gives the remainder and how far from the integer you are. This splits the coordinate system into which cell and where in that cell we are.
```
p(3.2,2.4)
i = floor(p) = floor(3.2,2.4) = (3,2)
f = fract(p) = fract(3.2,2.4) = (0.2,0.4)
```
We can think of this information as the address. The integer part is the street address in which building you are and the fractional part is where inside the building you are.

In the next step we use the previously created `hash()` function to assign random values to each corner of the grid cell. We can see them as anchors.
```
	float a = hash(p)*vec2(0.0,0.0);
	float b = hash(p)*vec2(1.0,0.0);
	float c = hash(p)*vec2(0.0,1.0);
	float d = hash(p)*vec2(1.0,1.0);
```
All points inside the cell will blend between these anchor values.

For a nice looking smooth blending we need a smooth interpolation curve. 
We could use `f` for the blending between the corners. But what this creates are visible grid lines at the sides of the cell. The problem with linear interpolation is that the rate of change is constant within each cell but on the edges it jumps abruptly from 1.0 to 0.0 and the other way around. This causes the smoothness to break down at the edges.


```glsl
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float hash(vec2 p){
	return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);
}

float valueNoise(vec2 p) {
    vec2 i = floor(p);  // which grid cell are we in?
    vec2 f = fract(p);  // where inside that cell?
    
    // Get random values at the four corners of this cell
    float a = hash(i + vec2(0.0, 0.0));  // bottom-left corner
    float b = hash(i + vec2(1.0, 0.0));  // bottom-right corner
    float c = hash(i + vec2(0.0, 1.0));  // top-left corner
    float d = hash(i + vec2(1.0, 1.0));  // top-right corner
    
    // Create a smooth interpolation curve
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    // Blend between the four corners
    return mix(mix(a, b, u.x), mix(c, d, f.x), f.y);
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	float c = valueNoise(uv*10.);
	gl_FragColor = vec4(vec3(c),1.0);
}
```

To avoid that we can use an s curve that eases in and out.
`vec2 u = f *f *(3.0-2.0*f)`

![Smoothstep Interpolation Img](/img/Shader/SmoothStepInterpolation.png)

This function is called *smoothstep interpolation.* It's special property is that it's derivative(rate of change) is 0 at both ends.
```
f(0) -> 0
f(1) -> 0
```
When you're exactly at a corner, you're not accelerating toward any other value—you're momentarily stationary. This means when you step across into the next cell, you continue smoothly instead of having a sudden jump in how fast things are changing.


Finally in the `return` we mix and blend between the four corners using *bilinear interpolation* where we first blend horizontally and then vertically.

```
return mix(mix(a,b,uv.x),mix(c,d,uv.x),uv.y);
//first horizontally
float bottom = mix(a,b,uv.x);
float top = mix(b,c,uv.x);
//then vertically
float result = mix(bottom,top.uv.y);
```

Now we can just call our `valueNoise()` in the main and assign it to color
```
float c = valueNoise(uv*10.);
color = vec3(c);
```

```glsl
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float hash(vec2 p){
	return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);
}

float valueNoise(vec2 p) {
    vec2 i = floor(p);  // which grid cell are we in?
    vec2 f = fract(p);  // where inside that cell?
    
    // Get random values at the four corners of this cell
    float a = hash(i + vec2(0.0, 0.0));  // bottom-left corner
    float b = hash(i + vec2(1.0, 0.0));  // bottom-right corner
    float c = hash(i + vec2(0.0, 1.0));  // top-left corner
    float d = hash(i + vec2(1.0, 1.0));  // top-right corner
    
    // Create a smooth interpolation curve
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    // Blend between the four corners
    return mix(mix(a, b, u.x), mix(c, d, f.x), f.y);
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	float c = valueNoise(uv*10.);
	gl_FragColor = vec4(vec3(c),1.0);
}
```

## Fractal Brownian Motion