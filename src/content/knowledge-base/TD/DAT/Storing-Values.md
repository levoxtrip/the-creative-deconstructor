---
title: Storing Values
comments: true
tags:
 - TD/DAT
 - TD/Storing
 - TouchDesigner
---

# Storing Values

We can store values in TouchDesigner so we can retrieve them when we need them. We can use Python for that.

``` py
//Storing values
value = 5
me.parent().store('valName',value)

//To retrieve Value
grab = me.fetch('valName')
print(grab)
```

With an `ExamineDAT` you can check which values got stored. 
If you want to you also can assign an operator value with
`.store('key',op('slider1')[0])`

![Storing Values](/img/TD/StoreValues.png)