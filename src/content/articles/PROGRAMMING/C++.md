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

In C++ the de-facto standart is to name the first source file `main.cpp` or after the program `calculator.cpp`.

## Compiling your source code
C++ compiler goes through each source code(.cpp) file and checks the C++ code if it follows the rules of the language. If everything is alright the compiler translate C++ into machine language instructions. They are stored in an *object file*. It also contains other data that is required. They are names *name.o* or *name.obj*.

## Link object files and libraries
When the compiler finished successfully, the linker combines all the object files and produces the desired output file.

The linker reads each object file and makes sure they are valid. Then it sensures all cross-file dependencies are resolved. For example, if you define something in one cpp file and then in another the linker connects the two.

At the end the linker links in one or more library files. They are collections of precompiled code that is packaged up for reuse. It also outputs the desired output file which will be an executable file.

C++ comes with the *C++ Standard Library*, that provides useful capabilities. For example the *Input/Output library* *iostream* which contains functionality for printing text on a monitor and getting keyboard input from user.

# IDE
An *Integrated Development Environment(IDE)* is software that is developed to make it easy to develop, build and debug your proram.

# Compiling your first program
To write C++ program you first start by creating a new project. A project is a container that holds all your source code files and assets. Each project corresponds to one program.

To compile your program in visual studio *Ctrl+shift+b*. To run your program *ctrl-f5*

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
When `std:cout` is called the computer collects your output in a temporary area in memory called the *buffer*. So output "gets in line" first, waits in the buffer, and only reaches the console when the buffer is flushed.

The opposite of buffered output is unbuffered output. For unbuffered output each individual output request is sent directly to the output device.

Writing data to a buffer is fast, but transferring a batch of data to an output device is relatively slow. So buffering can increase the performance by batching multiple output requests together to minimize the amount of times output gets send.

## std::endl vs \n
`std::endl` is quite slow because it outputs a new line and it flushes the buffer. To output a new line without flushing the output buffer, we can use `\n`. It moves the cursor to the next line of the console.
```C++
#include <iostream>

int main(){
	int x{5};
	std::cout << "x is equal to " << x << '\n';
	std::cout << " Yes that is true";
	return 0;
}
```

## std::cin
`std::cin` reads input from the keyboard. To put the input data into a variable you can use `>>` the extraction operator.
```C++
#include <iostream>

int main()
{
	std::cout << "Please enter a number:";

	int x{};
	std::cin >> x; //Get number from keyboard and store in variable x

	std::cout << "You entered" << x << '\n';
	return 0;

}
```
We also can output multiple numbers in a single line.
```C++
#include <iostream>

int main(){
	std::cout << "Please enter two numbers seperated by space:";
	int x{};
	int y{};
	std::cin >> x >> y;

	std::cout << "You entered " << x << " and " << y << '\n';

	return 0;
}
```

### std::cin is buffered
`std::cin` is buffered because it allows us to separate the entering of input from the extract of input. We input data only once and then perform multiple extractions on it.

## Uninitialized Variables
C++ does not automatically initialize most variables to a given value like 0. A variable that has not been given a known value is called *uninitialized variable*.

*initialized* -> object is given known value at point of definition
*assignment* -> object is given known value after point of definition
*uninitialized* -> object has not been given a know value yet

## Undefined behavior
*Undefined behavior* is executing code whose behavior is not well-defined by C++.

It may exhibit following symptoms:
- program produced different result every time it is run.
- program produces the sme incorrect result
- program behaves inconsistently
- program crashes
- etc

## Keywords
C++ reserves 92 words for its own use so you can't use them for your variables or functions.

## Identifier naming rules
Identifier are the names of variables, functions or other items.
Identifier can not be a keyword.
Identifier can only be composed of letters, numbers and underscore character.
Identifier must begin with a letter or an underscore.
C++ is case sensitive.

## Identifier naming best practices
Variables and functions should begin with lowercase letter.

`int value;`

`int my_variable_name`
`int myVariableName`

## Whitespace
C++ is whitespace independent, it does not enforce any kind of formatting restrictions on the programmer.

# Introduction to literals and operators

## Literals
A *literal constant* is a fixed value that has ben inserted directly into the source code. The value of a literal is fixed and cannot be changed. A literals value is placed directly in the executable which can't be changed after it is created. A variable's value is place in memory and the value of memory can be changed while the executable is running.

So literals are inserted directly in to the source code and its value appear directly in the executable code. 
Objects and variable represent memory locations that hold values. These can be fetched on demand.

## Operators
`2 + 3`
Operators take values in and produce an out value. You give the operation some values and it does something with them and the result is itself a value. The values you give an operator are called *operands* and `+` is the operator which produces the return value.

Familiar operators are `+,-,*,/`. Other operators are `=`(assignment), `==`(equality), `<<`(insertion), `>>` extraction.

Every operator falls into one of four groups based on how many operands it takes. `unary` one operand, `binary` two operands, `ternary` three and `nullary` none.

### Chaining operators
The arithmetic operators execute in the same order as they do in standard mathematics: Parenthesis first, then exponents, then multiplication & division, then addition and subtraction.


# Introduction to expressions
In programming an expression is an sequence of literls, variables, operators and functions calls that calaculate a value.

Executing an expression is called *evaluation*.
When an expression is evaluated each of the terms of the expression are evaluated until a single value remains.

Expressions are always evaluated as part of statements. 
`int x{2+3};`
`type identifier{expression}`

## Expression statements
Statements are used to perform an action. Expression are used when we want to calculate a value.

# Developing your first program
Best strategy to write your programs is to add one piece at a time, compile it, test it and then continue with the next step. Go step by step

So to write a program that takes the input of the user and doubles that number is
```C++

#include <iostream>

int main(){
    std::cout << "Enter an integer: ";
    int num {};
    std::cin >> num;

    std::cout << "Double that number is: " << num *2<<'\n';
    
    return 0;
}
```
Because we don't use that double value of the number anywhere else we don't need to create a special variable for it. We can just output the expression in the `std::cout`. 

Once your program is wokring your job isn't done jet. The next thing to do is cleaning up your code, adding comments, handling error cases, formatting it and ensuring best practices.

## Summary
A `statement` is a type of instruction that performs an action.

A `function` is a collection of statements that execute sequentially. 
Every C++ program must include a special function named *main*.
Execution starts at the top of the main function.

The name of a function/object/type is called *identifier*.

Summary here [](https://www.learncpp.com/cpp-tutorial/chapter-2-summary-and-quiz/)

## Introduction to functions
A *function* is a reusuable sequence of statements designed to do a particular job.

Functions allow us to split our programs into small, modular chunks that are easier to organize, test and use.

A program will be executing statements sequentially inside one function when it  encounters a function call. It tells the CPU to interrupt the current function and execute another function. The CPU puts a bookmark at the current point of execution, executes the function named in the function call and then returns to the point it bookmarked and resumes execution.

The basic syntax for a user-defined function:
```C++
returnType functionName(){
//function body
}
```

To call a function you use the functionname followed by paranthesis `functionName()`. A function must be defined before it can be called. 

Functions can call other functions that call other functions.

Unlike to other programming languages in C++ functions cannot be nested.
This is not legal
```C++

int main(){
    void foo(){
    //do foo
    }
}
```
The proper way is to write the function above the main

## Function return values
When you write your own function you have to determine whether the function should return  value back to the caller or not. 
To return a value your function needs to indicate what type of value it will return by setting the functions *return type*. And inside the function you use a `return` statement to indicate the value being returned by an expression.

When the `return` statement is executed, the return expression is evaluedand produced a value and will be copied back to the caller of the function. It is called *return value* of the function.
```C++
int getValueFromUserInput(){
    std::cout << "Enter an integer: ";
    int input{};
    std::cin >> input;

    return input;
    }

int main(){
    int num{getValueFromUserInput()};

    ...
    return 0;
}
```

### Revisiting main()
`main()` requires to return an `int` and you should avoid explicitely call `main()`

The return value from `main()` is called a *status code* which signals whether your program was successful or not. By convention, status code of `0`means the program ran normally and a non zero code indicates some failure.
C++ standard defines 3 status codes: `0`,`EXIT_SUCCESS` and `EXIT_FAILURE`
`EXIT_SUCCESS` and `EXIT_FAILURE` are preprocessor mactos defines in the `<cstdlib>`
```C++
#include <cstdlib>

int main(){

    return EXIT_SUCCESS;
}
```
The status code is passed back to the operating sytem which makes the status code available to the program that launched the program returning the status coding.

`main()` will implicitly return value `0` if no return sttement is provided. 

A value-returning function *must* return a value of that type otherwise some undefined behavior will result. 
The function can only return a single value back to the caller.

Some functions use return values as status codes to indicate whether they succeeded or failed. Other functions return a calculated or seleccted value or even nothing.

One of the central tenets of good programming is *DON'T REPEAT YOURSELF*.You don't want redundant code or have to change something in multiple places. If you need to do something more than once, consider how to modify your code to move redundant code.

Variables can be used to store results of calculations that need to be used more than once. Functions to define sequence of statements we want to execute multiple times. Loops can be used to execute statements multiple times.

## Void Functions
Functions are not required to return a value back to the caller. To tell the compiler that a function is not returning a value, the return type is `void`.

```C++

void printHi(){
    std::cout << "Hi"<< '\n';
}
int main(){

    printHi();
    return 0;
}
```
A function that does not return a value is called *non-value returning function*.

Because a void function will automatically return to the caller at the end of the function it doesn't need a `return`statement. It can be used thou. It will cause the function to return to the caller at the point where the return statement is executed.

Trying to return a value from a void function will result in a compilation error.

## Function parameters and arguments
To be able to pass information to a function being called, we can use function *parameters* and *arguments*. A *function parameter* is a variable used in the header of a function which is initialized with a value provided by the caller of the function. The parameters are defined by putting them between the parenthesis of the function header
```C++
void printValue(int x){
    std::cout << x << '\n';
}

int add(int x, int y){
    return x + y;
}

```
An *argument* is a value that is passed from the caller to the function when the function call is made:
```C++
add(2,3);
printValue(4);
```

When a function is called, all the parameters of the function are created as variables and the values of the arguments are copied into the matching parameters. This is called *pass by value*.
Generally the number of function arguments must match the number of parameters otherwise the compiler throws an error. And the argument passed into a function can be any valid expression.
```C++
int getValueFromUser(){
    std::cout << "Enter an integer :";
    int input{};
    std::cin >> input;
    
    return input;
}

void printDouble(int value){
    std::cout << value << " doubled is " << 2*value << '\n';
}

void main(){
    //we are using the return value as an argument for the function
    printDouble(getValueFromUser());
    
    return 0;
}
```
If you don't use paremeters of your functions your compiler might throw a warning that it has been defined but not used.
The name of a function parameter is optional. In cases where a function parameter needs to exist but is not used in the body of the function you omit the name.
```C++
void doSomething(int /*count*/){

}
```

## Local Scope
Variables defined inside a function are called *local* variables.
```C++
int add(int x, int y){
    int z{x + y};
    return z;
}
```
Variables inside the function body are created and initialized at the point of definition.
Local variables are destroyed in the opposite order of creation at the end of the set of curly braces.
```C++
int add(int x, int y){
    int z {x + y};
    return z;
} // z,y,x destroyed here(in that order)
```
An objects *lifetime* is defined by the time between creation and destruction of it.

When an object gets destroyed it becomes invalid. At some point after the objcect got destructed, the memory that got used by the object will be freed up(*deallocated*).

An identifiers *scope* determines where it can be used and seen in the code. To use an identifier that is out of scope results in a compile error.

The local variable identifieris usable from the point of definition to the end of innermost pair of curly braces. This assures local variables cannot be be used before the point of definition and after they are destroyed.

The best practise to define local variables inside functions is they should be defined as close to their first use.

### Function parameters vs local variables
use function parameter when the value needs to come rom outside the function - passed in from the caller.

Use local variables when the value is something the function generates or sets up itself.

## Temporary objects
A *temporary/anonymous object* is an unanmed object that is used to hold a value for only a short period of time. They are generated by the compiler when needed.

Return by value returns a temporary object what holds copy of the return value. 

They are destroyed before the next statement executes.

## Why functions are useful and how to use them effectively.

Using functions instead of putting all the code just in the `main` has multiple
benefits:

- Organization - A function allows us to reduce a complicated program into smaller
manageable chunks.
- Reusability - A function can be called multiple times and minimizes copy/paste errors. It also can be shared with other programs.
- Testing - Functions are self-contained so once we tested the function we don't need
to test it again.
- Extensibility - Functions allow to make changes in one place and have that change take effect everywhere.
- Abstraction - In order to use a function, you onle need to know its name, inputs and outputs and where it lives.

### How to use them
Guidelines for writing functions:
- Join groups of statements, that appear multiple times in your program, into a function.
- Code that has defined set of inputs and outputs
- A function should generally perform only one task.
- Split long functions into sub-functions(refactoring)

## Forward declarations and definitions
A *forward declaration* allows us to tell the compiler about the exitence of an identifier *before* actually defining it.

To write a forward declaration for a function, we use a *function declaration/prototype*.
It consists of the return type, name and parameter types of the function.
```C++
int add(int x, int y);
int subtract(int,int);// without parameter names - better with names
```
Now when the compiler reaches the call to add in main, it knows what add looks like.
Often forward declarations are used to tell the compiler about functions from a different code file.

## Declaration vs. defintion
A *declaration* tells the compiler about the existence of an identifier and its type information.
`int add(int x, int y)`

A *definition* is a declaration that implements/instantiates the identifier.
```C++
int add(int x, int y){
    int z {x + y};
    return z;
}
```
Often forward declarations are used to tell the compiler about functions from a different code file.

## Declaration vs. definition
A *declaration* tells the compiler about the existence of an identifier and its type information.
`int add(int x, int y)`

A *definition* is a declaration that implements/instantiates the identifier.
```C++
int add(int x, int y){
    int z {x + y};
    return z;
}
```
*One definition rule* - within a file/program each function, variable, type or template in a given scope can only have one definition.

## Programs with multiple code files
As programs get larger it makes sense to split it into multiple files for organizational or reusability purpose.

The compiler compiles each file individually. It doesn't know about the contents of other files or remembers anything it has seen from previously compiles code.

If you have some functionality in another code file you can use *forward declarations* to reference these in your main file.

```C++
#include <iostream>

int add(int x, int y); 

int main(){
    std::cout << "..." << add(3,4) << '\n';
    return 0;
}
// add.cpp

int add(int x, int y){
    return x + y;
}
```
When the compiler compiles `main.cpp` it will know what identifier `add` is. The linker connects the function call to add in main.cpp to the definition of function add in add.cpp.


Two identifiers with the same name can be declared in separate scope regions without causing any naming conflicts. Within a scope all identifiers must be unique otherwise you result a *naming collision*.

## Namespaces
A *namespace* provides a type of scope region that allows you to declare or define names inside of it to avoid disambiguity. Names declared within a scope region like a namespace, are isolated from names declared in other scopes. 

Namespaces contain declarations and definitions(e.g. variables and functions). Unless they are part of a definition executable statements are not allowed.

They are used to group related identifiers in a large project, so they don't collide with other identifiers. So you may group all your math functions into a namespace named `math` so they don't collide with identically named functions outside of the namespace.

### Global namespace
Any name that is not defined in a class, function or namespace is called *global namespace/scope*. 

Identifiers declared inside global scope are in scope from the point of declaration till end of the file.

### std namespace
`std::cout` 
`std` is the name of the namespace that identifier `cout` is part of. 
Most direct way to tell compiler that we want to use `cout` from `std` is using `std::`.
`::` is an operator called *scope resolution operator*. The identifier on the left of `::` identifies the namespace. If no identifier to the left of the symbol is, the global namespace is assumed. 

Another way to access the identifiers inside a namespace is to use the `using` directive statement. 
`using namespace std;`
Then you can just call `cout << "Hello world";`
But this is more bad practise and discouraged, because the identifier name may conflict with our own created identifiers.

## Introduction to preprocessor
Prior to the compilation of the code each code file goes through a *preprocessing* phase. In it the *preprocessor* makes various changes to the text of the file. The original files aren't modified but all changes made happen either in temp in-memory or using temporary files.

What the preprocessor does is striping out comments and ensuring each code file ends in a newline. It also processes the `#include` directives. The result or the preprocessing is called *translation unit* which is compiled by the compiler.

The whole process of preprocessing, compiling and linking is called *translation*.

### Preprocessor directives
*Preprocessor directives* are instructions that start with `#` and end with a newline. They tell the preprocessor to perform certain text manipulation tasks. It does not understand C++ and has its own syntax.

When you use `#include` to add a file, the preprocessor replaces the directive with the contents of the included file. They are preprocessed, then the rest of the file.

```C++
#include <iostream>

void main(){
    std::cout << "Hello";
    return 0;
}
```
So when the preprocessor runs, it will replace `#include <iostream>` with the contents of the file named *iostream* and then preprocess the included content and the rest of the file.

### Macro defines
`#define` can be used to create a macro. A macro in C++ is a rule that defines how input text is converted into replacement output text.

There are *object-like* macros and *function-like* macros.

*Function-like* macros act like functions, their use is considered unsave.
*Object-like* macros can be defined in one of two ways:
```C++
#define IDENTIFIER
#define IDENTIFIER substitution_text
```
By convention macro names are typically all uppercase, separated by underscores.
When the preprocessor encounters the diretive, an assoociation between the macro identifier and *substitution_text* is made. All occurrences of the macro are replaced by *substitution_text*.

```C++
#include <iostream>

#define MY_NAME "Alex"

int main(){
    std::cout << MY_NAME;
    return 0;
}
```
This results in:

```C++
#include <iostream>

int main(){
    std::cout << "Alex";
    return 0;
}
```
These *object-like* macros with substitution text are only used in legacy code. They are not recommended being used whenever possible.

### Conditional compilation
*Conditional compilation* preprocessor directives allow you to specify under what conditions something will or won't compile. Some of the most often used are: `#ifdef, #ifndef, #endif`.

`#ifdef` preprocessor directive allows to check whether an identifier has been preivously defined via `#define`. If true, the code between `ifdef` and `endif` is compiled. Otherwise the code gets ignored.

```C++
#include <iostream>

#define PRINT_JOE

int main(){
#ifdef PRINT_JOE
    std::cout << "Joe\n";
#endif

#ifdef PRINT_BOB
    std::cout << "Bob\n";
#endif

    return 0;
}
```
Because `PRINT_JOE` has been set in the `#defined`, `Joe` will be compiled and `Bob` ignored.

`ifndef` is the opposite of `#ifdef`. It allows to check whether an identifier has not been defined.

```C++
#include <iostream>

int main(){
#ifndef PRINT_BOB
    std::cout << "Bob";
#endif
    return 0;
}
``` 
This program prints `Bob` because `PRINT_BOB` has not been defined.
You also see `if defined(PRINT_BOB)` and `#if !defined(PRINT_BOB)`. Which do the same.

## If 0
We can use `#If 0` to exclude a block of code from being compiled.
```C++
#include <iostream>

int main(){
    std::cout << "hi";

#if 0 // dont compile anything starting here
    std::cout << "ho";
#endif
    return 0;
}
```
If you want to temporarily let the code compile thou you can change `#if 0` to `#if 1`.

Directives are only valid from the point of definition to the end of the file.Directives defined in one file do not have any impact on other files.

## Header files
Header files have an `.h` extension, sometimes also `.hpp`. They allow you to put declarations in one place and then import them wherever we need them. We don't need to write sums of forward declarations for every function we want to use from another file.

When we use `#include <iostream>` we are requesting the preprocessor to copy all the content of the file into the file where `#include` is mentioned.

Header files consist of two things: *header guard* and *actual content of header file*, which should be forward declarations for all the identifiers we want other files to be able to see.

So you create a header file for the forward declarations
```C++
//add.h

int add(int x, int y);
```
```C++
//add.cpp
#include "add.h"

int add(int x, int y){
    return x + y;
}
```
```C++
//main.cpp
#include <iostream>
#include "add.h"

int main(){
    std::cout << "The sum of 5 and 9 is " << add(5,9) << '\n';
    return 0;
}
```
When the preprocessor processes the `add.h` include, it copies the contents of it into the current file at that point. 

This is just an example how to link these header file. Generally don't put function and variable definitions in your header file to avoid that we have multiple times the same function definition.

Source files should `#include` their paired header file if it exists.
Generally don't `#include` .cpp files. They should be added to your project and compiled. Including them could cause naming collisions, hard to avoid one definition rules and more.

Difference between angled brackets and double quotes is that they give the preprocessor a clue as to where it should look for header files.
With angled brackets we telling the preprocessor we didn't write header file ourselves. It will search for the header only in the directories specified by `include directories`.
With double quotes we are telling the preprocessor that we wrote header file. It searches first in the current directory then. If it can't find it, it will search in `include directories`.
*Use double quotes to include header files that you have written or that are expected to be found in the current directory.* 
*Angled brackets for header files that come with the compiler,OS, or third-party libraries*.

## Including Header files from other directories
Tell your compiler or IDE that you have header files in some other location, so it will look there when it can't find them in current directory. Set an *include path* or *search directory* in your IDE project settings.

## Headers including other headers
It is normal that the content of a header file will make use of something that is declared in another header file.

`Each file should explicitly #include all the header files it needs to compile`

Best practice for the inclusion of other header files:
Order your includes as following:
- paired heade rfile for this code `add.cpp` should include `#include "add.h"`
- other headers from same project 
- 3rd party library headers
- Standard library headers `#include <iostream`

Other recommendations for creating and using header files:
- always include header guards
- do not define variables and functions in header
- give header file same name as source file it is associated with
- each header file should have specific job and be as independent as possible
- only include what you need

## Header guards
With header files its can happen easily that you end up including definitions more than once. *Header/include guards* are conditional compilation directives. They are used to prevent a code from receiving more than one copy of a guarded header.
```C++
#ifndef SOME_UNIQUE_NAME
#define SOME_UNIQUE_NAME

// declarations

#endif
```
When this header is included the preprocessor will check whethter `SOME_UNIQUE_NAME` has been defined previously in this translation unit. If its the first time we are including the header and the content of the file. If it is included another time `SOME_UNIQUE_NAME` has been defined already so the contents of the header will be ignored.

All header files should have header guards. By convention set the name to the full filename of the header file `RECT_H` for *rect.h*. 

In modern compilers there is a simpler alternate form of header guards using `#pragma` preprocessor directive:
```C++
#pragma once

//your code here
```

## How do design your first program
One of the most important things to remember is that you should *design* your program before you start coding. You need a good game-plan of how to move forward and how to build the project. 

Step 1: Define your goal
You first need to define what your goal is. State this goal of your program in a sentence or two. What can help is to state this as a *user-facing* outcome.
- Allow the user to organize a list of names and associated phone numbers.
- Generate randomized enemies that will attack to player

Step 2: Define requirements
In the next step think about the *requirements*.
Which constraints does your solutions needs to abide as well as the capabilites the program must have to meet the users needs. The requirements should focus on the *what*.
- The user should be able to enter the area
- The program should produce ..
- I need a testable version in ... days.

Step 3: Define tools, targets and backup plan
- Define what target architecture and OS your program runs on
- Determine what tools you will use
- Define testing/feedback/release strategy
- How will you back-up your code

Step 4: Break hard problems down into easy problems
Use the *top down* method of problem solving - instead of solving a single complex task, break it into smaller subtasks, each easier to solve. By continuously splitting complex task in to simpler ones you get to manageable tasks. 

Another way is to use *bottom up* approach where you start from a list of easy tasks, and construct the hierachy by grouping them.

These task hierachies also help you to define the structure of your overall program. The top level task becomes the main() and the subitems become functions in the program.
```
//Top down approach
Clean the house
    Vacuum the carpets
    Clean the bathrooms
        Scrub the toilet (yuck!)
            Wash the sink
    Clean the kitchen
        Clear the countertops
        Clean the countertops
        Scrub the sink
        Take out the trash
``` 

```
//Bottom up
Get from bed to work
    Bedroom things
        Turn off alarm
        Get out of bed
        Pick out clothes
    Bathroom things
        Take a shower
        Get dressed
        Brush your teeth
    Breakfast things
        Make coffee or tea
        Eat cereal
    Transportation things
        Get on your bicycle
        Travel to work
```

Step 5: Figure out sequence of events
Now it's time to link all the tasks together. Start by determining the sequence of events that you program should perform. 
```
Get first number from user
Get mathematical operation from user
Get second number from user 
Calculate result
Print result
```

Implementation step 1: Outlining main function

You then can convert that into a functional structure.
```
int main(){

    getUserInput();

    getMathematicalOperation();

    getUserInput();

    calculateResult();
    
    printResult();

    return 0;
}
```

Implementation step 2: Implementing each function

1. Define function prototype with inputs and outputs
2. Write function
3. Test function

Each function should be simple and straightforward.

Don't implement your entire program in one go. Work on it in steps, testing each step along the way before proceeding.

Some advices:
- Keep your programs simple to start.
- Add features over time once you have simple program working well.
- Focus on one area/task at a time.
- Optimize for maintainability, not performance

## Syntax and semantic errors
Errors generally fall into one of two categories: syntax errors and semantic errors(logic)

*Syntax errors* occur when you write a statement that is not valid according to the grammar of the programming language. This can be *missing semicolons*,*wrong parenthesis or braces*, etc. 

*Semantic errors* are errors in meaning. The statement might be syntactically valid, but can violate other rules of the language, or result in unintended behavior. These can be *undeclared variables or type mismatches.

## Debugging process
All bugs base on a simple premise: Something you thought was correct, isn't.

General approach to debugging:
- Find the root cause of the problem
- Ensure you understand why the issue is occuring.
- Determine how you fix the issue.
- Repair the issue that is causing the issue
- Retest to make sure the problem has been fixed and no new problems emerge.

Tactics to debug your code are:
- Comment out your code to reduce the amount of code you have to search through
- Validate your code flow - 
- Printing values - output value of variables or expressions
- Conditionalize your debug code - you can use preprocessor directives to comment some parts of your code.
- Use a logger - C++ contains output stream `std::clog` which is used for writing logging information.

```C++
...
#define ENABLE_DEBUG

int getUserInput()
{
#ifdef ENABLE_DEBUG
std:cerr << "GetUserInput() called";
#endif
...
}
```
When you print information for debugging purposes use `std::cerr` instead of `std::cout`. `cerr` is not buffered and will immediately output. This ensures all debug output appears as soon as possible.
## The debugger
A *debugger* is a program that allows to control how another program executes and examines the program state while the program is running.

You can use a debugger to execute your program line by line, evaluating values of your variables in each step. 

*Stepping* - lets you execute your code statement by statement.

*Step into* - executes the next statement in the normal execution path and then pauses execution - it lets you examine the programs state using the debugger
If statement contains a function call, *step into* lets program jump to the top of the function being called.
With `F11` you can step through your program in VS.

*Step over* - executes the next statement of the normal execution order - it will execute entire function without stopping and jumping into the function. `F10`

*Step out* - Executes all remaining code in the function currently being executed.

*Run to cursor* -executes the program until execution reaches the statement selected by you cursor. Then it return control so you can continue debugging.

*Continue* - continues running the program as per normal

*Breakpoints* - A marker that tells the debugger where to stop execution of the program

Besides stepping through your program, a debugger also let you examine the value of variables as you step through your code.

In VS you can use `Shift+F9`

A call stack is a list of all the active functions that have been called to get to the current point of execution. 

*Static Analysis Tools*
Programs that analyze your source code to identify specific semantic issues. In VS you can use it with `Alt+F11`.

