---
title: Collisions
tag: Unreal
---
# Collisions
In almost every game you have to deal with collisions in a way. A collision starts with the `Primitive Component` which has the ability to have collision data. It is based on the `Scene Component` class which doesn't have collision data. 
`Static Mesh` and `Sphere/Capsule Components` are based on the primitive class. They inherit the ability to have collision data. 
All actors have at least one component - the `Root Component` - they can have more than one component with collision data or none.
Instead of actor colliding with another actor - you speak of components of actors colliding.

![Unreal Collision Types](/img/Unreal/UnrealCollisionTypes.png)

You manage the collision data for the objects in your game. The collision data consists of two parts: *collision geometry* and *collision settings*.
*Collision Geometry* comes in different forms: 
- Mesh - Static Mesh has geometry in form of complex mesh made of triangle "Complex geometry".
- Simple Collisions:
    - Complex Hull/Collision Hull
    - "Simple Geometry"
    - Preferred over complex - more perfomand
- Shape components - Sphere,Box, capsule components
- Foliage, landscape, physics assets

## Collision Settings
The collision settings define how the collision geometry will be treated by the engine. They set which type of calculations will be used for collisions with this geometry. 
*Physics and Queries Systems*

*Collision enabled* dictates whether we use physics or queries, both or neither
- No collisions - object not involved in collision calculations
- Query only - Only uses query system - no physics calculations and collisions
    Special Queries - Overlaps, traces, sweeps
- Physics only - only physics system
    Detect collision as a result of physics - objects are moved around with forces, forces keep objects from overlapping
- Collision enabled(Query and Physics) - Can be involved in physics collisions and queries. Best of both worlds but also more expensive.
- Probe Only (Contact Data, no query or physics)
    No Forces as result of physics, collision
    Detects collision data as result of physics
    Executes `Hit` callback
    We register collision but not have forces applied as a result.
    Do not use query system, so no spatial queries like overlaps, traces, sweeps
- Query and Probe (Query Collision and Contact Data, no physics collision)
    No impact forces as result of collisions
    Detect collision data as result of physics(`Hit` callback)

The settings we pick for *collision enabled* are important because it determines the types of calculations performed on the component, which impacts the performance. The objects should use only whats necessary.

## Collision Object Type
The *collision channel* identifies the component as a type from the collision standpoint. There are two types of channels - *Trace Channels* and *Object Channels*
Trace Channels: Line traces, shape sweeps
Object Channels: Objects(Primitive Comp)

Collision interactions require us to be able to differentiate between objects based on collision object type. The engine has a number of collision channels *World Static* ,*World Dynamic* and more.

We can create custom collision channels. It's recommended to not create to many because each object with collision must decide how to respond to each collision channel.
*ignore* - No collision interaction, no callbacks
*overlap* - Objects pass through each other, can trigger overlap callbacks
*block* - Objects do not pass through each other - if simulating physics/ if sweeping, can trigger `Hit` callback 

Collision settings make up components collision profile. 
Collision enabled, collision object type and collision responses are defining collision profile

Profiles can be saved as presets.

Components with collision have their own collision preset property. When you assign a preset it is grayed out because the preset define them for you. Unreal also has build in presets. 

You can also create your own custom presets - This is encouraged over creating custom channels. If you want to set a setting just for one special object differently you can set it to `Custom` and pick and choose each individual setting.

## Collision Filtering
The collision profile for components determine the type of interaction they will have with other objects. *Collision filtering* is how we determine the type of interaction between components. 
When two objects meet we look at their collision object type and their responses. One object will have collision response to the object type of another. But the other object will have response to the collision object type of the first object. If they are not the same we choose least blocking interaction. `ignore < overlap < block`.
Collision interaction can result in *collision callbacks*. They are executed in response to registered collision interactions.
`Overlap` callback - overlap interaction
    `On Component Begin Overlap`, `Actor Begin Overlap` - Both objects must have `Generate Overlap Events` true.

`Hit` callback - blocking, probe interaction
    if physics collision - `Simulate Generates Hit Event` must be true

Non physics collision: Must be result of sweeping movement - object must be moved with sweeping.

## Method Of Movement
The way how components move when they come into contact with each other matters.

Moved directly: 
`Set Actor Location`, `Add Actor World Offset`
Sweeping or no sweeping - Sweeping stops object if it encounters blocking geometry between old and new location.
No sweeping can place two objects in the same location with `Sweeping Blocking Objects don't Overlap`.

`Add Actor World Offset` has sweep parameter.

Moved via Physics:
    Objects are moved with forces - `Add Force`
    Physics system handles moving that object

Movement Component:
    Moves an object whether it has physics enabled or not. If no physics - sweeping; if physics - physics system takes over movement.
    `Character/Projectile movement component`
    `Character Movement Component` uses both physics and query system.


All meshes in unreal have *collision geometry*. The geometry for a `Static Mesh` can be of two types:
*Complex Collision Geometry*: often not used in games because it is not performant
*Simple Collision Geometry*: You want to have simple collisions

`Collision Hull` is a simple collision.
To use your simple collisions set under `Collision Complexity` `Use Simple Collision As Complex` or `Simple and Complex`. `Simple and Complex` allows us to optionally use complex geometry for queries.

## Queries
Queries mean question - we are asking a question. Would we hit something if we shoot a invisible line out through space. `Line Trace` traces against a trace channel. It recognises any object in the world with `Block` set for the visiblity channel.

We can set that the line trace is tracing against complex collision. That's what `Simple And Complex` is for. In the project settings you can set the default shape settings. Every object that then has default settings set as collision complexity will use the default settings.

## Convex Decomposition
*Convex Decomposition* allows you to create a more customizable `Convex Hull`. `Max Hull Verts` sets the amount of max vertices.

With `Use Collision As Simple` you can't simulate physics anymore. For physics you need to set it to `Simple and Complex`.

## Sweeping collisions
To determine how two objects gonna interact we must consider how the objects are moving. It matters for the determination of the type of collision that's gonna result. 

You can overwrite the collision presets of your static mesh in the blueprint. You also can overwrite the blueprints settings in the details page of the editor for a specific instance of the blueprint. 

When we move an actor with `Add Actor World Offset` we need to set sweeping if we want that it collides with blocking geometry. This allows to set collision preset to `Query Only` where we don't use physics system at all.

## Set Actor Location with Sweeping
For `Set Actor Location` we need to set sweeping if we want them to collide. 

If you use `Set Actor World Offset` and you use sweeping it will keep the object from passing through an object that is in the way.

## Collision With Physics
You can deactivate the query system when you use physics by setting the collision preset to `Custom/Physics Only`. Make sure you have default set in your actor if you set the preset in your Static Mesh. 

When you set the actors/components location directly, you have to use sweeping to detect collisions. When you add a force you have to use physics. You also can use `Probe Only` for `Collision Enabled`. You don't get collision interaction. 
Probe detects when the object hit. But it doesn't use physics reaction. It is able to detect physics interaction but not imparting resulting forces.

## Collisions With Movement Component
When we are simulating physics with `Projectile Movement Component` the initial launch parameters of it will affect a mesh and then the movement will be handled to the physics system.

`Projectile Movement Component` is able to fake physics if you set `Should Bounce` in the details and `Simulate Physics` is off.

## Collision Callback
`Simulation` setting in the details panel generates `Hit` event and set `Generate Overlap Events` if you want callbacks. 

With `Probe Only` for `Collision Enabled` you can create multiple hit events while passing through an object.

## Custom Collision Presets
Using *custom collision presets* can be a wild card because one custom preset can differ from another custom preset. You might lose certain edge cases for specific custom presets. Build-in presets will all be the same for any object using them. 

It is generally better to create a preset with the collision settings.
`Overlap All` and `Overlap All Dynamic` aren't ideal presets. You want to overlap them with only the objects that are necessary. You want to ignore all the unnecessary object types besides the one you need. To make your own *collision preset* go to *Project Settings/Collision/Preset*. There you can create a new collision preset.

## Custom Channels
Custom Collision Object Types

If you for example launch bullets inside an object like a rifle, you don't want a bullet to collide with the mesh. You can solve this by creating custom collision object types. In some multiplayer games you don't want the bullets to hit certain enemies. And you don't want other players.

You can create a channel in the engine collision settings in project settings. 

You set all the channels to ignore and then set one by one channel individually if they need to overlap or block. 

If you have two objects that only differ by their different collision presets you can create a child blueprint of the original blueprint and then only adjust the presets.




















Physics is only enabled on components not actors in Unreal. Collision volumes allow you to trigger logic when another object overlaps with it. Reference the volume in the blueprint and connect `On Component Begin Overlap`. If you want to connect a custom event to the overlapping event use `Bind Event To On Component Begin Overlap`. Make sure that the custom event has all the input parameters that the bind expects. With `Assign On Component Begin Overlap` creates the custom event for you with the necessary input parameters. If you don't want to fire the event anymore at some point you also can use `Unbind Event ...`



## Bigger collision shape than mesh
To set the size of the `Collision Volume` set the `Sphere Radius` not the scale of the volume itself.
If you want to keep your `Collision Volume` at the same size but actual mesh scaled, make the collision volume the parent and apply the scale only on the `Mesh component`.

If you want the mesh and the collision volume independently scaled, create a scene root and don't let them be attached to each other.

## Get Overlapping actors Reference
To get the reference to the actor that is colliding with your actor you can add a `Sphere collision` in your blueprint. Add it to the main shape and let it stick out so it touches with the objects that are close.
In the blueprint create a `Custom Event` that executes the behavior for the overlapping actors. 
With `GetOverlappingActors` you can get the neighboring colliding actors. Make sure that your custom event get's executed on the `Event ActorBeginOverlap`.

## Debugging
If your overlap events aren't working it is possible that `Generate Overlap Events` in the collision volume details is not checked on in the collision presets.
