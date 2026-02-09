---
title: Toggle ImGUI Window On Double Click
comments: true
tags:
 - VVVV
 - VVVV/UI
 - VVVV/ImGUI

---
![ImGUI Region](/img/vvvv/ToggleImGUIWindowDoubleClick.png)

# Toggle ImGUI Window On Double Click

So to be able to hide and show a `Window` in ImGUI we can use `IsMouseDoubleClicked` with `Toggle` and set it as the input for `Visible`. Every time a double click happens the window gets shown or hidden.