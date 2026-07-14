---
title: Performance Best Practices
tag: Unreal
---
# Performance Best Practices

## Lights
Make your lights static when they aren't moved in the scene. *Movable* lights are the most expensive ones.

## Blueprints
You don't want to call your pure functions every time. Call it once and store it in a variable and assign it.

 To make your code more performant it can be useful to cache certain functions calls into a variable when you use it multiple times in your code. When you do that make sure the variable is valid by duplicating, right click convert to validate get.




