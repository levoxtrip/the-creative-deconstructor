---
title: C++ Game-Development
tag:PROGRAMMING
---
# C++ Game Development

`#include <iostream>` is a pre-processor directive is used to include a c++ library.

`iostream` is used for input and output streams and lets us use `std::cout` to print. It lets us print to the console.

`int main()` Each C++ program must have a main function which runs when program starts. It has an `int` return type. 

`std::cout << "hello, world!\n'"` prints string "hello, world!"
`std` is a namespace that contains the `cout` output stream. There is a namespace `std` and in there is functionality. 
`<< operator` sends the string to `cout`. 

Each C++ must end in `;`. 

Main has an `int` return type. System calls main and uses return type to check if program executes properly. Return 0 if program ran to normal end. Return something else if there is an error.
`return 0;`
 
Whitespace doesn't matter in C++. There are some execptions. You can not separate strings with a new line. And comments can not be separated by a new line.

## Standard Library
A collection of classes and functions available within C++. It contains useful functionality like strings,IO,files,containers like vector, setmap and algorithms like sort, max/min.

You must `#include` the standard library in your C++ program. You reference it via `std::` namespace.

*Namespaces* encapsulate code. 
`namespace dave { int ivar = 10; }` The outside usage will then be `dave::ivar`. `::` says look it up in that namespace/scope.

So for the standard library you use things like `std::string`, `std::vector` and more.

C++ program code will be written in `.cpp` files.

In C++ we also have *header files*. The are written in `.h` files. They are used for function/class *declarations*.

# C++ Compilation Process
C++ programs are compiled into binary executable files which are run directly by the CPU. This results in faster execution. There are different c++ compilers for different operation systems.

First thing that happens is that all the source code and header files run through the pre-processor. The pre-processor does the `#include` and `#define` implementation. The pre-processor is one stage of possible errors if for example the `#include` can't properly implemented.

Once the preprocessor has run, what is does is a *find and replace* action. `#include math.h` command goes and finds `math.h`, copies it and put's it right at the position of the include statement into the code. 

After the source code and header files are pre-processed the preprocessor spits out an expanded source code file with all the included libraries in the program.
The expanded source code file gets passed to the *compiler*.

The compiler then checks the code for syntactic correctness of the code. After the compiler has run, object files are created.

After that the *linker* is run which links the object files together so we can create the executable.

## Preprocessor functions
Runs all specific preprocessor directives.
Most common directives are `#include` and `#define`. We use `#include` to include libraries or other files into our source code. And *macros* with `#define` allow us to create constants.
```C++
//include
#include <library>
#include "specificfile.h"
//macro
#define LIMIT 100
#define AREA(L,W) (L*W)
```
So `#include "MyFile.h"` actually inserts the entire text from `MyFile.h` into the file that calls the include.

## C++ Compiler
There are multiple popular compilers that are used:
- Linux/Mac: GNU C Compiler gcc(g++),clang
- Windows: Visual Studio, mingw
On windows only use *Visual Studio* because everything else is a nightmare.

So when you want to compile your program `prog.cpp` on Mac/Linux you compile out the code into an executable:`g++ prog.cpp` which produces an executable file: `a.out`.

We can specify the output executable name with `g++ prog.cpp -o prog`. You then can run it with `./prog`. 
If you want to see the results of what the preprocessor did, you can call `-E` and pipe it into a new file `g++ -E prog.cpp > prog.s`
If you want to specifically execute to an object file you can do it with `-c`
`g++ -c prog.cpp`. This creates `prog.o` object file. You might have to do that when you create bigger projects. You then run the linker to connect these objects files together `g++ -o prog prog1.o prog2.o`.

You can compile multiple files in one step. But ideally you don't want to compile every time all your files again. You only want to recompile the files that you have changed. So you create a new `.o` files if `.cpp` file changed & link them together. This can be done in a Makefile.
Linking is faster than compiling.

On windows you just build and compile it in visual studio. 

## Separation of .cpp and .h
C++ code is often separated into a `.h` file and a `.cpp` file.
- `.h` file - "header" files with declarations
- `.cpp` file - "implementation" file with definitions

*Declaration*
`int sum(int x, int y);` - "This function sum exists"

*Definition*
`int sum(int x, int y) {return x + y;}` - The actual code of the function - what the function does.

### Header Files
Contain class/function declarations

Declarations include function name, return type, argument types and more.



