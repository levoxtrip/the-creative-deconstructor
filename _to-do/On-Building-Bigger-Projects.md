---
title: On Building Bigger Projects in TD
tag: TD
---
# On Building Bigger Projects in TD
When you want to start building bigger and more complex projects it makes sense to group functionality and behavior in modular entities where only their logic and behavior lifes. These entities have their own boundaries and they don't work outside of their own boundary. They are ignonrant of the state of the application besides the state itself.
A way how to structure the logic in these projects is to say that all functionality happens in the components, that are told what to do by the current state via *extentions* in the component. To create an extention, right click or Base/Container and click on customize component. Then under the extentions tab you can add the name of your extention class and click on add. It makes sense to create a *DAT folder* in your project folder where all the executions life. Like that you can open that folder with your code editor and work in parallel in there besides the TouchDesigner UI.

Everything is ignorant of the state of the application exept state componenet. 


Make everything that you easily can read the application. As few as possible implicit logic actions.
As explicit over implcit.

Most important thing is legibility.

grab dependable property, ad filter to create transition to switch between grafics.

to keep the components independent from another some functions need  to return info so it can be passed in the state logic.
you want to be able to understand the whole app in the state componenets - as table of coentents -just by looking at state.
Have a timer that only tells state *timer is done*. doesnt have to konw how the program works.

timer callback
on done -> parent.timerdone()

you want to be able to write the program in pseudo code/human redable code/lengible code.

you then can debug your app by calling different states and see how app behaves

then you can go in and implement normal mechanics inside the componenet

how to create ext in td
create base/container
add extention in compoenent editor customise componenet
call it inputext
go in base - edit file and save it in ext folder
load from disk in DAT

deelete everything you dont need

use as ittle operators as possible

for  debugging you could create a keyboard key mapping it if key g excute this

you could use pytransitions



# STATE
State is where things get told what to do, where the application drives itself forward.
State doesnt do any communication or talks to hardware. All that happens in specialized components. They are told what to do by state via the components extention.
``` 
switch State:
	case 1:
		op.AUDIO.PlayAudio()
```

So every component only does their essential task. No logic.

In euch component you have extention/ a script which controls the behavior of that component.
```
class PlaybackExt:
	...
	def PlayReplay(self):
		op.LOG.LOg("Playback executed")
```

```
class StateExt:
	...
	def handleStateChange(self):
		match self.State:
			case ... :
				op.PLAYBACK.PlayReplay()
```

components that are told what to do via state

Components of your app
- STARTUP
- SETTINGS
- LOG
- STATE
- AUDIO
- UI
- MAIN VISUAL
- IO(Input and Output)

## STARTUP
Run startup when TD opens
Add dependencies like necesarry packages - store python path
config settings - assetpath and resolution

## SETTINGS
create reference of settings info from the tabledat and create necessary properties like assetpath, path to where you store images resolution etc. where these infos are globally accessible you can easily reference them.
`f{op.SETTINGS.AssetPath}/Filename'`

## STATE
Initialises possible states and sets first state

function that sets new state
```
def SetState(self,state:str) -> None:
	if state is self.validStates:
		self.State = state
		self.handleStateChange()
	else:
		op.LOG.Log(f"StateExt.SetState:invalid state)
		raise ValueError(f...invalid...)
# in handle state you check which is the state you execute the functionality inside the components which is in the extentions in the component
def handleStateChange(self) -> None:
	case 'attract':
		op.COMP.SetLight()

	case 'countdown':
		op.UI.ShowCountdown()
```
In the UI comp or other comps:
do i need properties that the outside need to know?
do I need properties/attributes that the inside need to know





## Logging
Performance logging & what are the extentions doing?
To be able to understand if your logic gets executed and the flow of your project is right it can make sense to create a LOG entity which writes certain information into a LOG file. For example you can track how many people used your application or when occurs an error.



# SETTINGS
table with the asset path and resolution and fps

# STARTUP
Check if sensors active for example