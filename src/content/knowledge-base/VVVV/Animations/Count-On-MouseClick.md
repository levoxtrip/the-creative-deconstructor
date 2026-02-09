---
title: Count On MouseClick
comments: true
tags:
  - VVVV
---
![Count On MouseClick](/img/vvvv/CountMouseClick.png)

# Count On MouseClick

To create a counter on mouse click we connect `Mouse` node with a `TogEdge` to make sure that it's one mouse click per frame even if the mouse might be hold down. Otherwise counter increases value per frame while the button is hold down.