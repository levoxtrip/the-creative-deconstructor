---
title: Full TOP image to CHOP values
comments: true
tags:
 - TD/CHOP
 - TD/TOP
 - TD/Conversion
 - TouchDesigner
---
![Full Image Top to Chop](/img/TD/FullImageTopToChop.png)
# Full TOP image to CHOP values
When you want to convert the full image of a TOP into CHOP values under *crop* you select `Full Image` and then combine all the channels with a `ShuffleCHOP` where you select `Sequence Channels by Name`. 

![Get sample 30 from noise](/img/TD/FullImageTopToChop2.png)

To have performance in mind it can make sense to reduce the resolution of the top before.

[Download](/files/TD/FullImageTOPToCHOP.tox)    

