---
title: C++ Basics
tag: Programming
---
# C++ Basics
`From learncpp.com`
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
*Build Configuration* or *build target* is a collection of projects that define how your IDE will build your project. It includes information like what the executable will be named, what directories the IDE will look for other code and library files. Generally leave these settings at default.

Most IDEs have debug and build configuration
*debug configuration:* designer to help you debug your program - it turns of all optimizations and includes debugging information - makes program larger and slower but easier to debug.

*release configuration:* designer to be used when releasing your program. It is optimized for size and performance. Mode is useful for testing the performance of your code.

# Configuring your compiler: Compiler extensions
C++ standard defines rules about how programs should behave in specific circumstances. And in most cases compilers follow these rules. But many compilers implement their own changes to the language to enhance the compatibility with other versions of the language. These compiler specific behaviors are called *compiler extensions*.

But writing a program that makes use of compiler extension allows you to write programs that are incompatible with C++ standard and non-standard extensions will not compile on other compilers. 
For beginners it makes sense to turn compiler extensions off to ensure your programs ramain complaint with C++ standards.

In VS right click on project name in *solution Explorer* and choose *Properties*. Set *Configuration* field to *All Configurations* and set under *Language* `Conformance mode` to `Yes(/permissive)`.

# Configuring your compiler: Warning and error levels
When the compiler who checks you code on if you followed the rules of C++ finds kind of issue it will send a *diagnostic message*.
*Diagnostic error* - compiler halts compilation because it cannot proceed or error is serious enough to stop. They are called *compilation errors, compiler errors*.
*Diagnostic warning* - compiler has decided not to halt compilation.

You can request your compiler to be more assertive about providing warnings by turing your warning level up while you are learning.

*Solution Explorer -> Properties -> All Configurations -> Generatl -> Warning Level Level4*

## Treat warnings as errors
To enforce the recommendation to fix all warnings you can tell your compiler to treat all warnings as erros.

*Properties->All Configurations->C++-> General -> Treat Warnings As Errors-> Yes* 

# Configuring your compiler: Choosing a language standard
There are many different versions of C++ available. Generally a compiler picks a standard version as default. This won't necessarily be the most recent one. In professional environments its common to choose a language standard that is one or two versions back from the latest finalized standard.

For learning choose latest finalized standard.

## Settings language standard in VS
You must do it on a project by project basis.
*Project Menu -> Application Name Properties -> Configuration Properties -> C/C++ -> Language*

## Exporting Configuration
You don't want to reselect all your settings every time so you can export them as a template when you create a new project.


# Statements and structure of a program
`A computer program is a sequence of instructions that tell the computer what to do.` A `statement` is an instruction that causes the program to *perform some action*.

Generally statements in C++ end with a semicolon `;`.

Typically statements are grouped into *functions* as a collection of statements that gets executed in order from top to bottom.

Every C++ program must contain a `main` function. Programs typically terminate after the last statement inside `main` has been executed.

The name of a function is called its `identifier`.
```C++
// Preprocessor directive - include says that we like to use contents of iostream library
// We need iostream to use std::cout
#include <iostream>

int main()
{
	// std::cout stands for character output
	// << allows to display information on the console
   std::cout << "Hello world!";
   return 0;//When executable program finishes running it sends a value back to operating system to indicate whether it ran successfully or not - 0 means everything was successfully.
}
```

`Compilers sometimes report error on the line after the one where we have to fix the issue`.

# Comments
A comment is a note that is inserted into source code and ignored by the compiler.

*Single line comment*
```C++
// Everything from here to the end of the line is ignored
```

*Multi-line comments*
```C++
/*
This is a multi-line
comment
*/
```
Comments should be used to describe why the code is doing something. 
Write your comments as if speaking to someone who has no idea what the code does.

# Introduction to objects and variables
## Data and values
Programs generate results by reading, changing and writing data. So programs are *instructions that manipulate data to produce a desired result*. It can get that data from for example a database, files, user inputs, another program etc.

A single piece of data is called a `value` like numbers `2`,characters `'e'` or text `"World"`. 
Values placed in single-quotes are interpreted as *character* values
Values placed in double-quotes are interpreted as *text* values.

Values that are placed directly into the code are called *literals*
```C++
#include <iostream>

int main(){
	std::cout <<9; // print the literal `9`
	std::cout <<'H'// print the literal character H
	std::cout <<"Text" // print the literal text "Text"

}
```

## Random Access Memory(RAM)
*Random Access Memory* is the main memory in a computer. When we run a program the OS loads the program into RAM. Any data that is hardcoded into the program itself is *loaded at this point*. The OS also reserves some extra memory for the program to use while running for example to store values entered from the user, to store data read in from a file or to store calculated values while the program runs so they can be used later.

RAM is like a series of numbered boxes that gets used to store data at runtime.

## Objects and Variables
In C++ we access memory through an object. An *object* represents a region of storage(RAM or CPU register) that can hold a value. You say *go get the value stored by this object* and the compiler figures out where and how to retrieve the values.

An object with a name is called a *variable*.

`An object is used to store a value in memory. A variable is an object that has a name(identifier)`.

To define a variable
`int x; // defining the variable of type int with the name x`

At compile-time the compiler makes a note to itself that we want a variable with the name `x` and the data type `int`, then the compiler knows when we use `x` that we are talking about that variable. The compiler handles all the details about the variable for us, including determining how much memory the object will need, what kind of storage the object will be placed, when it will be created and destroyed, etc.

## Variable creation
Each object is given an actual storage location *at runtime*. The process of reserving storage for an objects use is called *allocation*. Once allocated the object can be used.

## Data types
A `data type` defines what kind of value the object will store.

*integer* is a number that can be written without a fractional part like `6,123,4333,-10`. An *integer* variable only can hold *integer* values.

The data type of an object must be known at compile-time.

It is possible to define multiple variables of the same type in a single line.
`int a,b;`

## Variable assignment and initialization
After a variable got defined, we can give it a value with `=` operator. This is called *assignment*.
```C++
int height;
height = 10;
```
We also can use assignment to change the value of variable

```C++
int height;
height = 10;
std::cout << height;
height= 20;
std::cout << height;
```

*Variable initialization*
When an object is defined we can provide an intial value for it. This is called *initialization*.
`int height {10};`

Initialization is quite complex in C++. There are different common ways to initialize.

```C++

int a;//default initialization

int b = 5;//copy-initialization (initial value after =)
int c (6); //direct-initialization

//Modern initialization forms
int d {9}; // direct-list-initialization
int e {}; // value-initialization

```
*default initialization*
leaves the variable with an indeterminate value

*copy initialization*
Copies the value on the right side of the equals into the variable on the left.
It is less efficient than other forms of initialization for complex types.

*direct initialization*
Was introduced to allow more efficient initialization of complex objects. But got out of favor in modern C++ because of being superseded by direct-list initialization.

*List-initialization*
The modern way of initialize objects in C++.
```C++
int a {5};
int b = {6};
```

They don't allow *narrowing conversions*. 
So you couldn't enter a number with a fractional part in the initialization
```C++
int a1{4.5}; // causes a compile error: list-init does not allow it

int a2 = 4.5; // compiles: to value 4
int a3 (4.5); // compiles to value 4
```

Be aware that the blocking of *narrowing conversions* is just on the initialization., not to any following assignments to the variable

```C++

int w1 {4.5}; // compile error

w1 = 4.5; // is okay -> value 4
```

## Value-initialization and zero-initialization
When a variable is initialized using empty set of braces *value-initialization* takes places. It will implicitly initialize a variable with the value 0 or what is closest to zero for the type. This is called *zero-initialization*
`int width {};` results into value 0 

## List-initialization is preferred initialization form
List-initialization is generally the preferred initialization form.

## Initialize your variables
Initialize your variables upon creation.

## Instantiation
It is called *instantiation* when a variable has been created and initialized. Instantiated object is sometimes called instance. Often this term applies for class type objects.

## [[maybe_unused]] attribute
The `[[maybe_unused]]` attribute allows to tell the compiler that we're okay with a variable being unused. It will then not generate unused variable warnings.

```C++

[[maybe_unused]] double pi {3.14159}
```
The compiler will also optimize these variable out of the program, so they don't have any performance impact.

# Introduction to iostream
The *Input/output library* is part of the C++ Standard library that deals with output and basic input. It is used to get inputs from the keyboard or output information to the console.

To use the library you need to include `iostream` header at the top of your code file.
```C++
#include <iostream>
```

## std::cout
*std::cout* allows us to send data to the console to be printed as text. *cout* stands for *character out*.
```C++
#include <iostream>

int main(){
	int x{5};
	std::cout << "Hello World";
	std::cout << 4;
	std::cout << x;
	return 0;

}
```
`<<` is the *insertion operator*. To print more than one thing on the same line, you can used another `<<` to link together multiple pieces of output. You can think of `<<` as a conveyor belt that moves data in the direction it indicates.

```C++
#include <iostream>

void main(){
	int x {5};
	std::cout << "hello" << " world";
	std::cout << "X is equal to: " << x;
	return 0;

}
```

## std::endl
With `std::endl` we tell the console to move the cursor to the next line.

```C++
#include <iostream>

void main(){
	std::cout << "Hello" << std::endl;
	std::cout << "World";
	return 0;
}
```

## Buffered std:cout