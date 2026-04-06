# Transformations
If you want to apply transformations in your shader you are working with *domain operations*. They define how you move, scale, rotate, repeat, warp and mirror shapes - all without changing the SDF itself but instead change the coordinates before they reach the shape. So the mental framework for these *domain operations* is that you actually don't move the shape, you move the coordinate system. Domain means here the input space - the coordinates you feed into your SDF. It continues to have it's rule "I draw at address/coordinate (0,0)" and you change what coordinate the currently processed pixels reports to the SDF. It always draws the shape centered where (0,0) is. The SDF is like a rubber stamp, it always stamps the same shape but you can move, stretch, fold the paper before you stamp it.
So every domain operation is a transformation applied to `p`(the position) before you pass it to the SDF.

When we think about transformations in shader we have to separate two things. Where the pixel is on the screen and what pixel position we feed into the drawing math.
Imagine you have 5 columns on your screen and you want to paint column 3 red. If you pass the pixel position of the screen to your drawing function the third column will be drawn as red. Now imagine you add one to every column before you check the column number.
![Addition Subtraction Transformations Img](/img/Shader/Addition-Subtraction-Transformation.png)
Now the second column thinks it is column 3 and get painted red. That's what a shader does, it visits every pixel and asks what its your address/coordinate. If you add to the coordinate before drawing, each pixel reports a higher number than it's real position.

The SDF's/shapes rule hasn't changed "Draw where the address/coordinate equals 3". But now the pixel that is physically further left is the one whose modified coordinates match that rule.
So adding makes each pixel think it is further right. So the pixel that matches the rule is further left. The shape appears to shift left. To move the shape right you subtract - subtracting makes every pixel think it is further left than it really is, so the matching pixel is further right. 
You are not moving the shape, you are relabeling the pixel position and the shape is drawn wherever the labels match the rule.
![Addition Subtraction Transformations Img](/img/Shader/Addition-Subtraction-Transformation2.png)

## Translate
So when we translate a shape we move it from one position to another by subtracting or adding an offset to the coordinates.
```
vec2 offset = vec2(0.2,0.3);
vec2 movedUv = uv -offset;
float d = polygonSDF(movedUV,0.1);
```
```
p = (0.2,0.3) // Pixel at screen position (0.2,0.3)
p-center =(0.2-0.2,0.3-0.3) = (0.0,0.0)
SDF receives (0.0,0.0) -> length(0.0) -> distance = 0.0-0.1 //Pixel inside circle
```
So the pixel at (0.2,0.3) reports (0.0,0.0) to the SDF. It thinks it is at the origin (0.0,0.0) and the circle appears at (0.2,0.3).
So when we subtract we move the shape in the positive direction and when we add we move it to the negative direction. The SDF doesn't know about the screen positions. It only cares about the numbers you pass into it. It just follows it's inherit rule, draw my center wherever the passed coordinates are 0.0. It only sees and acts on the numbers we give it.  When we subtract(0.2,0.3) from the center we are sliding the entire coordinate system to the left by 0.2 and down by 0.3. The shape stays fixed at 0.0, but because the grid moved, the shape appears at a different position.

```glsl
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float polygonSDF(vec2 pos, int sides,float radius){
    pos = pos - vec2(0.5);
    float slice = 6.28318530718 / float(sides);
    float angle = atan(pos.y,pos.x);
    float a = mod(angle,slice) -slice*0.5;
    return length(pos)*cos(a)-radius;
}

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(0.);
    vec2 offset = vec2(0.2,0.3);
    float s = polygonSDF(uv-offset,5,0.1);
    s = 1.0-step(0.0,s);
    color = vec3(s);

    gl_FragColor = vec4(color,1.0);
}
```
```glsl
float polygonSDF(vec2 pos, int sides,float radius){
    pos = pos - vec2(0.5);
    float slice = 6.28318530718 / float(sides);
    float angle = atan(pos.y,pos.x);
    float a = mod(angle,slice) -slice*0.5;
    return length(pos)*cos(a)-radius;
    
}

float lineSDF(vec2 pos,vec2 a, vec2 b,float thickness){
    vec2 pa = pos-a;
    vec2 ba = b-a;
    float t = dot(pa,ba)/dot(ba,ba);
    t = clamp(t,0.0,1.0);
    vec2 closest = a + t*ba;  
    return length(pos-closest)-thickness;
}


void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    uv.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(0.);
    
    float l = lineSDF(uv,vec2(-1.0,0.5),vec2(1.0,0.5),0.0014);
    l = 1.0-step(0.,l);
    float l2 = lineSDF(uv,vec2(0.5,1.0),vec2(0.5,-1.0),0.0014);
    l2 = 1.0-step(0.,l2);
    l+=l2;
    
    
    vec2 offset = vec2(0.2,0.30)*fract(u_time*0.2);
    float s = polygonSDF(uv-offset,5,0.1);
    s = 1.0-step(0.0,s);
    color = vec3(s+l);

    gl_FragColor = vec4(color,1.0);
}
```

## Scaling
When we want to scale we follow the same pattern. We modify `p` before we feed it to the SDF. To make a shape twice as large you divide `p` by 2. Scaling changes the size of shapes by stretching or compressing the coordinate system.
```
float scale = 2.0;
vec2 scaledUv = uv / scale;
float d = circleSDF(scaledUV,0.1);
```
```
At pixel (0.2,0.0)
p/2.0 = (0.1,0.0)
the circle receives (0.1,0.0) -> length = 0.1 -> distance = 0.1-0.1 = 0.0
```
The pixel at 0.2 is on the edge of the shape, but with the unscaled version it would be at the edge at 0.1, The edge has moved outwards from 0.1 to 0.2 - the shape is twice as large. By dividing the value of the pixel position by for example two the pixel that are far from the origin now report to be closer. The SDFs worlds has shrunk so the shape looks bigger in screen space. 
![Scaling Transformations Img](/img/Shader/Scaling-Transformation.png)

So the rule for scaling is *divide by `s` to scale up by `s` and multiply by `s` to scale down by `s`*.

Important to notice is scaling breaks the distance field accuracy of your SDF. The distances that the SDF returns are in the scaled coordinate system, not the screen space. If you need accurate distances for outlines or shift shadows you must multiply the result of the SDF by the same scale factor to bring the distances back to screen space.
```
float scale = 2.0;
vec2 scaledUv = uv/scale;
float d = circleSDF(scaledUV,0.1)*2.0;
```

## Rotation
To rotate shapes we need to apply some matrix math and use the following rotation formula:
```
vec2 rotate2d(vec2 p, float a){
    float c = cos(a);
    float s = sin(a);
    return vec2(c*p.x+s*p.y,-s*p.x+c*p.y);
}
```
This comes from:
```
|cos(a) sin(a)| *|p.x|
|-sin(a) cos(a)| |p.y|
```
Let's assume we want to rotate our shape by 90°(a =PI/2) and we look at the position (1,0). For 90° we get `cos(PI/2)=0` and `sin(PI/2)=1`. If we pass that into the formula from above we get
```
new x = 0*1+1*0 = 0
new y = -1*1 +0.0 = -1
Result = (0,-1)
```
Again we have to remember that we are rotating the coordinate system, not the shape. If the coordinate system rotate 90° counterclockwise, a shape that was upright now appears rotated 90° clockwise.
![Rotation Transformations Img](/img/Shader/RotationCoordinateSystem)
So if you want to rotate the shape counter clockwise you negate the rotation angle.
To rotate the shape over time around the origin we can use `u_time` and pass it as an angle into the rotation function.
```
float rotatedUV = rotate2d(uv,u_time);
float d = rectSDF(rotatedUV,vec2(0.2,0.1));
```
To rotate around a different point you have to translate first and then rotate.
```
vec2 o = p-center;
o = rotate(o,u_time);
float d = rectSDF(o,vec2(0.2,0.1));
```
So the order matters. If you first translate and then rotate the shape gets rotated around the translated center. If you first rotate and then translate the shape orbits around the origin.


