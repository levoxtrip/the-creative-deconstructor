post processing effects, I tend to use the Camera Motion Blur and the Simple DoF quite a lot
https://github.com/yasuhirohoshino/TouchDesigner_PostEffects

Then B2BK is the goat when it comes to rendering pipelines, this one is especially useful when it comes to understanding render buffers and how to use them to your advantage, the end result kinda speaks for itself too

https://www.youtube.com/watch?v=aVYqxKpI77g

My non-extensive pov:

There's a few things that make for an overall better 3D scene:

Lights & Shadows: 
· The dimmer on lights can be distance-attenuated, tweak light size and softness, I really like cone lights too.
·Shadows with good resolution are better, also if it's not too tasking for your project check out the SSAO TOP for some added ambient occlusion.

Camera:
Having camera motion or some fov tweaks, even if slight always adds some je ne sais quoi
If you're willing to spend a buck, I recommend the CineMotion Realistic Camera paths: https://www.cinetexture.com/cinemotion these are good to add framing / looping motion to scenes.

Post FX:
Add a Depth TOP, Threshold it with a "Greater or Equal" mode very close to 1 until you highlight your scene then use that in a Luma Blur TOP to add some depth blur. 
SSAO mentioned above. 
Any type of motion or camera motion blur really helps. 

Color:
It really pays off to apply some color grading after the whole thing is rendered, LUTs are great for this!
Cinetexture
Cinemotion - Real cameras for CGI — Cinetexture
Created from real camera motion, CineMotion is a versatile library of motion captured virtual production camera clips to quickly enhance your renders. Instantly add natural handheld motion and realistic camera shakes to your projects. FBX, Alembic & Houdini HDA included.
Then for a modeling & pbr workflow this one is great, tho some things could be done differently in POPs now:

https://www.youtube.com/watch?v=UBXnInY1hL8
YouTube
TDSW
KOHUI X TDSW Create an audiovisual environment in a virtual space w...
