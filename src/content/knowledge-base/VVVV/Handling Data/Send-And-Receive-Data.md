---
title: Send and Receive Data
comments: true
tags:
 - VVVV
 - VVVV/DataAndValues

---
![Send and Receive Img](/img/vvvv/SendReceiveValues.png)
# Send and Receive Data
If you want to pass values inside your patch without having to connect them via links or you want to have a value inside a `Process` node from outside without needing to add inputs to the node etc. you can use `Send(Global)` node and `Receive(Global)`. Just choose own channel name for each value. The good thing is that this has no frame delay between *sending and receiving*.