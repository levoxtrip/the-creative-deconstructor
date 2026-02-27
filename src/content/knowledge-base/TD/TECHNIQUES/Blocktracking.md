---
title: Blobtracking
tags: TD
---
![Change Seed With Clock](/img/TD/BlockTrackingDataInfoCHOP.png)
# Blocktracking
When you want to do block tracking with for example a Lidar sensor in TouchDesigner and you want the blob information in CHOP data, you can use the `blobtrackTOP` and connect an `InfoCHOP` to the operator where you set the `Scope` to all the channels that start with `blob*`. This allows you to execute some channel. For example if a blob is in a certain area you can trigger an event.


