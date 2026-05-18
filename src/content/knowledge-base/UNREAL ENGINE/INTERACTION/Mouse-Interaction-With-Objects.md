---
title: Mouse Interaction With Objects
tag: Unreal
---

# Mouse Interaction With Objects
In your blueprint `Get Player Controller` and connect it with `Set Input Mode Game UI`. It allows us to interact with our mouse. 
On `Left Mouse Button Event` you connect `Get Player Controller` with `Get Hit Result Under Cursor By Channel`. You then can break this `Hit Result`, take the `Hit Actor` and cast it to the object type where you want to execute a custom event.  If you have multiple objects you want to click on you can use a `Sequence` and add all the casts to the object.

If the mouse click logic is in a blueprint actor and not a pawn go to `Detail` and set `Auto Receive Input` to `Player 0`.

![Set Input Mode Game UI Img](/img/Unreal/SetInputModeGameUI.png)

![Get Hit Result Under Cursor Img](/img/Unreal/GetHItResultUnderCursor.png)

