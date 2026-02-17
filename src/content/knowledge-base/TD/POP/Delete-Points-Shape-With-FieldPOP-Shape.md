---
title: Delete Points Shape With FieldPOP Shape
tag: POP
---
# Delete Points Shape With FieldPOP Shape
![Delete Points Shape With FieldPOP Shape Img](/img/TD/DeletePointsShapeWithFieldPOPShape.png)

You can use a `FieldPOP` do define which points of our source data should deleted or not. For that we decide which *shape* determines if points should be deleted or not. The `FieldPOP` returns 0-1 values if the points from our source data are inside the field shape or not. We then use that value in the `DeletePOP`. We set in it's attribute tab the `Weight` attribute and use for example `< 0.01` as the `Function`. This deletes all points outside the field; all points with a weight value smaller than 0.01. Or if you only want to keep the points outside that field you can use `> 0.001`. We also can use the `Invert` instead.

