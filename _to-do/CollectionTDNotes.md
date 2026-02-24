
# Scripting OPS
`me.` refers to operator that is currently being evaluated/executed

`root` refers to top level component

`op()` to get reference to other OPs - it returns a sinle OP object
`ops()` returns list of OPs

`parent()` to get the parent COMP 

Python Help in the parameter shows you what members and methods you can access.

# Scripting CHOPS

To use a CHOP in a script, get a reference to the CHOP with `op()` and assign it to a variable which yyou can use multiple times in your script.

To reference a specific channel use `[]` with either channel name `['chan1']` or the index of the channel `[0]`

To get the amount of samples in your CHOP `.numSamples`.
To get amount of channels `.numChans`
To get the channel index channel `.index`

To do an operation on every sample in your channel
```
myOp = op('pattern1')
amount = 0
numSamples = myOp.numSamples
chan = myOp['chan1']
for i in range(0,numSamples):
	amount = amount + chan[i]
```
Another way to do this is to use the channels `vals` members which is a list of all the values of the channel
```
for val in chan.vals:
	amount = amount + val
```
TD also has the buildin expression `sum()` which does the same
`amount = sum(chan.vals)`

Another way to get reference to channels is the `chan()`/`chans()` methods. They give a list of channels from the CHOP

To get the name of the channels you can use `.name`
To grab for example all the channels that start with a certain string you can use `n.chans(chan*)`

## Casting Channels to value
`op('lfo1')['chan1'] gives the current sample from the channel

To get the amount of channels
`op('lfo1').numChans'

To evaluate a channel at the current frame
`op('lfo1')['chan1'].eval()
`op('lfo1')['chan1'].eval(indexSample)

# Scripting DATs

operator[row,colum]

Get a cell vlue by index
`op('table1')[1,3]`

Get a cell value by label
`op('table1)['a2','b2]`

Get number rows and colums
`.numRows`
`.numCols`

Assign a value
```
op('mytable1')[3,4] = 'what up'  
op('mytable1')[2, 'question'] = 'why'  
```

To copy a table to another
`op('firstTable').copy(op('sourceTable'))`

To append row and colum to a table
`op('table').appendRow(['firstValue','secondValue',num])`
`op('table').appendCol(['firstValue','secondValue',num])`

get current cell in `Evaluate DAT`
`me.inputCell`

To access neighboring cells
`me.inputCell.offset(2,3)`