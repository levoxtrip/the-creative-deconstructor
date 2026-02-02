---
title: Common Tab in COMPs
description: 
tag: TD
---
![Common Tab COMP img](/img/TD/CommonTabCOMP.png)

# Common Tab in COMPs
The *Common* tab of COMPs have some useful parameters that make the reference easier and give you some extended functionality.

## Parent Shortcut
The *Parent Shortcut* allows you to define a name which will become a reference *inside* the operator. You can create for example `MyComp` as a shortcut for the operator. This allows you tto reference the comp with `parent.myComp` and you get the whole operator reference where you can access all the parameters and fucntions. So from anywhere inside the comp you can get to the top level component with the reference.

## Global Shortcut
The *Global Shortcut* allows you to create a reference which you can reach from *everywhere* in the project, even from outside of the COMP.
As a convention you can use *all capitals* like `BASE`. You then can reference it with `op.BASE`

## Internal OP Shortcut
It allows you to define special references to operator that you can access from everythwere inside the COMP.
Shortcut `MyTable`
OP `./table1`

Then from anywhere in the COMP you can use `iop.MyTable`. With `ipar.MyTable` you can get the parameters.

## Extentions
### Default Extention Code
The `init()` function of an extention runs the first time the component is required/used.
*Attributes* are saved variables which can be accessed in every function of the extention.
```
self.a <- Attribute
self.B <- Promoted Attribute that is also accesible outside of the extention script with op('...').B. But be aware they don't automatically update outside when you refernce them. So don't reference attributes outside if functionality is dependent on them.
```
Functions in your extention that start with a *small* letter are not accessible from the outside.
Function which start with a *big* letter are accessible.

As we saw before the *promoted attributes* don't get updated outside. But if you want your values updated outside when they change in your extention you can use *properties* with `dependable = true`.

The *attributes* and *properties* will be reset to their initial values every time the component gets reinitiated, for example when you reopen your patch. If you want your values been kept across reinitiation of the component you would use *stored values*, which you have to store in the *stored manager*

### Defining a New Function
All functions need to receive `self`, to get all the information about the class they are in.
`def Save(self, name=None,color=None):`