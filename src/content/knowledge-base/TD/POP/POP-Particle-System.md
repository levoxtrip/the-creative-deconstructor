---
title: POP Particle System
comments: true
tags:
 - TD
 - TD/POPS
 - Particle System
---
# POP Particle System

To create a *Particle System* we can use a `ParticlePOP` which contains the usual particle parameters from *ParticleGPU* or `ParticleSOP`

When we connect a `TopToPOP` we get the *Color* attribute from the TOP. But we will loose this attribute when connecting to the `ParticlePOP`. Under *Attributes* in the `ParticlePOP` parameter window we can add the *Color* attribute.

## Move Particles
To add forces in `ParticlePOP` system you use `MathMix` to update velocities and forces.
`ForceRadialPOP` acts on particle force attribute.
`radial` 1 pushes particles out and -1 drags them in.
To have multiple forces at the same time working you can use specifictation pop and use a pop that has multiple point attributes attached.
You can manipulate the force radial attribute from the `SpecificationPOP`. Add an attribute in it with the name of the parameter.

Another way to use `ForceRadialPOP`is to not do it in the feedback but to tadd the attribute `PartForce` to `P` in a `MathMix`. If you add a `FieldPOP` you also can localize where the force is added. 

To Move the particles in a *POP particle system* we create kind of like a feedback loop in TOP world. We add a `Null` after the `ParticlePOP` and then assign it to the *Target Particles Update POP* parameter of the `ParticlePOP`.

In between we then can add a `NoisePOP` or a `TransformPOP` to create the change in the particle system.

## Apply Noise only on specific color values
Be default the `noisePOP` adds the noise values to each point of the POP.

But if you only want to apply noise to a certain color range

`MathCombinePOP`allows us to combine certain attributes or even create new Attributes. So we can choose A*B *operation* and then choose the attributes *Color* and *Noise*

## Limit Particles in a direction
We can use a `LimitPOP` to limit it's movement in an direction.
For that we set *parameter size* to 3 and then activate *Positive Only* for the axis we want to limit.

## Add trails to particles
Be careful before you connect the `TrailPop`. It can crash your TD when you use the *experimental build* . Set it up first.
First deactivate `Active`. Then you can connect and activate *Math by Attribute* and pick `PartId`. This will tell the POP which points to connect.
So set *Connectivity* to `Point Prim`.

`TrailPOP` also has a *Transform* tab to create interesting transformation and rotation behavior.

## Color particles with noise applied to them differently
We can use a `LookupTexturePOP` to give the particles that have noise applied a different color.

We can calculate the length a vector with `MathCombinePOP` and `length(A)` operation.

## Interesting POP Feedback Effect
Insert a `BlendPOP` into a feedback loop to make the movement of the points smoother.

## Map Attributes
If you want to map an attribute to the initial velocity of a particle go the `Map` page of `ParticlePOP` take the attribute and map it to `initVelocity`. 

## Shrink down particle with life
To shrink down particle size with their evolving life divide `partAge/lifeSpan` in a `MathMix`. To get a value that goes from 1-0 then subtract partAge from 1.

