---
title:Animations
tag:UNREAL
---
# Animations
To directly assign an animation you can go to the animation tab, set animation mode to `Use Animation Asset` and then choose your animations. When you want tot change between animations you blend between them to get smooth transition between the animations. For that use `Animation Blueprint`(AB). 
`ABP_...` prefix
Animation Blueprint has an `Event Graph` and an `Anim Graph`. In the `Event Graph` we update variables we're going to use to drive our animations to select poses.

The poses are selected in the `Anim Graph`. Here we choose animations to play for the character. 

The `Asset Browser` shows you the animations that you have in your project. When you drag an animation into the `Anim Graph` you get a `Sequence Player`. You connect the output of it the `Output Pose` node. This animation is gonna be played. To loop animation got tot Details of Sequence Player and select `Loop Animation`.

In the `Character` assign your `Animation Blueprint`. The `AB` is driving the pos of the skeletal mesh comp that has the `AB` assigned. 
`AB` are great for changing poses based on data. To have the data to decide which pose to play, we update data in the `Event Graph`.
The `Event Blueprint Update Animation` is like `Event Tick`. 
`Try Get Pawn Owner` returns `Pawn` that owns the `AB`.

We can use the pawn owner to determine which animation to play. We get properties from it like checking if it is moving or not by getting its movement component. We can get it's velocity, get a bool with vector is zero. You store it then into a variable like `IsVelocityZero`.  You then can use it to blend between two animations.

The `AB` has a special node to blend poses by a bool.

## Blend Spaces
`Blend Spaces` allows you to blend between animations depending on data like e.g. speed of the character.
`BS_` prefix
`Blend Spaces` allow to put animations on a grid and blend between animations based on values. The `Blend Space` then turns into a node in the `AB`and you can pass data into it. In the Axis Settings you can change the names of the Axis. If you only use one dimension of the `Blend Space` you can hide the unused inputs of the in `Details/Coordinates` open Dropdown and Uncheck `Expose As Pin`.
In the `BS` you can drag in animations. If you hold down shift the animation snaps to the grid. 
By holding down the `Ctrl` key and draggin the mouse on the grid you can see the animation transition playing. 

`Blueprint Initialize Animation` is like `Begin Play`. It allows to cache of some values into variables.
Check if you are in the run animation that the movement matches the actual speed of the character. If you get sliding at full speed you can speed up the animation or you can slow down your characters movement speed by changing max walk speed.

## State Machines

