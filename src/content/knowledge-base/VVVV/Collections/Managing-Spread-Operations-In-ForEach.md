---
title: Managing Spread Operations In ForEach
comments: true
tags:
 - VVVV
 - VVVV/Collections

---
![Managing Spread Operations In ForEach Image](/img/vvvv/ManagingSpreadOperationsInForEach.png)

# Managing Spread Operations In ForEach

If we want to execute code inside a `ForEach` Region that needs the *Spread itself* as an input to manipulate the data we use the `Accumulator` instead of the `Splicer` of the for each.
