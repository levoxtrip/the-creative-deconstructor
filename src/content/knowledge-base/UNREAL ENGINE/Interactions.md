---
title: Interactions
tag: Unreal
---
# Interactions

## React to key input in blueprint
Go to the level blueprint, look for the key that you want to trigger your event with. 
![Level Blueprint Img](/img/Unreal/LevelBlueprint.png)
Create the blueprint where you want to react to the key input and place it in to the scene. Add a `Custom Event` into the *Event Graph*. You then can create a reference of that blueprint in your level blueprint and find the `Custom Event` in the node browser.
![Reference To Blueprint Img](/img/Unreal/CreateReferenceToBP.png)

![Trigger Custom Event Img](/img/Unreal/TriggerCustomEvent.png)


## Limit Animation Trigger
If you want to limit how often an animation can be triggered you can use a `Branch` node and set a boolean value depending on if the animation is playing. 
![Trigger Custom Event Img](/img/Unreal/LimitTriggerInteraction.png)



## Get Mouse Position in World
Use a `Get Player Controller` node and connect it with `Convert Mouse Position To World Space`.
![Mouse Position World Space Img](/img/Unreal/MousePositionInWorldSpace.png)

## Detect If Mouse Hit Object
To detect if the mouse hit an object in your scene you can use a `Line Trace For Objects` node, which creates a line that is perpendicular to the plane of the camera. Connected with a `Convert Mouse Position To World Space` this line goes like a laser trough the point of the mouse. It shoots from the mouse and checks where it hits an object/actor. You then need to use a `Break Hit Result` to get the hit actor and cast it to the blueprint class of the object the ray hit.
![LineTrace For Objects From Mouse Img](/img/Unreal/LineTraceForObjectsFromMouse.png)




## Create Action Mapping for Input Evenet
In the *Project Settings* you can map and input event and create an event for your blueprint for it. Go to the *Input* category and add you action mapping by assigning the key/mouse event. You then can use this event in your blueprints.
![Action Mapping Img](/img/Unreal/CreateActionMapping.pngg)


## Show Mouse Cursor in the Scene
If you want to show your mouse in your scene you can in the *Level Blueprint*, on `Event BeginPlay` you `Get Player Controller` and then use a `Set Show Mouse Cursor`. If you want to define what kind of cursor you show you either can use the `Set Mouse Cursor Widget` node.