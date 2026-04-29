---
title: Build Custom Cursor
tag: Unreal
---
# Build Custom Cursor
First add the cursor image into your project. Set it's `Image Compression Sorting` to `Interface2D`. Then create a material and set `Material Domain` to `User Interface`. Now you need to create a `Widget Blueprint`. Add an `Image` from the palette and set position and scale. Then assign for the `Brush` parameter of the `Image` your previously created material.

If you want to you can add an animation to the image. Go to the animation tab. Add the image to the liner and add different tracks for for example opacity and transform. With `PlayAnimationForward` you can play the animation. 
In the widget blueprint we need to check if the event is triggered that should start the animation. For example trigger animation when mouse is clicked.
In the event graph `Get Player Controller`, connect it to `IsKeyDown`. This is not ultra efficient but works.

To apply your widget, go to the project settings look for software cursor, add new with default and assign widget blueprint.
