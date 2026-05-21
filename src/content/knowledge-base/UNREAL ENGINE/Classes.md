---
title: Unreal Engine Class Hierarchy
tag: Unreal
---
# Unreal Engine Class Hierarchy
Unreal is based on a class hierarchy. Any given class inherits variables and functionality from its parents class. Actor class has its own set of properties.*Actor Comp -> Scene Comp -> Static Mesh Comp*.

`Blueprint` class is a child of `Actor` class and inherits properties from it. The whole blueprint system is object oriented.

`Actor` derives from `Object` and inherits the qualities from `Object` to store data and being place in the scene. It also has unique own capabilities that `Object` doesn't have. 
The parent of the `Actor` class is `Object` class. It can store data and can be made into a blueprint.

An `Actor` has components. When we add *components* to it we make use of composition concept where we extend actor capabilities by composing it with sub-objects like `Scene Component` or `Static Mesh`.

`Actor`:
can be placed in the level
can be spawned at runtime
can have components
have useful functions like `Get Actor Location` or `Get Actor Forward Vector`

`Components`:
can be added to actors
based on `Actor Component` class
All actors have at least one component - the `Root Component`

`Scene Component`:
Child of `Actor Component Class`
No Mesh
has a transform
supports attachment to other scene components

`Static Mesh Component`:
has a mesh 
child of `Scene Component`
supports attachment. 

`Pawn`:
`Pawn` is derived from `Actor`
Can be placed/spawned in the level
Can be possessed - we can assign input to control a pawn.

