# Shader Math
Shaders are dependent on mathematical functions and calculations. To know which mathematical function is useful for what you want to achieve can be super helpful.

Important areas for the shader realm are:
- Vectors
- Matrices
- Trigonometry

# Vector Math
## Vectors - Language of Position and Direction
A vector answers a simple question: "How do I get from position A to position B?" The vector tells you: Which *direction* to go and how far*(distance)*.

The components of a vector are the instructions how to move from position A to position B. 
2D vector v2 (3,2) means: walk two units right then 2 units up.
3D vector v3 (1,-2,4) means: walk 1 unit right, 2 units down and 4 units forward. Each number an instruction for one axis.
`vec3 movement = vec3(1.0,-2.0,4.0)`

Vectors also describe positions. Every position is really a vector from the origin.
The point is at(5,3) -> "start at origin(0,0) and follow the vector(5,3)"

So positions and directions are both vectors. 
```
vec3 vertexPosition = vec3(5.0,3.0,0.0)//where is this point?
vec3 lightDirection = vec3(0.0,1.0,0.0)//which way is up
```

### Finding the vector between two points
If you have pointA and pointB and you want the vector that goes from A to B we have to subtract the first vector from the second vector:
`vectorAB = B-A`

```
vec3 lightDir = lightPosition - fragmentPosition; // direction toward the light
vec3 viewDir = cameraPosition - fragmentPosition; // direction toward the camera
```
Vectors matter for shaders because every vertex you render has a position -> thats a vector
Every surface has a normal(direction it faces) - that is a vector
Every light has a direction - thats a vector. 

The entire GPU pipeline is build around processing vectors. When you write a vertex shader you are transforming position vectors. When you write a fragment shader you're using direction vectors to compute lighting. 
