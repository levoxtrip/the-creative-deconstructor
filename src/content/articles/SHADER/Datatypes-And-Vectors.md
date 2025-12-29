
# Datatypes & Vectors
## Why Vectors Matter
In Shaders we constantly deal with *posiition,colors and directions.* All of these are multicomponent values.
Position: (x,y) or (x,y,z)
Color: (red,green,blue) or (red,green,blue,alpha)
Directions:(x,y,z)

Shaders use vector types to bundle these together.

## Core Types
`float` - brightness,distance,time
`vec2` - 2D position, UV coordinates
`vec3` - 3D position, RGB Color
`vec4` - RGBA color, position with w-component

Also available are 
`int`
`ivec2`
`ivec3`
`ivec4`

and 
`bool`
`bvec2`
...

To create vectors and assign values
```glsl

vec2 pos = vec2(0.1,0.2);
vec2 rgb = vec3(0.5,0.5,0.3);

// All components the same value
vec2 pos = vec2(0.5);
vec3 rgb = vec3(1.0);

//Building from smaller vectors
vec2 xy = vec2(0.1,0.5);
vec3 rgb = vec3(xy,2.0);
```

In GLSL there aree two naming conventions to access the componnets of a vector. 
`.x/.y/.z/.w` for positions and `.r/.g/.b/.a` for colors.

```glsl
vec4 v = vec4(0.1,0.2,0.3,0.4);

float a = v.x; // 0.1
float b = v.r; // 0.1

vec3 color = vec3(1.0,0.5,0.0);
float r = color.r;

vec3 position = vec3(0.4,0.3,0.5);
float height = position.y;
```

## Swizzling
*Swizzling* is a GLSL feature that allows you to access multiple components at once, in any order and even with repetition allowed.

```glsl
vec4 v = vec4(1.0,0.4,0.3,0.4);

vec2 v2 = v.xy; // vec2(1.0,0.4);
vec3 v3 = v.zyx; // vec3(0.3,0.4,1.0);
vec4 v4 = v.aaaa // vec4(0.4);

//Useful applications
vec3 color = texture(myTexture,uv).rgb; // only get rgb values from textures
vec2 flippedUV = uv.yx;
```
Just be aware that you cannot mix naming conventions like `v.rx`

## Vector Math

https://lindenreidblog.com/2018/08/25/basic-math-for-shaders/
https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=1