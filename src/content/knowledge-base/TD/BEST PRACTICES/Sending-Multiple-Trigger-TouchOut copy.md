---
title: Sending Multiple Trigger For TouchOut 
tag: TD
---
# Sending Multiple Trigger For TouchOut 
In performance intense projects it can happen that your trigger/pulse signal is gettings lost during framedrops. This can cause issue if you for example want to send a trigger signal via `TouchOut` into another TD patch.
What you can do is send two trigger signals via `TouchOut` then connect the two `TouchIn` in the other chop with a `LogicCHOP` and set its `Combine CHOPs` to `OR`. And this triggers a `TriggerCHOP` which has a `Retrigger Delay` so you assure that only one trigger happens, even if both initial triggers came trough.

![Sending Multiple Trigger For TouchOut Img](/img/TD/SendingMultipleTriggerTouchOut.png)