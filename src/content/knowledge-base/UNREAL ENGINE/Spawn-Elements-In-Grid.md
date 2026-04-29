---
title: Spawn Elements In Grid
tag: Unreal
---
# Spawn Elements In Grid
Create a blueprint and on `BeginPlay` make two `For Loop`. You can add also variables for `max row`, `max column` and `size`. For the `last index` input we need to take the max variables and subtract 1 from it because these loops start counting from 0. Inside the loop you take the size of the cube and multiply it with the index of the current loop. These values then get converted with a `Make Transform` and then be used for a `Spawn Actor From Class`. Select the class of your object that you want to use. To make sure that the objects are not colliding on start set `collision overwrite` to `always spawn ignore collision`.

Now the elements get spawn from a 0,0 center of the actor. But if you want to spawn them also in the negative direction from the center and have the grid centered you need to divide last index value by 2 and then subtract it from the index of the loop.

![Spawn Elements On Grid Img](/img/Unreal/SpawnElementsGrid.png)
