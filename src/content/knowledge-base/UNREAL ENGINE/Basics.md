---
title: Basics
tag: Unreal
---
# Basics

## What is a game engine?
A game engine is a software framework that provides the foundational tools and systems needed to build video games.
*Rendering* - Generating images on the screen
*Input* - Input devices translating inputs into game actions
*Audio System* - Handling sounds and music
*Physics* - Physics system
*Assets* - Importing and handlings assets, textures, 3D objects
*UI System* - Linking UI with game logic
*Scripting* - Gameplay logic and libraries
*Networking*
FX system - Particle System, Postprocessing etc.

Game developer often specialize in special areas of game engines.

## Unreal Projects
In the content folder you have all your files. To add *Starter Content* to your blank project, go to add in the *Content Browser* then `Add Feature Or Starter Content`. Save your main level in a `Map` folder. In `Project Settings/Maps & Modes` you can set the startup level when your project opens.

## Viewport
On the camera icon you can set the camera speed.

With `F` you can focus on an object in your scene.

To reset the layout go to `Window/Load Layout/Default Editor Layout`.

You also can create multiple viewports under `Window`

## Play in Editor
With `Alt+P` you can start Play in editor mode and with `Escape` you stop.

With `Shift+F1` you can jump out of the PIE to get your mouse while the mode is still running. 

The default pawn is what you are controlling in the PIE mode. With `F8` you can detach from the player controller in play mode.

## Manipulating Objects

`Q` - to select object
`W` - translate object. With shift hold down camera moves with you while translating
`E` - rotate object
`R` - scale object.
`ALT+Drag` - duplicate object.

In the viewport you have multiple options to decide how the translations should snap to certain values.
![Viewport Snapping Img](/img/Unreal/SnappingSettings.png)

The lock icon in the details panel allows that the change gets applied proportionally on other axis.

# Movement
To move objects relative in Unreal you can position one actor inside another in the hierarchy.

# Pawn
To set your own pawn instead of the default one you can create you own pawn blueprint and then create your own game mode where you assign that custom pawn. Then in the project settings under Maps & Modes you assign your custom game mode.

## Create a controllable object
Instead of an actor blueprint use a `Pawn`blueprint. Add your mesh and make it the child of a collision object if you want physics.

# Create a camera behind your pawn object
Add a `Spring Arm` and make a `Camera` it's child. Adjust the `Target Arm Length` and `Socket Offset` for the desired distance. Also check `Use Pawn Control Rotation` in the camera settings.

# Quality
For smaller projects like an interactive sketch in Unreal you can optimize for highest resolution of your textures in your scene by turning of `Texture Streaming` in the settings.

When you have a fixed camera you can deactivate `Auto Exposure`.
