---
title: Pixel Color As Trigger
tags:
 - TD
---
![Change Seed With Clock](/img/TD/Pixel-Color-AsTrigger.png)
# Pixel Color As Trigger
Sometimes when your performance is not consistent and your patch experiences some frame drops you can loose CHOPs trigger events due to the frame drops. Especially when you send information between two instances of TouchDesigner via for example `TouchIn/Out`. A different way to create triggers is to use a top and switch it from black to white and from white to black to use these as triggers. You then can convert the pixel color back to chop information.
