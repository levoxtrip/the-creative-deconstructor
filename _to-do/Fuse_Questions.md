Stage 1: Setup & Foundations (1–5)

What is Fuse and how do I install it in vvvv gamma?
What are GPU shaders and why does Fuse use them for particle systems?
What is the basic Fuse patching workflow — how does it differ from regular vvvv patching?
What is a compute shader and what role does it play in Fuse?
What is a structured buffer and why is it the backbone of GPU particle systems?

Stage 2: Minimal Particle System (6–12)
6. What is the minimum data each particle needs (position, velocity, age, lifetime)?
7. How do I define a particle struct in Fuse?
8. How do I create an emitter that writes new particles into a buffer?
9. How do I make particles move by applying velocity to position each frame?
10. How do I track particle age and kill/recycle particles when their lifetime expires?
11. How does the dead/alive index pool work for particle recycling?
12. How do I control the emission rate (particles per frame vs. per second)?
Stage 3: Basic Rendering (13–17)
13. How do I render particles as simple points in Stride?
14. How do I render particles as camera-facing quads (billboards)?
15. How do I pass particle data from the compute shader to the draw shader?
16. How do I color particles based on their age or velocity?
17. How do I change particle size over lifetime using a ramp or curve?
Stage 4: Forces & Motion (18–24)
18. How do I apply gravity or a constant directional force?
19. How do I add drag/friction so particles slow down over time?
20. How do I apply noise-based forces (curl noise, Perlin turbulence)?
21. How do I create attractor and repulsor point forces?
22. How do I create a vortex or rotational force field?
23. How do I combine multiple forces and what order should they be applied?
24. What is deltaTime and why is it critical for frame-rate-independent simulation?
Stage 5: Emission Control (25–29)
25. How do I randomize initial particle properties (direction, speed, color, size)?
26. How do I use hash functions and seed values for GPU-side randomness?
27. How do I emit particles from a point, line, circle, or sphere?
28. How do I emit particles from a mesh surface or SDF volume?
29. How do I emit particles in bursts vs. continuous streams?
Stage 6: Collisions & Constraints (30–34)
30. What are Signed Distance Fields (SDFs) and how does Fuse use them?
31. How do I make particles collide with a ground plane?
32. How do I make particles collide with SDF shapes (sphere, box, custom)?
33. How do I reflect or dampen velocity on collision?
34. How do I constrain particles inside or outside a boundary volume?
Stage 7: Advanced Behaviors (35–38)
35. How do I make particles interact with each other (neighbor search)?
36. How do I implement simple flocking (separation, alignment, cohesion)?
37. How do I spawn secondary particles from existing ones (sub-emitters / trails)?
38. How do I sort particles back-to-front for proper alpha blending?
Stage 8: Visual Polish & Integration (39–40)
39. How do I use textures, sprite sheets, or soft particle blending for better visuals?
40. How do I connect Fuse particle output to Stride's rendering pipeline for lighting, shadows, and post-processing?
This covers the full arc from "what is this?" to a production-ready particle system. Want me to start building answers for any stage?