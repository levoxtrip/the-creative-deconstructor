# Learning Particle Systems with Fuse in vvvv gamma
## A 40-Question Beginner's Guide

---

## Stage 1: Setup & Foundations (Questions 1–5)

---

### Q1: What is Fuse and how do I install it in vvvv gamma?

**Fuse** (VL.Fuse) is an open-source library for visually programming on the GPU, built for vvvv gamma. It lets you create GPU-accelerated graphics — materials, particles, distance fields, procedural geometry, compute shaders — all by patching nodes, without writing shader code by hand.

Fuse follows vvvv gamma's "always runtime" model: there is no compile step. Everything you patch runs immediately and you see results in real time. It uses the **Stride 3D Engine** under the hood, giving you access to PBR materials, dynamic lighting, post-processing, and more.

**To install:**

1. Download and install **vvvv gamma** from [visualprogramming.net](https://visualprogramming.net)
2. Open vvvv gamma
3. Open the command line (Quad menu → Commandline) and type:
   - **Stable version:** `nuget install VL.Fuse`
   - **Preview version:** `nuget install VL.Fuse -pre`
4. After installation, press **F1** to open the Help Browser and search for "Fuse" — you'll find explanations, howtos, and example patches to get started.

**Note:** Fuse requires a Windows machine with a modern NVIDIA or AMD GPU. vvvv gamma itself is Windows-only.

---

### Q2: What are GPU shaders and why does Fuse use them for particle systems?

A **shader** is a small program that runs on your graphics card (GPU) instead of your CPU. GPUs are massively parallel — a modern GPU has thousands of cores that can all run simultaneously. This makes them ideal for particle systems, where you might need to update millions of particles every frame.

There are several types of shaders:

- **Vertex Shader:** Transforms the positions of vertices (points of geometry).
- **Pixel/Fragment Shader:** Determines the color of each pixel on screen.
- **Geometry Shader:** Can generate new geometry from existing primitives.
- **Compute Shader:** A general-purpose shader that can read/write data freely — this is the workhorse for particle simulation.

**Why Fuse uses shaders for particles:**

On the CPU, updating 1 million particles means looping through them one by one (or with limited threading). On the GPU, you can update all 1 million particles *simultaneously* — each GPU thread handles one particle. This is why GPU particle systems can handle orders of magnitude more particles than CPU-based ones.

Fuse lets you build these GPU programs visually by connecting nodes, so you get GPU performance without writing HLSL/GLSL code.

---

### Q3: What is the basic Fuse patching workflow — how does it differ from regular vvvv patching?

In regular vvvv gamma patching, your nodes execute on the **CPU** and process data frame by frame in a sequential manner. You work with spreads (arrays), objects, and the standard .NET ecosystem.

In Fuse, you're building a **shader graph**. The key differences:

- **You're describing a GPU program, not running CPU code.** When you connect Fuse nodes, you're assembling shader source code behind the scenes. The actual execution happens on the GPU.
- **Data types are GPU types.** You work with `float`, `float2`, `float3`, `float4`, `int`, etc. — not vvvv's `Vector3` or `float32`.
- **The Fuse "pipeline" matters.** You typically build a chain: define your data → compute/simulate → draw/render. Each stage maps to a shader stage.
- **No per-element looping.** Instead of a ForEach loop, every element (pixel, particle, vertex) runs its own copy of your shader graph in parallel.

**Practical workflow:**
1. Open the Help Browser (F1) and explore Fuse examples
2. Use the **Fuse tooltip/viewer** — hover over connections to see intermediate GPU values
3. Start with a simple shader (e.g., color a quad), then build up to compute shaders and particles
4. Fuse nodes are typically found under the `Fuse` category in the node browser

---

### Q4: What is a compute shader and what role does it play in Fuse?

A **compute shader** is a GPU program that isn't tied to rendering geometry or pixels. It's a general-purpose program that can read from and write to buffers of data. Think of it as "run this function on every element in my array, all at once, on the GPU."

In the context of Fuse particle systems, compute shaders handle:

- **Emission:** Writing new particle data into the buffer when particles are born
- **Simulation:** Updating every particle's position, velocity, age, and other properties each frame
- **Recycling:** Marking dead particles and making their slots available for reuse
- **Forces:** Applying gravity, noise, attractors, collisions, etc.

The compute shader is dispatched with a certain number of **thread groups**, each containing a fixed number of **threads**. Each thread typically processes one particle. For example, if you have 65,536 particles and your thread group size is 256, you dispatch 256 thread groups — and all 65,536 particles get updated in parallel.

In Fuse, you set up a compute shader stage using the **ComputeStage** or **Simulation** nodes, connect your particle logic, and Fuse handles the dispatch for you.

---

### Q5: What is a structured buffer and why is it the backbone of GPU particle systems?

A **Structured Buffer** (also called an SSBO — Shader Storage Buffer Object) is a chunk of GPU memory that holds an array of custom data structures. Unlike a simple array of floats, a structured buffer can store complex types — for example, a "Particle" struct containing position, velocity, color, age, lifetime, and size.

**Why it's essential for particles:**

- **All particle data lives on the GPU.** There's no round-trip to CPU memory every frame.
- **Both compute and draw shaders can access it.** The compute shader writes updated particle data; the vertex/pixel shader reads it for rendering.
- **Random access.** Any thread can read or write any element by index, unlike append/consume buffers which are sequential.

In Fuse, you define a struct (your particle data layout), create a structured buffer of that type, and then all your simulation and rendering nodes reference this buffer. The buffer size determines your maximum particle count.

**Typical particle struct example (conceptual):**
```
struct Particle {
    float3 Position;
    float3 Velocity;
    float  Age;
    float  Lifetime;
    float4 Color;
    float  Size;
    int    Alive;  // 1 = alive, 0 = dead
};
```

---

## Stage 2: Minimal Particle System (Questions 6–12)

---

### Q6: What is the minimum data each particle needs (position, velocity, age, lifetime)?

At minimum, each particle needs:

| Property | Type | Purpose |
|----------|------|---------|
| **Position** | float3 | Where the particle is in 3D space |
| **Velocity** | float3 | How fast and in what direction it's moving |
| **Age** | float | How long this particle has been alive (in seconds) |
| **Lifetime** | float | How long this particle should live before dying |

With just these four properties, you can create a basic particle system that emits, moves, and dies.

**Optional but common additions:**
- **Color** (float4) — for visual variety
- **Size** (float) — for varying particle sizes
- **Alive/Dead flag** (int or bool) — to track which buffer slots are available
- **Mass** (float) — for physics-based forces
- **Random seed** (uint) — for per-particle randomness

Start minimal. You can always add more properties later as your system grows in complexity.

---

### Q7: How do I define a particle struct in Fuse?

In Fuse, you define a custom GPU data structure using the **Struct** nodes. This is how you tell the GPU what data each particle holds.

**Steps:**

1. Create a new **Struct Definition** — this defines the layout of your particle data
2. Add fields to the struct for each property you need (Position as `float3`, Velocity as `float3`, Age as `float`, Lifetime as `float`, etc.)
3. The struct definition is then used when creating your structured buffer — the buffer is typed to hold an array of this struct

In Fuse's node-based approach, you don't write the struct in code. Instead, you assemble it visually:

- Use nodes like `Declare` or `Member` to define each field
- Connect them into a struct definition node
- This struct becomes the data type for your buffer

The important thing is that this struct definition must be **consistent** everywhere — the compute shader that writes particles and the draw shader that reads them must agree on the same struct layout.

**Tip:** Keep your struct as small as possible. Every extra field multiplies by your particle count. For 1 million particles, adding a single `float4` costs 16 MB of GPU memory.

---

### Q8: How do I create an emitter that writes new particles into a buffer?

Emission is the process of "birthing" new particles by writing initial values into available (dead) slots in your particle buffer. In Fuse, this is handled through an **Emit** stage within the particle system.

**The basic emission flow:**

1. **Determine how many particles to emit this frame** (based on your emission rate)
2. **Find available slots** — these are indices of dead/recycled particles in the buffer
3. **Write initial values** to those slots: set position, give a random velocity, set age to 0, set lifetime, mark as alive

In Fuse specifically:

- The **Emitter** node handles the logic of finding dead slots and writing new particle data
- You connect it to your structured buffer
- You define what the initial values should be (position, velocity, etc.)
- The emission amount and probability can be controlled per frame

**Key concept — the dead list / recycler:**
You don't just append particles to the end of the buffer. Instead, the system maintains a list of "dead" indices (slots where particles have expired). When emitting, you pop indices from this dead list and write new particles there. This keeps the buffer compact and avoids fragmentation.

In Fuse, the **Recycler** node manages this dead/alive bookkeeping for you.

---

### Q9: How do I make particles move by applying velocity to position each frame?

This is the most fundamental simulation step — **Euler integration**. Each frame, for every alive particle, you do:

```
Position = Position + Velocity * deltaTime
```

That's it. Each particle's position moves in the direction and speed defined by its velocity vector, scaled by how much time has passed since the last frame.

**In Fuse:**

1. In your **Simulation** stage (compute shader), you read each particle's current position and velocity from the buffer
2. You compute the new position: `newPos = oldPos + velocity * dt`
3. You write the new position back to the buffer

Fuse provides a **Simulation** node where you define your per-particle update logic. The node automatically dispatches a compute shader thread for each particle.

**Why deltaTime matters:**
If you just add velocity directly (without multiplying by deltaTime), your simulation speed depends on frame rate. At 60 FPS particles move twice as fast as at 30 FPS. Multiplying by `deltaTime` (time since last frame, typically ~0.016s at 60 FPS) makes movement frame-rate independent.

---

### Q10: How do I track particle age and kill/recycle particles when their lifetime expires?

Each frame, in addition to updating position, you also update the particle's age:

```
Age = Age + deltaTime
```

Then you check:

```
if (Age >= Lifetime) → mark particle as Dead
```

**In Fuse, this lifecycle management involves:**

1. **Age increment:** In the simulation stage, add `deltaTime` to each particle's `Age` field
2. **Death check:** Compare `Age` against `Lifetime`. If the particle has exceeded its lifetime, mark it as dead
3. **Recycling:** When a particle dies, its buffer index is pushed onto the **dead list** (managed by the Recycler). This slot is now available for the emitter to reuse

**The alive/dead flag:**
You can use an integer field (1 = alive, 0 = dead) or simply check `Age >= Lifetime` wherever needed. Dead particles should be skipped during rendering and force calculations.

**Tip:** In the simulation shader, wrap your entire update logic in a check:
```
if (particle.Alive) {
    // update position, apply forces, age, etc.
    if (particle.Age >= particle.Lifetime) {
        particle.Alive = 0;
        // push index to dead list
    }
}
```

This prevents dead particles from continuing to move or consume processing time.

---

### Q11: How does the dead/alive index pool work for particle recycling?

This is one of the trickiest parts of GPU particle systems, and Fuse handles most of it for you through the **Recycler** node.

**The concept:**

Your particle buffer has a fixed size (e.g., 100,000 slots). At startup, all slots are "dead" — they're all available. The system maintains two lists:

- **Dead List (Free Pool):** Indices of buffer slots that are available for new particles
- **Alive List:** Indices of buffer slots that contain active particles

**The flow each frame:**

1. **Emit phase:** Pop N indices from the dead list. Write new particle data at those indices. These indices move to the alive list.
2. **Simulate phase:** For each alive particle, update it. If a particle's age exceeds its lifetime, mark it dead and push its index back onto the dead list.
3. **Render phase:** Only draw particles on the alive list.

**Why this approach?**
- No memory allocation/deallocation at runtime — the buffer is pre-allocated
- No gaps or fragmentation (well, there are gaps in the buffer, but the alive list gives you a compact list of what to draw)
- All management happens on the GPU via atomic operations (InterlockedAdd, etc.)

**In Fuse:**
The **Recycler** node abstracts this. You connect it to your particle system and it handles the dead list management, the atomic counters, and the emission slot allocation. You focus on what happens to the particle — Fuse handles where it lives in memory.

---

### Q12: How do I control the emission rate (particles per frame vs. per second)?

**Particles per frame** is the simplest approach: emit a fixed number each frame. But this is frame-rate dependent — at 120 FPS you emit twice as many as at 60 FPS.

**Particles per second** is the correct approach for consistent behavior:

```
particlesToEmit = emissionRate * deltaTime + leftover
actualEmit = floor(particlesToEmit)
leftover = particlesToEmit - actualEmit  // carry fractional part to next frame
```

For example, if your rate is 1000 particles/second and deltaTime is 0.016s:
- 1000 × 0.016 = 16 particles this frame

**In Fuse:**

The emitter nodes typically let you control:

- **Amount:** How many particles to emit (this can be driven by your own per-second calculation)
- **Probability:** A 0–1 value that adds randomness to emission (useful for natural-looking effects)

**Burst vs. continuous emission:**
- **Continuous:** Emit a steady stream every frame (smoke, fire, fountain)
- **Burst:** Emit a large number all at once, then stop (explosion, firework pop)

You can switch between these by controlling the amount value over time — set it to your rate for continuous, spike it once for a burst, or modulate it with any signal.

---

## Stage 3: Basic Rendering (Questions 13–17)

---

### Q13: How do I render particles as simple points in Stride?

The simplest way to see your particles is to draw them as **points** — one pixel per particle. This is fast and great for debugging.

**In Fuse / Stride:**

1. Your structured buffer contains all particle positions
2. Create a **Draw Shader** that reads from this buffer
3. In the **vertex shader**, read the particle's position from the buffer using the vertex ID as the index
4. Set the output position to this particle's world position (transformed by the view-projection matrix)
5. In the **pixel shader**, output a solid color

In Fuse, you use the **DrawShader** node connected to your particle buffer. You draw with a point topology where the vertex count equals your alive particle count.

**Practical steps:**
- Connect your particle buffer to a draw stage
- Set the draw topology to **Points**
- The vertex shader indexes into the buffer: `position = buffer[vertexID].Position`
- Optionally read particle color from the buffer too

**Limitation:** Points are tiny (often 1 pixel). For visible particles, you'll want to move to quads/billboards (see Q14).

---

### Q14: How do I render particles as camera-facing quads (billboards)?

Billboards are quads (two triangles) that always face the camera. This is the standard way to render visible particles.

**The technique (vertex shader billboard expansion):**

Instead of drawing 1 vertex per particle, you draw **4 vertices per particle** (or 6 if using individual triangles). The vertex shader:

1. Calculates which particle this vertex belongs to: `particleIndex = vertexID / 4`
2. Calculates which corner of the quad this vertex is: `cornerIndex = vertexID % 4`
3. Reads the particle's position from the buffer
4. Offsets the vertex position in screen-space (using the camera's right and up vectors) to form a quad
5. Scales the offset by the particle's size

This is more efficient than using a geometry shader because it avoids the GS bottleneck.

**In Fuse:**

Fuse provides nodes for particle rendering that handle the billboard expansion. You can use the **DrawFuse** or material pipeline nodes that:
- Take your particle buffer
- Automatically expand particles into camera-facing quads
- Apply textures and blending

**The key uniforms you need:**
- Camera right vector (for horizontal offset)
- Camera up vector (for vertical offset)
- Or simply use the inverse view matrix to derive these

---

### Q15: How do I pass particle data from the compute shader to the draw shader?

This is straightforward because both shaders access the **same structured buffer**.

**The flow:**

1. **Compute shader** (simulation) reads particle data, updates it, writes it back to the buffer
2. **Draw shader** (rendering) reads particle data from the same buffer to determine position, color, size, etc.

There's no explicit "pass" — the buffer is shared GPU memory. You just need to make sure:

- The compute shader runs **before** the draw shader each frame (Fuse handles this ordering)
- Both shaders reference the **same buffer** and agree on the **same struct layout**
- The draw shader uses the correct **index** to read from the buffer (typically derived from vertexID)

**In Fuse:**

You create your buffer once and connect it to both the simulation stage and the draw stage. Fuse ensures the compute dispatch completes before the draw call executes (using proper GPU synchronization barriers).

**Tip:** You can pass additional data beyond the particle struct by using separate buffers or by adding fields to your struct. For example, you might compute a "normalized age" (age/lifetime) in the simulation shader and write it to the buffer, then use it in the draw shader for color/size curves.

---

### Q16: How do I color particles based on their age or velocity?

**Age-based coloring (most common):**

Calculate the particle's normalized age (0 = just born, 1 = about to die):

```
normalizedAge = Age / Lifetime
```

Then use this to interpolate between colors:
```
color = lerp(startColor, endColor, normalizedAge)
```

Or for more control, sample a **color gradient/ramp texture** using normalizedAge as the UV coordinate. This lets you create complex color transitions (e.g., white → yellow → orange → red → transparent for fire).

**Velocity-based coloring:**

```
speed = length(Velocity)
normalizedSpeed = saturate(speed / maxSpeed)
color = lerp(slowColor, fastColor, normalizedSpeed)
```

Or use the velocity **direction** to map to a color:
```
color.rgb = normalize(Velocity) * 0.5 + 0.5  // maps direction to RGB
```

**In Fuse:**

In the draw shader stage, read the particle's age, lifetime, and/or velocity from the buffer. Use Fuse's math and interpolation nodes (Lerp, SampleTexture, etc.) to compute the final color. Connect this to the material output.

**Common patterns:**
- Fire: white → yellow → orange → red → black (with decreasing alpha)
- Smoke: white → gray (with decreasing alpha)
- Magic/sparkle: random hue, fading alpha
- Speed trails: cool colors (slow) → warm colors (fast)

---

### Q17: How do I change particle size over lifetime using a ramp or curve?

Same principle as color — use **normalizedAge** to drive the size.

**Simple approach (linear fade):**
```
size = lerp(startSize, endSize, normalizedAge)
```

**Common size curves:**

- **Grow then shrink:** `size = sin(normalizedAge * PI) * maxSize` — particles expand, peak at half-life, then shrink to zero
- **Shrink only:** `size = startSize * (1.0 - normalizedAge)` — born big, shrinks to nothing
- **Pop-in:** `size = smoothstep(0, 0.1, normalizedAge) * maxSize` — quick expansion at birth, then stays constant

**Using a curve/ramp texture:**

For precise artistic control:
1. Create a 1D texture (a single-row image) where the horizontal axis represents 0→1 of the particle's life
2. The pixel value at each point represents the size multiplier
3. In the draw shader: `size = sampleTexture(curveTexture, normalizedAge).r * baseSize`

This gives you total control over the size profile without changing any logic.

**In Fuse:**
Apply the size value when expanding billboards in the draw shader — multiply the quad offset by the computed size value.

---

## Stage 4: Forces & Motion (Questions 18–24)

---

### Q18: How do I apply gravity or a constant directional force?

Gravity is the simplest force — it's just a constant acceleration applied every frame.

**The physics:**
```
Velocity = Velocity + gravity * deltaTime
Position = Position + Velocity * deltaTime
```

Where `gravity` is typically `float3(0, -9.81, 0)` for Earth gravity (Y-down) or `float3(0, 9.81, 0)` if your Y-axis points down.

**In Fuse:**

In your simulation stage:
1. Define a gravity vector as a uniform/parameter: `float3 gravity = (0, -9.81, 0)`
2. Each frame, add `gravity * deltaTime` to each particle's velocity
3. Then add `velocity * deltaTime` to position

**Any constant force works the same way:**
- Wind: `float3(2.0, 0, 0)` — constant push in X direction
- Updraft: `float3(0, 3.0, 0)` — upward push
- You can even animate these over time for varying wind

**Order of operations each frame:**
1. Apply forces to velocity (gravity, wind, etc.)
2. Apply velocity to position
3. Update age
4. Check lifetime

This is called **symplectic Euler integration** and it's the standard for real-time particle systems.

---

### Q19: How do I add drag/friction so particles slow down over time?

Without drag, particles under constant force accelerate forever. Drag simulates air resistance and slows particles down.

**Simple linear drag:**
```
Velocity = Velocity * (1.0 - drag * deltaTime)
```

Where `drag` is a coefficient between 0 (no drag) and a large value (heavy drag). Typical values: 0.1–2.0.

**Alternative — exponential drag (more physically accurate):**
```
Velocity = Velocity * pow(1.0 - drag, deltaTime)
```
or simply:
```
Velocity = Velocity * exp(-drag * deltaTime)
```

This ensures drag behaves consistently regardless of frame rate.

**In Fuse:**

Add this line in your simulation stage, right after applying forces and before updating position:
```
velocity *= (1.0 - drag * dt);
```

**Tip:** You can use different drag values for different effects:
- Low drag (0.1): space-like, particles glide freely
- Medium drag (1.0): air-like, particles slow naturally
- High drag (5.0+): water-like, particles stop quickly

You can also apply drag **per-axis** if you want particles to slow horizontally but not vertically, for example.

---

### Q20: How do I apply noise-based forces (curl noise, Perlin turbulence)?

Noise-based forces give particles organic, fluid-like movement. Instead of a uniform force, each particle samples a noise field at its position and gets a unique force vector.

**Perlin/Simplex noise force:**
```
force = snoise3D(position * frequency + time * evolution) * strength
Velocity += force * deltaTime
```

The particle's position is used as the lookup coordinate, so nearby particles get similar (but not identical) forces, creating coherent swirling motion.

**Curl noise (divergence-free):**

Curl noise is the derivative of a noise field, producing a force field where particles swirl without clumping or diverging. It's ideal for fluid-like motion.

```
curlForce = curlNoise(position * frequency + time * speed) * strength
Velocity += curlForce * deltaTime
```

Curl noise in 3D is computed by taking the curl (cross-partial-derivatives) of a 3D noise potential field. The result is a vector that is always tangent to the flow, creating beautiful swirling, smoke-like patterns.

**In Fuse:**

Fuse has built-in noise nodes:
- **Noise** nodes (Perlin, Simplex, etc.) for scalar and vector noise
- Curl noise computation nodes
- You can control **frequency** (scale of the noise — small = large swirls, big = tiny turbulence), **octaves** (layered detail), **amplitude/strength**, and **evolution** (animate the noise over time)

Connect the noise output as a force in your simulation stage. Fuse's visual patching makes it easy to layer multiple noise forces with different frequencies.

---

### Q21: How do I create attractor and repulsor point forces?

An **attractor** pulls particles toward a point. A **repulsor** pushes them away. These are fundamental for interactive particle effects.

**The math:**

```
direction = attractorPosition - particlePosition
distance = length(direction)
normalizedDir = direction / distance  // unit vector toward attractor

// Inverse-square falloff (like gravity)
force = normalizedDir * strength / (distance * distance)

// Or linear falloff
force = normalizedDir * strength / distance

// For a repulsor, just negate:
force = -normalizedDir * strength / (distance * distance)

Velocity += force * deltaTime
```

**Practical considerations:**

- **Clamp minimum distance** to avoid division by zero and infinite forces when particles get too close: `distance = max(distance, 0.1)`
- **Add a maximum range** if you want the force to fade out beyond a certain distance
- **Multiple attractors:** Sum the forces from all attractors for each particle

**In Fuse:**

You can define attractor positions as uniform parameters (controlled from the vvvv patch) and compute the force vector in the simulation stage. For interactive use, connect the attractor position to mouse input or other controllers.

**Tip:** Combining an attractor with drag creates an orbiting effect. Particles spiral inward instead of oscillating through the center.

---

### Q22: How do I create a vortex or rotational force field?

A vortex applies a **tangential** force — perpendicular to the direction from the vortex center to the particle, making particles orbit around an axis.

**The math (for a vortex along the Y axis):**

```
toParticle = particlePosition - vortexCenter
// Project onto the XZ plane (perpendicular to vortex axis)
radial = float3(toParticle.x, 0, toParticle.z)
distance = length(radial)

// Tangent direction (perpendicular to radial, in the XZ plane)
tangent = normalize(float3(-radial.z, 0, radial.x))

// Force with falloff
force = tangent * strength / (distance + epsilon)

Velocity += force * deltaTime
```

**For an arbitrary axis:**

Use the cross product:
```
tangent = normalize(cross(vortexAxis, toParticle))
force = tangent * strength / (distance + epsilon)
```

**In Fuse:**

Build this with Fuse's math nodes: Subtract (for direction), Cross (for tangent), Normalize, Divide, Multiply. Connect the result as a force in your simulation.

**Tip:** Combine a vortex with a slight inward attractor and some upward drift for a tornado effect. Add noise on top for natural variation.

---

### Q23: How do I combine multiple forces and what order should they be applied?

**Simple answer: just add them all up.**

Forces are vectors, and the net force on a particle is the sum of all individual forces:

```
totalForce = gravity + wind + noise + attractor + vortex + drag_force + ...
Velocity += totalForce * deltaTime
Position += Velocity * deltaTime
```

**Recommended order in your simulation step:**

1. **Read** current particle state (position, velocity, age)
2. **Accumulate forces:**
   - Constant forces (gravity, wind)
   - Position-dependent forces (attractors, repulsors, vortices)
   - Noise forces (curl noise, turbulence)
   - Velocity-dependent forces (drag) — note: drag depends on current velocity
3. **Integrate:** Apply net force to velocity, then velocity to position
4. **Constrain:** Handle collisions, boundary clamping
5. **Age:** Increment age, check death condition
6. **Write** updated particle state back to buffer

**In Fuse:**

Each force is a sub-patch or a few nodes that output a `float3` force vector. Sum them all with Add nodes before applying to velocity. This modular approach means you can easily enable/disable forces by disconnecting them.

**Tip:** For artistic control, give each force its own **strength multiplier** exposed as a parameter. This lets you mix forces in real-time without changing the patch.

---

### Q24: What is deltaTime and why is it critical for frame-rate-independent simulation?

**deltaTime** (often written as `dt`) is the time elapsed since the last frame, measured in seconds.

- At 60 FPS: deltaTime ≈ 0.0167s
- At 30 FPS: deltaTime ≈ 0.0333s
- At 120 FPS: deltaTime ≈ 0.0083s

**Why it matters:**

Without deltaTime, if you write `Position += Velocity`, a particle moving at "speed 1" travels 60 units per second at 60 FPS but 30 units per second at 30 FPS. Your simulation is tied to frame rate.

With deltaTime: `Position += Velocity * deltaTime`. Now the particle moves the same distance per second regardless of frame rate. At 60 FPS it takes many small steps; at 30 FPS it takes fewer larger steps.

**In Fuse / vvvv:**

vvvv provides the frame time through its timing nodes. In Fuse's simulation stage, deltaTime is typically available as a built-in semantic or you pass it in as a uniform parameter.

**Caveats:**
- Very large deltaTime values (lag spikes) can cause particles to teleport through walls. You can clamp dt to a maximum (e.g., 1/30s) to prevent this.
- For more stability, some systems use **fixed timestep** simulation — always simulate at e.g., 1/60s steps, running multiple steps if needed.

---

## Stage 5: Emission Control (Questions 25–29)

---

### Q25: How do I randomize initial particle properties (direction, speed, color, size)?

Randomness is what makes particles look natural instead of mechanical. When emitting a particle, you randomize its initial properties around base values.

**Common randomizations:**

- **Direction:** Random point on a sphere: generates a uniformly distributed direction vector
- **Speed:** Base speed ± random range: `speed = baseSpeed + random(-range, range)`
- **Lifetime:** `lifetime = baseLifetime + random(-variation, variation)`
- **Color:** Random hue, or pick from a palette
- **Size:** `size = baseSize * random(minMult, maxMult)`

**The challenge on the GPU:**

GPUs don't have a built-in `random()` function like CPUs do. Instead, you use **hash functions** — deterministic functions that produce pseudo-random output from an input seed. The particle's index, the current frame number, or a combination of both make good seeds.

**In Fuse:**

Fuse provides hash/random nodes that take a seed value and produce pseudo-random numbers. You typically feed in the particle index (so each particle gets different values) combined with a frame counter or time value (so values differ each frame).

---

### Q26: How do I use hash functions and seed values for GPU-side randomness?

Since GPU threads run in parallel with no shared state, you can't use a sequential random number generator. Instead, you use **hash functions** — mathematical functions that scramble an integer input into a seemingly random output.

**How it works:**

```
uint seed = particleIndex * 1747 + frameNumber * 7919;
float random01 = hash(seed) / float(MAX_UINT);  // 0 to 1
```

**Common hash functions used in shaders:**

- **PCG Hash:** High quality, fast
- **Wang Hash:** Simple and effective
- **xxHash:** Good distribution

**Multiple random values per particle:**

To get multiple independent random values (one for X velocity, one for Y, one for size, etc.), use different seeds:
```
float randX = hash(seed);
float randY = hash(seed + 1);
float randZ = hash(seed + 2);
float randSize = hash(seed + 3);
```

Or hash different combinations of particleIndex and a channel offset.

**In Fuse:**

Fuse has built-in hash and random nodes. Feed them:
- The particle index (from the dispatch thread ID)
- Optionally combined with time or frame count for temporal variation

**Tip:** If you want particles to keep their random appearance after being recycled, make sure the seed includes the emission frame/time, not just the particle index. Otherwise recycled particles in the same slot always look the same.

---

### Q27: How do I emit particles from a point, line, circle, or sphere?

**Point emission (simplest):**
```
position = emitterPosition
```
All particles start at the same point and spread out via velocity randomization.

**Line emission:**
```
t = random(0, 1)
position = lerp(lineStart, lineEnd, t)
```

**Circle emission (ring in XZ plane):**
```
angle = random(0, 2*PI)
position = center + float3(cos(angle), 0, sin(angle)) * radius
```

**Disk emission (filled circle):**
```
angle = random(0, 2*PI)
r = sqrt(random(0, 1)) * radius  // sqrt for uniform distribution!
position = center + float3(cos(angle), 0, sin(angle)) * r
```
Note: Using `sqrt()` on the random radius is crucial — without it, particles cluster at the center.

**Sphere surface emission:**
```
// Uniform point on sphere surface
theta = random(0, 2*PI)
phi = acos(2 * random(0,1) - 1)
position = center + float3(sin(phi)*cos(theta), sin(phi)*sin(theta), cos(phi)) * radius
```

**Sphere volume emission:**
```
// Same as above but with random radius
r = pow(random(0,1), 1.0/3.0) * radius  // cube root for uniform volume distribution
```

**In Fuse:**
Use hash-based random values for the random parameters, compute the position in the emission stage, and write it to the particle's Position field.

---

### Q28: How do I emit particles from a mesh surface or SDF volume?

**Mesh surface emission:**

To emit from a mesh, you need to:
1. Pick a random triangle (weighted by area — larger triangles get more particles)
2. Pick a random point within that triangle using barycentric coordinates:
```
u = random(0,1), v = random(0,1)
if (u + v > 1) { u = 1-u; v = 1-v; }  // fold into triangle
position = vertexA * (1-u-v) + vertexB * u + vertexC * v
```

In Fuse, you can load mesh data (vertex positions, triangle indices) into buffers and sample from them in the emission shader. For skinned/animated meshes, you sample the already-transformed vertex positions — since Stride does skinning on the GPU, this data is readily available.

**SDF volume emission:**

Signed Distance Fields define shapes as a function: negative inside, zero on surface, positive outside.

To emit on an SDF surface:
1. Generate a random position in the SDF's bounding volume
2. Evaluate the SDF at that position
3. If the distance is close to zero (within a threshold), accept this as an emission point
4. Alternatively, use the SDF gradient to project the point onto the surface:
   ```
   position = position - sdfValue * sdfNormal
   ```

Fuse has extensive SDF support — you can define primitive SDFs (sphere, box, torus) or combine them with boolean operations, and use them as emission sources.

---

### Q29: How do I emit particles in bursts vs. continuous streams?

**Continuous emission:**
```
particlesToEmit = rate * deltaTime  // e.g., 1000/sec * 0.016 = 16 particles
```
Run this every frame. Particles emit at a steady rate. Good for smoke, fire, fountains, dust.

**Burst emission:**
```
// On trigger:
particlesToEmit = burstCount  // e.g., 500 particles at once
// Then set to 0 until next trigger
```

**In Fuse:**

Control the emission **Amount** parameter:
- **Continuous:** Connect a constant or slowly varying value
- **Burst:** Send a high value for one frame, then zero. Use a **Bang** node or a triggered event in vvvv to create the one-frame spike

**Combined approach:**

Many real effects use both:
- A firework rocket: continuous small trail emission → burst on explosion
- Footsteps: burst on each step
- Campfire: continuous flames + occasional burst sparks

**Tip:** For bursts, make sure your buffer is large enough and your dead list has enough available slots. If you try to burst-emit 10,000 particles but only 3,000 slots are free, you'll only get 3,000.

---

## Stage 6: Collisions & Constraints (Questions 30–34)

---

### Q30: What are Signed Distance Fields (SDFs) and how does Fuse use them?

A **Signed Distance Field** is a function that, for any point in space, returns the shortest distance to a surface. The sign tells you which side you're on:

- **Negative:** Inside the shape
- **Zero:** On the surface
- **Positive:** Outside the shape

**Why SDFs are powerful for particles:**

- **Collision detection** is trivial: if `sdf(position) < 0`, the particle is inside
- **Surface normal** is the gradient of the SDF: `normal = normalize(gradient(sdf, position))`
- **Distance to surface** tells you exactly how far to push a particle out
- **No mesh data needed** — SDFs are defined mathematically

**Primitive SDFs (examples):**
- Sphere: `sdf = length(position - center) - radius`
- Box: based on the max component of the absolute position minus half-size
- Plane: `sdf = dot(position, normal) - offset`
- Torus, cylinder, cone, etc. all have compact formulas

**In Fuse:**

Fuse has extensive SDF support inspired by Inigo Quilez's work (the Shadertoy legend). You can:
- Use primitive SDF nodes (Sphere, Box, Torus, etc.)
- Combine them with boolean operations (Union, Intersection, Subtraction)
- Smooth blend between them
- Transform, repeat, twist, bend them
- Use them for particle emission, collision, and forces

SDFs are evaluated in the compute shader per-particle, making them very efficient for GPU particle interactions.

---

### Q31: How do I make particles collide with a ground plane?

A ground plane is the simplest collision — perfect for learning the concept.

**The algorithm:**

```
// After updating position:
if (position.y < groundLevel) {
    position.y = groundLevel;               // Push back to surface
    velocity.y = -velocity.y * bounciness;  // Reflect Y velocity
    velocity.xz *= friction;                // Slow horizontal movement
}
```

**Parameters:**
- `groundLevel`: Y position of the ground (typically 0)
- `bounciness` (restitution): 0 = no bounce (stick), 1 = perfect bounce, 0.5 = half-energy bounce
- `friction`: 0 = full stop on ground, 1 = no friction

**As an SDF:**
A ground plane SDF is just: `sdf = position.y - groundLevel`
- If `sdf < 0`, particle is below ground → collision!

**In Fuse:**

In the simulation stage, after updating position:
1. Evaluate the ground plane SDF (or just check `position.y`)
2. If the particle has penetrated, push it back and reflect/dampen the velocity

**Tip:** For more realism, also reduce the normal velocity component slightly even when not colliding (a tiny amount of "near-surface drag") to prevent particles from hovering just above the surface.

---

### Q32: How do I make particles collide with SDF shapes (sphere, box, custom)?

The same principle as the ground plane, but generalized to any SDF shape.

**The algorithm:**

```
float dist = evaluateSDF(position);  // distance to nearest surface

if (dist < 0) {  // inside the shape
    // 1. Get the surface normal (gradient of the SDF)
    float3 normal = normalize(sdfGradient(position));
    
    // 2. Push particle to surface
    position = position - normal * dist;  // move outward by penetration depth
    
    // 3. Reflect velocity off the surface
    float velocityNormal = dot(velocity, normal);
    if (velocityNormal < 0) {  // only if moving into the surface
        velocity = velocity - (1 + bounciness) * velocityNormal * normal;
    }
}
```

**Computing the SDF gradient (normal):**

```
float3 sdfGradient(float3 p) {
    float eps = 0.001;
    return float3(
        sdf(p + float3(eps,0,0)) - sdf(p - float3(eps,0,0)),
        sdf(p + float3(0,eps,0)) - sdf(p - float3(0,eps,0)),
        sdf(p + float3(0,0,eps)) - sdf(p - float3(0,0,eps))
    );
}
```
This uses **central differencing** — sample the SDF at 6 nearby points to estimate the gradient.

**In Fuse:**

Fuse has SDF primitive nodes and gradient computation nodes. You can build complex collision shapes by combining primitives:
- Union of a box and sphere
- A room (inverted box SDF — particles stay inside)
- Animated/moving obstacles

Connect the collision check in your simulation stage after position update.

---

### Q33: How do I reflect or dampen velocity on collision?

When a particle hits a surface, you need to decide what happens to its velocity. This gives your particles their physical character.

**Full reflection (perfect bounce):**
```
velocity = velocity - 2.0 * dot(velocity, normal) * normal
```
The particle bounces off like a billiard ball. Energy is preserved.

**Dampened reflection (realistic bounce):**
```
float vn = dot(velocity, normal);  // velocity component into surface
float3 vNormal = vn * normal;      // normal component
float3 vTangent = velocity - vNormal;  // tangential component

velocity = vTangent * (1.0 - friction) + (-vNormal * bounciness);
```

**Parameters and their effects:**

| Bounciness | Friction | Effect |
|-----------|----------|--------|
| 1.0 | 0.0 | Perfect rubber ball — bounces forever |
| 0.5 | 0.0 | Tennis ball — loses half energy per bounce |
| 0.0 | 0.0 | Sticky — stops vertically, slides freely |
| 0.0 | 1.0 | Dead stop — sticks on contact |
| 0.3 | 0.5 | Sand/gravel — low bounce, high friction |
| 0.8 | 0.1 | Marble on tile — high bounce, low friction |

**In Fuse:**

Implement this in the simulation stage. Expose `bounciness` and `friction` as parameters so you can tune them in real-time. Different particle types in the same system can have different values.

---

### Q34: How do I constrain particles inside or outside a boundary volume?

Constraints keep particles within (or outside) a defined region.

**Inside constraint (particles stay in a box/room):**
```
// Clamp position to bounding box
position = clamp(position, boundsMin, boundsMax)

// Reflect velocity when hitting walls
if (position.x <= boundsMin.x || position.x >= boundsMax.x) velocity.x *= -bounciness;
if (position.y <= boundsMin.y || position.y >= boundsMax.y) velocity.y *= -bounciness;
if (position.z <= boundsMin.z || position.z >= boundsMax.z) velocity.z *= -bounciness;
```

**Using an inverted SDF (particles stay inside a shape):**
```
float dist = evaluateSDF(position);
if (dist > 0) {  // outside the shape
    // Push back inside
    float3 normal = normalize(sdfGradient(position));
    position -= normal * dist;
    // Reflect inward
    velocity = reflect(velocity, -normal) * bounciness;
}
```

Note: for "inside" constraints, you invert the collision check — collide when `dist > 0` (outside) instead of `dist < 0` (inside).

**Kill constraint (destroy particles that leave a region):**
```
if (position.x < killMin.x || position.x > killMax.x || ...) {
    particle.Alive = 0;  // kill it
}
```

This prevents stray particles from traveling forever and wasting GPU resources.

**In Fuse:**

Add these checks in your simulation stage after position update. For SDF-based constraints, use the same SDF nodes you use for collisions, just invert the logic.

---

## Stage 7: Advanced Behaviors (Questions 35–38)

---

### Q35: How do I make particles interact with each other (neighbor search)?

Particle-to-particle interaction (like collision, attraction, or flocking) requires each particle to know about its neighbors. This is computationally expensive because naively checking every particle against every other is O(n²).

**The solution: Spatial Hashing**

A spatial hash divides space into a grid of cells. Each particle is assigned to a cell based on its position. When a particle needs to find neighbors, it only checks particles in the same cell and adjacent cells.

**The process:**

1. **Hash phase:** For each particle, compute which grid cell it belongs to: `cellIndex = hash(floor(position / cellSize))`
2. **Sort/Build:** Sort particles by cell index, or build a per-cell linked list / offset table
3. **Query phase:** For each particle, look up particles in its cell and the 26 surrounding cells (3D), check distances against a search radius

**In Fuse:**

Fuse supports spatial hash techniques for networked particle systems. The spatial hash is built using compute shaders:
- One compute pass assigns particles to cells
- Another pass sorts or builds the lookup structure
- The simulation pass then queries neighbors efficiently

**Performance note:** Spatial hashing brings interaction from O(n²) to approximately O(n × k), where k is the average number of neighbors per particle. This makes million-particle interactions feasible on the GPU.

---

### Q36: How do I implement simple flocking (separation, alignment, cohesion)?

Flocking (Craig Reynolds' Boids algorithm) gives particles lifelike swarm behavior using three simple rules applied to each particle based on its nearby neighbors:

**The three rules:**

1. **Separation:** Steer away from neighbors that are too close
   ```
   for each neighbor within separationRadius:
       separationForce += (myPosition - neighborPosition) / distance
   ```

2. **Alignment:** Steer toward the average heading of nearby neighbors
   ```
   for each neighbor within alignmentRadius:
       averageVelocity += neighborVelocity
   averageVelocity /= neighborCount
   alignmentForce = averageVelocity - myVelocity
   ```

3. **Cohesion:** Steer toward the average position of nearby neighbors
   ```
   for each neighbor within cohesionRadius:
       centerOfMass += neighborPosition
   centerOfMass /= neighborCount
   cohesionForce = centerOfMass - myPosition
   ```

**Combined:**
```
totalForce = separation * sepWeight + alignment * aliWeight + cohesion * cohWeight
velocity += totalForce * deltaTime
```

**In Fuse:**

This requires the spatial hash from Q35 to find neighbors efficiently. In the simulation stage:
1. Build the spatial hash
2. For each particle, query neighbors
3. Compute the three forces
4. Apply with tunable weights

Fuse's Node Institute course covers implementing flocking behavior as an advanced particle topic. The key challenge is getting the spatial hash right — once you have neighbor queries, the flocking logic itself is straightforward.

---

### Q37: How do I spawn secondary particles from existing ones (sub-emitters / trails)?

Sub-emitters create new particles from existing particles — for example, a firework lead particle that emits a trail of spark particles.

**The concept:**

1. **Lead particles:** Your primary particle system (e.g., firework rockets)
2. **Trail/secondary particles:** A second particle system that reads lead particle data and uses it as emission source

**Implementation approach:**

- Run the lead particle system normally
- In the secondary emitter's emit stage, read lead particle positions/velocities from the lead buffer
- Emit secondary particles at the lead particle positions
- Secondary particles get their own velocity (usually the lead's velocity + some random spread)

**In Fuse:**

Fuse supports this through:
1. Create two separate particle systems (lead and trail)
2. In the trail's emission stage, read from the lead's structured buffer
3. Use the lead's position as the emission point for trail particles
4. You can selectively emit only from alive lead particles, or trigger on death (explosion effect)

**Common uses:**
- Firework trails (continuous emission from moving leads)
- Death particles (emit burst when a lead dies — sparks, fragments)
- Ribbons/trails (connected particles following a leader)

**Tip:** Keep trail particles lightweight (fewer properties, simpler simulation) since there are typically many more of them than lead particles.

---

### Q38: How do I sort particles back-to-front for proper alpha blending?

**The problem:** Alpha-blended (transparent) particles must be drawn back-to-front (farthest from camera first) for correct visual results. If drawn in random order, you get visual artifacts — particles in front incorrectly occlude particles behind them.

**The solution: GPU sorting**

1. **Calculate sort keys:** For each alive particle, compute the distance (or negative distance) from the camera
2. **Sort the alive list** by this distance, farthest first
3. **Draw** using the sorted alive list as the index order

**GPU sorting algorithms:**
- **Bitonic Sort:** A classic parallel-friendly sorting algorithm that works well on GPUs. It's a comparison-based sort that runs entirely in compute shaders.
- **Radix Sort:** Also GPU-friendly, sorts by examining bits of the sort key

**In Fuse:**

Sorting is one of the more complex aspects of GPU particle systems. You can:
- Implement a bitonic sort in a series of compute shader passes
- Or use approximate sorting (not always pixel-perfect but good enough for most effects)

**Alternatives to sorting:**
- **Additive blending:** If all particles use additive blending (adding light), order doesn't matter. Great for fire, sparks, magic effects.
- **Depth-tested, non-blended:** If particles are opaque, standard depth testing handles occlusion.
- **OIT (Order-Independent Transparency):** Advanced techniques like weighted blended OIT that approximate correct transparency without sorting.

**Tip:** For many real-time applications, additive blending is preferred because it avoids the sorting cost entirely and looks great for glowing/emissive effects.

---

## Stage 8: Visual Polish & Integration (Questions 39–40)

---

### Q39: How do I use textures, sprite sheets, or soft particle blending for better visuals?

**Textured particles:**

Instead of a solid-colored quad, sample a texture:
1. Assign UV coordinates to your billboard vertices (0,0 → 1,1 corners)
2. In the pixel shader, sample your particle texture
3. Multiply the texture color/alpha by the particle's per-instance color and age-based alpha

**Common particle textures:** Soft circle (Gaussian blob), star, smoke puff, spark streak, raindrop. A soft circular gradient is the most versatile.

**Sprite sheets (texture atlas):**

A sprite sheet contains multiple particle images in a grid. Each particle (or animation frame) uses a sub-region:
```
// For a 4x4 sprite sheet, each cell is 0.25 x 0.25 UV
spriteIndex = particleIndex % 16;  // or based on age for animation
row = spriteIndex / 4;
col = spriteIndex % 4;
uv = (quadUV + float2(col, row)) * 0.25;
```

**Animated sprites:** Use normalizedAge to pick the frame:
```
frame = floor(normalizedAge * totalFrames);
```

**Soft particles:**

Soft particles fade out when they intersect geometry, preventing hard clipping edges:
```
sceneDepth = sampleDepthBuffer(screenUV);
particleDepth = currentFragmentDepth;
fadeFactor = saturate((sceneDepth - particleDepth) / softRange);
finalAlpha *= fadeFactor;
```

This requires access to the depth buffer from the scene rendering.

**In Fuse / Stride:**

Fuse's draw shader integration with Stride's material pipeline gives you access to textures, depth buffers, and all standard rendering features. You can use Fuse nodes to sample textures, read depth, and compute soft particle fade.

---

### Q40: How do I connect Fuse particle output to Stride's rendering pipeline for lighting, shadows, and post-processing?

Fuse is built on top of Stride, so integration is native. Here's how particles can participate in the full rendering pipeline:

**Materials and Lighting:**

Instead of a custom unlit draw shader, you can feed your particle data into Stride's **material pipeline**:
- Use the material nodes in Fuse to create PBR (Physically Based Rendering) materials for particles
- Particles can receive diffuse lighting, specular highlights, and environment reflections
- This makes particles look like they belong in the scene rather than floating on top

**Shadows:**

- **Receiving shadows:** Particles can sample the scene's shadow maps to be darkened when in shadow
- **Casting shadows:** Particles can be rendered into the shadow map pass, though this is expensive for many particles. Usually only large/important particles cast shadows.

**Post-processing:**

Stride provides post-FX that apply to the entire rendered image:
- **Bloom:** Makes bright particles glow beyond their edges — essential for fire, sparks, magic
- **Depth of Field:** Blurs particles based on distance from the focal point
- **Motion Blur:** Streaks fast-moving particles
- **Ambient Occlusion:** Darkens particles in crevices (subtle for particles, more relevant for dense systems)
- **Tone Mapping & Color Grading:** Applies consistent color treatment to everything

Since particles render into the same framebuffer as everything else in Stride, they automatically benefit from all enabled post-effects.

**In Fuse:**

The key integration points:
1. **Render stage:** Use Fuse's draw shader nodes connected to Stride's Entity/Scene system
2. **Material pipeline:** Use Fuse's material-compatible output nodes to participate in PBR lighting
3. **Camera and transforms:** Fuse particles live in the same world space as your Stride scene — same camera, same coordinate system
4. **Multiple render passes:** You can render particles differently in different passes (e.g., opaque particles in the main pass, transparent particles in a later pass, glow particles into a bloom buffer)

**Practical tip:** Start with unlit particles (simpler), get the simulation working, then switch to lit materials for visual polish. Post-effects like bloom can make even simple unlit particles look spectacular.

---

## Summary: The Particle System Pipeline

Here's the complete flow of a Fuse particle system in one view:

```
┌─────────────────────────────────────────────┐
│                 PER FRAME                    │
│                                              │
│  1. EMIT                                     │
│     ├─ Check dead list for available slots   │
│     ├─ Generate random initial properties    │
│     └─ Write new particles to buffer         │
│                                              │
│  2. SIMULATE (Compute Shader)                │
│     ├─ For each alive particle:              │
│     │   ├─ Accumulate forces                 │
│     │   │   (gravity, noise, attractors...)  │
│     │   ├─ Apply drag                        │
│     │   ├─ Integrate velocity → position     │
│     │   ├─ Handle collisions (SDF)           │
│     │   ├─ Increment age                     │
│     │   └─ Kill if age > lifetime            │
│     └─ Update alive/dead lists               │
│                                              │
│  3. RENDER (Draw Shader)                     │
│     ├─ Read particle data from buffer        │
│     ├─ Expand to billboards                  │
│     ├─ Apply size/color over life            │
│     ├─ Sample texture/sprite                 │
│     └─ Output to Stride pipeline             │
│                                              │
│  4. POST-PROCESS (Stride)                    │
│     ├─ Bloom, DOF, Motion Blur              │
│     └─ Tone mapping, Color grading           │
└─────────────────────────────────────────────┘
```

---

## Recommended Resources

- **Fuse Help Browser:** Press F1 in vvvv, search "Fuse" for built-in examples
- **The Node Institute:** Mastering VL.Fuse course — 8-part series covering all topics from basics to fluid simulation
- **The Fuse Lab:** [thefuselab.io](https://www.thefuselab.io) — official site with features and documentation
- **GitHub:** [github.com/TheFuseLab/VL.Fuse](https://github.com/TheFuseLab/VL.Fuse) — source code and issues
- **vvvv Forum:** [forum.vvvv.org](https://forum.vvvv.org) — active community for questions
- **Inigo Quilez:** [iquilezles.org](https://iquilezles.org) — SDF reference and techniques (Fuse draws heavy inspiration from this)
- **The Book of Shaders:** [thebookofshaders.com](https://thebookofshaders.com) — foundational shader knowledge
