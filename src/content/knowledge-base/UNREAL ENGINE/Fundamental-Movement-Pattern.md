---
title: Fundamental Movement Pattern
tag: Unreal
---
# Fundamental Movement Pattern

To make your movement independent of the current FPS multiply the offset value by `Delta Seconds` pin of `EventTick`.

## Basic Translation per frame
When you need the current location of the actor for some calculations you can use this BP.
![Basic Translation per frame Img1](/img/Unreal/BasicMovementPattern.png)

Another way, when you just want to move something you can use `Add Actor World Offset`.
![Basic Translation per frame Img2](/img/Unreal/AddActorWorldOffset.png)

## Continuous Rotation of Actor
![Continuous Rotation of Actor Img](/img/Unreal/ContinousRotationActor.png)

## Oscillating Movement
![Oscillating Movement Img](/img/Unreal/OscillatingMovement.png)

## Event Driven Positioning
Instead of `Event Tick` you use a Timer and each time it fires you pick a random position value and place the object there.
So first on `Event Begin Play` you use a `Set Timer By Function Name`. Activate the `Looping` parameter and pick the desired time. Then you can create a `Custom Event` with the function name from the timer.
![Event Driven Positioning Img](/img/Unreal/EventBasePositioning.png)

## Lerp between random positions.