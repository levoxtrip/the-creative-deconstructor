---
title: C++ Basics
tag: Programming
---
# C++ Basics
A computer program is a sequence of instructions that directs a computer to perform certain actions in a specified order.

Computer programs are loaded into the memory prior to their execution.

CPU's only can process instructions written in machine code. Each instructions in machine code is composed of a sequence of 0s and 1s - binary digit or bit. Some CPUs process instructions that are always 32bit long and others with varying size(x86). *Assembly* is a more human readable machine language. An *assembler* is a program that translates assembly code into machine code.

Programs written in a high-level language like C++ or python need to be translated into machine language before they can be executed. There are two ways this is done:
*compiling:* C++ programs are usually compiled. A compiler are programs that read the source code form one language(usually high-level languages) and translate into another language(usually low-level languages). The machine code output of the compiler then can be packaged into an executable file.
*interpreting:* An interpreter directly executes the instructions in the source code without needing to be compiled before. They are more flexible than compiles but also less efficient when running programs. The interpreter must be installed on every machien where an interpreted program will be run.

# C++ Philosophy
The c++ design philosophy is *trust the programmer*. The programmer has a high degree of freedom to do what they want. So the language also doesn't stop you from things that don't make sense - it will assume you're doing it for some reason.

C++ is good at situations where high performance and precise control over memory and resources are needed like Video games, real-time systems, audio and video processing

# Development flow
1. Define the problem to solve
2. Design a solution
3. Write a program that implements the solution
4. Compile program
5. Link object files
6. Test program
7. Debug
8. Back to Compile program

Spend a little extra time up front thinking about the best way to tackle your problem, what assumptions your are making.
Create useful error messages when something unexpected happens
Build your programs modular

In C++ the de-facto standart is to name the first source file `main.cpp` or after the programm `calculator.cpp`.

## Compiling your source code
C++ compiler goes through each source code(.cpp) ile and checks the C++ code if it follows the rules of the language. If everything is alright the compiler translate C++ into machine language instructions. They are stored in an *object file*. It also contains other data that is required. They are names *name.o* or *name.obj*.

## Link object files and libraries
When the compiler finished successfully, the linker combines all the object files and produces the desired output file.

The linker reads each object file and makes sure they are valid. Then it sensures all cross-file dependencies are resolved. For example, if you define something in one cpp file and then in another the linker connects the two.

At the end the linker links in one or more library files. They are collections of precompiled code that is packaged up for reuse. It also outputs the desired output file which will be an executable file.

C++ comes with the *C++ Standard Library*, that provides useful capabilities. For example the *Input/Output library* *iostream* which contains functionality for printing text on a monitor and getting keyboard input from user.

# IDE
An *Integrated Development Environment(IDE)* is software that is developed to make it easy to develop, build and debug your proram.

# Compiling your first program
To write C++ program you first start by creating a new project. A project is a container that holds all your source code files and assets. Each project corresponds to one program.

To compile your program in visual studio *ctrl+shift+b*. To run your program *ctrl-f5*

*Cache* is storage location where frequently accessed data is stored for fast retrieval later. This can speed up compilation times.

# Configuring your compiler: Build configurations
