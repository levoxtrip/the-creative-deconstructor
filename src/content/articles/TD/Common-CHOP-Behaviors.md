# Common CHOP behaviors

## Increasing Value Every Frame
If we want to create a behavior where every frame a value increases by a specific value we can use `Constant` for setting the amount that we want to add and plug it into a `SpeedCHOP`. When we set `Speed Per Sample` we actually add the number from the `Constant` every second.
![Add Value Every Frame Img](/img/TD/AddValueEveryFrame.png)
