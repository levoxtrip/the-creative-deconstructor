---
title: ImGUI Basics
comments: true
tags:
 - VVVV
 - VVVV/UI
 - VVVV/ImGUI

---
![ImGUI Region](/img/vvvv/ImGUIRegion.png)

# ImGUI Basics
To show `ImGUI` in *Skia* or *Stride* we need to install the dependencies `VL.IMGUI.Stride/Skia`. 

You then put all the UI elements in an `IMGUI Region`. The `Region` has a render output at the bottom which we then need to connect to `RenderEntity` in Stride. To show the UI over the Stride content we need to set at the `RenderEntity` `Renderstage` to `After Scene`.

Inside the `Region` we then place our `ImGUI Widgets` like `Slider` or `Button`. They need to be chained into each other.

We can also visually group our UI widgets in the `Window` node.