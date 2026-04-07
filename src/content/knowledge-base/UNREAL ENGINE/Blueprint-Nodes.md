---
title: Blueprint Nodes
tag: Unreal
---
# Blueprint Nodes
With `Ctrl` drag you can create a getter for your variables.
With `Alt` + drag you can create a setter for your variables.


You can right click pins of nodes and split them into single components.

When you have an object selected in the world outliner you can create a reference of that in your blueprint by right click `Create a Reference to ...` 


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

If you want to reposition your actors on runtime you have to set them movable. In *Details -> Transform -> Mobility*.

`Add` allows you to add two values together



<!-- ![Sending Multiple Trigger For TouchOut Img](/img/TD/SendingMultipleTriggerTouchOut.png) -->