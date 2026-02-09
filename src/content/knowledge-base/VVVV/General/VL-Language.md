# VL-Language

*VL* is a static typed language.

When we haven't defined any datatype for a pad vvvv creates a `T` datatype.

```C#
//In C#
public class Counter<T>{
	T currentValue
}
```

In VL there are stateful nodes(`Process`) and non-stateful nodes.
![Stateful Nodes Img](/img/vvvv/StatefulNodes.png)

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
![State Output Img](/img/vvvv/StateOutput.png)

To get the value of a property of a Class you can create a `GetValue` method and to be able to change the value you can create a `SetValue` method.
![State Output Img](/img/vvvv/GetSetValuesClass.png)

## Interfaces

## Delegates
https://thegraybook.vvvv.org/reference/language/delegates.html

A *delegate* is a *packaged behavior* that lets you treat a function like a variable that you can pass around and trigger whenever you want.
We can think of *Delegate* as a *recipe stored on piece of paper*. 

A *delegate* is defined by it's inputs and outputs. The combination of the *inputs* and *outputs* is the *signature* of the delegate. It doesn't matter what the delegate is *named*  - it only matters that the types of the input and output match - similar to a lego shape.

*Delegates* only execute when they get *invoked(go signal)*. You use an `Invoke` node, plug in your data and the delgate runs its logic.

*Delegates* are treated like objects, which allows you to swap them dynamically and execute them when needed.

We can define a *delegate* with a `Delegate(Region)`. To have it execute something we have to add *inputs* and *outputs* and define their types.

To execute the *delegate* we have to invoke it.

![Invoke Delegate Img](/img/vvvv/InvokeDelegate.png).

We also can pass *delegate* into a `Process` node. You provide a function to the process and it can call this functionality internally whenever it wants.

![Invoke Delegate Img](/img/vvvv/PassedDelegateToProcess.png).

## Observables
Events in VL get expressed as observables(Reactive)
Observables are about pushing data out- like an event, task


## Forwards
`Forward` allows you to select which part of a C# library you want to use and expose.

## Interfaces
