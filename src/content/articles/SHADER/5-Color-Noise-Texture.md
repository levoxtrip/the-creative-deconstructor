# Color Noise Texture
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
By assigning the currently processed pixel position from uv and use it as the mix factor we can create a gradient across the screen.

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
