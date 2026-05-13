---
title: Blueprint Nodes
tag: Unreal
---
# Blueprint

## Creating blueprint class
In unreal it's common practice to use `BP_` shortcut for blueprint classes. To construct instance of our blueprint we can drag it into the scene.

## Node Graph
Nodes in blueprints have input pins that take in data with a specific data type. 

With `Alt + click` on the execution pin of a node you can break the connection.

To move over a wire from one node to the other hold down `ctrl` 

With `Ctrl` drag you can create a getter for your variables. You also can drag a variable straight to a pin to create a getter.
With `Alt` + drag you can create a setter for your variables.

With `Q` you can straighten the wires inside your blueprint

Make sure after you created a variable that you compile the blueprint so you can see and set the default value.

If you want your variable to be editable from the outside of the blueprint, go to `Details` of the variable and set `Instance Editable` or click the eye next to the variable.

You can right click pins of nodes and split them into single components. 

To comment nodes select them and hold down `c`.

When you have an object selected in the world outliner you can create a reference of that in your blueprint by right click `Create a Reference to ...` 

`Event Begin Play` executed once when started

`Event Tick` every frame. If you don't want to connect `Delta Seconds` from the `Event Tick` there is also a `Get World Delta Seconds` node.

`Delta Seconds` - how many time has passed since the last frame

There are nodes that are grayed out when you put them in your blueprint. They are called *wildcards* which allow to connect different datatypes.

## Create Blueprint functions
If you repeat yourself in your blueprint you should start thinking about creating functions. 
Your created functions are called `Member Functions` and should be restricted to one class. There are also `pure` functions which don't have input/output execute pins. They are executed every time the value is used somewhere. To make one of your functions pure you need to set in the details panel `Pure` to true.

Easy way to create a function is to select your nodes and right click on one node and select `Collapse To Function`.

If you want to avoid dragging the inputs of your function through the whole patch you can get the inputs as a node with `Get + InputName`.

## Variables
You can assign your created variables to certain categories in the details page.
## Blueprint string utilities
`self` is a reference to the actor itself. 

Actors have an internal object name which you can get with `Get Object Name`. The name in the outliner is not the name of the object. 

To construct a string from multiple strings you can use `Append` node.

## Print string
If you add a `key` of type *name* your messages don't spawn the screen and only change when new values for string.

## Debug Shapes
You can draw debug shapes with `Draw Debug Sphere`, `Draw Debug Box`, `Draw Debug Arrow`.

## Blueprint data
Unreal engine has `Vector` to represent location in space or directions.
`Rotator` are designed to contain rotation data. It has *Roll, Pitch and Yaw* components stored in *degrees*.

![Yaw Pitch Rol Rotation](https://upload.wikimedia.org/wikipedia/commons/c/c1/Yaw_Axis_Corrected.svg)

To add rotation to current object rotation use `Add Actor World Rotation`.
You can split the `Rotator` input to get three single float inputs.

To convert float values into a `Rotator` use `Make Rotator`.

If you want the single components of a `Transform` type you can use a `Break Transform` node to get location, rotation and scale.

Color data type in blueprints is `Linear Color` structure.

## Level blueprint
The level blueprint is tied to only the level. 

Blueprint classes can be used in all levels.

Every level blueprint is an actor thatz owns the level blueprint and is able to reference instances of other actors in the level

## Translation
To get the location of the actor `Get Actor Location`

With `Add Actor World Offset` you can move an actor by a *delta* vector. You can use it in `Event Tick` to move an actor every frame by a specific amount.

## Referencing actors in scene 
With `Get All Actors Of Class` you can reference all the instances of an actor in your scene.

We have a `Is Valid` node which let's you check if variable is properly assigned. 

## Spawning Actors At Runtime
With `Spawn Actor From Class` you can spawn specific actors depending on some logic. The `Begin Play` node of a spawned actor gets fired when the actor is being born in the scene.

## Destroy Actor
With `Destroy Actor` you can remove an actor from your scene at runtime.

## Assign mesh in blueprint
First use `Add Static Mesh Component` then we need to set a mesh with `Set Static Mesh`.

## Flow
`Sequence` node allows to stag execution in a vertical order of nodes instead of the usual left to right.

`Branch` works like an if statement - it executes logic depending on *if the input is true or false*.

Normally you don't want to use `Delay` because they are hard to control. The better alternative is a `Timer` which executes some functionality after some time. 
With `Set Timer By Event` we can trigger an event at the end of the timer. You can then connect your `Custom Event` to it. If you want to execute your event, type your event name in the node browser which will give you an executable event under `Call Functions`. If you want your event called the first time before the timer finished, execute your event after the timer.
![Execute Custom Event On Timer Start Img](/img/Unreal/ExecuteCustomEventOnTimerStart.png)
Be aware that you can *run* timer in your own functions but you *can't* create custom events in your functions.


To alternate execution calls you can use a `FlipFlop` node. First it executes `A` then `B`, then `A` etc.

## Animation

`Timeline` node is a keyframe generator. Double click the node to make your own keyframe animation. For a single value animation you can create a float track. With shift click you can create keyframes. Activate `Use last Keyframe`.

To create non linear animation between keyframes right click keyframe and set it to auto. After shaping your animation graph you can use the float track outside the timeline node.

## Interpolate Values
To interpolate `Rotator`,`Vector` or `Float` you can use the interpolation nodes `RInterp`,`VInterp`,`Finterp`. The higher the `Interp Speed` the faster it moves towards the target.

## Delay
The `Delay` node allows you to delay the flow of execution of the wire.


## Events
### Add Inputs to custom event
Click on your custom event and then in the details panel on the right click on the `+` of the *Inputs* category. Then select the datatype you need.

## Logic
When you hold down b and left click into the event graph you can get a `Branch` node.

## Materials
### Create Random Color
Create a color variable and then use a `Linear Color Set Random Hue` node to create a random hue.

### Get all the materials of actor
With `Get Materials` you can get an array of materials that your actor has.

## Transformation 
`Get Actor Location` returns the current position of the actor as xyz

`Set Actor Location` sets the actors position

`Add Actor World Rotation` add rotation to current actor rotation. It acts on the actors scene component.

If you want to reposition your actors on runtime you have to set them movable. In *Details -> Transform -> Mobility*.

`Add` allows you to add two values together

## Calculations
With `Vector Length` node you can get the magnitude of a vector.

`Distance` node allows to calculate the distance between two vectors.

`Normalize` node allows to normalize a vector. The `Tolerance` defines at which value it returns 0.

## Control Command
With `Execute Console Command` you can even run certain commands in the console from your blueprint.

<!-- ![Sending Multiple Trigger For TouchOut Img](/img/TD/SendingMultipleTriggerTouchOut.png) -->

## Array
With the `Get` node we can pick an elements from an array.

With `Is Valid Index` connected to a `Branch` you can make sure that a loop is only executed if that index exists in the array.