---
title: Write Own Node With C# 
tag: VVVV
---
# Write Own Node With C# 
To write your own node, you go to the quad menu in the top left corner and click on *New-> C# File*. This opens a wizard to setup the C# file with the project files. The refernce to the C# project is automatically added to the vvvv file. 

Basic file example:
``` C#
namespace Main; //The category in VVVV

public static class Utils{
//In c# you always need to have a class. You can't just put methods into your code

// This method then becomes a node in VVVV
public static float DemoNode(float a, float b){
	return a+b;
}
}
```

If you want to create default values inside your C# node with data types that aren't directly supported you need to use an C# attribute
`[DefaultValue("2,1")] Vector2 c;`

## How to write a statefull node
Instead of Utils ou pick process in the VVVV C# wizard. 
A process node has `[Process Node]` attribute.
```C#
namespace Main;
[Process node] // From Vl.Core library
public class MyCounter{
	private int _counter;
	public int Update(int increment){
		return _counter += increment;
	
	}

	public void Reset(){
	counter = 0;
	
	}
}
```
More information [here](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html#writing-nodes-using-c)

## Create own Logger Node
```C#
private readonly Ilogger _logger;
public MyCounter(NodeContext nodeContext){
	_logger = nodeContext.GetLogger();

	public void Reset(){
		_logger.LogInformation("Reset")
		counter = 0;
	}
}
```
With F2 in VVVV you then can open Log message window.

## Clean up resources
To clean up resources when process got destroyed in your patch add `IDisposable` interface

```C#
public class MyCounter:IDisposable{

	...

	public void Dispose(){
	//Dispose Resources here
	
	}
}
```
