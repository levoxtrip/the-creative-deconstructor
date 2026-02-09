---
title: Animate Through Graphs of Data Points
comments: true
tags:
 - TD/CHOPS
 - TouchDesigner
 - DataViz
---
![Animate Through Data](/img/TD/AnimateThroughData0.png)

# Animate Through Graphs of Data Points

Animating through graphs of datapoints in TouchDesigner allows us to visualize complex data in a dynamic and interactive way, helping to uncover patterns, trends, and insights that static representations may not reveal.
Steps to follow:
- Add Table data and convert to CHOP Data:

![Animate Through Data 1](/img/TD/AnimateThroughData1.png)

- Add `ConstantCHOP` and `SpeedCHOP` to control how was to go through Data.

![Animate Through Data 2](/img/TD/AnimateThroughData2.png)

- Connect `SpeedCHOP` to `LookupCHOP` and limit speed to loop through data

![Animate Through Data 3](/img/TD/AnimateThroughData2.png)

[DownloadFile](/files/TD/animateThroughData.tox)