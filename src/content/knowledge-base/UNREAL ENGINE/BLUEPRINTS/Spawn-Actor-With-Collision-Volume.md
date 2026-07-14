---
title: Spawn Actor With Collision Volume
tag:UNREAL
---
# Spawn Actor With Collision Volume
You can use a `Collision Volume` to trigger the spawning of enemeies. When the player moves through it the enemies get spawned. You use a `Box Collision` for that. When you use `Overlay All Dynamic`, make sure it also overlaps your custom collision presets otherwise it just blocks. 

To spawn elements at a specific point, you can have an array of locations by using `Target Point` class. It is designed to be a target point in space. 

If you only want to spawn the bots one time you can destroy the spawner after it spawned all enemies.

