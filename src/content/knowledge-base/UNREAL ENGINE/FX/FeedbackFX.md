THE FULL SETUP — 4 assets + 1 Blueprint

ASSET 1: RT_Fresh (Render Target)
Content Browser → right-click → Rendering → Texture Render Target 2D. Name it RT_Fresh. Set size to 1920×1080.
ASSET 2: RT_Accumulated (Render Target)
Same thing. Name it RT_Accumulated. Same size 1920×1080.
ASSET 3: MAT_Blend (Regular Material — NOT post process)
Create a new Material. Open it. Settings:

Material Domain → Surface
Shading Model → Unlit

Graph nodes:

TextureSampleParameter2D → name it CurrentFrame → assign RT_Fresh → Sampler Type: Linear Color
TextureSampleParameter2D → name it PreviousFrame → assign RT_Accumulated → Sampler Type: Linear Color
Lerp node → A = CurrentFrame RGB pin, B = PreviousFrame RGB pin
Scalar Parameter → name it Decay → default value 0.85 → connect to Lerp Alpha
Lerp output → Emissive Color

Save.
ASSET 4: MAT_PostProcess (Post Process Material)
Create a new Material. Open it. Settings:

Material Domain → Post Process

Graph nodes:

SceneTexture → set to PostProcessInput0 (this is the current frame from the camera)
TextureSampleParameter2D → name it Feedback → assign RT_Accumulated → Sampler Type: Linear Color
Lerp node → A = SceneTexture Color pin, B = Feedback RGB pin
Scalar Parameter → name it FeedbackAmount → default 0.85 → connect to Lerp Alpha
Lerp output → Emissive Color

Save.
ASSET 5: BP_FeedbackLoop (Actor Blueprint)
Create a new Actor Blueprint. Open it.
Components panel:

Add a Scene Capture Component 2D
Select it, in Details panel set:

Texture Target → RT_Fresh
Capture Every Frame → unchecked
Capture Source → Final Color (LDR) in RGB



Event Graph:

Event Tick →
Capture Scene (drag SceneCaptureComponent2D into graph, drag off it, search "Capture Scene") →
Draw Material to Render Target — set Texture Render Target to RT_Accumulated, set Material to MAT_Blend

That's it. Three nodes in a row.
Save.
IN THE LEVEL:

Delete any old SceneCapture2D actors
Place BP_FeedbackLoop at the exact same position and rotation as your camera
Add a Post Process Volume → check Infinite Extent (Unbound) → under Post Process Materials, click + → choose Asset Reference → select MAT_PostProcess