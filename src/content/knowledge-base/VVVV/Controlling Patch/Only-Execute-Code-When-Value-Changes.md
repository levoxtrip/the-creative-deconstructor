---
title: Only Execute Code When Value Changed
description: How to only execute code when a value changes
thumbnail_text: Learn how to only execute code when a value changes
---

![Invoke Delegate Img](/img/VVVV/OnlyExecuteWhenValueChanged.png)
# Only Execute Code When Value Changed
When we want to execute something only when a certain value changes we can use a `Cache(Region)`. It holds the value from inside the region until an input has changed. Then the logic inside the `Cache` gets reevaluated with the new input value.

