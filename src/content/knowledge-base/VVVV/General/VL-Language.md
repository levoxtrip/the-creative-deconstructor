# VL-Language

*VL* is a static typed language.

When we haven't defined any datatype for a pad VVVV creates a `T` datatype.

```C#
//In C#
public class Counter<T>{
	T currentValue
}
```

In VL there are stateful nodes(`Process`) and non-stateful nodes.
![Stateful Nodes Img](/img/VVVV/StatefulNodes.png)

`Process` nodes live - they have a lifetime.

## Spread
A `Spread` is like a List or Array in other languages.


## Iteration

### Accumulator
The `For-Each` Accumulator behavior is like:
```C#
float x = 0.7;
foreach(var value in mySpread){
	x = x +value;

}
```

## Class

### Process node
For classes you also can enable `Process` node which allows to have a simpler representation of the class in one node. This allows you also to define which methods should be part of the representation.

`State Output` exposes the state of the class and then allows to apply some methods of the class to it.
![State Output Img](/img/VVVV/StateOutput.png)

To get the value of a property of a Class you can create a `GetValue` method and to be able to change the value you can create a `SetValue` method.
![State Output Img](/img/VVVV/GetSetValuesClass.png)

## Interfaces