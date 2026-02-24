---
title: Scripting Operators
comments: true
tags:
 - TouchDesigner
 - TD/Scripting
---
# Scripting Operators



## Connecting two operators via script
`op('firstOperator').outputConnectors[0].connect(op('operator2'))`

To disconnect a connection use `.disconnect()`

