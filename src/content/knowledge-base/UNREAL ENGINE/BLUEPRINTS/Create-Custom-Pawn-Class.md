---
title: Create Custom Pawn Class
tag: Unreal
---
# Create Custom Pawn Class
Create a `Pawn` blueprint. Assign it as the `Default Pawn` in the `Game Mode`.

To change the default view of the pawn you need to add a `Camera` to specify the point of view. We attach the camera to a `Spring Arm` and drag it onto it so it becomes a child of the arm. Set the distance of the camera towards the pawn mesh under `Target Arm Length`. The spring arm shrinks down and moves closer to the mesh if the camera is close to a collision object.
