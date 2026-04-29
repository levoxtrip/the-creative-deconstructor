---
title: Spawn Particle From Static Mesh Parent
tag: Unreal
---
# Spawn Particle From Static Mesh Parent
Create a blueprint and add a static mesh. To the mesh as add a child a `Niagara Particle System Component`. In the content browser, create a `NiagaraSystem`, select minimal and add `StaticMeshLocation` to `Particle Spawn` section. Set the source mode to `Attach Parent`. Then play with the sampling parameters.

![Niagara System Component As Child Img](/img/Unreal/BPNiagaraAsChild.png)

![Niagara Attach Parent Img](/img/Unreal/NiagaraAttachParentAsSource.png)

Don't forget to assign the created niagara system to the component in the blueprint.