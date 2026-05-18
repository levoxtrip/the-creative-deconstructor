---
title: Line Trace From Mouse Location
tag: Unreal
---

# Line Trace From Mouse Location
On the `Left Mouse Button Event` execute a `Line Trace By Channel`. Connect `Get Player Controller` with `Convert Mouse Location to World Space`. This gives you the mouse location where it actually is in your world.
Connect the `World Location` with the `Start` of the `Line Trace By Channel`. For the end you take the world location, you add it with `World Direction` which is multiplied by a scaler value. `World Direction` is in which direction the mouse is heading. We multiply it to make it longer. We add it to the start location so it keeps going in a straight line from the mouse.

If the mouse click logic is in a blueprint actor and not a pawn go to `Detail` and set `Auto Receive Input` to `Player 0`.

![Line Trace From Mouse Location Img](/img/Unreal/LineTraceFromMouseLocation.png)
