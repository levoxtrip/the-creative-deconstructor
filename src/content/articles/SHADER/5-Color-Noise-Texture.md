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
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	float c = valueNoise(uv*10.);
	gl_FragColor = vec4(vec3(c),1.0);
}
```
### 3D Value Noise
The 3D value noise works similarly to the 2D value noise but just extends it by one dimension. Instead of interpolation between 4 corners of a square we interpolate between 8 corners of a cube. We start by creating a 3D hash function.
```
float hash3D(vec3 p){
	return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);
}
```
The only difference here i that we use vec3 for the dot product with another arbitrary number. Now we can create our 3D value noise function.
```
float valueNoise3D(vec3 p){
	// Get Cell and position in cell
	vec3 i = floor(p);
	vec3 f = fract(p);
	// smooth interpolation curve
	vec3 u = f *f *(3.0-2.0*f);

	// Get random values at all 8 corners of the cube
	float c000 = hash3D(i + vec3(0, 0, 0));  // front-bottom-left
    float c100 = hash3D(i + vec3(1, 0, 0));  // front-bottom-right
    float c010 = hash3D(i + vec3(0, 1, 0));  // front-top-left
    float c110 = hash3D(i + vec3(1, 1, 0));  // front-top-right
    float c001 = hash3D(i + vec3(0, 0, 1));  // back-bottom-left
    float c101 = hash3D(i + vec3(1, 0, 1));  // back-bottom-right
    float c011 = hash3D(i + vec3(0, 1, 1));  // back-top-left
    float c111 = hash3D(i + vec3(1, 1, 1));  // back-top-right

	// Interpolate along x (4 pairs of corners)
	float c00 = mix(c000,c100,u.x);
	float c10 = mix(c010,c110,u.x);
	float c01 = mix(c001,c101,u.x);
	float c11 = mix(c011,c111,u.x);

	//Interpolate along y ( 2 pairs of edges)
	float c0 = mix(c00,c10,u.y);
	float c1 = mix(c01,c11,u.y);

	//Interpoalte along z
	return mix(c0,c1,u.z);
}
```
When you then add time as the third coordinate you are slicing through a 3D noise volume.
`float n = valueNoise3D(vec3(uv*4.0,u_time));`

You are basically moving a flat plane through the 3D block. The 2D slice you see changes smoothly because neighboring slices in the 3D volume are similar.

```glsl
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float hash3D(vec3 p){
	return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);
}

float valueNoise3D(vec3 p){
	// Get Cell and position in cell
	vec3 i = floor(p);
	vec3 f = fract(p);
	// smooth interpolation curve
	vec3 u = f *f *(3.0-2.0*f);

	// Get random values at all 8 corners of the cube
	float c000 = hash3D(i + vec3(0, 0, 0));  // front-bottom-left
    float c100 = hash3D(i + vec3(1, 0, 0));  // front-bottom-right
    float c010 = hash3D(i + vec3(0, 1, 0));  // front-top-left
    float c110 = hash3D(i + vec3(1, 1, 0));  // front-top-right
    float c001 = hash3D(i + vec3(0, 0, 1));  // back-bottom-left
    float c101 = hash3D(i + vec3(1, 0, 1));  // back-bottom-right
    float c011 = hash3D(i + vec3(0, 1, 1));  // back-top-left
    float c111 = hash3D(i + vec3(1, 1, 1));  // back-top-right

	// Interpolate along x (4 pairs of corners)
	float c00 = mix(c000,c100,u.x);
	float c10 = mix(c010,c110,u.x);
	float c01 = mix(c001,c101,u.x);
	float c11 = mix(c011,c111,u.x);

	//Interpolate along y ( 2 pairs of edges)
	float c0 = mix(c00,c10,u.y);
	float c1 = mix(c01,c11,u.y);

	//Interpoalte along z
	return mix(c0,c1,u.z);
}



void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    float n = valueNoise3D(vec3(uv*4.0,u_time));
    color = vec3(n);

    gl_FragColor = vec4(color,1.0);
}
```


## Fractal Brownian Motion
In natural textures like clouds, mountains or coastlines we see that they have detail at every scale. Their complexity continues on every level of magnification. With Fractal Brownian Motion(FBM) we can create this complexity. The idea of FBM is to layer multiple noises with different details
First layer with large shapes
Second layer with medium details
Third layer with small details
Forth layer with tiny details

Each layer adds complexity with a smaller scale where larger scales define the overall structure and smaller scales the details.
The FBM does this with noise functions where you add multiple octaves of noise each one with higher frequency(more details) and lower amplitude(less prominent) than the last.

A layer is called an octave similar to music where each octave doubles it's frequency per octave. Similarly we double the frequency and half the amplitude.

```
float n = 0.0;
n += valueNoise(uv*4.0)*1.0;//large features
n += valueNoise(uv*8.0)*0.5;//medium features
n += valueNoise(uv*16.0)*0.25;//small features
n += valueNoise(uv*32.0)*0.125;//fine features
n += valueNoise(uv*64.0)*0.0625;//tiny features
```
Because we have a repetitive pattern we can write a loop for this.
```
float fbm(vec2 p){
	float value = 0.0;
	float amplitude = 0.5;
	float frequency = 1.0;
	for(int i = 0; i<5;i++){
		value += valueNoise(p*frequency)*amplitude;
		frequency *= 2.0;//Double frequency
		amplitude *= 0.5;//half amplitude
	}

	return value;
}
```
```glsl
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
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p){
	float value = 0.0;
	float amplitude = 0.5;
	float frequency = 1.0;
	for(int i = 0; i<5;i++){
		value += valueNoise(p*frequency)*amplitude;
		frequency *= 2.0;//Double frequency
		amplitude *= 0.5;//half amplitude
	}

	return value;
}

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    float n = fbm(uv);
    color = vec3(n);

    gl_FragColor = vec4(color,1.0);
}
```

Each pass adds a layer of noise that is twice as defines and half as strong as the previous one.
With frequency and amplitude we have two parameter that we can use the change to create different noises. For that we introduce two variable *lacunarity* and *gain* to be able to change the multiplier values of the amplitude and frequency. *Lacunarity* defines how much the frequency increases each octave and gain controls how much the amplitude decreases each octave.
```
frequency *= lacunarity;
2.0	each octave twice as detailed
3.0 each octave three times as detailed

higher lacunarity -> bigger gaps between detail levels
lower lacunarity -> more overlapping blended shapes

amplitude *= gain;
0.5	each octave half as strong
0.3 each octave fades quickly

higher gain - small details remain
lower gain - small details fade away
```
This leads us to a more flexible function:
```
float fbm(vec2 p, int octaves, float lacunarity, float gain){
	float value = 0.0;
	float frequency = 1.0;
	float amplitude = 0.5;
	float maxValue = 0.0;
	for(int i = 0;i<8;i++){
		if (i < octaves) {
		value = valueNoise(p*frequency)*amplitude;
		maxValue += ampltiude;
		frequency *=lacunarity;
		amplitude *= gain;
		}
	}

	return value / maxValue;
}
```
We add `maxValue` to normalize `value` to a 0 to 1.0 range.

The FBM looks natural because also nature exhibits self similarity at different scales. This is called *fractal structures* pattern that repeat at multiple scales. FBM mimics this by adding it's details at multiple scales. IF you want to animate your FBM you can add time as a third dimension.

```
float hash3D(vec3 p){
	return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);
}

float valueNoise3D(vec3 p){
	// Get Cell and position in cell
	vec3 i = floor(p);
	vec3 f = fract(p);
	// smooth interpolation curve
	vec3 u = f *f *(3.0-2.0*f);

	// Get random values at all 8 corners of the cube
	float c000 = hash3D(i + vec3(0, 0, 0));  // front-bottom-left
    float c100 = hash3D(i + vec3(1, 0, 0));  // front-bottom-right
    float c010 = hash3D(i + vec3(0, 1, 0));  // front-top-left
    float c110 = hash3D(i + vec3(1, 1, 0));  // front-top-right
    float c001 = hash3D(i + vec3(0, 0, 1));  // back-bottom-left
    float c101 = hash3D(i + vec3(1, 0, 1));  // back-bottom-right
    float c011 = hash3D(i + vec3(0, 1, 1));  // back-top-left
    float c111 = hash3D(i + vec3(1, 1, 1));  // back-top-right

	// Interpolate along x (4 pairs of corners)
	float c00 = mix(c000,c100,u.x);
	float c10 = mix(c010,c110,u.x);
	float c01 = mix(c001,c101,u.x);
	float c11 = mix(c011,c111,u.x);

	//Interpolate along y ( 2 pairs of edges)
	float c0 = mix(c00,c10,u.y);
	float c1 = mix(c01,c11,u.y);

	//Interpoalte along z
	return mix(c0,c1,u.z);
}

float fbm3D(vec3 p, int octaves, float lacunarity, float gain){
	float value = 0.0;
	float amplitude = 0.5;
	float frequency = 1.0;

	for (int i = 0; i < 8; i++) {
    if (i < octaves) {
        value += valueNoise3D(p * frequency) * amplitude;
        frequency *= lacunarity;
        amplitude *= gain;
    }
}

	return value;
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	uv.x *= u_resolution.x/u_resolution.y;
    
	float n = fbm3D(vec3(uv*4.0,u_time),4,2.0,0.35);

    
	vec3 color = vec3(n);
	gl_FragColor = vec4(color,1.0);
}
```
```glsl
float hash3D(vec3 p){
	return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);
}

float valueNoise3D(vec3 p){
	// Get Cell and position in cell
	vec3 i = floor(p);
	vec3 f = fract(p);
	// smooth interpolation curve
	vec3 u = f *f *(3.0-2.0*f);

	// Get random values at all 8 corners of the cube
	float c000 = hash3D(i + vec3(0, 0, 0));  // front-bottom-left
    float c100 = hash3D(i + vec3(1, 0, 0));  // front-bottom-right
    float c010 = hash3D(i + vec3(0, 1, 0));  // front-top-left
    float c110 = hash3D(i + vec3(1, 1, 0));  // front-top-right
    float c001 = hash3D(i + vec3(0, 0, 1));  // back-bottom-left
    float c101 = hash3D(i + vec3(1, 0, 1));  // back-bottom-right
    float c011 = hash3D(i + vec3(0, 1, 1));  // back-top-left
    float c111 = hash3D(i + vec3(1, 1, 1));  // back-top-right

	// Interpolate along x (4 pairs of corners)
	float c00 = mix(c000,c100,u.x);
	float c10 = mix(c010,c110,u.x);
	float c01 = mix(c001,c101,u.x);
	float c11 = mix(c011,c111,u.x);

	//Interpolate along y ( 2 pairs of edges)
	float c0 = mix(c00,c10,u.y);
	float c1 = mix(c01,c11,u.y);

	//Interpoalte along z
	return mix(c0,c1,u.z);
}

float fbm3D(vec3 p, int octaves, float lacunarity, float gain){
	float value = 0.0;
	float amplitude = 0.5;
	float frequency = 1.0;

	for (int i = 0; i < 8; i++) {
    if (i < octaves) {
        value += valueNoise3D(p * frequency) * amplitude;
        frequency *= lacunarity;
        amplitude *= gain;
    }
}

	return value;
}

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	uv.x *= u_resolution.x/u_resolution.y;
    
	float n = fbm3D(vec3(uv*4.0,u_time),4,2.0,0.35);

    
	vec3 color = vec3(n);
	gl_FragColor = vec4(color,1.0);
}
```

# Textures and Sampling
Up to this point we were creating procedurally - with pure math we were creating patterns from geometry. When you want to work with an already existing image it is called *texture sampling* .
In shader a texture is an image loaded into the GPU memory so it can be accessed by your shader. It is stored as a grid of colored pixel called texels(texture elements).
The shader asks what color is this texture at this x,y location and the GPU looks up the location and returns the color. This process is called *sampling*.

In GLSL you can access textures with `sampler2D` type.
`uniform sampler2D u_texture;`
It is passed into your shader from outside.

To read a color from your texture you use the `texture()` function.
`vec4 color = texture(u_texture,uv)`
It expects normalized values for `uv` and it returns vec4 for the r,g,b,a values.
(0,0) -> bottom left
(1,1) -> top right

```
uniform vec2 u_resolution;
uniform sampler2D u_texture;

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	vec4 color = texture(u_texture,uv);
	gl_FragColor = color;
}
```

What happens if the `uv` values are outside of 0-1?
When you experiment with your texture and you scroll it, tile it or distort it your uv values can move outside of the 0-1 range. You can control what happens with different wrap modes. This is controlled by the framework where your GLSL code runs.
*Repeat mode*
The texture tiles infinitely when the values are outside of 0-1.  The coordinates wrap around using the fractal parts.
`uv(1.5,2.3) -> uv(0.5,0.3)`
Image it as texture as a wallpaper that repeats forever in all directions. Often used for tileable textures like bricks,grass or fabric.

*Clamp mode*
Coordinates are clamped to 0 to 1 range. Everything smaller than 0 becomes 0 and everything bigger than 1 becomes 1.
``` 
uv(1.5,2.3) -> uv(1.0,1.0)
uv(-1.2,1.3) -> uv(0.0,1.0)
```
The edge pixels will stretch infinitely outwards. You use it when you want to stop your texture at it's bounds instead of repeating.

*Mirror Mode*
The texture flips at each boundary create a mirrored pattern.
```
uv 0->1 - normal image
uv 1->2 - flipped mode
uv 2->3 - normal image
```
It creates seamless tiling because the edges meet their own mirrored image.

## Filtering
Filtering is concerned with what is happening when you sample at a position which lies between neighboring texels. What color should the GPU return?

*Nearest neighbor filtering*
GPU finds single closest texel and returns exactly that color without any blending or interpolation. This creates a pixelated blocky look depending on how much you zoom into the texture.

*Linear filtering(bilinear interpolation)*
GPU finds four nearest texels and blends them based on how close sample point is to each point. If you 70% of the way from the texel A and 30% from texel B the result is 70% color B and 30% color A.
You get smooth gradients between the texels.

Similar to the wrap mode the filtering is setup by the framework you are working in, not the shader.

## Manipulating UV
The power of texture sampling comes from manipulating the uv coordinates before you sample it.
*Scaling(zooming)*
To zoom into a texture you sample a smaller portion of it.
```
vec2 uv = gl_FragCoord.xy/u_resolution;
uv = uv*0.5+0.25;
color = texture(u_texture,uv);
```
```
screen(0,0) -> uv = (0.25,0.25)
screen(1,1) -> uv = (0.75,0.75)
```
You only sample the center part of the texture and stretch it tot fill the screen.

To zoom out you sample a larger range 
`uv = uv*2.0;`

*Tiling*
To tile a texture you can multiply the uvs.
`uv = uv*4.0;`

Or if you want to be specific about the wrapping you can use `fract()`
`uv = fract(uv*2.0)`

*Scrolling* 
To make a texture scroll over time you add an offset to the uvs.
`uv = uv + vec2(u_time*0.1,0.0);` to scroll right.
To scroll left use negative numbers for the first component of the vector2
To scroll vertical, modify the second component of the vector 2.
To scroll diagonally modify both horizontal and vertical.

*Rotating*
Rotatingh a texture requires rotating the uv coordinates around a rotation point.
```
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	//Move origin to center
	uv -= 0.5;
	//Rotation
	float angle = u_time * 0.5;
	float cosA = cos(angle);
	float sinB = sin(angle);

	uv = vec2(uv.x *cosA - uv.y*sinA,
			uv.x*sinA - uv.y *cosA);
	//Move origin back to 0.0
	uv += 0.5;

	vec4 color = texture(u_texture,uv);
	gl_FragColor = color;
}
```

*Distortion with noise*
You can create wavy rippling affects by offsetting the uvs with a noise.

```
vec2 noiseOffset = vec2(valueNoise(uv*8.0+u_time),valueNoise(uv*8.0+u_time+100.0));
uv = uv + noiseOffset *0.03 // small offset
vec4 color = texture(u_texture,uv);
```
Each pixel samples from a slightly different location than it normally would.

## Combining textures with procedural techniques
We can combine procedural techniques with texture sampling for example to use a procedural noise to blend two textures together.
```
uniform sampler2D u_texture1;
uniform sampler2D u_texture2;

//Insert fbm from before

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	vec4 tex1 = texture(u_texture1,uv);
	vec4 tex2 = texture(u_texture2,uv);
	float blend = fbm(uv*4.0,4,2.0,0.5);
	vec4 finalColor = mix(tex1,tex2,blend);
	gl_FragColor = finalColor;
}
```

Or we can use an SDF to mask a texture.

```
uniform sampler2D u_texture;

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	vec4 texColor = texture(u_texture,uv);
	float circle = circleSDF(uv,vec2(0.5),0.1);
	float mask = 1.0 - smoothstep(0.0,0.2,circle);
	vec4 finalColor = vec4(texColor.rgb + mask,1.0);
	gl_FragColor = finalColor;
}
```

