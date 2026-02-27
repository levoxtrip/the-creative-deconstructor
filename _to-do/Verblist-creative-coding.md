# Creative Coding Verb Lexicon
## A Working Vocabulary for Computational Art & Design

---

## How to Use This List

Every creative coding project is a sequence of **verbs applied to data**. A generative poster might: *Generate a grid → Distort with noise → Cull by density → Connect neighbors → Stroke with varying weight → Layer with blend modes → Export.* This list is your palette of actions. Browse it for inspiration, use it to describe what you're trying to build, and chain verbs together to design systems before you touch code.

---

## 1. GENERATE & CREATE

*Making something from nothing or from rules.*

| Verb | Meaning |
|------|---------|
| **Generate** | Produce output from an algorithm or rule set |
| **Create** | Bring a new element into existence |
| **Instantiate** | Create a specific instance of a template |
| **Spawn** | Create dynamically during runtime |
| **Seed** | Initialize a generative process with a starting value |
| **Randomize** | Produce values using stochastic processes |
| **Noise** | Generate coherent pseudo-random values (Perlin, Simplex, etc.) |
| **Proceduralize** | Define through rules rather than manual placement |
| **Automate** | Let a system produce output without manual input |
| **Synthesize** | Combine simple elements to build complex output |
| **Fabricate** | Construct from discrete components |
| **Compute** | Calculate values through mathematical operations |
| **Derive** | Produce new data from existing data |
| **Enumerate** | Produce all items in a sequence or set |
| **Permute** | Generate all possible arrangements |
| **Recurse** | Generate by self-referential repetition |
| **Iterate** | Generate through repeated cycles of a process |
| **Evolve** | Generate through selection and mutation over generations |
| **Grow** | Generate incrementally by accretion or branching |
| **Populate** | Fill a space or structure with generated elements |
| **Scatter** | Distribute elements with controlled randomness |
| **Tile** | Fill space by repeating a unit |
| **Tessellate** | Fill space with interlocking shapes without gaps |
| **Weave** | Interleave multiple generated streams |
| **Compose** | Arrange generated elements into a unified whole |
| **Score** | Define a time-based sequence of events (musical or visual) |

---

## 2. DRAW & RENDER

*Making things visible.*

| Verb | Meaning |
|------|---------|
| **Draw** | Place marks on a canvas or screen |
| **Render** | Convert data into a visual image |
| **Paint** | Apply color with brush-like behavior |
| **Stroke** | Draw a line with a specific weight and style |
| **Fill** | Color the interior of a shape |
| **Plot** | Place a point at a coordinate |
| **Trace** | Draw along an existing path or edge |
| **Hatch** | Fill an area with parallel lines |
| **Stipple** | Fill an area with dots of varying density |
| **Shade** | Vary darkness to suggest depth or light |
| **Gradient** | Smoothly transition between colors across space |
| **Rasterize** | Convert vector/math into pixels |
| **Vectorize** | Convert pixels into vector paths |
| **Outline** | Draw only the contour of a shape |
| **Silhouette** | Render as a flat filled shape |
| **Wireframe** | Render only edges of 3D geometry |
| **Extrude** | Pull a 2D shape into 3D depth |
| **Revolve** | Spin a 2D profile around an axis to make 3D |
| **Loft** | Create a surface between multiple cross-sections |
| **Billboard** | Render a flat image always facing the camera |
| **Instance** | Draw the same geometry at many positions efficiently |
| **Batch** | Combine many draw calls into one for performance |
| **Overdraw** | Layer multiple draws on the same pixels |
| **Composite** | Combine multiple rendered layers into one image |
| **Blit** | Copy a block of pixels from one buffer to another |
| **Clear** | Reset a canvas or buffer to empty/default |
| **Present** | Display the final rendered frame |

---

## 3. TRANSFORM & DEFORM

*Changing position, orientation, scale, and shape.*

### Affine Transforms
| Verb | Meaning |
|------|---------|
| **Translate** | Move position by an offset |
| **Rotate** | Turn around an axis or point |
| **Scale** | Change size uniformly or per-axis |
| **Skew** | Slant along an axis |
| **Shear** | Distort by sliding layers relative to each other |
| **Mirror** | Reflect across an axis or plane |
| **Flip** | Reverse orientation (horizontal or vertical) |
| **Pivot** | Rotate around a specific off-center point |
| **Orbit** | Move in a circle around an external point |

### Non-Linear Deformation
| Verb | Meaning |
|------|---------|
| **Warp** | Distort through a non-linear field |
| **Bend** | Curve along an axis |
| **Twist** | Rotate progressively along an axis |
| **Taper** | Scale progressively along an axis |
| **Bulge** | Expand outward from center |
| **Pinch** | Contract inward toward center |
| **Squeeze** | Compress along one axis, expand along another |
| **Inflate** | Push surface outward along normals |
| **Deflate** | Pull surface inward along normals |
| **Ripple** | Apply wave-based displacement |
| **Wave** | Apply sinusoidal deformation |
| **Displace** | Offset positions using a map or function |
| **Perturb** | Add small random offsets |
| **Jitter** | Apply frame-to-frame random displacement |
| **Noise-deform** | Displace using a noise function |
| **Distort** | Apply any non-uniform positional change |
| **Morph** | Smoothly transition between two shapes |
| **Interpolate** | Blend between two states by a parameter |
| **Relax** | Iteratively smooth toward equilibrium |
| **Smooth** | Reduce sharpness or detail |
| **Sharpen** | Increase contrast of detail |
| **Erode** | Remove material from edges or surface |
| **Dilate** | Add material to edges or surface |
| **Fracture** | Break into disconnected pieces |
| **Crumple** | Irregular compression deformation |
| **Melt** | Gravity-driven downward deformation |
| **Explode** | Separate pieces outward from center |

---

## 4. ANIMATE & TIME

*Changing anything over time.*

| Verb | Meaning |
|------|---------|
| **Animate** | Change any property over time |
| **Ease** | Apply non-linear acceleration/deceleration to a transition |
| **Tween** | Interpolate between two values over a duration |
| **Lerp** | Linear interpolation between values |
| **Slerp** | Spherical interpolation (for rotations) |
| **Spring** | Animate with overshoot and settling (damped oscillation) |
| **Oscillate** | Move back and forth periodically |
| **Pulse** | Rhythmic on/off or intensity variation |
| **Breathe** | Slow, organic oscillation (scale, opacity, etc.) |
| **Beat** | Sharp rhythmic impulse |
| **Tick** | Discrete stepped progression |
| **Sweep** | Move a value from one extreme to another |
| **Cycle** | Loop through a range of values |
| **Ping-pong** | Cycle back and forth (forward then reverse) |
| **Loop** | Repeat from beginning when end is reached |
| **Stagger** | Offset timing across multiple elements |
| **Cascade** | Trigger elements in sequence with delay |
| **Ripple** | Trigger elements radiating outward from a point |
| **Sequence** | Play through a series of states |
| **Keyframe** | Define specific values at specific times |
| **Transition** | Smoothly change from one state to another |
| **Crossfade** | Fade out one thing while fading in another |
| **Trigger** | Start an action based on an event |
| **Schedule** | Plan an action for a future time |
| **Delay** | Wait before executing |
| **Queue** | Line up actions to execute in order |
| **Accumulate** | Build up a value over many frames |
| **Decay** | Reduce a value over time |
| **Freeze** | Pause time progression |
| **Scrub** | Manually move through time (timeline control) |
| **Rewind** | Go backward in time |
| **Advance** | Step forward in time |
| **Tempo** | Set the rate of time-based events |
| **Sync** | Align timing of multiple elements |
| **Phase** | Offset the starting point of a periodic motion |
| **Entrain** | Gradually synchronize independent oscillators |
| **Modulate** | Vary a parameter using another signal over time |
| **Envelope** | Shape a value with attack, sustain, decay, release |
| **Ramp** | Linearly increase or decrease over time |
| **Step** | Jump between discrete values |
| **Glide** | Smooth transition between discrete values (portamento) |

---

## 5. SPACE & GEOMETRY

*Working with shapes, points, lines, surfaces, and volumes.*

### Points & Vectors
| Verb | Meaning |
|------|---------|
| **Plot** | Place a point at coordinates |
| **Scatter** | Distribute points with randomness |
| **Grid** | Arrange points in regular rows and columns |
| **Hex-grid** | Arrange in a hexagonal lattice |
| **Poisson-disk** | Distribute with minimum spacing (blue noise) |
| **Cluster** | Group points in dense pockets |
| **Jitter** | Offset grid points randomly |
| **Relax** | Iteratively even out point spacing |
| **Project** | Flatten 3D points onto a 2D plane |
| **Unproject** | Convert 2D screen coordinates to 3D world |
| **Measure** | Compute distance between points |
| **Normalize** | Scale a vector to unit length |
| **Dot** | Compute alignment between two vectors |
| **Cross** | Compute perpendicular vector from two vectors |

### Lines & Curves
| Verb | Meaning |
|------|---------|
| **Connect** | Draw a line between two points |
| **Chain** | Connect points in sequential order |
| **Spline** | Fit a smooth curve through points |
| **Bezier** | Create a curve with control points |
| **Interpolate** | Find positions between defined points |
| **Subdivide** | Add midpoints to refine a curve or mesh |
| **Simplify** | Reduce points while preserving shape |
| **Resample** | Redistribute points evenly along a curve |
| **Offset** | Create a parallel curve at a distance |
| **Fillet** | Round sharp corners |
| **Chamfer** | Bevel sharp corners flat |
| **Trim** | Cut a curve at intersection points |
| **Extend** | Lengthen a curve beyond its endpoint |
| **Close** | Connect the last point back to the first |
| **Dash** | Break a continuous line into segments |
| **Taper** | Vary line weight along its length |

### Shapes & Surfaces
| Verb | Meaning |
|------|---------|
| **Triangulate** | Divide a shape into triangles |
| **Voronoi** | Partition space by nearest seed point |
| **Delaunay** | Triangulate a point set maximizing minimum angle |
| **Boolean** | Combine shapes with union, subtract, intersect |
| **Union** | Merge overlapping shapes |
| **Subtract** | Cut one shape from another |
| **Intersect** | Keep only overlapping region |
| **Convex-hull** | Find the smallest convex shape enclosing points |
| **Contour** | Extract a line where a field equals a threshold |
| **Isosurface** | Extract a surface where a 3D field equals a threshold |
| **March** | Step through a field to find boundaries (marching squares/cubes) |
| **Raymarch** | Step along a ray to find surfaces (SDF rendering) |
| **Voxelize** | Convert a shape to a 3D pixel grid |
| **Mesh** | Create a polygon surface from data |
| **Remesh** | Rebuild a mesh with new topology |
| **Decimate** | Reduce polygon count |
| **Subdivide** | Increase polygon count with smoothing |
| **Catmull-Clark** | Subdivision surface smoothing |
| **Dual** | Convert faces to vertices and vice versa |
| **Shell** | Hollow out a solid shape |
| **Thicken** | Give a surface volume |
| **Slice** | Cut a 3D shape with a plane |
| **Section** | Extract the cross-section profile of a shape |
| **Unfold** | Flatten a 3D surface into 2D |
| **Wrap** | Deform a flat shape onto a surface |

### Signed Distance Fields
| Verb | Meaning |
|------|---------|
| **Define** | Create an SDF primitive (sphere, box, torus, etc.) |
| **Combine** | Merge SDFs with boolean operations |
| **Smooth-union** | Blend SDFs with rounded transitions |
| **Elongate** | Stretch an SDF along an axis |
| **Round** | Add radius to SDF edges |
| **Onion** | Create concentric shells from an SDF |
| **Repeat** | Infinitely tile an SDF through space |
| **Domain-warp** | Distort the input space before evaluating |

---

## 6. COLOR & LIGHT

*Working with color, luminance, and illumination.*

### Color Operations
| Verb | Meaning |
|------|---------|
| **Color** | Assign a color value |
| **Tint** | Shift toward a hue |
| **Shade** | Darken a color |
| **Tone** | Add gray to a color |
| **Saturate** | Intensify a color |
| **Desaturate** | Remove color intensity toward gray |
| **Invert** | Flip to complementary color |
| **Complement** | Find the opposite on the color wheel |
| **Harmonize** | Select colors using color theory rules |
| **Palette** | Define a set of coordinated colors |
| **Quantize** | Reduce to a limited number of colors |
| **Dither** | Simulate missing colors with patterned dots |
| **Posterize** | Reduce to flat bands of color |
| **Gradient** | Blend smoothly between colors |
| **Map** | Assign colors based on data values |
| **Ramp** | Look up color from a 1D gradient by parameter |
| **HSL-shift** | Rotate hue, adjust saturation/lightness |
| **Gamma** | Adjust midtone brightness |
| **Contrast** | Increase difference between light and dark |
| **Levels** | Remap black/white/midtone points |
| **Curves** | Remap brightness using a custom curve |
| **Threshold** | Convert to black or white at a cutoff |
| **Clamp** | Limit color values to a range |
| **Normalize** | Scale color range to 0–1 |
| **Blend** | Mix two colors by a factor |
| **Overlay** | Combine colors using a blend mode |
| **Multiply** | Darken by multiplying color values |
| **Screen** | Lighten by inverting, multiplying, inverting |
| **Add** | Brighten by adding color values |
| **Difference** | Subtract colors for psychedelic effect |

### Lighting
| Verb | Meaning |
|------|---------|
| **Illuminate** | Apply light to a surface |
| **Shadow** | Darken areas blocked from light |
| **Ambient** | Apply uniform base light |
| **Diffuse** | Light based on surface angle to light source |
| **Specular** | Bright highlight from light reflection |
| **Emit** | Surface generates its own light |
| **Reflect** | Mirror environment on surface |
| **Refract** | Bend light through transparent material |
| **Scatter** | Light disperses through a volume (fog, skin) |
| **Occlude** | Darken crevices (ambient occlusion) |
| **Bloom** | Bright areas bleed light outward |
| **Glow** | Soft light emission around bright objects |
| **Caustic** | Focused light patterns from refraction |
| **Godrays** | Volumetric light beams through atmosphere |
| **Rim-light** | Edge lighting from behind |
| **Fresnel** | Vary reflection/transparency by viewing angle |

---

## 7. IMAGE & TEXTURE

*Working with pixel data, images, and texture maps.*

### Pixel Operations
| Verb | Meaning |
|------|---------|
| **Sample** | Read a value from a texture at coordinates |
| **Write** | Store a value to a texture at coordinates |
| **Blend** | Mix pixel values from multiple sources |
| **Composite** | Layer images with blend modes and masks |
| **Mask** | Show/hide regions using another image |
| **Crop** | Remove outer portions of an image |
| **Pad** | Add empty space around an image |
| **Resize** | Change pixel dimensions |
| **Tile** | Repeat a texture to fill space |
| **Wrap** | Tile seamlessly at edges |
| **Clamp** | Stop at edge color instead of tiling |
| **Mirror** | Reflect at edges instead of tiling |
| **Scroll** | Offset texture coordinates over time |
| **Pan** | Translate the view across an image |
| **Zoom** | Scale the view into or out of an image |

### Filtering & Processing
| Verb | Meaning |
|------|---------|
| **Blur** | Average neighboring pixels (Gaussian, box, etc.) |
| **Sharpen** | Enhance edges and detail |
| **Edge-detect** | Find boundaries between regions (Sobel, Canny) |
| **Emboss** | Create a raised/stamped appearance |
| **Erode** | Shrink bright/white regions |
| **Dilate** | Expand bright/white regions |
| **Open** | Erode then dilate (remove small bright spots) |
| **Close** | Dilate then erode (fill small dark gaps) |
| **Convolve** | Apply a kernel filter (custom neighborhood operation) |
| **Median** | Replace each pixel with neighborhood median |
| **Denoise** | Remove noise while preserving detail |
| **Downsample** | Reduce resolution |
| **Upsample** | Increase resolution |
| **Mipmap** | Generate a chain of progressively smaller versions |
| **Feedback** | Use previous frame's output as current input |
| **Accumulate** | Layer frames over time |
| **Difference** | Highlight changes between frames |
| **Optical-flow** | Estimate motion between frames |
| **Threshold** | Convert to binary based on brightness |
| **Segment** | Divide into distinct regions |
| **Contour** | Find edges of segmented regions |
| **Histogram** | Analyze distribution of brightness/color |
| **Equalize** | Redistribute brightness for full range |
| **LUT** | Remap all colors through a lookup table |
| **Tonemap** | Compress HDR to displayable range |

### Texture Generation
| Verb | Meaning |
|------|---------|
| **Noise** | Generate coherent random texture (Perlin, Worley, etc.) |
| **Fractal** | Layer noise at multiple frequencies (fBm) |
| **Voronoi** | Generate cell-based texture from seed points |
| **Checkerboard** | Generate alternating pattern |
| **Stripe** | Generate parallel band pattern |
| **Dot** | Generate regular dot pattern |
| **Halftone** | Convert continuous tone to dot pattern |
| **Reaction-diffuse** | Generate organic patterns (Turing, Gray-Scott) |
| **Worley** | Generate cellular noise (distance to nearest seed) |
| **Turbulence** | Absolute-value layered noise for fire/cloud look |
| **Marble** | Sine function distorted by noise |
| **Wood** | Concentric rings distorted by noise |
| **Caustic** | Overlapping refracted light patterns |

---

## 8. AUDIO & SIGNAL

*Working with sound, frequency, and signal processing.*

| Verb | Meaning |
|------|---------|
| **Oscillate** | Generate a periodic waveform (sine, saw, square, triangle) |
| **Modulate** | Vary one signal using another (AM, FM, ring) |
| **Filter** | Remove frequency content (lowpass, highpass, bandpass) |
| **Resonate** | Amplify specific frequencies |
| **Envelope** | Shape amplitude over time (ADSR) |
| **Trigger** | Start a sound event |
| **Sequence** | Play events in timed order |
| **Quantize** | Snap timing to a grid |
| **Arpeggio** | Play notes in sequence from a chord |
| **Harmonize** | Add pitched copies at intervals |
| **Detune** | Slightly offset pitch copies for thickness |
| **Chorus** | Layer slightly varied copies for width |
| **Delay** | Repeat a signal after a time offset |
| **Reverb** | Simulate reflections in a space |
| **Distort** | Clip or warp the waveform |
| **Saturate** | Soft-clip for warmth |
| **Compress** | Reduce dynamic range |
| **Expand** | Increase dynamic range |
| **Gate** | Silence signal below a threshold |
| **FFT** | Convert time-domain to frequency-domain |
| **IFFT** | Convert frequency-domain back to time-domain |
| **Spectral-analyze** | Extract frequency bands for visualization |
| **Beat-detect** | Identify rhythmic impulses |
| **Onset-detect** | Find the start of new sounds |
| **Pitch-detect** | Identify the fundamental frequency |
| **Granulate** | Chop audio into tiny grains and reassemble |
| **Time-stretch** | Change duration without affecting pitch |
| **Pitch-shift** | Change pitch without affecting duration |
| **Convolve** | Apply impulse response (reverb, character) |
| **Vocalize** | Shape noise using formant filters |
| **Synthesize** | Build sound from components |
| **Sonify** | Convert data into sound |
| **Visualize** | Convert audio features into graphics |
| **Spatialize** | Position sound in 3D space |

---

## 9. DATA & LOGIC

*Working with values, collections, and decision-making.*

### Values
| Verb | Meaning |
|------|---------|
| **Map** | Remap a value from one range to another |
| **Clamp** | Constrain a value within min/max |
| **Wrap** | Overflow back to start of range |
| **Normalize** | Scale to 0–1 range |
| **Quantize** | Snap to discrete steps |
| **Round** | Snap to nearest integer |
| **Floor** | Snap down to integer |
| **Ceiling** | Snap up to integer |
| **Abs** | Take absolute value |
| **Sign** | Extract only the sign (+1, 0, -1) |
| **Saturate** | Clamp to 0–1 |
| **Step** | Return 0 or 1 based on threshold |
| **Smoothstep** | Smooth hermite threshold |
| **Lerp** | Linear interpolation |
| **Mix** | Blend by factor (same as lerp) |
| **Modulo** | Remainder after division (wrapping) |
| **Fract** | Fractional part of a number |
| **Pow** | Raise to a power (contrast curves) |
| **Exp** | Exponential growth/decay |
| **Log** | Logarithmic compression |
| **Sin/Cos** | Circular periodic functions |
| **Atan2** | Angle from coordinates |
| **Hash** | Deterministic pseudo-random from input |
| **Noise** | Coherent pseudo-random value at coordinates |

### Collections
| Verb | Meaning |
|------|---------|
| **Sort** | Order elements by a property |
| **Shuffle** | Randomize order |
| **Filter** | Keep elements matching a condition |
| **Reject** | Remove elements matching a condition |
| **Select** | Choose specific elements by index or criteria |
| **Slice** | Extract a sub-range |
| **Chunk** | Divide into groups of N |
| **Flatten** | Collapse nested collections into one level |
| **Zip** | Combine two collections element-by-element |
| **Reduce** | Collapse collection to single value (sum, min, max) |
| **Accumulate** | Running total across collection |
| **Deduplicate** | Remove repeated elements |
| **Interleave** | Alternate elements from multiple collections |
| **Reverse** | Flip order |
| **Rotate** | Shift elements cyclically |
| **Stack** | Combine collections end-to-end |
| **Spread** | Distribute a range of values across a collection |
| **Pair** | Group elements into twos |
| **Window** | Sliding sub-collection across elements |
| **Sparse** | Keep only non-default entries |

### Logic & Flow
| Verb | Meaning |
|------|---------|
| **Branch** | Take one of two paths based on condition |
| **Switch** | Select from multiple options |
| **Toggle** | Flip between two states |
| **Gate** | Pass or block a signal based on condition |
| **Latch** | Store a value until explicitly updated |
| **Count** | Track how many times something occurs |
| **Compare** | Test relationships (greater, less, equal) |
| **Threshold** | Trigger when a value crosses a level |
| **Debounce** | Ignore rapid repeated triggers |
| **Sample-and-hold** | Capture a value at a trigger moment |
| **Bang** | Single-frame impulse signal |
| **Iterate** | Repeat a process with incrementing index |
| **Recurse** | A process that calls itself |
| **Map (functional)** | Apply a function to every element |
| **Fold** | Accumulate elements using a function |

---

## 10. INPUT & INTERACTION

*Sensing the world and responding to it.*

### Human Input
| Verb | Meaning |
|------|---------|
| **Click** | Respond to discrete press event |
| **Drag** | Track continuous press-and-move |
| **Hover** | Detect proximity without contact |
| **Scroll** | Respond to wheel or swipe input |
| **Pinch** | Two-finger scale gesture |
| **Swipe** | Quick directional gesture |
| **Type** | Receive keyboard text input |
| **Press** | Detect key-down events |
| **Release** | Detect key-up events |
| **Touch** | Respond to screen contact |
| **Gesture** | Recognize complex multi-point patterns |
| **Voice** | Respond to spoken input |
| **Gaze** | Track where someone is looking |

### Sensing
| Verb | Meaning |
|------|---------|
| **Capture** | Grab a frame from a camera or sensor |
| **Track** | Follow a detected feature over time |
| **Detect** | Find features (faces, hands, poses, markers) |
| **Segment** | Separate foreground from background |
| **Depth-sense** | Measure distance per pixel (Kinect, LiDAR) |
| **Skeleton** | Extract body joint positions |
| **Recognize** | Classify detected input (object, gesture, speech) |
| **Calibrate** | Establish coordinate mapping between systems |
| **Poll** | Check sensor state at regular intervals |
| **Listen** | Continuously monitor for input events |
| **Threshold** | Convert continuous sensor to binary |
| **Smooth** | Filter noisy sensor data |
| **Predict** | Estimate future state from sensor history |

### Networking & Communication
| Verb | Meaning |
|------|---------|
| **Send** | Transmit data to another system |
| **Receive** | Accept data from another system |
| **Broadcast** | Send to all connected systems |
| **Subscribe** | Register to receive specific messages |
| **Stream** | Continuous real-time data transmission |
| **Handshake** | Establish connection between systems |
| **Serialize** | Convert data to transmittable format |
| **Parse** | Convert received data back to usable format |
| **OSC** | Send/receive Open Sound Control messages |
| **MIDI** | Send/receive musical instrument messages |
| **DMX** | Send lighting control data |
| **Artnet** | Send DMX over network |
| **Syphon/Spout** | Share textures between applications |
| **NDI** | Share video over network |

---

## 11. SIMULATION & PHYSICS

*Modeling real-world behavior.*

### Particle & Dynamics
| Verb | Meaning |
|------|---------|
| **Simulate** | Step a physical system forward in time |
| **Integrate** | Update position from velocity, velocity from force |
| **Collide** | Detect and respond to contact |
| **Bounce** | Reflect velocity off a surface |
| **Attract** | Pull toward a point |
| **Repel** | Push away from a point |
| **Spring** | Apply elastic restoring force |
| **Damp** | Reduce energy over time |
| **Constrain** | Enforce distance, angle, or position limits |
| **Solve** | Find values that satisfy constraints |
| **Verlet** | Position-based integration (stable for cloth, strings) |
| **Euler** | Simple velocity-based integration |
| **Runge-Kutta** | Higher-accuracy integration |

### Fluid & Continuum
| Verb | Meaning |
|------|---------|
| **Advect** | Transport values through a velocity field |
| **Diffuse** | Spread values to neighbors over time |
| **Project** | Make a velocity field divergence-free |
| **Vortex** | Add rotational energy |
| **Dissipate** | Gradually reduce energy in a field |
| **Buoy** | Apply density-dependent vertical force |
| **Viscose** | Apply thickness-based resistance |
| **Turbulate** | Add noise-based disruption to a field |
| **Pressure-solve** | Compute pressure to enforce incompressibility |
| **Boundary** | Enforce field conditions at edges |

### Agent & Behavior
| Verb | Meaning |
|------|---------|
| **Seek** | Steer toward a target |
| **Flee** | Steer away from a threat |
| **Arrive** | Seek with deceleration near target |
| **Wander** | Random gentle steering changes |
| **Flock** | Follow separation/alignment/cohesion rules |
| **Avoid** | Steer around obstacles |
| **Follow** | Trail behind a leader |
| **Lead** | Guide a group |
| **Patrol** | Move between waypoints |
| **Graze** | Slow random movement within a territory |
| **Swarm** | Dense collective movement toward a goal |
| **Migrate** | Long-distance collective travel |
| **Forage** | Seek resources, return to base |
| **React** | Change behavior based on environment |
| **Communicate** | Share information between agents |
| **Stigmerge** | Leave environmental traces that influence others |

---

## 12. STRUCTURE & PATTERN

*Organizing elements into meaningful arrangements.*

### Repetition
| Verb | Meaning |
|------|---------|
| **Repeat** | Duplicate at regular intervals |
| **Array** | Arrange in a grid |
| **Radial** | Arrange around a center point |
| **Spiral** | Arrange along an expanding rotational path |
| **Stack** | Layer vertically |
| **Nest** | Place inside each other |
| **Fractal** | Self-similar repetition at decreasing scale |
| **L-system** | Generate branching patterns from string rewriting |
| **Phyllotaxis** | Spiral arrangement following golden angle |
| **Modular** | Combine standard units into larger wholes |

### Topology & Relationship
| Verb | Meaning |
|------|---------|
| **Connect** | Establish a link between elements |
| **Graph** | Build a network of nodes and edges |
| **Tree** | Organize in hierarchical branching |
| **Cycle** | Create circular connections |
| **Neighbor** | Identify elements adjacent in space |
| **Cluster** | Group by proximity or similarity |
| **Partition** | Divide into non-overlapping groups |
| **Boundary** | Identify edges between regions |
| **Bridge** | Connect across separate groups |
| **Prune** | Remove branches or connections |
| **Graft** | Attach a sub-structure onto another |
| **Merge** | Combine separate structures |
| **Split** | Divide one structure into multiple |

### Layout
| Verb | Meaning |
|------|---------|
| **Pack** | Fit shapes tightly together |
| **Bin-pack** | Efficiently fill rectangles into a container |
| **Treemap** | Nested area-proportional rectangles |
| **Force-direct** | Arrange by spring/repulsion simulation |
| **Flow-layout** | Wrap elements to fit a width |
| **Justify** | Distribute space evenly |
| **Align** | Match edges or centers |
| **Distribute** | Space evenly between bounds |
| **Anchor** | Fix position relative to a reference |
| **Float** | Position based on available space |
| **Dock** | Attach to an edge |
| **Center** | Position at the middle |
| **Margin** | Add space around the outside |
| **Pad** | Add space inside the boundary |

---

## 13. TEXT & TYPOGRAPHY

*Working with letterforms, text layout, and language.*

| Verb | Meaning |
|------|---------|
| **Set** | Compose text with typeface and size |
| **Kern** | Adjust spacing between specific letter pairs |
| **Track** | Adjust uniform spacing across all letters |
| **Lead** | Adjust vertical line spacing |
| **Justify** | Align text to both margins |
| **Rag** | Let text end naturally at one margin |
| **Wrap** | Break text to fit a width |
| **Hyphenate** | Break words at syllables |
| **Indent** | Offset the first line of a paragraph |
| **Drop-cap** | Enlarge the first letter |
| **Outline** | Convert text to vector paths |
| **Shatter** | Break letterforms into pieces |
| **Extrude** | Give flat text 3D depth |
| **Deform** | Bend or warp text along a path |
| **Reveal** | Progressively show text (typewriter, decode) |
| **Glitch** | Corrupt text display (swap characters, fragment) |
| **Scatter** | Disperse letters into particles |
| **Assemble** | Bring scattered elements into readable text |
| **Kinetic** | Animate text properties over time |
| **Parse** | Break text into structural components |
| **Tokenize** | Split text into individual words or characters |
| **Generate** | Produce text from rules (Markov, grammar, AI) |

---

## 14. SYSTEM & PIPELINE

*Managing the overall creative coding system.*

### Performance
| Verb | Meaning |
|------|---------|
| **Profile** | Measure execution time of components |
| **Optimize** | Reduce computational cost |
| **Cull** | Skip processing of invisible or irrelevant elements |
| **LOD** | Adjust detail based on distance or budget |
| **Batch** | Group operations for efficiency |
| **Cache** | Store computed results for reuse |
| **Pool** | Pre-allocate and reuse objects |
| **Parallelize** | Distribute work across multiple cores/threads |
| **Dispatch** | Send work to GPU compute shaders |
| **Throttle** | Limit rate of processing |
| **Budget** | Allocate processing time across systems |

### State & Memory
| Verb | Meaning |
|------|---------|
| **Initialize** | Set up starting state |
| **Reset** | Return to initial state |
| **Save** | Persist state to storage |
| **Load** | Restore state from storage |
| **Snapshot** | Capture current state |
| **Undo** | Revert to previous state |
| **Checkpoint** | Mark a restorable state |
| **Serialize** | Convert state to storable format |
| **Diff** | Compare two states |
| **Fork** | Create a divergent copy of state |
| **Clone** | Create an identical copy |
| **Swap** | Exchange two values or buffers |
| **Double-buffer** | Alternate between two copies for read/write |
| **Ping-pong** | Alternate processing between two buffers |

### Output & Export
| Verb | Meaning |
|------|---------|
| **Export** | Save output to a file |
| **Record** | Capture frames over time to video |
| **Screenshot** | Capture a single frame |
| **Print** | Send to a physical printer or plotter |
| **Plot** | Send vector paths to a pen plotter |
| **Fabricate** | Send to CNC, laser cutter, 3D printer |
| **Project** | Send to a projector or display |
| **Map** | Align projected output to physical surfaces |
| **Stream** | Send live output over network |
| **Embed** | Place output within a larger system (web, app) |
| **Archive** | Store output for long-term preservation |
| **Version** | Track iterations of output |

---

## 15. META & CREATIVE PROCESS

*Verbs about the act of creative coding itself.*

| Verb | Meaning |
|------|---------|
| **Sketch** | Quickly prototype an idea in code |
| **Experiment** | Try variations to discover behavior |
| **Parameterize** | Expose controls to explore variation |
| **Randomize** | Explore the possibility space |
| **Curate** | Select the best outputs from a generative process |
| **Constrain** | Limit the system to produce focused results |
| **Iterate** | Refine through repeated cycles |
| **Fork** | Branch off a new direction from existing work |
| **Refactor** | Restructure code without changing behavior |
| **Abstract** | Extract reusable patterns from specific code |
| **Modularize** | Break into composable pieces |
| **Document** | Record how and why something works |
| **Share** | Publish code, process, or results |
| **Remix** | Build on someone else's work |
| **Port** | Adapt work to a different platform or language |
| **Scale** | Adapt work from small to large (screen to building, etc.) |
| **Site** | Adapt work to a specific physical location |
| **Collaborate** | Work on a system with others |
| **Commission** | Create work for a specific brief |
| **Install** | Set up work in a physical space |
| **Perform** | Control a system live for an audience |

---

## Verb Chaining: Design Recipes

### Generative Poster
Generate (grid) → Jitter → Noise-deform → Cull → Connect (neighbors) → Stroke (varying weight) → Color (palette) → Tint → Composite → Export

### Audio-Reactive Installation
Capture (mic) → FFT → Spectral-analyze → Map (bands to parameters) → Generate (geometry) → Displace (by amplitude) → Color-shift (by frequency) → Bloom → Project → Map (to surface)

### Data Sculpture
Parse (CSV) → Normalize → Map (to position) → Extrude (by value) → Color (by category) → Illuminate → Shadow → Rotate (slow) → Export (STL) → Fabricate (3D print)

### Generative Typography
Tokenize (text) → Set (typeface) → Outline (to paths) → Scatter (points on paths) → Simulate (physics) → Spring (back to letter positions) → Ease → Trail → Fade → Record

### Interactive Particle Wall
Depth-sense (Kinect) → Skeleton → Track (hands) → Attract (particles to hands) → Flock → Trail → Color-shift (by velocity) → Bloom → Project (on wall)

### Reaction-Diffusion Growth
Initialize (seed pattern) → Reaction-diffuse (Gray-Scott) → Iterate (1000s of steps) → Contour → Offset (multiple distances) → Hatch → Taper (line weight) → Export (SVG) → Plot (pen plotter)

### Glitch Art
Capture (video) → Serialize (raw bytes) → Corrupt (offset, swap, inject) → Parse (back to image) → Feedback → Blend (with original) → Posterize → Datamosh → Record

### Procedural Landscape
Noise (multi-octave) → Erode (hydraulic simulation) → Isosurface → Texture (biome by altitude) → Illuminate (sun angle) → Scatter (trees by density) → Fog (depth-based) → Render

### Live Coded Performance
Oscillate (waveform) → Filter (lowpass) → Envelope (ADSR) → Sequence (pattern) → Sonify → FFT → Map (spectrum to visuals) → Generate (geometry) → Displace → Bloom → Present

### Pen Plotter Artwork
Generate (L-system tree) → Recurse (5 levels) → Smooth (spline) → Offset (multiple weights) → Clip (to page) → Sort (optimize travel) → Dash (pen style) → Export (SVG) → Plot

---

## Quick Reference: Verb Frequency by Domain

### If you work with **2D graphics**
Draw, Stroke, Fill, Gradient, Noise, Transform, Tile, Hatch, Stipple, Blend, Composite, Mask, Export

### If you work with **3D / realtime**
Render, Instance, Extrude, Mesh, Raymarch, Illuminate, Shadow, Bloom, Displace, Simulate, Dispatch, Cull, LOD

### If you work with **data visualization**
Parse, Normalize, Map, Quantize, Color, Scale, Layout, Align, Distribute, Annotate, Animate, Transition, Export

### If you work with **installations**
Capture, Detect, Track, Calibrate, Map, Project, Spatialize, Send, Receive, Stream, Install, Perform, Budget

### If you work with **generative art**
Generate, Seed, Noise, Recurse, Iterate, Evolve, Parameterize, Randomize, Curate, Constrain, Tile, Scatter, Grow

### If you work with **audio/visual**
Oscillate, FFT, Beat-detect, Map, Modulate, Envelope, Trigger, Sequence, Sync, Visualize, Bloom, Pulse

### If you work with **physical output**
Vectorize, Simplify, Offset, Clip, Sort, Hatch, Stipple, Export, Plot, Fabricate, Unfold, Section, Slice

---

*Name the verb. Then build the node. Then chain the verbs. That's creative coding.*