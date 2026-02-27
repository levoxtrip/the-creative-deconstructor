# Combining Shapes
When we draw shapes with SDFs it returns a single number, the distance from the currently calculated point towards the edge of the shape.
When you want to combine multiple shapes you have multiple numbers from the SDFs which need to combine be combined into one and rendered as one.
We then need to ask ourself questions like:
- Do the shapes appear separately?
- Do they merge together?
- Does one cut out or mask the other?

## Union - Combining Shapes
When we combine shapes we create a union out of the single shapes into one. You then are inside the result if you're inside either shape.
```
float circle = length(uv) -0.3;
float square = max(abs(uv.x),abs(uv.y))-0.2;
float combined = min(circle,square);
```
`min()` creates a union of the two shapes because it returns the smaller number of the two inputs so if you are either in one or the other shape you get a "inside the union" result back.

## Intersection - Keeping Only the Overlap
In an intersection we only want to draw where both shapes overlap. You are inside the *intersection* only when you are inside both shapes.
```
float combined = max(circle,square)
To be inside both shapes, both distances must be negative.

If you're inside the circle but outside the square:
 circle = -0.2 (inside)
 square = 0.2 (outside)
 max(-0.2,0.2) = 0.2 -> positive -> outside the intersection

 circle = -0.1(inside)
 square = -0.2(inside)
 max(-0.1,0.2)
```
`max()` works because it always returns the bigger number, if the bigger number is negative than inside is true for both shapes, if it is positive than it is at least outside for one shape.

## Subtraction - Cutting Holes
When we subtract one shape of the the what we do is *show shape A but cutout shape B out of it.* You are insite the result if you are in shape A but not inside shape B.
`float combined = max(circle,-square);`
By negating an SDF we flip it's inside and outside. So where `square` would be negative(inside) `-square` returns positive and the other way around. So `-square` represents everything exept the square. It returns true if you are not in the shape.
This makes `max(circle,-square)` the intersection of:
- inside the circle
- everything exept the square
-> the part part of the circle that doesn't overlap with the square.
```
Point inside circle, outside square (kept):
	circle = -0.2(inside circle)
	square = 0.1 (outside square)
	-square = -0.1
	max(-0.2,-0.1) = -0.1 -> inside combined shape

Point inside circle, inside square (cut out):
  circle = -0.15 (inside circle)
  square = -0.1 (inside square)
  -square = +0.1
  max(-0.15, +0.1) = +0.1 → outside combined shape 
```

These operations now allow us to combine different shapes to create more complex shapes like a pill shape(union), a crescent moon(subtraction), a donut(subtraction).
