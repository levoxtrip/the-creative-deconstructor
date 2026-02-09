---
title: ForEach
comments: true
tags:
 - VVVV
 - VVVV/Collections



---
<!-- ![Repeating Sequence Numbers](/img/vvvv/RepeatSequenceNumbers.png) -->

# ForEach

![Naming Splicer Inputs/Outputs](/img/vvvv/KeepInForEach.png)
## Defining which elements to keep
The `Keep` node in the `ForEach` region allows us to select which elements we want to stay and which to ignore. The output of the iteration gets plugged into the `Keep` and we pass the *Splicer Input* into the *Splicer Output*.

To remove elements when out of the spread when certain state is true.
![Remove Elements when state true img](/img/vvvv/RemoveWhenTrue.png)


## Naming Splicer 
![Naming Splicer Inputs/Outputs](/img/vvvv/NamingSplicerInputs.png)

We can name the input & output splicers of the `ForEach` by double clicking the rectangle right from the splicer. Naming inputs and outputs improves readability and understanding.

