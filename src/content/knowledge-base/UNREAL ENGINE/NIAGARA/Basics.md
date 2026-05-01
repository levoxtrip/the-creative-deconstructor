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

## CPU vs. GPU
Under the *Properties* of the emitter you can set wether you want to simulate the particles on the CPU or the GPU. Each have their advantages and disadvantages.
If you simulate a system on the CPU you can have collision for your particles. Things that are calculated on the CPU are physically present in the world of your game. So they can have interaction with other things that are also physically present.

Particles that are simulated on the GPU aren't physically in the world, they are just rendered by the GPU - they are like another layer run on top of the actual game world, not physically in the world. Because GPU particles are like another layer run on top of the actual game world , they will only be visible withing a certain bound. The GPU needs to know when to simulate and when to render these particles. Thats why you need for GPU simulation `Fixed` `Calculate Bounds Mode`.

Rule of thumb is *Lots of particles GPU - Accurate Particles CPU*

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

With a `Multiply Linear Color By Float` and a high scale value you can create glow material for your particles.

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
If you want to add a velocity every frame to you can use one of the *Forces* modules in `Particle Update`. To set the initial velocity of the particle by a force you also can add the forces in `Particle Spawn`
![Forces Menu Img](/img/Unreal/Forces.png)

`Gravity Force` - adds gravity and makes the particles fall down.

`Point Force` - applies a forces to anything that is close to the point - pushes the particle away from the point.

`Point Attraction Force` - applies a pull force to anything that is close to the point - pulls the part

`Curl Noise Force` - applies a noise movement to the particle.

`Vortex Force` - adds rotation movement to particles origin. At high value particles get sucked in.

## Add Collision to Particles
Make sure you simulate the particles on the CPU and then add `Add Collision` module. It allows you to select `Raytracing` for more accurate but also more performance intensive collisions. With `Advance Aging Rate` you can increase the age of the particle when it collides with another object like a wall for example.

There is a way to have collisions with GPU particles but it's using depth buffer images or a distance field. These can lead to incorrect collisions.

## Ribbon Renderer
The `Ribbon Renderer` takes all the living particles and connects them together from the youngest to the oldest particle. If you want to you can change the `Draw Direction` to `Back to Front`. This can be useful when you have a material for your ribbons that is oriented a specific way. `Ribbon Tesselation` defines how much extra geometry gets added between the emitted particles. With `Curve Tension` you can define if you want curvature between the points or not.

A `Ribbon Renderer` is also a good use-case for using the `Spawn Per Unit` spawner. You can use it when you want to spawn the particles when the system is moved. Useful for example for a speed trail of a character.

With `Jitter Position` and `Ribbon Renderer` we can create interesting curvy line effects. Every update it is offsetting every particles pos in a random direction. To avoid that you have the jiggly at the beginning and the end of your ribbon you set the `Jiggle Amount` to `Float From Curve` and the `CurveIndex` to `RibbonLinkIndex`. Then use a curve with 0.0 at the beginning and the end.

![Fixed Ends At Ribbons Img](/img/Unreal/FixedEndsAtRibbon.png)

## Beam
Because beams are used so much in Unreal there are special beam modules. 
In `Emitter Update` you can add `Beam Emitter Setup`. It allows to set the start and endpoint for the beam. Then in `Particle Spawn` you add a `Spawn Beam` and in the `Emitter Update` you want to select `Spawn Burst Instantaneous`. This then spawns the amount of particles along the beam.

If you want the beam to start with one color and end with another you would use `Scale Color` and then set the `CurveIndex` to `Ribbon Link Order`, when you use a `Ribbon Renderer`. Similar logic you can use for example to scale up your ribbon at certain parts with `Scale Ribbon Width`. If you use beam you can use `Beam Width` in `Particle Spawn` to do the same effect.

## Attribute operations
You also can add operations like creating random float values or multiply certain values by clicking on the arrow next to the attribute.
![Operations in Attribute Field Img](/img/Unreal/OperationsInAttributes.png)

## Using Parameters
In Niagara Systems you can use the parameters provided from the system and you can use your own *user parameters*. These parameters are like *variables* for your particle system. You can drag and drop them onto the fields in the *details* page. User parameter get exposed to the editor where you can adjust and change the values. If you want to use parameters on a per *emitter* basis - in the `Emitter Spawn` add `Set new or existing parameter directly`. To create a new parameter in there click on the `+` and under `Make New` select the datatype you want to use for the parameter. You also can `Set Specific Parameters`. You can't drag your user parameter into the values for these parameter. A use-case is for example to make a new random *color* and then reference the parameter in `Particle Spawn`.

![Random Linear Color With Parameter Img](/img/Unreal/RanLinColorWithParameter.png)

### User Parameter
*User parameter* are custom data inputs into your Niagara Particle System. They allow you to dynamically control parts of your particle system. They also allow you to expose parameters to the outline of your scene.

Any attribute that you can change in your system has a down arrow where you can type `user` and click on `Read from new user parameter` to link it to a new user parameter. To link your already created user parameter is to drag and drop it on the attribute in the details view. 

To set user parameters via a blueprint you use a `Set Float Parameter` or `Set Color Parameter` node in the blueprint depending on the datatype of the user parameter.
![Set User Parameter Via Blueprint Img](/img/Unreal/SetParameterViaBlueprint.png)

## Value calculations
We can execute complex calculations in the parameter fields of the details panel. 
To convert a vector into a single float `Vector From Float`

With `Make Vector` you get for each component/axis of the vector your own dropdown where you can calculate the values

You can make your own scripts for niagara systems. In the content browser go to *FX/Script* which allows to create reusuable niagara logic.

`Random Float in Range` allows to generate random values for a parameter.

## Particle events
You can link multiple emitter with each other by passing events from emitter to another. In one emitter you add *event* modules for *collision*,*death* or *location* event.

## Scratch Pad
In a scratch pad on the pins you can change the namespace to the desired part of the particle system.

## Export Particle Data To Blueprint
Add an `Export Particle Data To Blueprint` to `Particle Update` of your system, set `Condition To Export Data` to true and add a `CallbackHandler` to `Export`. To add the callback handler go to user parameter and add a parameter of type object, then assign parameter to the export callback handler.

![Object User Parameter Img](/img/Unreal/ObjectUserParameter.png)

In the blueprint you reference your niagara and use a `Set Niagara Variable(object)` with the callback as the variable and the object as self.

## Find Default Sprite Material
If you can't find the *Default Sprite Material*, click on the wheel and show engine and plugin content. 
![Find Default Sprite Material Img](/img/Unreal/FindDefaultSpriteMaterial.png)

## Spread Out Particle only in plane
Append a `Add Velocity` module to the `Particle Spawn` and for the velocity `Make Vector`. This allows you to set for each component of the vector a `Random Range Float`. Use only them for only to axis and your particle spawn along a plane. Additionally you can add a plane `Spawn Location` to `Particle Spawn`

## Particle Material
Often for your particle materials you want the *Blend Mode* to `Additive` and the *Shading Model* to `Unlit` because that creates see-through particles that add and lay on top of each other to brighten up. 
Also set your particle material to `two sided`.

To set the color from the niagara syxstem to your material use a `Particle Color` node for the color in your material.

To lerp a value over the lifetime of the particle you can use `Particle Relative Time` as the lerp alpha. This gives the normalized age.

`Texture Sample` node allows you to add textures to your material. Unreal also provides some textures like perlin-noise. To create different noise pattern for each particle you can add `Particle Random` to the `Texcoord`, `Subtract` 0.5 to center it.
![Random Noise Pattern Material Img](/img/Unreal/RanNoisePattern.png)

`Particle Speed`

Be aware with using translucent materials with particles because they are performance heavy. You can use `Masked` *Blend Mode* which only allows pixel to be opaque or full transparent. You the connect `Particle Color` alpha to `Dither Temporal AA`. Put the result into `Opacity Mask`.

### Pass values from Niagara into Material
To pass values into a material use a `Dynamic Material Parameters Module`, disable the parameter you don't want to use to save some performance. In the material you then can use `Dynamic Parameter` node.

## Particle Death
When a particle lifetime ends they die. But you can also kill particles before if certain conditions are met. You can do this in two ways, both on `Particle Update`. You can use the `Kill Particle` module which allows you set up different bool conditions to kill the particle. For example you can use `Set Bool By Float Comparison`. You can for example use the particle velocity and check if it is bigger or small than a certain value.
![Random Noise Pattern Material Img](/img/Unreal/KillAllParticlesFasterThan.png)

With `Kill Particle In Volume` you can destroy particles when they are inside a volume. With `Invert Volume` the particles only stay alive when they are inside the volume.


## Calculate Particle Speed
![Calculate Abs Speed of Particle Img](/img/Unreal/ToCalculateParticleSpeed.png)


## Deactivate That Particles Die
In particle state you can deactivate that the particle get killed when their lifetime has elapsed.