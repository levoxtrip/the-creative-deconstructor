---
title: Create Grid With For-Each Loops
comments: true
tags:
 - VVVV
 - VVVV/Collections
---
![Create Grid With For-Each Loops Img](/img/vvvv/CreateGridWithForEachLoops.png)

# Create Grid With For-Each Loops
If we want to create a grid structure with spreads as the source for the position we can layer two `ForEach` regions and plug each spread source into the *Splicer* bar at the top of the `ForEach` region. 
The difference to a `GridSpread` is that we are more flexible to change maybe one spread type to `RandomSpread` and leave the other axis of the grid as it is.