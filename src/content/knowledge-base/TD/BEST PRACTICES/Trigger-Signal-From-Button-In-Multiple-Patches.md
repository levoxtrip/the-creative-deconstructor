---
title: Trigger Signal From Button In Multiple Patches
tag: TD
---
# Trigger Signal From Button In Multiple Patches
When you work with two scripts in TD with `TouchIn/Out` and you want to send a *Trigger Signal* from the Btn, use `ChopExecute` with `op('trigger1').par.triggerpulse.pulse()` in the `onOffToOn` that triggers a trigger via the script.
![Sending Multiple Trigger For TouchOut Img](/img/TD/TriggerSignalFromButtonInMultPatches.png)
