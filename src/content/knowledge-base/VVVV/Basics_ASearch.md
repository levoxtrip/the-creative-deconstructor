---
title: Basics
comments: true
tags:
 - VVVV
---
# Basics

Each patch in VVVV has a `Application` side and a `Definition` side. 
On the `Application` side is the code of the program and it is running on every frame.
On the `Definitions` side are the datatype declarations that you can use in the application side or you can expose as a library.

On the definitions side you only can have definitions but on the application side you can have definitions and running code. 

## Navigating VVVV
show left patch - `Alt+leftarrow`
show right patch - `Alt+rightarrow` 

Move all the nodes including frames - `hold space +drag`

## Connecting Nodes
Sometimes you have the situation where you want to connect a node with a not jet typed input. If you want to be able connect it you hold down space key.

## Process Nodes
We can use `Process` node to group certain functionality together with all the behavior the needs grouped together.

When you create a process node and then you look inside of it you always see the value of that instance of the process node.

`Process` nodes also have a [Generics](/files/vvvv/TypeFlexibility.md#generics) switch.


## Big Projects
If you work on big projects like for example a game it can make sense to create an own class for the *Game* and add different methods to handle all classes and instances inside of your game. For example an update method where the updated states of the instances get stored.
For example:
`GameInit` -> Initializes all Instances that are there on start.
`GameController` -> Handles all Input controlls
`GamePlay` -> Handles all updates that happen every frame
`GameDrawer` -> Handles drawing of all objects

![Game Structure Img](/img/vvvv/GameStructure.png)

