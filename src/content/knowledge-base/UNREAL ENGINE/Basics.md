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

`G` hides the gizmos of the scene.

`F11` for full screen view.

To reset the layout go to `Window/Load Layout/Default Editor Layout`.

You also can create multiple viewports under `Window`.

The viewport has different view modes of the scene. The default is perspective, but you also can switch to orthographic views like Top,Left, etc.

You also can bookmark views when you like a specific camera position and want to go back to it after you moved. `Ctrl +1` `Ctrl+2` etc. Then with `1`,`2` you can jump to that camera position.

## Play in Editor
With `Alt+P` you can start Play in editor mode and with `Escape` you stop.

With `Shift+F1` you can jump out of the PIE to get your mouse while the mode is still running. 

The default pawn is what you are controlling in the PIE mode. With `F8` you can detach from the player controller in play mode.

## Manipulating Objects
An object considers it's own x direction to be *forward*, y direction is it's *right* direction and z direction is *up*.

Actors have their own local rotation. In the viewport you can switch between local and global coordinates. To change local rotation of a mesh of an actor create a `Scene Component` as the root and rotate it there.

![Local vs Global Coordinates Img](/img/Unreal/LocalGlobalCoords.png)
`Q` - to select object
`W` - translate object. With shift hold down camera moves with you while translating
`E` - rotate object
`R` - scale object.
`ALT+Drag` - duplicate object.

In the viewport you have multiple options to decide how the translations should snap to certain values.
![Viewport Snapping Img](/img/Unreal/SnappingSettings.png)

The lock icon in the details panel allows that the change gets applied proportionally on other axis.

![Grid Icon Top Img](/img/Unreal/GridIconTop.png)
The grid icon on the top right also allows you to have multiple perspective views in your viewport.

Next to it is the `Lit` button which lets you change the lighting mode in the viewport. `Unlit` let's you see objects in the dark.

`F11` - fullscreen viewport.

## Finding Files from the scene
You can find the relating files from your objects in the scene by clicking on the object in the scene or the *Outliner* and hit `ctrl+b`. Another way is to right click the object and select `Browse To Asset`.

## Static Meshes
In the static mesh viewport you can navigate with:
`alt + left click` - rotate around
`alt + right click` - zoom in/out

Unreal translates imported fbx to *uasset* datatype.

When you import a fbx into unreal make sure that the scaling of the fbx is already how you want it in your game. Additional scaling of your mesh cause extra necessary calculations by the engine and could affect performance. Scale up the mesh when you input the fbx into unreal by changing the `Import Uniform Scale` in the import settings. The import settings also allow you to *not* create a default material. Go to `Material Import Method` and select `Do Not Create`.

### Modeling Mode
With `Shift+5` you can access unreal's modeling mode where you are able to create a mesh. In the `Xform` menu you can change the pivot of your mesh.

## Migrating Assets
When you want to migrate assets you only can migrate it to the content folder of another project. Besides single files you also can migrate whole folder.

## Programming
In unreal you can program in c++ or blueprints. C++ is more performant and you have more access to the code base.

### Actors
Everything that can be placed or spawned into a scene has to be at least an actor. `Pawn` class inherits from `Actor` class. `Pawn` class can be possessed, something aan `Actor` can't. `Actor` is parent class of `Pawn`.

#### Components
The `Actor` blueprint is capable to have components. All actors need to have at least one component, by default the `Default Scene Root` component. The `Root` is the origin point of the actor.
To add a mesh to the blueprint you need to add it as a component to the class. Add a static mesh component which allows you to assign the mesh you want to use. The static mesh component also can be the root of the blueprint, instead of the `Default Scene Root`.


In the `Details` panel of an actor you can set the initial life span. `0.0` means forever
# Movement
To move objects relative in Unreal you can position one actor inside another in the hierarchy.

`Movement` component is designed to move the actor it is belonging to. There are different types of movement components like `Projectile Movement Component`.
# Pawn
To set your own pawn instead of the default one you can create you own pawn blueprint and then create your own game mode where you assign that custom pawn. Then in the project settings under Maps & Modes you assign your custom game mode.

## Create a controllable object
Instead of an actor blueprint use a `Pawn`blueprint. Add your mesh and make it the child of a collision object if you want physics.

# Create a camera behind your pawn object
Add a `Spring Arm` and make a `Camera` it's child. Adjust the `Target Arm Length` and `Socket Offset` for the desired distance. Also check `Use Pawn Control Rotation` in the camera settings.

# Quality
For smaller projects like an interactive sketch in Unreal you can optimize for highest resolution of your textures in your scene by turning of `Texture Streaming` in the settings.

When you have a fixed camera you can deactivate `Auto Exposure`.
