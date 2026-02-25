---
title: Rotate All Instances In CopyPOP
tag: POP
---
# Rotate All Instances In CopyPOP
![Bend Shape With Weights Img](/img/TD/RotateAllInstancesInCopyPOP.png)
We can use a `PatternPOP` to set the rotation for all the instances in a `CopyPOP`. We first feed the `Pattern` some reference data. We use the `P` attribute as a reference and output a `Rot` attribute. You then can set ether a one or three dimentional parameter depending on if you want to rotate each direction individually or all the same. Set for the phase the reference `absTime.seconds*0.2` for continuous rotation and remap from 0 to 1 to 0 to 360 degrees. In the `CopyPOP` we need to set `Rot` as the `Template Rotate` attribute in the `Template` tab.

[Download Example here](/files/TD/RotateInstancesCopyPOP.tox)