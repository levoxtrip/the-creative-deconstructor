# What is a Shader?
## The core problem
In computer graphics we have to process a huge amount of pixels. If you have a 1920x1080 display, it has 2.073.600 pixels. Each frame, every pixel needs a color. If you have 60 frames per seconds that is 124 million pixel calculations per second.

The CPU unit in your computer processes every task one at a time, with multiple cpu cores multiple at time. Because this process after process approach would be way to slow, we are using GPUs to calculate the pixel colors for our screens. GPU's have thousands of small processors that do their calculations all simultanously.

CPU: Caluclate pixel 1, then calculate pixel 2, then calculate pixel 3
GPU: Calculate pixel 1,2,3,4 ... at the same time.

A *shader* is a program that runs on each of the processors of the GPU. 

In normal programming we write our program and it will execute you code in sequence. Shader programming in contrast runs the code you wrote millions of times in parallel. Each instance, responsible for only one pixel, only knows about their own position and executes relative to that its logic. They are not communicating within each other. Each must decide their pixels color using only their position and some shared information. Pixels cannot see or affect each other directly.

There are several shader types. The two most important for now are:
*fragment shader:* Runs once per pixel - decides what color that pixel should be. 
*vertex shader:* Runs once per vertex(corner point of mesh) - decides where geometry appears on screen

## How a Fragment Shader Works
Every fragment shader receives:
- it's own pixel position on the screen
- uniform data (values you pass in like time,mouse position or textures)

And every shader outputs *a color for that pixel*.

```
void mainImage(out vec4 fragColor, in vec2 fragCoord){
	fragColor = vec4(1.0,0.0,0.0,1.0);
}
```
`void mainImage` - main function that runs for each pixel
`out vec4 fragColor` - the output - the color we assign to the pixel
`in vec2 fragCoord` - input - the x,y position of the pixel that gets processed by this shader
`vec4(1.0,0.0,0.0,1.0)` - A color: Red 1, Green 0, Blue 0, Alpha 1

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
