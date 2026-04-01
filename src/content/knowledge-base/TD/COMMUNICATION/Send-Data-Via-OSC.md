---
title: Send Data Via OSC
tags: TD

---
# Send Data Via OSC

Select the data you want to send, convert it into CHOP and maybe filter it with a `FilterCHOP` with with 0.1. Then in a `CHOPExecute` in the `OnValueChange` function you take the information from the chop and send it via an `OscDat`.

```py
def onValueChange(channel: Channel, sampleIndex: int, val: float, 
                  prev: float):
	nullChop = op(channel.owner)
	posVals = [nullChop[i].eval() for i in range(6)]
	lPos = posVals[0:3]
	rPos = posVals[3:6]
	oscDat = op('oscout1')
	oscDat.sendOSC('/left', lPos, asBundle=True)
	oscDat.sendOSC('/right', rPos, asBundle=True)
	return
```

![Send Data Via OSC img](/img/TD/SendDataViaOSC.png)

