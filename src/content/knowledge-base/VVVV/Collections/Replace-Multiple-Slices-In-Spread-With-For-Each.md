---
title: Replace Multiple Slices in Spread With For Each
comments: true
tags:
 - VVVV
 - VVVV/Collections

---
![Replace Multiple Slices in Spread With For Each Image](/img/vvvv/ReplaceMultipleSlicesSpreadForEach.png)

# Replace Multiple Slices in Spread With For Each

If we want to replace not just one single slice but multiple we can use a `ForEach` region with a `SetSlice` inside. We then create two spreads for the new values that we want to set and at which index we want to set these.

[Download Example File](/files/vvvv/ReplaceMultipleSlicesSpreadForEach.vl)