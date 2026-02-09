---
title: Interactions
comments: true
tags:
  - VVVV
  - VVVV/Interaction
---
# Interactions

## Mouse
If you want to use the mouse in your patch the *context* output of the `Mouse` node need to be provided to the `Renderer` by adding it in a `Group`

![Mouse Pos to Circle](/img/vvvv/MousePosToCircle.png)

The *Wheel Data* is the value of the *mouse wheel*.

### Store value in Spread when mouse is clicked
![alt text](/img/vvvv/StoreValuesWithQueue.png)
With a `Queue` and binding its *Insert* input with a mouse click we can store the values of the mouse every time the mouse is clicked similar to a drawing app.

### Toggle swap values on every mouse click
![ToggleSwapMouseClick](/img/vvvv/ToggleSwapValuesMouseClick.png)

### Calculate delta mouse movement

![Calculate delta mouse movement](/img/vvvv/CalculateDeltaMouseMovement.png)

### Calculate distance mouse position between frames
![alt text](/img/vvvv/CalculateDistanceMousePos.png)

### Detect if mouse is in circle in skia
![alt text](/img/vvvv/DetectMouseCircleSKia.png)

==
### Detect if mouse is hit
spread of elements
If mouse hit the object do not keep it
togedge -> if -> for each -> hittest -> not keep
==


### Smooth transition of value when something is clicked
![Smooth Transition When clicked](/img/vvvv/SmoothTransitionWhenSomethingClicked.png)

### Stride
The `Mouse` node in *Stride* is not 100% the same like in Skia

![Mouse Stride Skia](/img/vvvv/MouseStrideSkia.png)

## Keyboard
![Keyboard Interaction](/img/vvvv/BasicKeyBoardInteraction.png)

To check if a certain key got pushed we need to connect a `Keyboard` with `KeyMatch` and set the *KeyName(String)* input for the key we want to track. We also need to connect the `Keyboard` Node to a `Renderer`. Don't forget to set `Skia` or `Stride` dependency.

Another way is to connect `KeyPressed` node with the `Keyboard` and select the *key* in the IOBox.

With a `KeyBang` we get a boolean `Bang` signal when a specific key gut pushed. This can be useful for *Counter*

![Count On Keybang](/img/vvvv/CountOnKeyBang.png)

`KeyToggle` toggles between *true and false* every time the assigned key gets pressed.

### Get Typed Text from keyboard

The `TypeWriter` node from *Skia* allows to get the typed text from the keyboard, when the renderer is focused.


### Index Value From Keys
![Index Values from Keys](/img/vvvv/IndexValueFromKeys.png)
`MultiFlop` node allows us to convert a certain key into an index value.