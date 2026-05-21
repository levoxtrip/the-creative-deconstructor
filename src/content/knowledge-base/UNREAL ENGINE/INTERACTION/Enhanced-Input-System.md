---
title: Enhanced Input System
tag: Unreal
---

# Enhanced Input System
To use inputs from mouse, keyboard or controller we need to use enhanced input systems. You create `Input Actions` which are representations of behavior that user can do like move, fire,jump. We prefix them with `IA_`. In the input action the most important thing is to define the right value type. `Digital Bool` for single button press.

We then connect the input action with some inputs in the `Input Mapping Context` (`IMC_`). It links an input action to a given type of input. IN the mapping context under *Mappings* you can add our input action and choose the keys or buttons. You can connect multiple inputs to the same input action.

The next step is then to connect the `Input Mapping Context` with the Pawn.

![Add Mapping Context Img](/img/Unreal/AddMappingContextToController.png)
Every pawn that is possessed is possessed by a controller. It gets the actual controller that is currently possessing the pawn. This allows you to use the input actions in your blueprint. If you type in the action name you get an event or a pure function that returns the value of the input action. `Enhanced Input Action` has multiple events based on the status of the inputs.

`Triggered` - Executed every frame as long as the input is held down.
`Started` - gets executed once when input is pressed
`Ongoing`
`Canceled`
`Completed` - is triggered when the input is released.


You can show advanced input action information in the viewport while playing. Type in `ShowDebug EnhancedInput`. It shows debug information about current state of any enhanced input mapping context. 

Each `Input Action` has modifiers and triggers that allow to change behavior for inputs. Modifiers affect value of input action after they have been triggered. You can `Negate` if you want your mouse move inverted.
`Triggers` allow to change how input action gets activated or triggered. `Pulse` allows to create a looping trigger with interval while the key is hold down - use the `Triggered` event in the blueprint then. You can add the same behavior directly in the input action or the mapping context.

## Mouse Movement
To be able to use your mouse to look around your pawn you need another input action `IA_Look` with the input type `Axis 2D`.
In the mapping context choose `Mouse XY 2D Axis`.

In the blueprint you add the *enhanced input action* and break the input action into x/y components. Here we don't want to rotate the mesh or the spring arm of the camera. You want to rotate the *controller*. The components are designed to follow the controller. In the spring arm set `Use Pawn Control Rotation`.

![Setting Controller Pitch and Yaw Img](/img/Unreal/SettingsControllerPitchYaw.png)

To let the mesh rotate along the spring arm
![Rotate Mesh By Control Rotation Img](/img/Unreal/RotateMeshByControlRotation.png)

## Movement Of Pawn
For the movement of a pawn create another input action `IA_Move` as a `Vector2D` type. 
In the *input mapping context* add 4 keys WASD to your input action. By default the inputs all go into the x input of the input action. To distinguish if W/S or A/D got hit, first negate the A key.
For W/S you need to `Swizzle Input Axis Values` because you want to map from the x input to the y input of the action. Additionally for s you need the `negate` modifier.

There is a floating pawn movement component you can use to move your pawn. 

![Floating Pawn Movement Add Input Vector Img](/img/Unreal/FloatingPawnMovementAddInputVector)
Get the current controller rotation and give me the vector that points right from that and the vector that points forward from that.