---
title: Skia Basics
comments: true
tags:
 - VVVV
 - VVVV/Skia

---
# Skia Basics


## Performance
When you draw with Skia a common way is to only update the drawing when certain values change. So we put the drawing inside a `Cache` Region.



## Interactions

### Keyboard
`KeyBang` returns true bang when key is pushed down.

`KeyPressed` detects if key is hold down

`KeyToggle` toggles between true and false every time a key gets hit.

### Touch
With a `Touch` node we can detect touches on a device. 