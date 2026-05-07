---
title: Blueprint Nodes
tag: Unreal
---
# Blueprint

## Node Graph
Nodes in blueprints have input pins that take in data with a specific data type. 

With `Alt + click` on the execution pin of a node you can break the connection.

To move over a wire from one node to the other hold down `ctrl` 

With `Ctrl` drag you can create a getter for your variables. You also can drag a variable straight to a pin to create a getter.
With `Alt` + drag you can create a setter for your variables.

Make sure after you created a variable that you compile the blueprint so you can see and set the default value.

If you want your variable to be editable from the outside of the blueprint, go to `Details` of the variable and set `Instance Editable` or click the eye next to the variable.

You can right click pins of nodes and split them into single components. You also can collapse nodes to functions by selecting the nodes, right click and `Collapse To Functions`. To comment nodes select them and hold down `c`.

When you have an object selected in the world outliner you can create a reference of that in your blueprint by right click `Create a Reference to ...` 

`Event Begin Play` executed once when started

`Event Tick` every frame. If you don't want to connect `Delta Seconds` from the `Event Tick` there is also a `Get World Delta Seconds` node.

`Delta Seconds` - how many time has passed since the last frame

There are nodes that are grayed out when you put them in your blueprint. They are called *wildcards* which allow to connect different datatypes.

## Creating blueprint class
In unreal it's common practice to use `BP_` shortcut for blueprint classes. To construct instance of our blueprint we can drag it into the scene.

## Components
The `Actor` blueprint is capable to have components. All actors need to have at least one component, by default the `Default Scene Root` component. The `Root` is the origin point of the actor.
To add a mesh to the blueprint you need to add it as a component to the class. Add a static mesh component which allows you to assign the mesh you want to use. The static mesh component also can be the root of the blueprint, instead of the `Default Scene Root`.

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


Color data type in blueprints is `Linear Color` structure.

## Level blueprint
The level blueprint is tied to only the level. 

Blueprint classes can be used in all levels.

Every level blueprint is an actor thatz owns the level blueprint and is able to reference instances of other actors in the level

## Translation
To get the location of the actor `Get Actor Location`

With `Add Actor World Offset` you can move an actor by a *delta* vector. You can use it in `Event Tick` to move an actor every frame by a specific amount.


## Flow
`Sequence` node allows to stag execution in a vertical order of nodes instead of the usual left to right.

`Branch` works like an if statement - it executes logic depending on *if the input is true or false*.

## Animation

`Timeline` node is a keyframe generator. Double click the node to make your own keyframe animation. For a single value animation you can create a float track. With shift click you can create keyframes. Activate `Use last Keyframe`.

To create non linear animation between keyframes right click keyframe and set it to auto. After shaping your animation graph you can use the float track outside the timeline node.

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