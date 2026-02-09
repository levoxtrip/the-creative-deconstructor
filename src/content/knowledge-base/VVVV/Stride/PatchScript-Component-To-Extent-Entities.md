---
title: PatchScript Component to Extent Entities
comments: true
tags:
 - VVVV
 - VVVV/Stride

---
![PatchScript Component to Extent Entities Img](/img/vvvv/PatchScript1.png)

# PatchScript Component to Extent Entities
If you want to extend the behavior of an *Entity* in Stride you can create a *script component* that you connect via `PatchScriptComponent` and `FromValue` with the components input of a model.

For the `Patch Script` input of `PatchScriptComponent` we create a class `NewPatch` and implement `ISyncScript` interface and enable `State Output`. Also make the class a `Process Node`.
Implement a *Start* and *ScriptUpdate* operation and a *component* property.
![PatchScript Class Settings Img](/img/vvvv/PatchScriptSettings.png)

*Start* and *ScriptUpdate* work similar to regular start and update(every frame) behavior.

![PatchScript Component to Extent Entities Img](/img/vvvv/PatchScript2.png)

If you have multiple entities and you want to control their behavior at a different place as they are created you can use `GetPatchScript`.

You can use this for example to change the material of an 3D object in stride.

[Download Example File](/files/vvvv/PatchScriptEntity.vl)