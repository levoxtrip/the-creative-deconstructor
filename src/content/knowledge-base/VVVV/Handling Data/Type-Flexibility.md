---
title: Type Flexibility
comments: true
tags:
 - VVVV
 - VVVV/DataAndValues
---
# Type Flexibility

## Generics
*Generics* are like a blueprint that allows to use the same functionality for different data types. Practically it means that we can use the same node for different data types. These generic nodes are grayed out when we place them in the patch because they wait to receive the data type the should operate on.

![Generic GetSlice node Img](/img/vvvv/GenericNodes.png)

To set the data type for the generic node we can double click on the node.

## Generic Functions
If you want to create a *generic* function that can act on different data types as inputs you can use `Operation`.

![Making Operation Generic Img](/img/vvvv/MakingOperationGeneric.png)

To make an `Operation` generic you have to click on the square under the *O* of the operation. This allows to set the inner context of the operation by the inputs and outputs(outer context) of the operation.

![Generic Operations Img](/img/vvvv/GenericFunctions.png)

## Overloading 
*Overloading* is another concept of *type flexibility*. It allows to have the same name for operations as along as they have different signatures. A *signature* is a unique identifier of that operation which includes:

In this context, signature refers to the unique identifier of a method, which includes:
- Method name
- Number of parameters
- Types of parameters
- Order of parameters

![Overloading Operations Img](/img/vvvv/OverloadingOperations.png)

Different pin names don't result to a *unique identifier*

## Type Switch
![Type Switch Region](/img/vvvv/TypeSwitchRegion.png)

If you have a certain range of types and you want to convert them to a specific type you can use `TypeSwitch` node. Inside of the region you can't use generic types without giving the input and output a specific type. To be able to connect input and output you need to define there type. You also need to assign the node that you want to use between them to a matching function - right click on node and *assign* to *Match Func*.

The `Type Switch` only takes *object types* only.

Internally the `TypeSwitch` runs similar as `CastAs`*if blocks*. It tries to cast something as *float* then if that wasn't successful it tries to cast it as the next type.

## Upcasting
*Upcasting* is when you want to convert from a sub data type to a super datatype. This is only possible in `Sequence` in VVVV. It doesn't work for `Spread` or value types like float or integer.

![Upcasting Types Img](/img/vvvv/UpcastingTypes.png)

In some cases the compiler finds a way to cast a type to another. A work around is to use a `ForEach` loop and just pipe it through it and then connect it to a `Spread` of the other type.

![For Each Upcasting](/img/vvvv/ForEachUpcasting.png)