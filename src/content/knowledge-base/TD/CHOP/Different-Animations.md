---
title: Different Animations
comments: true
tags:
 - TD/CHOPS
 - TouchDesigner
---
# Different Animations

## Animate from 0 to end state and hold value

![Animate from 0 to end state and hold value Img](/img/TD/AnimateFrom0ToEndStateAndHold.png)


## Animate PatternCHOP
![Animate PatternCHOP Img](/img/TD/AnimatePatternCHOP.png)
Simple way to animate a `PatternCHOP` is to set the `Length` to `1` and add `absTime.seconds` to `Phase`

## Animate PatternCHOP
![Animate PatternCHOP Img](/img/TD/SmoothAnimationBetweenValueWithLag.png)
To animate between some integer values we can add a `LagCHOP`.

