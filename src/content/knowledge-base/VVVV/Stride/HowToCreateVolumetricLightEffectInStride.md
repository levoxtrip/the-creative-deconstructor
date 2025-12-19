



![LightShaftScene Img](/img/VVVV/LightShaftScene.png)

# How To Create Volumetric Light Effect In Stride
To create a volumetric light effect we want to generate visible rays of light. This is also called *God-Rays Effect*. After activating *VL.Stride*,
connect a `LightShaftComponent` to a light source that can cast shadows, for example `PointLight`,`DirectionalLight` or `SpotLIght`. You can find `LightShaftComponent` under the *Advanced* nodes - hit tab in the node browser.
Because the light source requires a `Spread` as the input for components we need to convert from *EntityComponenet* to *Spread<EntitiyComponent>* with `FromValue`.

We also need a `LightShaftBoundingComponent` to set the volume in which we want to show the rays. It expects any mesh model as a shape for the bounds. 

In the `SceneWindow` we have to right click, `Configure` and expose `Light Shaft` Input. There we can can connect a `LightShaft` node.

![LightShaftCode Img](/img/VVVV/LightShaftCode.png)