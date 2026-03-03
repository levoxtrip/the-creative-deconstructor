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

# Software Engineering Verb Lexicon
## A Working Vocabulary for Building Complex Programs Across Frameworks

---

## How to Use This List

Building software is an act of continuous decision-making expressed through verbs. Before you write a line of code, you **architect**. Before you ship, you **test, profile, deploy**. This list covers the full lifecycle — from thinking about a system to running it in production — organized by what you're actually *doing* at each stage. It spans paradigms (OOP, functional, reactive, ECS, visual) and scales (microcontroller to distributed cloud).

---

## 1. ARCHITECT & DESIGN

*Decisions made before and during coding that shape the system.*

### System Design
| Verb | Meaning |
|------|---------|
| **Architect** | Define the high-level structure and boundaries of a system |
| **Design** | Plan how components will work and interact |
| **Model** | Create an abstract representation of a domain |
| **Diagram** | Visually map components and their relationships |
| **Prototype** | Build a minimal version to test feasibility |
| **Spike** | Time-boxed experiment to explore a technical unknown |
| **Spec** | Write a formal description of expected behavior |
| **Scope** | Define what is and isn't included in the system |
| **Decompose** | Break a large problem into smaller sub-problems |
| **Partition** | Divide a system into independent sections |
| **Modularize** | Organize into self-contained, reusable units |
| **Layer** | Organize into stacked levels of abstraction |
| **Tier** | Separate into deployment-level divisions (client/server/data) |
| **Decouple** | Remove direct dependencies between components |
| **Couple** | Intentionally bind components that must stay in sync |
| **Abstract** | Hide implementation details behind a simpler interface |
| **Encapsulate** | Bundle data and behavior together, restrict external access |
| **Interface** | Define a contract that implementations must satisfy |
| **Contract** | Establish formal agreements between components |
| **Constrain** | Limit what a component can do or accept |
| **Convention** | Establish team patterns that don't need enforcement |
| **Standardize** | Adopt shared formats, protocols, or structures |
| **Document** | Record decisions, APIs, and usage patterns |

### Patterns & Paradigms
| Verb | Meaning |
|------|---------|
| **Object-orient** | Organize around objects with state and behavior |
| **Functionalize** | Organize around pure functions and immutable data |
| **Reactify** | Organize around streams of events and state changes |
| **Component-ize** | Build from composable, self-contained UI/logic pieces |
| **Entity-component** | Separate identity, data, and behavior (ECS pattern) |
| **Event-source** | Store state as a sequence of events |
| **Command-query** | Separate read operations from write operations (CQRS) |
| **Pipeline** | Organize as a chain of processing stages |
| **Plugin** | Design for extensibility via add-on modules |
| **Middleware** | Insert processing steps in a request/response chain |
| **Microservice** | Split into small, independently deployable services |
| **Monolith** | Keep everything in a single deployable unit |
| **Serverless** | Design as stateless functions triggered by events |
| **Actor** | Organize around isolated units communicating via messages |
| **Blackboard** | Share state through a common knowledge store |
| **Dataflow** | Organize as nodes that process and pass data (visual programming) |
| **Signal** | Organize around reactive values that auto-propagate changes |

---

## 2. STRUCTURE & ORGANIZE CODE

*How you arrange code within a codebase.*

### Files & Modules
| Verb | Meaning |
|------|---------|
| **Module** | Group related code into a named unit |
| **Package** | Bundle modules for distribution |
| **Namespace** | Organize names to avoid collisions |
| **Import** | Bring external code into scope |
| **Export** | Make code available to other modules |
| **Re-export** | Pass through an import for convenience |
| **Alias** | Give an alternative name to an import or type |
| **Barrel** | Re-export multiple modules through a single index file |
| **Scaffold** | Generate boilerplate file structure |
| **Template** | Create from a pre-built starting pattern |
| **Nest** | Place modules inside other modules |
| **Flatten** | Remove unnecessary nesting levels |
| **Colocate** | Place related files together (test next to source, etc.) |
| **Split** | Divide one file or module into multiple |
| **Merge** | Combine multiple files or modules into one |
| **Extract** | Pull code out into its own module/function/class |
| **Inline** | Move code back into the calling context |
| **Isolate** | Ensure a module has no external side effects |

### Dependency Management
| Verb | Meaning |
|------|---------|
| **Depend** | Declare reliance on an external package |
| **Install** | Download and set up dependencies |
| **Lock** | Pin exact dependency versions for reproducibility |
| **Upgrade** | Move to a newer version of a dependency |
| **Downgrade** | Revert to an older version |
| **Vendor** | Copy dependencies into your project directly |
| **Tree-shake** | Remove unused code from dependencies in build |
| **Audit** | Check dependencies for vulnerabilities |
| **Pin** | Fix a dependency to a specific version |
| **Float** | Allow a dependency to resolve to latest compatible version |
| **Resolve** | Determine compatible versions across all dependencies |
| **Deduplicate** | Eliminate redundant copies of the same dependency |
| **Hoist** | Move shared dependencies to a common parent location |
| **Peer** | Declare that consumers must provide a dependency |
| **Shim** | Provide a compatibility layer for a missing dependency |
| **Polyfill** | Add missing functionality to an older environment |
| **Patch** | Modify a dependency locally without forking |
| **Fork** | Create your own copy of an external project |

---

## 3. DEFINE & DECLARE

*Bringing things into existence in code.*

### Types & Data
| Verb | Meaning |
|------|---------|
| **Declare** | State that something exists and its type |
| **Define** | Give a declaration its implementation |
| **Initialize** | Set the first value of a variable or object |
| **Assign** | Set or change a value |
| **Bind** | Associate a name with a value or function |
| **Type** | Annotate with a type constraint |
| **Typedef** | Create an alias for a type |
| **Struct** | Define a value type with named fields |
| **Enum** | Define a type with a fixed set of named values |
| **Union** | Define a type that can be one of several types |
| **Interface** | Define a shape that objects must conform to |
| **Protocol** | Define required methods/properties (Swift/Elixir term) |
| **Trait** | Define shared behavior that types can adopt (Rust term) |
| **Class** | Define a blueprint for objects with state and behavior |
| **Mixin** | Define reusable behavior to inject into classes |
| **Schema** | Define the shape of data (database, API, config) |
| **Model** | Define a data structure representing a domain concept |
| **Record** | Define an immutable data container |
| **Tuple** | Group a fixed number of heterogeneous values |
| **Generic** | Define a type or function parameterized by other types |
| **Constrain** | Restrict generic type parameters (where clauses, bounds) |
| **Derive** | Auto-generate implementations from type structure |
| **Newtype** | Wrap an existing type to give it a distinct identity |
| **Opaque** | Hide the internal structure of a type from consumers |

### Functions & Methods
| Verb | Meaning |
|------|---------|
| **Function** | Define a named, reusable block of logic |
| **Method** | Define a function attached to a type |
| **Lambda** | Define an anonymous inline function |
| **Closure** | Define a function that captures surrounding state |
| **Callback** | Define a function passed to another for later invocation |
| **Hook** | Define a function injected into a lifecycle (React, plugins) |
| **Handler** | Define a function that responds to an event |
| **Middleware** | Define a function that intercepts and processes in a chain |
| **Overload** | Define multiple versions of a function for different signatures |
| **Override** | Replace an inherited method with a new implementation |
| **Implement** | Provide the body for an interface or abstract method |
| **Extend** | Add new methods or behavior to an existing type |
| **Decorate** | Wrap a function to add behavior (logging, auth, caching) |
| **Curry** | Transform a multi-arg function into chained single-arg functions |
| **Compose** | Combine functions so output of one feeds input of next |
| **Partial** | Fix some arguments of a function, return a new function |
| **Thunk** | Wrap a computation in a zero-arg function for lazy evaluation |
| **Memoize** | Cache function results by input |
| **Guard** | Exit a function early if a condition isn't met |
| **Assert** | State a condition that must be true or throw |
| **Validate** | Check that input meets requirements before proceeding |
| **Sanitize** | Clean input to prevent injection or corruption |
| **Coerce** | Force a value into a different type |
| **Cast** | Convert a value's type explicitly |
| **Parse** | Convert a string or raw data into structured data |
| **Serialize** | Convert structured data into a string or bytes |
| **Marshal** | Convert data for transmission across a boundary |
| **Unmarshal** | Convert received data back to native structure |

---

## 4. CONTROL FLOW & EXECUTE

*Directing the order and conditions of execution.*

### Branching
| Verb | Meaning |
|------|---------|
| **Branch** | Take one of multiple paths based on a condition |
| **Switch** | Select from multiple named cases |
| **Match** | Pattern-match against shapes of data (Rust, Haskell, Elixir) |
| **Guard** | Short-circuit with an early return |
| **Fallthrough** | Continue to next case in a switch (when intentional) |
| **Default** | Provide a fallback when no case matches |
| **Coalesce** | Use the first non-null/non-empty value |
| **Ternary** | Inline if-else expression |
| **Short-circuit** | Stop evaluation once the result is determined |

### Iteration
| Verb | Meaning |
|------|---------|
| **Loop** | Repeat a block of code |
| **Iterate** | Visit each element in a collection |
| **Traverse** | Walk through a tree or graph structure |
| **Recurse** | Call a function from within itself |
| **Enumerate** | Iterate with an index counter |
| **Map** | Apply a function to each element, collect results |
| **Filter** | Keep elements that match a predicate |
| **Reduce** | Collapse a collection into a single value |
| **FlatMap** | Map then flatten nested results |
| **ForEach** | Execute a side effect for each element |
| **Scan** | Like reduce but emit intermediate results |
| **Fold** | Reduce with an explicit accumulator (functional term) |
| **Unfold** | Generate a sequence from a seed value |
| **Zip** | Combine two collections element-by-element |
| **Chain** | Concatenate multiple iterators/collections |
| **Take** | Get the first N elements |
| **Skip** | Ignore the first N elements |
| **Chunk** | Group elements into fixed-size batches |
| **Window** | Slide a fixed-size view across a collection |
| **Partition** | Split into two groups by a predicate |
| **GroupBy** | Collect elements into keyed buckets |
| **Distinct** | Remove duplicate values |
| **Sort** | Order by a key or comparator |
| **Reverse** | Flip the order |
| **Paginate** | Process or display in fixed-size pages |
| **Cursor** | Track position in a collection for incremental access |
| **Stream** | Process elements lazily as they become available |
| **Batch** | Process multiple elements together |
| **Drain** | Consume all remaining elements |

### Concurrency & Async
| Verb | Meaning |
|------|---------|
| **Async** | Mark a function as asynchronous |
| **Await** | Pause execution until a promise/future resolves |
| **Promise** | Represent a value that will exist in the future |
| **Resolve** | Fulfill a promise with a value |
| **Reject** | Fail a promise with an error |
| **Then** | Chain a handler onto a promise |
| **Race** | Resolve with whichever completes first |
| **All** | Wait for all promises to complete |
| **Any** | Resolve when any one succeeds |
| **Spawn** | Launch a new concurrent task/thread/process |
| **Join** | Wait for a spawned task to complete |
| **Fork** | Create a child process |
| **Yield** | Pause and give control back (generators, coroutines) |
| **Resume** | Continue a paused coroutine |
| **Channel** | Communicate between concurrent tasks via a queue |
| **Send** | Push a message into a channel |
| **Receive** | Pull a message from a channel |
| **Select** | Wait on multiple channels, take the first ready |
| **Lock** | Acquire exclusive access to a resource |
| **Unlock** | Release exclusive access |
| **Mutex** | Ensure only one thread accesses a section at a time |
| **Semaphore** | Limit concurrent access to a fixed count |
| **Atomic** | Perform an operation that cannot be interrupted |
| **CAS** | Compare-and-swap atomically (lock-free concurrency) |
| **Barrier** | Wait until all threads reach a synchronization point |
| **Throttle** | Limit how often a function can execute |
| **Debounce** | Wait for inactivity before executing |
| **Enqueue** | Add work to a queue for later processing |
| **Dequeue** | Remove and process work from a queue |
| **Schedule** | Plan execution for a specific time |
| **Poll** | Repeatedly check for readiness |
| **Notify** | Signal waiting tasks that a condition is met |
| **Subscribe** | Register to receive future events |
| **Publish** | Emit an event to all subscribers |
| **Broadcast** | Send to all listeners simultaneously |

---

## 5. DATA & STATE MANAGEMENT

*Storing, transforming, and moving data.*

### CRUD & Persistence
| Verb | Meaning |
|------|---------|
| **Create** | Insert a new record |
| **Read** | Retrieve existing data |
| **Update** | Modify existing data |
| **Delete** | Remove data |
| **Upsert** | Create if missing, update if exists |
| **Patch** | Partially update (only changed fields) |
| **Merge** | Combine new data with existing |
| **Replace** | Overwrite entirely |
| **Query** | Search data with conditions |
| **Index** | Build a lookup structure for fast retrieval |
| **Denormalize** | Duplicate data for faster reads |
| **Normalize** | Eliminate duplication via relationships |
| **Migrate** | Transform data from one schema to another |
| **Seed** | Populate a database with initial/test data |
| **Backup** | Copy data for recovery |
| **Restore** | Recover data from a backup |
| **Archive** | Move old data to long-term storage |
| **Purge** | Permanently delete historical data |
| **Truncate** | Remove all records from a table/collection |
| **Vacuum** | Reclaim storage after deletions |
| **Replicate** | Copy data across multiple nodes |
| **Shard** | Split data across multiple databases by key |
| **Partition** | Divide data into segments by range or hash |
| **Transaction** | Group operations into an atomic unit |
| **Commit** | Finalize a transaction |
| **Rollback** | Undo a transaction |
| **Snapshot** | Capture the current state of all data |

### State Management
| Verb | Meaning |
|------|---------|
| **Initialize** | Set default state |
| **Hydrate** | Populate state from persisted or server data |
| **Dehydrate** | Extract state for persistence or transfer |
| **Dispatch** | Send an action/event to a state manager |
| **Reduce** | Compute next state from current state + action |
| **Select** | Extract a specific piece from state |
| **Derive** | Compute a value from existing state |
| **Memoize** | Cache derived values until inputs change |
| **Subscribe** | Listen for state changes |
| **Notify** | Inform subscribers of state changes |
| **Bind** | Connect state to UI or other consumers |
| **Observe** | Watch a value and react to changes |
| **Signal** | Reactive primitive that auto-tracks dependencies |
| **Compute** | Derived value that auto-updates from signals |
| **Effect** | Side effect that runs when dependencies change |
| **Mutate** | Directly change state (mutable approach) |
| **Replace** | Swap entire state tree (immutable approach) |
| **Immer** | Mutate a draft that produces immutable updates |
| **Snapshot** | Capture state at a point in time |
| **Diff** | Compare two state snapshots |
| **Patch** | Apply a diff to transform state |
| **Undo** | Revert to previous state |
| **Redo** | Re-apply a reverted state change |
| **Persist** | Save state to survive restarts |
| **Sync** | Keep state consistent across sources |
| **Optimistic** | Update UI before server confirmation |
| **Reconcile** | Resolve conflicts between divergent states |
| **Normalize** | Flatten nested API data into indexed tables |
| **Invalidate** | Mark cached state as stale |
| **Refresh** | Re-fetch state from the source |
| **Reset** | Return state to initial values |

---

## 6. NETWORK & COMMUNICATE

*Sending and receiving data between systems.*

### HTTP & API
| Verb | Meaning |
|------|---------|
| **Request** | Send a message to a server |
| **Respond** | Send a reply to a request |
| **GET** | Retrieve a resource |
| **POST** | Submit new data |
| **PUT** | Replace a resource entirely |
| **PATCH** | Partially update a resource |
| **DELETE** | Remove a resource |
| **HEAD** | Retrieve headers only |
| **OPTIONS** | Query available methods |
| **Fetch** | Retrieve data from a URL |
| **Upload** | Send a file to a server |
| **Download** | Retrieve a file from a server |
| **Stream** | Send/receive data incrementally |
| **Paginate** | Retrieve data in pages |
| **Cursor** | Track position for incremental retrieval |
| **Webhook** | Receive push notifications via HTTP callback |
| **Poll** | Repeatedly check for new data |
| **Long-poll** | Hold connection open until data is available |
| **SSE** | Receive server-sent events over HTTP |
| **GraphQL** | Query exactly the data shape you need |
| **REST** | Access resources via standard HTTP methods |
| **RPC** | Call a remote function as if it were local |
| **gRPC** | Call remote functions via Protocol Buffers |

### Real-Time & Messaging
| Verb | Meaning |
|------|---------|
| **Connect** | Establish a persistent connection (WebSocket, TCP) |
| **Disconnect** | Close a connection |
| **Reconnect** | Re-establish a dropped connection |
| **Heartbeat** | Send periodic keepalive signals |
| **Ping** | Test if a connection is alive |
| **Pong** | Reply to a ping |
| **Emit** | Send a named event with payload |
| **Listen** | Register to receive specific events |
| **Broadcast** | Send to all connected clients |
| **Room** | Group connections for targeted broadcast |
| **Publish** | Send a message to a topic |
| **Subscribe** | Register to receive messages from a topic |
| **Unsubscribe** | Stop receiving messages from a topic |
| **Acknowledge** | Confirm receipt of a message |
| **Retry** | Re-attempt a failed transmission |
| **Queue** | Store messages for guaranteed delivery |
| **Dead-letter** | Route undeliverable messages for inspection |
| **Fan-out** | Distribute one message to many consumers |
| **Fan-in** | Aggregate messages from many producers |
| **Multiplex** | Share a single connection for multiple streams |
| **Demultiplex** | Separate a multiplexed stream into individual channels |

### Serialization & Protocol
| Verb | Meaning |
|------|---------|
| **Serialize** | Convert data to transmittable format (JSON, Protobuf, etc.) |
| **Deserialize** | Convert received format back to data |
| **Encode** | Transform data representation (Base64, URL-encode, etc.) |
| **Decode** | Reverse an encoding |
| **Compress** | Reduce data size for transmission |
| **Decompress** | Restore compressed data |
| **Encrypt** | Scramble data for security |
| **Decrypt** | Unscramble encrypted data |
| **Sign** | Attach proof of authenticity |
| **Verify** | Check a signature's validity |
| **Hash** | Produce a fixed-size fingerprint of data |
| **Checksum** | Verify data integrity after transfer |
| **Negotiate** | Agree on protocol version, encoding, or format |
| **Handshake** | Establish connection parameters |
| **Frame** | Package data into protocol-specific units |
| **Buffer** | Accumulate data before processing |
| **Flush** | Send all buffered data immediately |

---

## 7. ERROR & RESILIENCE

*Handling failure gracefully.*

### Error Handling
| Verb | Meaning |
|------|---------|
| **Try** | Attempt an operation that might fail |
| **Catch** | Handle a thrown error |
| **Throw** | Signal that an error has occurred |
| **Finally** | Execute cleanup regardless of success/failure |
| **Recover** | Return to a working state after an error |
| **Fallback** | Use an alternative when the primary fails |
| **Default** | Provide a value when the expected one is missing |
| **Retry** | Attempt the same operation again |
| **Backoff** | Increase delay between retries (exponential) |
| **Circuit-break** | Stop attempting after repeated failures |
| **Bulkhead** | Isolate failures to prevent cascade |
| **Timeout** | Abandon an operation after a time limit |
| **Cancel** | Abort an in-progress operation |
| **Abort** | Immediately terminate an operation |
| **Panic** | Unrecoverable crash (Rust, Go) |
| **Unwrap** | Extract a value from Result/Option, crash if absent |
| **Propagate** | Pass an error up to the caller |
| **Wrap** | Add context to an error before propagating |
| **Chain** | Link errors to preserve the full failure trace |
| **Escalate** | Promote a warning to an error |
| **Degrade** | Reduce functionality gracefully under failure |
| **Compensate** | Undo a partial operation (saga pattern) |

### Validation & Integrity
| Verb | Meaning |
|------|---------|
| **Validate** | Check data against rules before use |
| **Sanitize** | Clean input of dangerous content |
| **Escape** | Neutralize special characters |
| **Whitelist** | Allow only explicitly permitted values |
| **Blacklist** | Block explicitly forbidden values |
| **Constrain** | Enforce limits on values |
| **Assert** | Crash if a condition is false (development aid) |
| **Invariant** | Enforce a condition that must always be true |
| **Precondition** | Check requirements before execution |
| **Postcondition** | Check guarantees after execution |
| **Idempotent** | Ensure repeated execution produces the same result |
| **Normalize** | Standardize data format (trim, lowercase, etc.) |

---

## 8. TEST & VERIFY

*Proving that code works correctly.*

### Writing Tests
| Verb | Meaning |
|------|---------|
| **Unit-test** | Test a single function or class in isolation |
| **Integration-test** | Test multiple components working together |
| **End-to-end-test** | Test the full user flow |
| **Acceptance-test** | Verify that requirements are met |
| **Regression-test** | Verify that previously working code still works |
| **Smoke-test** | Quick check that the system starts and responds |
| **Stress-test** | Push the system to its limits |
| **Load-test** | Simulate many concurrent users |
| **Fuzz** | Feed random/malformed input to find crashes |
| **Snapshot-test** | Compare output against a saved reference |
| **Property-test** | Verify invariants across random inputs |
| **Contract-test** | Verify API agreements between services |
| **Mutation-test** | Change code and verify tests catch the change |
| **Visual-test** | Compare rendered screenshots for regressions |

### Test Mechanics
| Verb | Meaning |
|------|---------|
| **Arrange** | Set up preconditions (Given) |
| **Act** | Execute the thing being tested (When) |
| **Assert** | Check the result (Then) |
| **Mock** | Replace a dependency with a controlled fake |
| **Stub** | Return a predetermined response |
| **Spy** | Record how a dependency was called |
| **Fake** | Use a simplified but working implementation |
| **Fixture** | Create reusable test data |
| **Factory** | Generate test data with defaults and overrides |
| **Seed** | Initialize random test data reproducibly |
| **Isolate** | Ensure tests don't affect each other |
| **Teardown** | Clean up after a test |
| **Cover** | Measure how much code is exercised by tests |
| **Parameterize** | Run the same test with different inputs |
| **Skip** | Conditionally exclude a test |
| **Focus** | Run only specific tests during development |
| **Bench** | Measure performance of a code path |

---

## 9. BUILD & COMPILE

*Transforming source code into runnable output.*

### Compilation
| Verb | Meaning |
|------|---------|
| **Compile** | Transform source into machine code or bytecode |
| **Transpile** | Transform source from one language to another |
| **Interpret** | Execute source code directly without compilation |
| **JIT** | Compile at runtime for optimization |
| **AOT** | Compile before runtime for fast startup |
| **Link** | Connect compiled units into a final binary |
| **Bundle** | Combine modules into a single distributable file |
| **Minify** | Remove whitespace and shorten names for size |
| **Uglify** | Aggressively minify and obfuscate |
| **Sourcemap** | Generate mapping from minified back to original |
| **Tree-shake** | Remove unreachable code |
| **Dead-code-eliminate** | Remove code that can never execute |
| **Inline** | Replace function calls with their body (compiler optimization) |
| **Optimize** | Apply compiler transformations for speed/size |
| **Codegen** | Generate code from a schema, spec, or template |
| **Macro-expand** | Replace macros with their generated code |
| **Preprocess** | Transform source before compilation (C preprocessor, etc.) |
| **Cross-compile** | Compile for a different target platform |

### Build Pipeline
| Verb | Meaning |
|------|---------|
| **Build** | Run the full compilation and bundling pipeline |
| **Rebuild** | Build from scratch (clean + build) |
| **Incremental-build** | Recompile only changed files |
| **Watch** | Automatically rebuild on file changes |
| **Hot-reload** | Update running code without full restart |
| **Live-reload** | Restart the app automatically on changes |
| **Lint** | Check code for style and potential errors |
| **Format** | Auto-fix code style |
| **Type-check** | Verify type correctness without full compilation |
| **Pre-commit** | Run checks before allowing a commit |
| **CI** | Run build/test/lint automatically on push |
| **Artifact** | Produce a deployable output (binary, container, archive) |
| **Sign** | Cryptographically sign a build artifact |
| **Checksum** | Generate hash for artifact integrity verification |
| **Cache** | Store build intermediates for faster rebuilds |
| **Invalidate** | Mark cached build data as stale |
| **Parallelize** | Run independent build steps simultaneously |

---

## 10. DEPLOY & OPERATE

*Getting code running and keeping it running.*

### Deployment
| Verb | Meaning |
|------|---------|
| **Deploy** | Push built code to a running environment |
| **Release** | Make a deployment available to users |
| **Ship** | Deploy and release (colloquial) |
| **Rollout** | Gradually deploy to increasing percentages of users |
| **Canary** | Deploy to a tiny subset first to detect issues |
| **Blue-green** | Run two environments, switch traffic between them |
| **Rollback** | Revert to a previous deployment |
| **Hotfix** | Deploy an urgent fix outside the normal cycle |
| **Feature-flag** | Toggle features on/off without deploying |
| **Stage** | Deploy to a pre-production environment |
| **Promote** | Move a deployment from one environment to the next |
| **Provision** | Set up infrastructure resources |
| **Configure** | Set environment-specific parameters |
| **Containerize** | Package app + dependencies into a container image |
| **Orchestrate** | Manage multiple containers/services (Kubernetes) |
| **Scale** | Adjust the number of running instances |
| **Scale-up** | Add more resources to existing instances (vertical) |
| **Scale-out** | Add more instances (horizontal) |
| **Auto-scale** | Automatically adjust instances based on load |
| **Migrate** | Move between infrastructure or platforms |
| **Terraform** | Define infrastructure as code |

### Observability
| Verb | Meaning |
|------|---------|
| **Log** | Record events for later inspection |
| **Monitor** | Continuously track system health metrics |
| **Alert** | Notify when metrics exceed thresholds |
| **Trace** | Follow a request through multiple services |
| **Span** | Measure duration of a single operation in a trace |
| **Metric** | Emit numerical measurement (latency, count, gauge) |
| **Dashboard** | Visualize metrics in real-time |
| **Instrument** | Add measurement code to an application |
| **Profile** | Analyze where time and memory are spent |
| **Flame-graph** | Visualize call stack time distribution |
| **Audit** | Record who did what and when |
| **Health-check** | Verify a service is operational |
| **Ping** | Quick liveness check |
| **Probe** | Deep readiness or dependency check |
| **Page** | Wake someone up for a critical issue |
| **Postmortem** | Analyze what went wrong after an incident |
| **Runbook** | Follow documented steps for incident response |
| **Triage** | Assess and prioritize issues |

---

## 11. SECURITY & ACCESS

*Protecting systems and data.*

| Verb | Meaning |
|------|---------|
| **Authenticate** | Verify identity (who are you?) |
| **Authorize** | Check permissions (what can you do?) |
| **Login** | Establish an authenticated session |
| **Logout** | End an authenticated session |
| **Register** | Create a new account |
| **Token** | Issue a portable proof of authentication |
| **Refresh** | Get a new token before the old one expires |
| **Revoke** | Invalidate a token or permission |
| **Scope** | Limit what a token can access |
| **Elevate** | Temporarily increase permissions |
| **Impersonate** | Act on behalf of another user (admin tool) |
| **Encrypt** | Make data unreadable without a key |
| **Decrypt** | Restore encrypted data |
| **Hash** | One-way transform (passwords) |
| **Salt** | Add random data before hashing |
| **Sign** | Prove data hasn't been tampered with |
| **Verify** | Check a signature or certificate |
| **Rotate** | Replace keys or secrets on a schedule |
| **Vault** | Store secrets in a secure service |
| **Redact** | Remove sensitive data from logs or output |
| **Mask** | Partially hide sensitive data (card numbers, etc.) |
| **Sanitize** | Remove dangerous content from input |
| **Rate-limit** | Restrict requests per time period |
| **Throttle** | Slow down excessive requests |
| **Block** | Deny access entirely |
| **Allowlist** | Permit only specified origins/IPs/values |
| **Denylist** | Block specified origins/IPs/values |
| **CORS** | Control cross-origin resource sharing |
| **CSP** | Restrict what content can load on a page |
| **CSRF** | Protect against cross-site request forgery |
| **XSS** | Prevent cross-site scripting attacks |
| **Inject** | (What you prevent) Insertion of malicious code via input |
| **Pentest** | Attempt to breach your own security to find holes |
| **Harden** | Reduce attack surface of a system |

---

## 12. REFACTOR & MAINTAIN

*Improving existing code without changing behavior.*

### Refactoring Moves
| Verb | Meaning |
|------|---------|
| **Refactor** | Restructure code without changing behavior |
| **Rename** | Give clearer names to variables, functions, types |
| **Extract** | Pull code into its own function, class, or module |
| **Inline** | Move extracted code back to where it's used |
| **Move** | Relocate code to a more appropriate module |
| **Replace** | Swap one implementation for another |
| **Simplify** | Reduce complexity while preserving function |
| **Generalize** | Make specific code work for broader cases |
| **Specialize** | Make generic code more focused and efficient |
| **Normalize** | Remove duplication by extracting shared patterns |
| **DRY** | Don't Repeat Yourself — eliminate duplication |
| **WET** | Write Everything Twice — accept intentional duplication |
| **Decompose** | Break a large function into smaller ones |
| **Compose** | Build complex behavior from small functions |
| **Wrap** | Add a layer around existing code (adapter, decorator) |
| **Unwrap** | Remove an unnecessary layer |
| **Lift** | Move computation to a higher level of abstraction |
| **Lower** | Move computation to a lower level for performance |
| **Introduce** | Add a new concept (variable, type, function) for clarity |
| **Remove** | Delete dead code, unused parameters, etc. |
| **Collapse** | Merge similar branches or classes |
| **Expand** | Split a dense section for readability |
| **Parametrize** | Replace hardcoded values with configurable parameters |
| **Rewrite** | Start over for a section that can't be incrementally improved |

### Technical Debt
| Verb | Meaning |
|------|---------|
| **Identify** | Find problematic code patterns |
| **Annotate** | Mark code with TODO, FIXME, HACK, DEPRECATED |
| **Prioritize** | Rank debt items by impact and cost |
| **Budget** | Allocate time for debt reduction |
| **Strangler** | Gradually replace old code by wrapping and routing |
| **Deprecate** | Mark code for future removal |
| **Sunset** | Remove deprecated code after migration period |
| **Modernize** | Update to current idioms and practices |
| **Upgrade** | Move to newer library/framework versions |
| **Migrate** | Transform codebase structure (new architecture, language) |

---

## 13. VERSION & COLLABORATE

*Working with code history and other people.*

### Version Control
| Verb | Meaning |
|------|---------|
| **Init** | Create a new repository |
| **Clone** | Copy a remote repository locally |
| **Stage** | Mark changes for inclusion in next commit |
| **Commit** | Save staged changes with a message |
| **Amend** | Modify the most recent commit |
| **Push** | Send local commits to a remote |
| **Pull** | Download and merge remote changes |
| **Fetch** | Download remote changes without merging |
| **Branch** | Create a parallel line of development |
| **Checkout** | Switch to a different branch or commit |
| **Merge** | Combine two branches |
| **Rebase** | Replay commits on top of a different base |
| **Squash** | Combine multiple commits into one |
| **Cherry-pick** | Apply a specific commit from another branch |
| **Stash** | Temporarily shelve uncommitted changes |
| **Tag** | Mark a specific commit (usually for releases) |
| **Bisect** | Binary search through commits to find a bug |
| **Blame** | Show who last modified each line |
| **Diff** | Show changes between commits or files |
| **Revert** | Create a new commit that undoes a previous one |
| **Reset** | Move branch pointer to a different commit |
| **Force-push** | Overwrite remote history (dangerous) |
| **Protect** | Prevent direct pushes to important branches |

### Code Review & Collaboration
| Verb | Meaning |
|------|---------|
| **PR / MR** | Open a pull/merge request for review |
| **Review** | Examine code changes for quality and correctness |
| **Comment** | Leave feedback on specific code lines |
| **Approve** | Sign off that changes are ready to merge |
| **Request-changes** | Ask for modifications before merging |
| **Resolve** | Address review feedback |
| **Conflict** | Two changes affect the same code (need resolution) |
| **Pair** | Two people write code together simultaneously |
| **Mob** | Whole team writes code together |
| **Handoff** | Transfer responsibility for code to someone else |
| **Onboard** | Bring a new person up to speed on the codebase |
| **Ownership** | Assign long-term responsibility for a module |

---

## 14. PERFORMANCE & OPTIMIZE

*Making code faster, smaller, or more efficient.*

### Measurement
| Verb | Meaning |
|------|---------|
| **Benchmark** | Measure execution time reproducibly |
| **Profile** | Identify where time is spent |
| **Trace** | Record execution path and timing |
| **Flame-graph** | Visualize hierarchical time breakdown |
| **Heap-snapshot** | Capture memory allocation state |
| **Leak-detect** | Find memory that's allocated but never freed |
| **Regression-detect** | Identify when performance degrades |
| **Budget** | Set maximum acceptable latency/size/cost |

### Optimization Techniques
| Verb | Meaning |
|------|---------|
| **Cache** | Store results for reuse (memory, disk, CDN) |
| **Memoize** | Cache function results by arguments |
| **Pool** | Pre-allocate and reuse objects to avoid allocation |
| **Batch** | Group many small operations into one large one |
| **Defer** | Postpone non-critical work |
| **Lazy** | Compute only when the value is needed |
| **Eager** | Compute in advance before needed |
| **Prefetch** | Load data before it's requested |
| **Precompute** | Calculate once at build/start time |
| **Index** | Build lookup structures for O(1) access |
| **Denormalize** | Trade storage for speed by pre-joining data |
| **Compress** | Reduce data size |
| **Compact** | Reorganize memory to reduce fragmentation |
| **Inline** | Eliminate function call overhead |
| **Unroll** | Expand loops to reduce iteration overhead |
| **Vectorize** | Process multiple values in parallel (SIMD) |
| **Parallelize** | Distribute work across cores/threads |
| **Offload** | Move work to GPU/worker/background thread |
| **Debounce** | Coalesce rapid events into one |
| **Throttle** | Limit execution frequency |
| **Virtualize** | Render only visible items (large lists, DOM) |
| **Paginate** | Process in manageable chunks |
| **Shard** | Distribute data across multiple stores |
| **CDN** | Serve static assets from edge locations |
| **Code-split** | Load only the code needed for the current view |
| **Lazy-load** | Load modules or data on demand |
| **Preload** | Hint browser to load resources early |
| **Service-worker** | Cache and intercept requests at the client |

---

## 15. FRAMEWORK-SPECIFIC VERBS

*Verbs that are particularly associated with specific ecosystems.*

### React / Vue / Svelte (Frontend UI)
| Verb | Meaning |
|------|---------|
| **Render** | Convert component tree to DOM |
| **Re-render** | Update DOM after state change |
| **Mount** | Insert a component into the DOM |
| **Unmount** | Remove a component from the DOM |
| **Hydrate** | Attach interactivity to server-rendered HTML |
| **Suspend** | Pause rendering while data loads |
| **Transition** | Animate between UI states |
| **Portal** | Render children outside their parent DOM |
| **Slot** | Insert content from parent into child template |
| **Prop** | Pass data from parent to child |
| **Emit** | Send event from child to parent |
| **Provide/Inject** | Share data without prop-drilling (context) |
| **Memo** | Skip re-render if props haven't changed |
| **Ref** | Access DOM element or persist mutable value |
| **Effect** | Run side effects after render |
| **Cleanup** | Tear down effects when component unmounts |
| **Derive** | Compute values from state (useMemo, computed) |
| **Watch** | React to specific state changes (Vue/Svelte) |
| **Bind** | Two-way sync between state and input (Vue/Svelte) |
| **Directive** | Attach reusable behavior to DOM elements (Vue) |
| **Action** | DOM-level lifecycle handler (Svelte) |
| **SSR** | Render component to HTML on the server |
| **SSG** | Pre-render pages at build time |
| **ISR** | Incrementally regenerate static pages |

### Node.js / Express / Backend JS
| Verb | Meaning |
|------|---------|
| **Route** | Map a URL pattern to a handler |
| **Middleware** | Insert processing between request and response |
| **Next** | Pass control to the next middleware |
| **Pipe** | Stream data from one source to another |
| **Require** | Load a CommonJS module |
| **Import** | Load an ES module |
| **Emit** | Fire an event on an EventEmitter |
| **Buffer** | Accumulate stream chunks in memory |
| **Cluster** | Fork multiple worker processes |
| **Graceful-shutdown** | Close connections cleanly before stopping |
| **Signal** | Handle OS signals (SIGTERM, SIGINT) |
| **Cron** | Schedule recurring background jobs |

### Unity / Unreal / Godot (Game Engines)
| Verb | Meaning |
|------|---------|
| **Instantiate** | Create a game object at runtime |
| **Destroy** | Remove a game object |
| **Enable/Disable** | Toggle a component or object |
| **Update** | Per-frame logic tick |
| **FixedUpdate** | Physics-rate logic tick |
| **LateUpdate** | Post-physics per-frame logic |
| **Awake** | Initialize before first frame |
| **Start** | Initialize on first frame |
| **Collide** | Detect and respond to physics contact |
| **Trigger** | Detect overlap without physics response |
| **Raycast** | Test for intersections along a line |
| **Tween** | Animate properties over time |
| **Coroutine** | Spread logic over multiple frames |
| **Pool** | Reuse objects instead of creating/destroying |
| **NavMesh** | Pathfind on a navigation surface |
| **Bake** | Precompute (lightmaps, navmesh, occlusion) |
| **LOD** | Swap model detail by distance |
| **Cull** | Skip rendering of off-screen objects |
| **Serialize** | Save/load game object state |
| **Addressable** | Load assets on demand by reference |
| **Signal** | Decouple event communication (Godot) |

### vvvv / TouchDesigner / Processing (Creative Frameworks)
| Verb | Meaning |
|------|---------|
| **Patch** | Build logic by connecting nodes |
| **Bang** | Send a single-frame trigger |
| **Spread** | Work with arrays of values across nodes |
| **Slice** | Access individual elements of a spread |
| **Pin** | Connect/configure a node's input |
| **Link** | Connect an output to an input |
| **Evaluate** | Compute a node's output |
| **Cook** | Process and update a node (TouchDesigner) |
| **Feedback** | Route output back to input |
| **TOP/CHOP/SOP/MAT** | Operator families for different data types (TD) |
| **IOBox** | Inspect and manually set values (vvvv) |
| **Quad** | Render to a rectangle (processing/OF) |
| **Push/Pop** | Save/restore transformation state |
| **Sketch** | Quick experimental code (Processing philosophy) |
| **Export** | Save a texture, geometry, or recording |

### Rust / Systems Programming
| Verb | Meaning |
|------|---------|
| **Own** | Take exclusive ownership of a value |
| **Borrow** | Temporarily access a value without taking ownership |
| **Move** | Transfer ownership from one binding to another |
| **Clone** | Create an owned duplicate |
| **Drop** | Run cleanup when a value goes out of scope |
| **Dereference** | Access the value a pointer/reference points to |
| **Pin** | Prevent a value from being moved in memory |
| **Box** | Heap-allocate a value |
| **Arc** | Share ownership across threads (atomic reference count) |
| **Wrap** | Put a value inside a smart pointer or container |
| **Unwrap** | Extract the inner value (panic if None/Err) |
| **Match** | Pattern-match against enum variants |
| **Impl** | Provide method implementations for a type |
| **Derive** | Auto-generate trait implementations |
| **Unsafe** | Opt out of safety guarantees for low-level work |
| **Transmute** | Reinterpret memory as a different type |
| **Lifetime** | Annotate how long references are valid |
| **Turbofish** | Explicitly specify generic types (::<Type>) |

### Python / Data / ML
| Verb | Meaning |
|------|---------|
| **Import** | Load a module |
| **Pip-install** | Add a package |
| **Comprehend** | Build collections with inline expressions |
| **Yield** | Produce values lazily from a generator |
| **Decorate** | Wrap functions with @decorator syntax |
| **Unpack** | Destructure a tuple or dict |
| **Slice** | Extract a sub-range with [start:stop:step] |
| **Vectorize** | Apply operations across arrays (NumPy) |
| **Broadcast** | Extend dimensions for element-wise operations |
| **Fit** | Train a model on data |
| **Predict** | Generate output from a trained model |
| **Transform** | Apply learned transformation to new data |
| **Pipeline** | Chain data processing steps |
| **Feature-engineer** | Create input variables from raw data |
| **Cross-validate** | Evaluate model with multiple train/test splits |
| **Hyperparameter-tune** | Search for optimal model settings |
| **Pickle** | Serialize Python objects to bytes |
| **Notebook** | Develop interactively in cells |

---

## Verb Chaining: System Recipes

### REST API Backend
Scaffold → Route → Middleware (auth) → Validate → Query → Serialize → Respond → Log → Monitor → Deploy

### React SPA
Scaffold → Component-ize → Route → Fetch → Hydrate → Render → Bind → Effect (side effects) → Memo → Lazy-load → Bundle → SSR → Deploy

### Real-Time Multiplayer Game
Architect (ECS) → Instantiate → Connect (WebSocket) → Sync (state) → Predict (client-side) → Reconcile (server authoritative) → Interpolate → Render → Cull → LOD → Pool → Profile

### ETL Data Pipeline
Extract (API/DB) → Validate → Normalize → Transform → Deduplicate → Enrich → Load (warehouse) → Index → Schedule (cron) → Monitor → Alert

### Mobile App
Scaffold → Component-ize → Navigate → Fetch → Cache → Offline-first → Animate → Gesture → Push-notify → Bundle → Sign → Deploy → Crash-report → A/B-test

### Microservice Architecture
Decompose → Containerize → Orchestrate → Service-mesh → Publish/Subscribe → Circuit-break → Trace → Health-check → Auto-scale → Canary → Rollback

### CLI Tool
Parse (args) → Validate → Branch (subcommands) → Execute → Format (output) → Pipe → Exit-code → Test → Cross-compile → Distribute → Version

### Creative Coding Installation
Capture (sensor) → Track → Map (to parameters) → Simulate → Render → Project → Calibrate → OSC → Monitor → Install → Perform

---

## Quick Reference: Verbs by Career Stage

### Junior Developer (foundations)
Declare, Define, Assign, Branch, Loop, Map, Filter, Reduce, Function, Class, Import, Commit, Push, Pull, Debug, Log, Test, Deploy

### Mid-Level Developer (system building)
Architect, Decompose, Interface, Abstract, Module, Route, Middleware, Validate, Cache, Batch, Refactor, Extract, Benchmark, Profile, Migrate, Review, Merge

### Senior Developer (system thinking)
Decouple, Event-source, Circuit-break, Shard, Replicate, Observe, Instrument, Trace, Canary, Feature-flag, Rollback, Strangler, Budget, Mentor, Architect, Postmortem

### Staff+ Engineer (organizational impact)
Standardize, Constrain, Platform, Abstract (boundaries), Deprecate, Migrate (org-wide), Budget, Prioritize, Document (RFCs), Mentor, Review (architecture), Align

---

*Every program is a sequence of verbs. Choose them carefully.*