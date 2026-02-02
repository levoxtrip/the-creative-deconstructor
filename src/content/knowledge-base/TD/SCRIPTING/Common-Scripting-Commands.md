# Common Scripting Commands

`op('table1')[indexRow,indexColm]`

## Looping through range of operator with python
```py
for i in range(1,3):
	 op('table{0}'.format(i))[0,0]
```

## Get dimention of table
`op('table1').dims`