# Transformations
When we want to apply transformations to our SDF shape we are not changing the SDF shape itself but instead change the coordinates before they reach the shape. This is called *domain manipulation.* Domain means here the input space - the coordinates you feed into your SDF. By transforming the coordinates you can move, shapes, repeat them, mirror them or warp them. The SDF doesn't really care about if the coordinates that get passed to it are raw pixel position or already manipulated coordinates. The SDF is like a rubber stamp, it always stamps the same shape but you can move, stretch, fold the paper before you stamp it.

When we think about translations in shader we have to separate two things. Where the pixel is on the screen and what pixel position we feed into the drawing math.
Imagine you have 5 columns on your screen and you want to paint column 3 red. If you pass the pixel position of the screen to your drawing function the third column will be drawn as red. Now imagine you add one to every column before you check the column number.
![Addition Subtraction Transformations Img](/img/Shader/Addition-Subtraction-Transformation.png)
Now the second column thinks it is column 3 and get painted red. That's what a shader does, it visits every pixel and asks what its your address/coordinate. If you add to the coordinate before drawing, each pixel reports a higher number than it's real position.

The SDF's/shapes rule hasn't changed "Draw where the address/coordinate equals 3". But now the pixel that is physically further left is the one whose modified coordinates match that rule.
So adding makes each pixel think it is further right. So the pixel that matches the rule is further left. The shape appears to shift left. To move the shape right you subtract - subtracting makes every pixel think it is further left than it really is, so the matching pixel is further right. 
You are not moving the shape, you are relabeling the pixel position and the shape is drawn wherever the labels match the rule.
![Addition Subtraction Transformations Img](/img/Shader/Addition-Subtraction-Transformation2.png)

## Translate
So when we translate a shape we move it from one position to another by subtracting and adding an offset to the coordinates.
```
vec2 offset = vec2(0.2,0.3);
vec2 movedUv = uv -offset;
float d = rectSDF(movedUV,vec2(0.0),0.1);
```
So when we subtract we move the shape in the positive direction and when we add we move it to the negative direction. The SDF doesn't know about the screen positions. It only cares about the numbers you pass into it. It just knows draw my center wherever the passed coordinates are 0.0. We can imagine the coordinate system as a transparent grid floating above the screen. The SDF always draws the shape centered at (0,0). It only sees and acts on the numbers we give it.  When we subtract(0.2,0.1) from the center we are sliding the entire grid to the left by 0.2 and down by 0.1. The shape stays fixed at 0.0, but because the grid moved, the shape appears at a different position. So when we transform the coordinates, we don't tell the SDF to move. The sdf stays at 0.0. We are changing at what pixel position we have which values for the coordinates.

## Scaling
Scaling changes the size of shapes by stretching or compressing the coordinate system.
To make shapes larger divide the coordinates and to make the shapes smaller multiply the coordinates.
```
float scaleFactor = 2.0
vec2 scaledUV = uv/scaleFactor;
float d = circleSDF(scaledUV,vec2(0.0),0.2);
```
When we divide the coordinates by 2, every coordinate become half its original value. 
```
screen position(0.4,0.4) -> SDF Receives(0.2,0.0)
screen position(0.6,0.2) -> SDF Receives(0.3,0.1)
```
From the SDF perspective everything appears closer to the origin than it actually is on the screen. The SDF thinks the point at the position(0.4,0.0) is only 0.2 units from the center.
![Scaling Transformations Img](/img/Shader/Scaling-Transformation.png)

