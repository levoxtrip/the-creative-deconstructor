# Public Channels
Public Channels are named parameters that are available from everywhere in your patch. You even can see them in your Channel Browser. They allow you to create *Snapshots* of them which you can use as presets and expose them via bindings to the outside world.

## Creating Public Channels
To create a public channel use the `PublicChannel` node and git it a path/name and a type. When you want to group channels you can use `/` like `level1/Background` and `level1/amountEnemies`.

![Public Channels Creation Img](/img/vvvv/PublicChannelCreate.png)

Now it's value can be changed from the *ChannelBrowser* or another `PublicChannel` node with the same path.

![Public Channels Change Img](/img/vvvv/PublicChannelChange.png)

## Find Public Channel in Patch
Especially in bigger projects which multiple channels the *ChannelBrowser* allows you to jump to the location in your patch where the channels are used. You can right click the channel in the browser and go to *jump to node in*.

## Remove Channel
To remove a public channel, you first have to delete the `PublicChannel` nodes in the patch and then remove the channel in the *ChannelBrowser*.

## Snapshots
*Snapshots* of your public channel allow you to store certain states of the channel and create transitions between different snapshots. The values will be smoothly converted.

## Presets
You can store presets via the channel browser *preset* column.
To store presets via nodes:
![Store And Trigger Preset Img](/img/vvvv/StoreAndTriggerPreset.png)
You can use the preset with the `TriggerPreset` node.

## Binding
Binding the `PublicChannel` allows you to espose them to the outside world of the app. For example OSC or MIDI.