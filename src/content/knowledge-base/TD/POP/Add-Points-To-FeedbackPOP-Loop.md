---
title:Add Points To FeedbackPOP Loop
tag:TD
---
# Add Points To FeedbackPOP Loop
To add every time the feedback runs a new point you can add a `MergePOP` after the `FeedbackPOP`. 
to limit the amount of points created, create an `Index` attribute, post add 1 to it in a `MathPOP` and then use a `DeletePOP` with `index > amountPoints`. 
You also can use the index to create an age value that you can use to scale down older particles.
