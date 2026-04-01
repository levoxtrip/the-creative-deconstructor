---
title: Set Camera For Scene
tag: Unreal
---
# Set Settings For Scene
Go to the + and search for `Cinematic Camera Actor`. To specify which camera we use in our scene we need to adjust the level blueprint. Go to the blueprint menu and click on `Open Level Blueprint`.
![Define Startup Level Img](/img/Unreal/OpenLevelBlueprint.png)

Inside you want to use `Get Player Controller` and then with `Set View Target With Blend` assign your cinematic camera as the `New View Target`. 
![Set View Target With Blend Img](/img/Unreal/SetViewTargetWithBlend.png)
To get the camera as a reference inside your blueprint select it in the Outliner and then right click in the blueprint and select `Create a Reference to Cinema Camera Actor`.


To set the camera as the view in the editor click on the `Perspective` button and select your `Cinema Camera Actor`
![Cine Camera Actor In Editor Img](/img/Unreal/CineCameraActorInEditor.png)




Example Settings for a camera:
In the *Filmback* settings you can set your sensor width and height.
Width 32mm
Height 20mm 
Focal Length 18mm
Aperture 1.2

Set the *focus distance* of your camera to the distance to your object under `Focus Settings`. With `Draw Debug Focus` you can see where the focus lies.

