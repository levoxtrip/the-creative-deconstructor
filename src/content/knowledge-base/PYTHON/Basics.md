---
title: Basics
comments: true
tags:
- PYTHON

---
# Basics

In Python the indentation of code is important. Everything that is indented on the same level belongs to a block.

## Variables
Variables store values.

```py
name = "me"
age = 39
```
Variables can't start with a number and can't have character like `%` or `!`.

We also can't use python *keywords* like `if,for,while...` 

## Expressions and Statements
Expression is any code that returns a value.
`1+1`

A statement is an operation on a value - we are doing something with the value.
`print(1+1)`

## Comments
Everything after `#` is ignored and can be used as comment
`# This is a comment`

## Data types
*string* - `name = "hans"`

*integer* - `age = 2`

*float* - `temp = 2.9`

*boolean* - `isEven = True`

We can check what data type a variable has  with `type()`.

Python automatically detects type of variables.

To check if something is of type string
```py
name = "hans"
type(name) == str

#or

isinstance(name,str)
```

To convert int into float we can use the class-constructor of the datatype class
`temp = float(2)`

`age = int("20")` -> becomes an int

The conversion is called *casting*

If these conversions fail we actually get an error in the console.

## Operators
assignment operator `=` - assigns a value to a variable

### Arithmetic operators
```py
+ #addition
- #subtraction
* #multiplication
/ #division
% #remainder
** #squared
// #floor division - does the division and rounds down to the nearet whole number
```

We can combine *arithmetic* with *assignment* operator

`+=`, `*=` ... 
`age += 8` -> `age = age +8`

### Comparison operation
```py
a == b #- Equal
a != b  #- Not equal
a > b  #- Greater
a < b #- Smaller
```

### Boolean operators
```py
not - #True when false
and - # both conditions have to be true
or - # one of the conditions have to be true
```

`or` returns the first not false value otherwise it returns the last operand

```py
print(False or 'hey') # -> 'hey'
print(True or 'hey') # -> True
print(1 or 0) # -> 1
```

`and` only evaluates the second argument if the *first is true*.
If the first argument is *falsy* it returns that argument - otherwise it evaluates the seconds argument.

```py
print(0 and 1) # -> 0
print(False and 'hey') # -> False
print('hey' and 'hi') # -> hi
```

### Bitwise operators
```py
& # performs binary AND
| # performs binary OR
^ # performs binary XOR
~ # performs binary NOT
<< # shift left operation
>> # shift right operation
```

### is/in operators
`is` is used to compare objects and returns true if both are the same object

`in` is membership operator - if value is contained in list or other sequence.


### Ternary operator
If-Else in one line. Allows to quickly define a conditional
`return True if age > 18 else False`

## Strings
*Strings* are a series of characters
```py
"hallo"
'hallo'
```
We can combine/concatenate strings with `+`
`'hallo'+'world'`

For multiline string we use three
```py
"""My
name
is
"""
```

### String Methods
`.upper()` converts string into all capital letters
`.lower()` converts string into all lower letters
`.title()` makes first letter of each string capital

To evaluate strings
`.islower()` `.isupper()`
`.isalpha()` check if string contains only characters and is not empty
`.isalnum()` check if string contains characters or digits and is not empty
`.isdecimal()` check if string contains digits and is not empty
`.startswith()`/`.endswidth()` check if string starts/ends with substring
`.replace()` to replace part of string
`.split()` split string or specific character separator
`.strip()` trim white space from a string
`.join()` append new letters to a string
`.find()` find position of substring. 

All these methods return *the new modified string.* It's not changing anything in the original string.

We also can use *global* functions on strings.
`len()` - get amount of character of string
`in`
```py
"AU" in "BEAU" # -> TRUE
```

If we want to show `"` character in a string we need to add a backslash `\`

`"He\"llo"`

The backslash is also used to add a new line into a string
`"Hello\n World"`

To get a specific character from a string
`name[1]` - character at index 1
`name[-1]` - character at the end

To get a range we do slicing
```py
name = "ABCDEF"
name[1:3] # -> "BC" - It stops before second index 3
name[1:] # -> "BCDEF" - Blank means it goes to the end or beginning
name[:3] # -> "AB"
```

## Booleans
*Booleans* are `True` or `False` values.
`done = True`

*Numbers* always return `True` exept `0`. Even negative numbers.

```py
if 10: # <- True
    print("yes")
```


*Strings* are only `False` when they are *empty*

To check if type of value is boolean
`type(value) == bool`

The `any()` functions returns `True` if *any* element of an iterable like a *List* is `True`.
`any([True,False])` -> True

`all()` function returns `True` if *all* elements of an iterable are `True`.

## Number datatype
*Number* datatype allows to create the mathematical *complex number*
`complex = 2+3j`
or
`num = complex(2,3)`

To get the *complex* or *real* part of the *complex number*
`num.real`
`num.imag`

`abs(-5.5)` - To get the *absolut* value of a number 
`round(5.5)` - round to nearest integer
`round(5.5,1)` - round to nearest decimal point.

## Enums
*Enums* are readable names that are bound to constant values.
To use *Enums* we have to import them.
```py
from enum import Enum

class MyState(Enum):
    INACTIVE = 0
    ACTIVE = 1


print(State.INACTIVE)
print(STATE.ACTIVE.value)
```
Enums are the only way to create *constants* in Python.

## User Input
To get the input from the user at runtime we can use `input("prompt")`. Execution will be stopped till the user made an input and hits *Enter* key.

## Control statements
### if statement
```py
if condition == True:
    #Execute this
```

### if-else statement
```py
if condiation == True:
    # Execute if condition is true
else:
    #Execute if condition is false
```

### Multiple condition checks
For multiple condition checks we can use `elif`
```py
if condition1 == True:
    #Execute this
elif condition2 == True:
    #Execute that
elif condition3 == True:
    #Execute this
#...
else:
    #if all the others are false
```

## Lists
*List* are an essential data structure in Python. It allows to hold different datatypes
`dogs = ["Horse","Jim",3]`

With `in` operator we can check if an item is inside a list
`print("Jim" in dogs)` -> True

To define an empty list 
`emptyList = []`

To reference items from lists we can use the *index* 
`element0 = dogs[0]`

To pick from the end of the list we use `-` 
`lastElement = dogs[-1]`
`secondToLast = dogs[-2]`

To update an item in a list 
`dogs[2] = "hans"`

To add an item at a specific index we use
`dogs.insert(index,item)`

If you want to add multiple elements you need slices
`items[1:2] = ["Test1","Test"]

To extract parts of the list we can use slicing
`firstTwoElements = dogs[:2]`
This returns a slice of the list

`len(dogs)` counts how many elements a list has.

To add items to a list we can use the `.append()` method.
`dogs.append("Ruff")`

To combine two lists together we can use `.extend()`
`allDogs = dogs.extend(['hallo',"Ruofo",True])`

Another way is to use `+=`
`dogs += ["freaky",23]`

To remove an element we can use
`dogs.remove("Jim")`

If you want to remove and return the removed element we can use
`removed = dogs.pop("Jim")`

When all the elements of a list have the same data type we can use `.sort()` to sort the list.
It organises by *uppercase* letters first then by *lowercase*. If you want to ignore that you can use.
`list.sort(key=str.lower)`

Be aware that using `.sort()` is actually modifying the original list. So make a copy before
`sorted items = items[:]`

To sort a list without modifying the original list you can use `sorted()`
`sorted(items,key= str.lower)`

## Tuples
Tuples are a data structure that allow to create immutable data structures. *Immutable* means once it is created it can't be changed/modified.

`names = ["Roger","Harald"]`

Tuples are ordered like a list, so we can use the index

`names[0]`
`names.index("Roger")` This returns the index of the element.

If you want to check if element is inside tuple
`"Roger" in names`

## Dictionary
A *dictionary* allows you to create *key-value* pairs.
A *key* can be any immutable value.
```py
dog = {"name": "harald"}
dog2 = {"name":"rolf",
        "age": 8}

print(dog2["name"]) #prints "rolf"
```

To change the value of a specific key
`dog["name"] = "Shorty"`

A way to get a specific element is using the `.get()` method.

`dog.get("name")`
This also allows you to add a *default* value if it can't find the element.
`dog.get("color","blue")`

To delete and item from a dictionary and retrieving the *key* of the deleted item we use `.pop()`
`dog.pop("name")`

If you want to delete the *last added* key-value pair we can use
`dog.popitem()`

To check if a *key* is inside a dictionary 
`"color" in dog`

To get a list with the keys/values of a dictionary
`list(dog.keys())`
`list(dog.values())`

You can also return all the items of a dictionary as a list of tuples
`list(dog.items())`

To calculate length of dictionary
`len(dog)`

If you want to add a key-value pair
`dog["location"] = "Berlin"`

To delete a key value pair
`del dog["name"]`

To copy a dictionary
`copiedDict = dog.copy()`

## Sets
Sets are similar to tuples but they are *not ordered* and they are *mutable*.
Special about sets is also that they can't have an item twice. Useful for cases where you want to make sure that there is only one of each items in a set.

`names = {"Roger","Harald"}`

We can intersect to sets
```py
set1 = {"Hans","Roger"}
set2 = {"Hans"}
intersect = set1 & set2 # -> Returns "Hans" because it is in both sets
```

To create union of two sets
`union = set1 | set2`

To get the difference between two sets
`diff = set1 - set2`

To check if one set is a *superset* or *subset* of the other.

Has *set1* everything from *set2*
`super = set1 > set2`

Has *set2* everything from *set1*

`sub = set1 < set1`

With `len(set)` we can count the length of a set.

To convert a set into a list
`list(set1)`

## Functions
Functions let us create instructions that get executed when needed.
They also allow us to decompose programs into managable parts.

```py
def func_name():
    print("hallo")

# to call the function
func_name()
```

The name of the function should be a clear description of what is executed.

A function can accept one or multiple parameters.
```py
def hello(name,age):
    print("My name is " +name)
```
### Difference Parameter and Arguments
*Parameters* are the values accepted by the function inside the function definition

*Arguments* are values we pass to the function when we call it.

We also can set *default*  values for the *arguments*. If no value gets passed into the function, the default value gets used

```py
def hello(name="Default name"):
    print(name)
hello() # -> "Default name"
```

If you pass an immutable value (int,strings,booleans,tuple) into a function, and you modify their values inside the function, the new value is not reflected outside the function, unless it is saved back to it.

```py
def changeVal(value):
    value = 2

val = 1
changeVal(val)
print(val)# prints 1
```
So what we change inside our function doesn't really affect whats outside of it.

On the other side if you pass a mutable value(List,Dictionary,Sets) the changes inside a function do change the object.

```py
def changeVal(value):
    value[0] = "Horse"

val = ["Dog","Frog"]
changeVal(val)
print(val) # ["Horse","Frog"]
```

The reason is because python passes references to objects, not copies of the object. 
*mutable* - reference points to same object in memory - modifications affect memory

*immutable* - you can't modifiy them in place - any change creates new object.


### Returning Values
The `return` keyword allows us to give back values from a function.
```py
def giveBack(val):
    return val + 1


val = 1
val = giveBack(val)
print(val) # 2
```

If you want that you functions only executes some logic if a parameter got passed you can use
```py
def hello(name):
    if not name:
        return # directly jumps out of the function if no name or name is False
    print("Hello " +name)
```

If you want to return multiple values you can add them to return separated by a comma.

`return val1, val2`

### Variable Scope
*Variable Scope* defines where variables can be accessed in the code.

*local* - inside current function
*enclosing* - in outer functions
*global* - at the modul level
*build-in* - print,len

```py
x = "global"

def outer_func():
    x = "enclosing"
    print(x)

    def inner_func():
        x = "local"
        print(x)

print(x)
outer_func()
inner_func()
```


If you want to access a value that is defined in the function above the current executed function you can use `nonlocal` as a prefix to the variable

```py
def count():
    count = 0

def count2():
    nonlocal count
    count += 1
```

### Nested Functions