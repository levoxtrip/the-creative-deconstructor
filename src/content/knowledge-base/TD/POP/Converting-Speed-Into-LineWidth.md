---
title: Converting Speed Into LineWidth
tag: POP
---
# Converting Speed Into LineWidth
![Bend Shape With Weights Img](/img/TD/ConvertingSpeedIntoLineWidth.png)
If you want to create an effect that is similar to your hand movement with a brush, where the faster you move your hand the thinner the stroke becomes. We can create that by measuring the distance between the points from one frame to another using a `TrailPOP` and calculate the movement speed with a `LineMetricsPOP`. We output `Distance To Next` as an attribute and remap that distance between the points inside a `MathPOP` to the `LineWidth` attribute. For further fine tuning we use a `LimitPOP` to define the range for the width.

[Download Example here](/files/TD/ConvertingSpeedIntoLineWidth.tox)