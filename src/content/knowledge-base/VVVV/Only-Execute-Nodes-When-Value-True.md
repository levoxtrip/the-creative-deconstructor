---
title: Only Execute Nodes When Value True
comments: true
tags:
  - VVVV
  - VVVV/DataFlow
---
![OnlyExecuteNodeWhenTrueValue](/img/vvvv/OnlyExecuteNodeWhenTrueValue.png)
# Only Execute Nodes When Value True
We can use a `Cache` node and place some nodes inside. The `Cache` only executes when an input on the top left corner is true.

In this example the `Stopwatch` only counts up when the `Toggle` is true.


