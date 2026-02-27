# Particle System Verb Lexicon
## A Working Vocabulary for Complex Visual Systems

---

## How to Use This List

Each verb represents an **action you can perform on or with particles**. When designing a complex visual, think in verbs: *"I want particles to emit from a mesh, swirl around an attractor, collide with an SDF, shatter into trails, and dissolve into fog."* The more verbs you can chain together, the richer your system becomes.

---

## 1. BIRTH & DEATH

| Verb | Meaning |
|------|---------|
| **Emit** | Create new particles from a source |
| **Spawn** | Generate particles, often as a reaction to an event |
| **Burst** | Emit a large quantity at once |
| **Seed** | Place initial particles with predetermined positions |
| **Populate** | Fill a volume or surface with particles at initialization |
| **Scatter** | Distribute particles randomly across a region |
| **Inject** | Add particles into an already running system |
| **Birth** | The moment a particle becomes alive |
| **Die** | End a particle's life when it exceeds its lifetime |
| **Kill** | Force-terminate a particle based on a condition (boundary, collision, event) |
| **Expire** | Let a particle reach its natural end of life |
| **Recycle** | Return a dead particle's buffer slot for reuse |
| **Respawn** | Immediately reuse a dead particle as a new one |
| **Harvest** | Collect dying particles to trigger secondary events |

---

## 2. MOVEMENT & TRANSPORT

| Verb | Meaning |
|------|---------|
| **Move** | Displace position by velocity over time |
| **Drift** | Slow, directionless floating movement |
| **Flow** | Move along a vector field or streamline |
| **Stream** | Move in a continuous directed current |
| **Float** | Buoyant, gravity-resistant upward drift |
| **Fall** | Gravity-driven downward motion |
| **Rise** | Upward motion against gravity (heat, buoyancy) |
| **Sink** | Slow downward settling (heavier than medium) |
| **Glide** | Move with low drag, maintaining momentum |
| **Slide** | Move along a surface with friction |
| **Roll** | Translate along a surface with rotational spin |
| **Tumble** | Rotate irregularly while falling |
| **Spin** | Rotate around the particle's own axis |
| **Orbit** | Circle around a point or axis |
| **Spiral** | Orbit with changing radius (inward or outward) |
| **Wander** | Random walk, stochastic drifting |
| **Zigzag** | Sharp directional oscillation |
| **Oscillate** | Periodic back-and-forth movement |
| **Vibrate** | High-frequency, small-amplitude oscillation |
| **Jitter** | Small random displacement noise per frame |
| **Teleport** | Instantaneous position change |
| **Wrap** | Reappear on the opposite side when crossing a boundary |
| **Seek** | Move toward a target position |
| **Flee** | Move away from a target position |
| **Chase** | Continuously seek a moving target |
| **Evade** | Continuously flee a moving target |
| **Path** | Follow a predefined spline or curve |
| **Home** | Steer toward a rest position (spring-like) |
| **Return** | Move back toward origin or emission point |
| **Advance** | Move forward along a heading direction |
| **Retreat** | Move backward away from a heading direction |
| **Migrate** | Slow large-scale collective movement |
| **Swarm** | Collective agitated motion around a region |
| **Flock** | Move as a coherent group with local rules |
| **Scatter** | Disperse outward from a center (also used in birth) |
| **Converge** | Move inward toward a common point |
| **Diverge** | Spread apart from each other |
| **Separate** | Maintain minimum distance from neighbors |
| **Align** | Match heading/velocity with neighbors |
| **Cohere** | Steer toward the average position of neighbors |

---

## 3. FORCES & ACCELERATION

| Verb | Meaning |
|------|---------|
| **Attract** | Pull toward a point, line, or surface |
| **Repel** | Push away from a point, line, or surface |
| **Gravitate** | Apply directional or radial gravitational pull |
| **Drag** | Reduce velocity proportional to speed (air resistance) |
| **Dampen** | Reduce velocity over time (general deceleration) |
| **Brake** | Rapidly decelerate to a stop |
| **Accelerate** | Increase speed in a direction |
| **Thrust** | Apply a sudden directed force |
| **Kick** | Apply a brief impulsive force |
| **Push** | Apply a constant directional force |
| **Pull** | Apply a constant directional force toward something |
| **Blow** | Apply wind-like directional force with variation |
| **Gust** | Apply brief, strong wind-like force |
| **Swirl** | Apply tangential rotational force (vortex) |
| **Vortex** | Create a spinning force field |
| **Tornado** | Vortex with upward draft and inward pull |
| **Turbulate** | Apply chaotic noise-based forces |
| **Curl** | Apply divergence-free noise force (fluid-like swirling) |
| **Perturb** | Add small random forces to disrupt uniform motion |
| **Agitate** | Apply continuous random forces for restless movement |
| **Propel** | Drive forward along particle's heading |
| **Suck** | Strong inward radial pull (vacuum, black hole) |
| **Eject** | Strong outward radial push (explosion core) |
| **Deflect** | Redirect movement with an angled force |
| **Steer** | Gradually alter direction of movement |
| **Tug** | Apply intermittent directional pull |
| **Suspend** | Counterbalance gravity to keep particles floating |
| **Buoy** | Apply upward force proportional to depth in a medium |
| **Centrifuge** | Apply outward force proportional to radial velocity |
| **Constrain** | Limit force effect to a specific region or axis |
| **Modulate** | Vary force strength over time or space |
| **Pulse** | Apply force in rhythmic on/off or wave pattern |
| **Field** | Apply spatially varying force (vector field) |

---

## 4. COLLISION & INTERACTION

| Verb | Meaning |
|------|---------|
| **Collide** | Detect and respond to contact with geometry |
| **Bounce** | Reflect velocity off a surface |
| **Stick** | Zero velocity and attach to a surface on contact |
| **Slide** | Move along a surface after collision |
| **Penetrate** | Pass partially or fully through a surface |
| **Absorb** | Surface captures and kills the particle |
| **Deflect** | Redirect off a surface at an angle |
| **Shatter** | Break into multiple smaller particles on impact |
| **Splash** | Emit secondary particles radially on surface contact |
| **Skip** | Bounce at shallow angles, stick at steep angles |
| **Graze** | Glance off a surface with minimal deflection |
| **Embed** | Penetrate partially and stop inside a surface |
| **Erode** | Gradually alter the collision surface over time |
| **Deposit** | Leave material on a surface (painting, snow) |
| **Coat** | Accumulate on a surface forming a layer |
| **Pool** | Collect and settle in low areas |
| **Pile** | Stack on a surface building height |
| **Scatter** | Disperse in many directions after collision |
| **Ricochet** | Bounce off multiple surfaces in sequence |
| **Pierce** | Pass through thin surfaces |
| **Avoid** | Steer around obstacles without contact |
| **Repel** | Pushed away by proximity to a surface (soft collision) |

---

## 5. DEFORMATION & TRANSFORMATION

| Verb | Meaning |
|------|---------|
| **Grow** | Increase size over time |
| **Shrink** | Decrease size over time |
| **Swell** | Expand then contract (breathe) |
| **Pulse** | Rhythmic size oscillation |
| **Stretch** | Elongate along velocity direction |
| **Squash** | Compress along velocity direction |
| **Flatten** | Reduce height while expanding width |
| **Inflate** | Expand outward from center uniformly |
| **Collapse** | Shrink inward toward center |
| **Warp** | Distort shape through a field |
| **Twist** | Apply rotational deformation |
| **Bend** | Curve a stream or formation of particles |
| **Taper** | Gradually reduce size along a direction |
| **Split** | Divide one particle into multiple |
| **Merge** | Combine multiple particles into one |
| **Fragment** | Break apart into irregular pieces |
| **Subdivide** | Split into regularly sized sub-particles |
| **Morph** | Gradually change from one shape/form to another |
| **Crystallize** | Snap to a grid or lattice structure |
| **Dissolve** | Gradually lose coherence and fade |
| **Coalesce** | Come together and merge into larger form |
| **Erode** | Gradually lose mass/size from edges |
| **Accrete** | Gradually gain mass/size from accumulation |

---

## 6. APPEARANCE & RENDERING

| Verb | Meaning |
|------|---------|
| **Fade** | Gradually change opacity (usually toward transparent) |
| **Brighten** | Increase luminance/emissive intensity |
| **Dim** | Decrease luminance |
| **Flash** | Brief spike of brightness |
| **Flicker** | Irregular rapid brightness variation |
| **Glow** | Emit soft surrounding light (bloom) |
| **Shimmer** | Subtle oscillating brightness/color shift |
| **Sparkle** | Random brief bright points |
| **Color-shift** | Transition through hues over time |
| **Tint** | Apply an overall color influence |
| **Saturate** | Increase color intensity |
| **Desaturate** | Drain color toward grayscale |
| **Bleach** | Fade toward white |
| **Char** | Darken toward black (burning) |
| **Stain** | Permanently alter color from interaction |
| **Blend** | Mix color with neighbors or environment |
| **Stripe** | Apply banded color pattern |
| **Texture** | Map an image onto the particle surface |
| **Animate** | Cycle through sprite sheet frames |
| **Trail** | Leave a visual trace along the path |
| **Streak** | Motion-blur elongated rendering |
| **Smear** | Directional blur based on velocity |
| **Soften** | Fade edges of particle quad (soft particles) |
| **Harden** | Sharp-edged rendering |
| **Illuminate** | Light particles using scene lighting |
| **Shadow** | Receive or cast shadows |
| **Reflect** | Show environment reflections |
| **Refract** | Bend light passing through |
| **Silhouette** | Render as flat dark shape against light |
| **Wireframe** | Render particle connections as lines |
| **Point** | Render as a single pixel or small dot |
| **Billboard** | Render as camera-facing quad |
| **Ribbon** | Render as a connected strip between particles |
| **Tube** | Render as a 3D cylindrical trail |
| **Mesh** | Render as instanced 3D geometry |

---

## 7. TOPOLOGY & CONNECTION

| Verb | Meaning |
|------|---------|
| **Connect** | Draw lines/springs between nearby particles |
| **Link** | Establish a persistent bond between specific particles |
| **Chain** | Connect particles in sequential order |
| **Web** | Create a mesh of connections based on proximity |
| **Bridge** | Connect across a gap between clusters |
| **Branch** | Split connections into tree-like structures |
| **Tether** | Connect a particle to an anchor point with elasticity |
| **String** | Connect in a single continuous line |
| **Weave** | Interleave multiple chains |
| **Cluster** | Group nearby particles into a unit |
| **Isolate** | Disconnect a particle from its group |
| **Pair** | Create two-particle bonds |
| **Network** | Build a graph of inter-particle connections |
| **Lattice** | Arrange particles in a regular grid structure |
| **Triangulate** | Connect particles using Delaunay triangulation |
| **Voronoi** | Partition space based on nearest particle |

---

## 8. FIELD & SPACE OPERATIONS

| Verb | Meaning |
|------|---------|
| **Project** | Map particles onto a surface or plane |
| **Scatter** | Distribute across a region |
| **Distribute** | Spread evenly through a volume or surface |
| **Sample** | Read values from a field, texture, or SDF at particle position |
| **Advect** | Transport particles through a velocity field |
| **Diffuse** | Spread property values (heat, color) to neighbors |
| **Convect** | Transport properties through a moving medium |
| **Map** | Assign properties based on position in a field |
| **Remap** | Transfer particles from one shape/space to another |
| **Conform** | Force particles onto a surface or shape |
| **Relax** | Iteratively even out spacing between particles |
| **Pack** | Tighten spacing to fill a volume |
| **Scatter** | Randomize positions within a region |
| **Tile** | Repeat a particle pattern across space |
| **Mirror** | Reflect particle positions across a plane |
| **Instance** | Duplicate a particle pattern at multiple locations |
| **Raymarch** | Step particles along ray directions |

---

## 9. DATA & STATE

| Verb | Meaning |
|------|---------|
| **Store** | Write a value to the particle's data |
| **Read** | Access a value from the particle's data |
| **Inherit** | Copy properties from parent/emitter particle |
| **Transfer** | Pass properties from one particle to another |
| **Accumulate** | Add to a property over time |
| **Decay** | Reduce a property over time |
| **Clamp** | Limit a property to a min/max range |
| **Normalize** | Scale a property to 0–1 range |
| **Quantize** | Snap a property to discrete steps |
| **Smooth** | Interpolate a property toward a target over time |
| **Threshold** | Trigger an event when a property crosses a value |
| **Tag** | Mark particles with a category or group ID |
| **Filter** | Select particles based on property criteria |
| **Sort** | Order particles by a property (depth, age, etc.) |
| **Count** | Track the number of particles meeting a condition |
| **Hash** | Generate pseudo-random values from particle index |
| **Seed** | Initialize random state for reproducibility |
| **Interpolate** | Blend between two values based on a parameter |
| **Ease** | Apply non-linear interpolation curve |
| **Step** | Hard switch between values at a threshold |
| **Ramp** | Map a 0–1 value through a gradient/curve |

---

## 10. TEMPORAL & EVENT

| Verb | Meaning |
|------|---------|
| **Age** | Increment lifetime counter |
| **Delay** | Wait before an action takes effect |
| **Stagger** | Offset timing per particle or group |
| **Freeze** | Pause simulation for selected particles |
| **Thaw** | Resume simulation after freeze |
| **Rewind** | Reverse particle state to earlier time |
| **Loop** | Reset particle to beginning of its lifecycle |
| **Trigger** | Initiate an action based on an event |
| **Cascade** | Chain reactions from one particle to neighbors |
| **Propagate** | Spread a state change through connected particles |
| **Wave** | Trigger events in a radiating pattern |
| **Sync** | Align timing across a group of particles |
| **Phase** | Offset periodic behavior per particle |
| **Tempo** | Set the rate of periodic behaviors |
| **Sequence** | Play through a series of states in order |
| **Keyframe** | Define specific states at specific times |
| **Blend** | Transition between two behavioral states |
| **Crossfade** | Gradually replace one behavior with another |

---

## 11. FORMATION & STRUCTURE

| Verb | Meaning |
|------|---------|
| **Assemble** | Move from scattered to organized arrangement |
| **Disassemble** | Move from organized to scattered |
| **Form** | Arrange particles into a recognizable shape |
| **Deform** | Distort an organized arrangement |
| **Array** | Place in a regular grid or pattern |
| **Ring** | Arrange in a circle |
| **Helix** | Arrange in a spiral along an axis |
| **Shell** | Arrange on the surface of a shape |
| **Fill** | Arrange throughout the volume of a shape |
| **Outline** | Arrange along the edges/contours of a shape |
| **Stack** | Layer particles vertically |
| **Nest** | Place particle groups inside each other |
| **Fractal** | Self-similar recursive arrangement |
| **Symmetrize** | Mirror arrangement across axes |
| **Randomize** | Break organized arrangement into disorder |
| **Organize** | Impose order on a random arrangement |
| **Rank** | Arrange in ordered rows |
| **Cluster** | Group into dense pockets |
| **Disperse** | Spread clusters apart |
| **Concentrate** | Tighten grouping toward center |

---

## 12. COMPOSITE & SYSTEM-LEVEL

| Verb | Meaning |
|------|---------|
| **Layer** | Stack multiple particle systems visually |
| **Mask** | Hide particles based on a region or condition |
| **Reveal** | Progressively make particles visible |
| **Occlude** | Block particles behind geometry |
| **Composite** | Combine particle render with scene render |
| **Cascade** | Feed output of one system into input of another |
| **Couple** | Make two systems influence each other |
| **Decouple** | Make systems independent |
| **Override** | Replace a system behavior with an external control |
| **Blend** | Mix between two particle systems |
| **Transition** | Smoothly morph from one system state to another |
| **LOD** | Adjust detail level based on distance or performance |
| **Cull** | Skip simulation/rendering for off-screen particles |
| **Optimize** | Reduce particle count or complexity for performance |
| **Debug** | Visualize internal data (velocity arrows, age colors, etc.) |
| **Profile** | Measure GPU time spent on particle operations |

---

## Verb Chaining Examples

Complex visuals come from chaining verbs together. Here are some recipes:

**Campfire:**
Emit → Rise → Turbulate → Curl → Fade → Shrink → Color-shift (white→yellow→orange→red→black) → Glow → Die

**Waterfall:**
Emit (line) → Fall → Accelerate → Splash (on collision) → Spawn (mist) → Drift → Fade → Die

**Flock of Birds:**
Populate → Separate → Align → Cohere → Wander → Avoid → Bank → Trail → Animate (wing sprite)

**Galaxy:**
Scatter (disk) → Orbit → Spiral (inward) → Drag → Curl → Color-shift (blue→white at center) → Glow → Brighten (core) → Dim (edges)

**Crystal Growth:**
Seed (single point) → Cascade → Branch → Crystallize → Accrete → Grow → Shimmer → Glow

**Explosion:**
Burst → Eject → Drag → Shatter → Trail → Streak → Flash → Char → Fade → Gravity → Collide → Bounce → Die

**Data Visualization Transition:**
Form (bar chart) → Dissolve → Wander → Seek → Assemble (pie chart) → Stagger → Ease → Settle

**Smoke Hitting a Ceiling:**
Emit → Rise → Collide (plane) → Slide → Spread → Curl → Diffuse → Fade → Grow → Die

**Magic Portal:**
Ring → Spin → Swirl → Spiral → Glow → Sparkle → Trail → Color-shift → Pulse → Emit (inward)

**Flock Dissolve:**
Flock → Trigger → Separate → Scatter → Tumble → Shrink → Fade → Shatter → Spawn (dust) → Die

---

## Quick Reference: Verb by Complexity

### Beginner (start here)
Emit, Move, Fall, Die, Fade, Grow, Shrink, Bounce, Color-shift, Drag

### Intermediate
Attract, Repel, Swirl, Curl, Turbulate, Collide, Stick, Trail, Billboard, Burst, Spawn, Orbit, Seek, Flee

### Advanced
Flock, Separate, Align, Cohere, Advect, Diffuse, Cascade, Shatter, Sort, Connect, Web, Morph, Conform, Relax, Pack

### Expert
Couple, Erode, Accrete, Lattice, Triangulate, Voronoi, Raymarch, LOD, Async, Rewind, Propagate, Field

---

*Think in verbs. Sketch with verbs. Patch with verbs.*