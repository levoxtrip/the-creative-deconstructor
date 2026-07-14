---
title: Replicator
comments: true
tags:
 - TD/COMP
 - TouchDesigner
---
# Replicator
`ReplicatorCOMP` allows to clone operator parametrically. We need a `BaseCOMP` as a *master* operator where the logic for the single instance that gets cloned is saved.
You can define the number of replicas depending on a number or other data like table.

Any time you make a change in master operator you need to recreate all operations/missing operations.

Defining parameters in a base master - assign parameters in the master base and bind parameter so you can change them from the parameter field and from the  on the operator.

To automatically connect all clones to a `CompTOP` we can use `c.outputConnectors[0].connect(op('comp1'))` in the `Replicate()` function of *replicator callback DAT*.

If you want to chain each replication with the next one you can use `c.inputConnectors[0].connect(op(f'name{c.digits-1}/out1'))`.



