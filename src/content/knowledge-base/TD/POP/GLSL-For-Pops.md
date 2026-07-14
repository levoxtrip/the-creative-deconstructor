---
title:GLSL For POPs
tag:TD
---
# GLSL for POPs
POPs are *point operators* that are represented as arrays of data which we run compute shaders over. Each element of the array is a point/primitive/particle of the POP

*Attributes* are the key concept to POPs. They are elemental specific variables that are attached to a piece of geometry. Every piece of geometry has attributes. The values of the attributes are different depending on the geometry. These variables can be used to read, write, create or delete elements or other attributes. 

Common attributes are P(Position), Color, N(Normal), PointScale.

Attributes can be any type like `float`,`vec3`,`vec4`.

All GLSL POPs are compute shader so they read and write to any element of the input array and execute performantly on the GPU.
 
You don't have to manually declare your uniforms in `GLSLPOP`.

## Attributes in GLSLPOP
We need to specify which attributes you want to Read/Write to from your shader. You also can create attributes in the node.

## Hello World
```
void main(){
    const uint id = TDIndex();
    if(id >= TDNumElements())
        return;
    TD[id] = id;
}
```
`TD_Index()` - build in function that returns the index of the current element in the POP
`TDNumElements()` - build in function that returns number of elements in POP.
`ID[id] = id` - set the ID attribute of the current lement to the index of the element.

## Accessing Inputs and Elements
`vec3 p = TDInP(indexInput,TDIndex())`


## Noise Values in GLSLPOP
`GLSLPOP` gives you a `TDSimpleNoise()` function to get noise values into your code.


