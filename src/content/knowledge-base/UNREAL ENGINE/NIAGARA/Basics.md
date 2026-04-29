---
title: Niagara Basics
tag: Unreal Niagara
---
# Niagara Basics

A *Niagara System* is what yo physically place into the world of your game. A *Niagara Emitter* is part of the system. It can't be put in the world by itself.

Under *Learning Content* you can find particle systems with explanations.

A *Niagara System* can have multiple emitters - they coexist in the system.  An emitter is build up out of single modules - each module acts like a function - a little bit code that gets executed.

`Emitter Spawn` only runs once when the emitter is spawn - like `BeginPlay`. It is used to set values that stay consistent for the entire lifetime of the emitter. 

`Emitter Update` own update loop(`Event Tick`) that allows to spawn particles. You put spawner modules in there like `Spawn Rate` or `Spawn Burst Instantaneous`.
![Spawning Modules Img](/img/Unreal/SpawnerModules.png)

Like the emitter each individual particle has their own `Particle Spawn` and `Particle Update`. 
`Particle Spawn` runs once for every particle and `Particle Update` every tick of your system.

Emitter Spawn vs. Particle Spawn example:
If you have a random value in `Emitter Spawn` it will always be consistently the same until you spawn another system which then will have another value. For `Particle Spawn` every particle that get spawned will have their own new random value.

If you want to change values over time you put that logic in the `Particle Update`. For example change color based on it's speed, change shape based on something or to apply forces.

All the modules before the `Render` calculate information for the point/particle. In the `Render` we decide who they get displayed and rendered an the screen.

Unreal provides different renderer but `Sprite`,`Mesh` and `Ribbon` are the most commonly used ones.
![Niagara Renderers Img](/img/Unreal/NSRenderer.png)

Some modules in niagara have dependencies. Unreal will throw an error and show `Fix Issue` if easily can resolve the dependencies.

The parameters in the *Details* page have often an `v` dropdown next to them which allows to add calculations to the parameter values.


## Spawner
`Spawn Burst Instantaneous` - to spawn amount of particles all at the same time.

`Spawn Per Unite` - if you want to spawn a particle every 100 units a system moves. Often used for ribbon particles.

`Spawn Rate` - spawns the amount of particles per second.


## Give particle movement in direction
Add an `Add Velocity` in `Particle Spawn` to give the particles a direction to move along. If you use instead of a constant vector value a `Random Range Vector` or `Set Random Vector` for the parameter you can let them spread out in different directions.
![Particle Spawn In Random Direction Img](/img/Unreal/ParticleSpawnInRandomDirection.png)



## Spawn particles inside a shape
The `Shape Location Module` inside `Particle Spawn` allows you to let particles be born inside a shape. Depending on the shapes you can spawn them at random positions inside the shape, you can select `Direct` to define where on the shape you want to spawn the particles. `Uniform` spawns the particles evenly spread across the shape.

### Upward spiraling particles
If you use a `Spawn Rate` and then set the `Shape Location` to `Ring` with `Direct` distribution and you use an `Add Velocity` module you can create a spiral upwards movement of the particles.
![Spiral Particles Img](/img/Unreal/SpiralParticles.png)


## Give Particle Random Color On Start
To give each particle a random color on start add `Color` module to `Particle Spawn` and set for the `Color` parameter a `Random Range Linear Color`.
![Random Initial Colors Img](/img/Unreal/RandomColorParticle.png)

## Change Color Over Lifetime 
If you want to change the color of a particle over time you can add `Scale Color` in `Particle Update` and set `Mode` to `RGBA Together`. Then add `Vector4 From Curve` which changes the color along the curve over the lifetime of the particle. Be aware that this applies a tint to original color of the particle. The `CurveIndex` is set to `Normalized Age`. 
![Change Color Over Lifetime By Age Img](/img/Unreal/ChangeColorOverLifetime.png)
If you want to map the color to the velocity of the particle you can use `Velocity` parameter of the particle for the `CurveIndex`.
![Change Color Over Lifetime By Velocity Img](/img/Unreal/ParticleVelocityAssignedToColor.png)

## Scale Particle Size
To scale the size of the particles over time add a `Scale Sprite Size`/`Scale Mesh Size` to `Particle Update`. You get a curve - on it's y axis you have the size value and on the x the normalized age of the particle. Make sure that in `Initialize Particle` the sprite size is not `Unset`. In the `Scale Sprite Size` the particle gets scaled based on what the initial size when spawned was. The curve is a percentage of the initial particle size.

## Set Where Particles Are Facing
When you have a `Mesh Renderer` you can make the meshes face towards something. In `Facing Mode` of the renderer you can for example let the meshes always face `Camera Position` or the particles `Velocity`, which will let the mesh face towards the forward axis of the velocity.
![Mesh Faces Along Forward Velocity. Img](/img/Unreal/MeshFacesAlongForwardVelocity.png)

## Let Particle Slow Down
With `Drag` module you can slow down the particle over time. So the particle starts at the velocity and gets slower over time because of the `Drag`.

## Add Velocity Every Frame
If you want to add a velocity every frame to you can use one of the *Forces* modules in `Particle Update`.
![Forces Menu Img](/img/Unreal/Forces.png)



## Deactivate That Particles Die
In particle state you can deactivate that the particle get killed when their lifetime has elapsed.



## Attribute operations
You also can add operations like creating random float values or multiply certain values by clicking on the arrow next to the attribute.
![Operations in Attribute Field Img](/img/Unreal/OperationsInAttributes.png)



## User Parameter
*User parameter* are custom data inputs into your Niagara Particle System. They allow you to dynamically control parts of your particle system. They also allow you to expose parameters to the outline of your scene.

Any attribute that you can change in your system has a down arrow where you can type `user` and click on `Read from new user parameter` to link it to a new user parameter. To link your already created user parameter is to drag and drop it on the attribute in the details view. 


## Scratch Pad
In a scratch pad on the pins you can change the namespace to the desired part of the particle system.

## Export Particle Data To Blueprint
Add an `Export Particle Data To Blueprint` to `Particle Update` of your system, set `Condition To Export Data` to true and add a `CallbackHandler` to `Export`. To add the callback handler go to user parameter and add a parameter of type object, then assign parameter to the export callback handler.

![Object User Parameter Img](/img/Unreal/ObjectUserParameter.png)

In the blueprint you reference your niagara and use a `Set Niagara Variable(object)` with the callback as the variable and the object as self.


## Find Default Sprite Material
If you can't find the *Default Sprite Material*, click on the wheel and show engine and plugin content. 
![Find Default Sprite Material Img](/img/Unreal/FindDefaultSpriteMaterial.png)
