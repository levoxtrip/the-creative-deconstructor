---
title: ImGUI Basics
description: 
tag: TD
---
<!-- ![Common Tab COMP img](/img/TD/CommonTabCOMP.png) -->

# ImGUI Basics
To use any of the *Imgui* nodes and have them showed in your window you need a `ImGui Region`. And it needs to be connected to ether zur Skia `Renderer` or your Stride `RootScene`.

By default ImGui places everthing vertically. You order your UI elements by connectem them top to bottom with their `Context` parameters.
If you want to play things on the same line you can use `SameLine`

With `SetNextItemWidth` you can set the width of your widget

`ColorEdit` is UI element to set a color. 
If you don't want to see the RGB values and just the color box you can set `NoInputs` Flag of the `ColorEdit`

To find all the ImGui widget you go into the nodebrowser ->ImGui ->Widgets

## ImGui Stride
If you want to use Imgui with Stride you need to activate the `Vl.ImGUI.Stride` package. 
You then can connect the output of the `ImGui Region` into a `RenderEntity` from Stride.

Set `RenderStage` from `RenderEntity` to *AfterScene* so the UI is on top of the Stride Scene Renderering and any possible post processing effects.

### Avoid Rotation Of Camera When interacting with UI
To don't have any interaction with the Stride scene while you interact with the UI elements you want to only enable the camera of the when you dont interact with any UI element. 
For that put a `IsAnyItemHovered` into the Imgui region. You then use the bool output of it, connect it to a `NOT` and then use that to set *enabled*  of the camera of your scene. You also have to ask if `IsMouseReleased` and then set the flip input of an `FlipFlop` node with the `IsAnyItemHovered` and the flop input with the `IsMouseReleased`.

## ImGui Skia

## Styling
With `SetFrameStyle` you can change the size for your widget

Change the Size of the Knob of a slider
With `SetGrabStyle` you can change the size of the knob


## Change Font of Widget
You need to use `FontConfig` to set the font and plug it via a `Cons` into the `ImGui` region. You then reference in your `Text` widget with `SetTextStyle` the name for the font that you set in your `FontConfig`

## Check If Widget is hovered
We can use the `IsItemHovered` node to check if we hover the widget with for example our mouse.

## Custom ImGUI Button
To create a custom *ImGui* button we basically draw a default button, draw our custom image above by playing the Cursor.

## Create Own Window
With the `Window` region you create your own windows.

## State Changes
Create a `Record`, which allows us to join and split data. Call it `State`