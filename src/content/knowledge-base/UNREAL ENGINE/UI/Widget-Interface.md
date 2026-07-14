---
title: Widget Interface
tag: UNREAL
---
# Widget Interface
To put things as a visual interface on the screen you have to use `Widget Blueprint`. Widgets are HUD - Heads Up Display. `User Widget` is the class you derive from your widget blueprint.
`WBP_` prefix
The widget blueprint has a design tab for the visual parts and a graph tab to implement functionality.
`Image Widget` is used to implement images onto your HUd. But it doesn't allow to have other things tack on top of it.
`Overlay` allows to have things stack on top of it. 
Then you can drag in an `Image` into the `Overlay`. At the `Brush` parameter in the details you assign your image. 

To add HUD to the viewport you use `Create Widget` in a blueprint and then reference your `Widget Blueprint`. Then you use the return of it and create a `Add To Viewport` node.
