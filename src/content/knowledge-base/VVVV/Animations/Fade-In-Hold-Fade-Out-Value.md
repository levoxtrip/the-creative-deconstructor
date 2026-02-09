---
title: Fade In, Hold, Fade Out Value
comments: true
tags:
 - VVVV
 - VVVV/Animations

---
![Fade In, Hold, Fade Out Value Image](/img/vvvv/FilterInHoldFilterOut.png)

# Fade In, Hold, Fade Out Value
To create an animation behavior for objects, where a trigger smoothly moves a value to a target value, holds that value for a time and then smoothly moves the value back, we use a `MonoFlop` and we add the *HoldTime* with the *Filter In* time together so the `MonoFlop` outputs *True* or *1.0* for the holding time plus the filter in time. The output signal of the `MonoFlop` triggers the `Switch` to change the *Filter Time* in the `Filter` node. 

[Download Example File](/files/vvvv/FilterInHoldFilterOut.vl)