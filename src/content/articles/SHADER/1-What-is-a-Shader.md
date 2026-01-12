# What is a Shader?
## The core problem
In computer graphics we have to process a huge amount of pixels. If you have a 1920x1080 display, it has 2.073.600 pixels. Each frame, every pixel needs a color. If you have 60 frames per seconds that is 124 million pixel calculations per second.

The CPU unit in your computer processes every task one at a time, with multiple cpu cores multiple at time. Because this process after process approach would be way to slow, we are using GPUs to calculate the pixel colors for our screens. GPU's have thousands of small processors that do their calculations all simultanously.

CPU: Caluclate pixel 1, then calculate pixel 2, then calculate pixel 3
GPU: Calculate pixel 1,2,3,4 ... at the same time.

A *shader* is a program that runs on each of the processors of the GPU. 

In normal programming we write our program and it will execute you code in sequence. Shader programming in contrast runs the code you wrote millions of times in parallel. Each instance, responsible for only one pixel, only knows about their own position and executes relative to that its logic. They are not communicating within each other. Each must decide their pixels color using only their position and some shared information. Pixels cannot see or affect each other directly.

You don't write that loops through all your pixels. You write code that describes what one pixel should do and the GPU runs that code on every pixel simultaneously.

```
//You dont write !!!
for each pixel on screen:
	calculate color

// You write
function whatColorAmI():
	//figure out my color based on my position
	return color
```
Every pixel runs this same function at the same time. The only difference between the pixels is which pixel theyy are - their coordinates.

There are several shader types. The two most important for now are:
*fragment shader:* Runs once per pixel - decides what color that pixel should be. 
*vertex shader:* Runs once per vertex(corner point) of 3D geometry - Its job is to position points in space. 

## How a Fragment Shader Works
When you write a fragment shader imagine you are a single pixel. You don't know what any other pixel is doing and you can't ask them. You can't directly say "color this pixel based on the one next to it". You have to think mathematically:*"color this pixel based on where it is"* This lets shader programming become exciting geometric puzzles: *how do I describe the color of any point in space using only its coordinates?*

You only know:
- where you are on the screen(your coordinates)
- some global information(uniform) that get passed in(time, mouse position, etc.)

From that you must decide *a color for that pixel* that every shader outputs. As a function we can think of it as `color = function(position)`. The `function()` then converts the position information in the desired color output.

## The Coordinate System 
Worth looking at is the question: *what is position?*
In a typical shader setup you receive pixel coordinates like(427,489). Because the raw pixel data depends on the screen resolution it's not optimal to work with it. What we want to do is to *normalize* it so the pixel coordinates get converted to 0 -> 1:
```
position.x = pixel.x / screen_width // 0.0 on left, 1.0 on the right
positiion.y = pixel.y / screen_height // 0.0 on the bottom, 1.0 on the top
```
No your shader works identically no matter the screen size. (0.5,0.5) position always means "center of the screen." These normalized coordinates are called *UV coordiantes* where *UV* are just contentions like x/y but for texture space.

## First Fragment Shader
We will use GLSL in the examples here. 
```
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
```
```glsl
void main(){
	gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}
```
`void main()` - every shader has a main function. This runs once per pixel, simultaneously across all pixels.
`gl_FragColor` - build-in variable - whatever you assign to it becomes the pixels final color.
`vec4(1.0,0.0,0.0,1.0)` - 4-component vecotr representing color:Red, Green, Blue, Alpha with values ranging from 0.0 to 1.0

### Getting Position: The UV Coordinate
In the example above every pixel outputs the same color. To make `color = function(position)` work we need the position of the pixel. Different environments provide this differently - here a standard GLSL approach
```
uniform vec2 u_resolution //screen size in pixels
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution; // normalize to 0.0 - 1.0
	gl_FragColor = vec4(uv.x,0.0,0.0,1.0);
}
```
```glsl
uniform vec2 u_resolution; //screen size in pixels
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution; // normalize to 0.0 - 1.0
	gl_FragColor = vec4(uv.x,0.0,0.0,1.0);
}
```
`uniform` - Data passed into the shader from your program. The shader can read it but not change it. Same value for all pixels

`gl_FragCoord` - Build in variable. The pixels coordinates in actual screen pixels.

`gl_FragCoord.xy / u_resolution` - dividing screen size gives us normalized (0.0-1.0) coordinates
`uv.x` - horizontal position - 0.0 on the left, 1.0 on the right.

```
uniform vec2 u_resolution //screen size in pixels
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution; // normalize to 0.0 - 1.0
	gl_FragColor = vec4(uv.x,uv.x,uv.x,1.0);
}
```
```glsl
uniform vec2 u_resolution; //screen size in pixels
void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution; // normalize to 0.0 - 1.0
	gl_FragColor = vec4(uv.x,uv.x,uv.x,1.0);
}
```
By putting `uv.x` in all three color channels(R,G,B) we get a grayscale. 

*Try It Yourself*
I want you to write (or just think through) these modifications:

Vertical gradient — black at bottom, white at top
Inverted horizontal — white on left, black on right
Solid 50% gray — same color everywhere
Red-to-blue gradient — red on left, blue on right

## Vectors and Swizzling
In shaders there are short hand versions to write vectors like `vec4(uv.x,uv.x,uv.x,1.0)`.
*Swizzling* lets you rearrange and repeat components of your vector.
```
vec2 uv = vec2(0.2,0.4);
uv.x // 0.2
uv.y // 0.4
uv.xy // vec2(0.2,0.4);
uv.yx // vec2(0.4,0.2); Swaps the components
uv.xx // vec2(0.2,0.2); Repeats the components
uv.xxx // vec3(0.2,0.2,0.2)
```
Instead of `xyzw` we also can you `rgba` to make it clearer that it is about color.
```
vec4 color = vec4(0.2,0.5,0.25,1.0);
color.r // 0.2 red
color.rg // vec2(0.2,0.5) only red and green values
color.b // 0.25 blue
color.a // alpha
```

## Data Types and Vectors
GLSL has a set of different data types that we can use to create our outputs.
`float` - single decimal numbers
`float time = 3.14159;`

`vec2` - Two floats - used for 2D positions, UV coordinates
`vec2 position = vec2(0.5,0.8)`
`vec2 uv = gl_FragCoord.xy/u_resolution`

`vec3` - Three floats - used for RGB colors , 3D positions
`vec3 color = vec3(0.2,0.5,0.8);`
`vec3 point = vec3(0.0,0.2,.8);`

`vec4` - Four floats - RGBA colors
`vec4 color = vec4(1.0,0.0,0.0,1.0)`

There are also `int`,`bool` and `mat` for matrices.

### Constructing Vectors
We have multiple ways to build vectors
```
//Explicit components
vec3 a = vec3(0.1,0.5,0.4);
//Single value fills all components
vec3 gray = vec3(0.5);
//Combine vectors
vec2 xy = vec2(0.3,0.6);
vec3 b = vec3(xy,3.0); // vec3(0.3,0.6,3.0);

vec2 rg = vec2(0.5,0.9);
vec2 ba = vec2(0.2,0.5);
vec4 color = vec4(rg,ba);
```

### Vector Math
Vectors matter in shader programming because we can apply math operations to all componenets simultaneously.
```
vec3 a = vec3(1.0,2.0,3.0);
vec3 b = vec3(0.5,0.5,0.5);
a + b // vec3(1.5,2.5,3.5);
a - b // vec3(0.5,1.5,2.5);
a * b // vec3(0.5,1.0,1.5); component wise multiplication
a * 2.0 // vec3(2.0,4.0,6.0); scalar multiplies all
```
This lets you apply changes to multiple components of a vector easily
`vec3 darker = color * 0.2;`

If you multiply a chanel by 0 it kills the channel value completely. Multiplying it by 1 preserves it. This is how masking works. You use this to isolate or remove color channels or to combine shapes.

The same is true for Build-in functions. They accept vectors and apply it component-wise:
``` 
vec2 uv = vec2(0.25,0.75);
sin(uv) // vec2(sin(0.25),sin(0.75));
```

GLSL as a shader language is strict about types and how the can be combined. 
You can't multiply a `vec3` with a `vec2` for example. But `float` makes an execption because it acts as *scalar* to the vector.


## Uniforms and Time
A `uniform` is a value passed from your framework(Javascript,C++, Whatever hosts the shader) into the shader. It is called `uniform` because it's value is the same for every pixel.
Common uniforms are:
```
uniform vec2 u_resolution;//screen dimensions
uniform float u_time;//seconds since start
uniform vec2 u_mouse;// mouse position
uniform sampled2D u_texture;// an image
```
`u_`prefix is a convention to make clear that it is a uniform and to distinguis from local variables; there are also other conventions with `i`

### Time
`u_time` is a number that continously increases over the lifetime of your shader. It starts at 0.0 and counts up in seconds.

In combination with mathematical functions we can create powerful animations
```
uniform float u_time;
void main(){
	gl_FragColor = vec4(vec3(sin(u_time)),1.0);
}
```
```glsl
uniform float u_time;
void main(){
	gl_FragColor = vec4(vec3(sin(u_time)),1.0);
}
```
Because sin returns values between -1 and 1 and a value below 0 is just black we can remap the sin value to oscillate it between 0 and 1
```
uniform float u_time;
void main(){
	float bright = sin(u_time)*0.5 +0.5;
	gl_FragColor = vec4(vec3(bright),1.0);
}

sin() returns -1 -> -1*0.5 + 0.5 = 0.0 (black)
sin() returns 0 -> 0.*0.5 + 0.5 = 0.5 (gray)
sin() returns 1 -> 1.*0.5 + 0.5 = 1.0 (white)
```

```glsl
uniform float u_time;
void main(){
	float bright = sin(u_time)*0.5 +0.5;
	gl_FragColor = vec4(vec3(bright),1.0);
}
```
`*0.5 + 0.5` pattern remaps -1 -> 1 range to 0->1 range and is frequenctly used in shader.

#### Controlling Speed

To speed up or slow down the time we can multiply it with a float
```
sin(u_time*2.0)//twice as fast
sin(u_time*0.5)// half the speed
```
Multiplying time here changes the frequency of the oscillation.

#### Combining Time and Position
With adding time to position we create movement in our shader.
```
uniform float u_time;
uniform vec2 u_resolution;

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	float bright = sin(uv.x*10.0 + u_time);
	bright = bright * 0.5 +0.5;
	gl_FragColor = vec4(vec3(bright),1.0);
}
```
```glsl
uniform float u_time;
uniform vec2 u_resolution;

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	float bright = sin(uv.x*10.0 + u_time);
	bright = bright * 0.5 +0.5;
	gl_FragColor = vec4(vec3(bright),1.0);
}
```
`uv.x*10.0` creates multiple vertical stripes and `+u_time` moves these stripe over time. If you want to move it in the opposite direction you just change the sign of `u_time` and make it negative `-u_time`. 
And the orientation is which axis you use `uv.x` or`uv.y`.

### Mouse Input
`u_mouse` gives us a `vec2` with the position of the cursor on the screen in pixels
```
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	vec2 mouse = u_mouse/u_resolution;// normalize to 0-1

	float dist = distance(uv,mouse);
	float bright = 1.0 -dist;

	gl_FragColor = vec4(vec3(bright),1.0);
}
```
```glsl
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main(){
	vec2 uv = gl_FragCoord.xy/u_resolution;
	vec2 mouse = u_mouse/u_resolution;// normalize to 0-1

	float dist = distance(uv,mouse);
	float bright = 1.0 -dist;

	gl_FragColor = vec4(vec3(bright),1.0);
}
```
`distance()` is a build-in function that returns how far two points are away from each other. Close to the mouse - small distance. Far away from the mouse - big distance. 
To make the pixels close to the mouse bright - higher value - we invert `dist` by subtracting it form 1.0

## Your toolkit
We now have the main core tools to create shaders:
*Position* `uv` Where am I on screen
*Time* `u_time` When is it?
*Input*  `u_mouse` Whats the user doing?`
*Math functions* How do I transform these into color?

Everything builds on this. 






---
## Parallel Mindset

This is one of the most important concepts to internalize:
Every pixel runs the same code. In the example above every pixel outputs the color red. 

```
//This code runs million times simultaneously
//Each instance has different fragCoord value
// Each instnce calculates its own color

void mainImage(out vec4 fragColor,in vec2 fragCoord){
	//I am ONE pixel
	//I only know MY position(fragCoord)
	//I calculate MY color
	fragColor = vec4(1.0,0.0,0.0,1.0);
}
```
```glsl
void main(){
	gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}
```

So you don't say " set pixel 100,100 to blue" - you have to say "if my position is 100,100 THEN I should be blue".


## Making Position Matter
To use the pixel position of the shader we can implement `fragCoord` into our code.
```
//fragCoord.x - pixels horizontal position(0 to screen with)
//iResolution/uResolution - total screen width (build-in uniform that gives the canvas dimensions)
void mainImage(out vec4 fragColor,in vec2 fragCoord){
	//normalizing the position to 0.0 to 1.0 by dividing current pixel position by total screen width
	float brightness = fragCoord.x/iResolution.x;
	fragColor = vec4(brightness,brightness,brightness,1.0);
}
```
This creates a gradient with dark pixels on the left and bright pixels on the right.

```
void mainImage(out vec4 fragColor, in vec2 fragCoord){
	float brightness = fragCoord.y/iResolution.y;
	fragColor = vec4(brightness,brightness,brightness,1.0);
}

```
The process of dividing `fragCoord` by `iResolution` is called normalizing. This converts pixel coordinates(0-1000 for example) into a 0.0 to 1.0 range. This allows your code to work on any screen size. Also many shader functions expect values in the 0.0 to 1.0 range.

```
void mainImage(out vec4 fragColor, in vec2 fragCoord){
	vec4 color = vec4(0.0);

	if(fragCoord.x < 0.5){
		color = vec4(0.0,0.0,1.0,1.0);
	} else {
		color = vec4(1.0,1.0,0.0,1.0);
	}
	fragColor = vec4(color);

}
```

```
void mainImage(out vec4 fragColor, in vec2 fragCoord){
	fragColor = vec4(fragCoord.x,fragCoord.y,0.0,1.0);
}
```
Here we see how the position of the pixel literally becomes color.
