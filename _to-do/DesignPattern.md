# Design Patterns In Programming

## Strategy Pattern
=== FROM CLAUDE CONVERT
A program often needs to do the same kind of thing in different ways. Sorting a list (by name, by date, by size). Compressing a file (zip, gzip, none). Calculating a price (regular, discount, premium). The operation is the same—the method varies.
You could handle this with conditionals:
javascriptif (type === 'zip') {
  // zip logic
} else if (type === 'gzip') {
  // gzip logic
} else {
  // no compression
}
This works, but it tangles together deciding what to do with doing it. Every new method means touching this code. The conditional grows. The logic bleeds together.
The Strategy Pattern separates the what from the how. You define a family of interchangeable algorithms, each in its own object, and the caller picks which one to use.

The Structure
Three pieces:

Strategy — an interface that defines what the algorithm does (not how)
Concrete strategies — individual implementations of that interface
Context — the object that uses a strategy, without knowing which one

javascript// The interface (implicit in JS, explicit in typed languages)
// Every strategy must have a `compress(data)` method

// Concrete strategies
const zipStrategy = {
  compress(data) {
    return `[zip compressed: ${data}]`;
  }
};

const gzipStrategy = {
  compress(data) {
    return `[gzip compressed: ${data}]`;
  }
};

const noCompression = {
  compress(data) {
    return data;
  }
};

// Context
class FileProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  process(data) {
    return this.strategy.compress(data);
  }
}
Now the caller decides:
javascriptconst processor = new FileProcessor(gzipStrategy);
processor.process("my file contents");
// → "[gzip compressed: my file contents]"
Swap the strategy, swap the behavior. The FileProcessor doesn't know or care which algorithm it's using—it just calls compress().

Why This Works
The pattern exploits a simple principle: if things vary independently, separate them.
The decision of which algorithm to use varies. The mechanism of calling an algorithm stays the same. So you put the varying part (the algorithm) behind a stable interface, and the context just talks to that interface.
Adding a new algorithm means adding a new object. You don't touch the context. You don't touch existing strategies. Each piece changes for one reason only.

When to Use It
Good fit:

Multiple algorithms for the same task
You need to switch algorithms at runtime
You want to avoid conditionals that select behavior
Algorithms have similar signatures but different internals

Example triggers:

Pricing rules that differ by customer tier
Pathfinding algorithms (A*, Dijkstra, greedy)
Rendering pipelines (WebGL, Canvas, SVG)
Validation strategies (strict, lenient, none)

Overkill if:

You only have two options and they'll never change
The "algorithm" is a one-liner
The variation is data, not behavior


The Pattern in One Sentence
Define each algorithm as an object, give them the same interface, and let the caller inject whichever one it needs.
The context doesn't branch on what kind of algorithm—it just uses whatever algorithm it was given. The decision moves up and out. The execution stays clean.
===




When we want to create a flexible system to define how an object performs a specific task we can use the *strategy pattern*. It is a behavioral pattern that allows to write interchangable code so you can select the right strategy based on the situation. 
Use when you have multiple ways to do the same thing and you want to switch between them without changing the code that uses them.

You have some behavior you want to execute and There are multiple strategies to execute this behavior. With the strategy pattern we create a common *Interface* that the different strategies subscribe to, to make them interchangeable.

Context: The main object (The Navigator).

Strategy Interface: A common rule that says "Every strategy must have a calculateRoute() function."

Concrete Strategies: The specific code logic (Car, Walk, Bike).

If you have large if blocks or switch logics it is an indicator that you might want to use a strategy pattern. You can have as many different implementations you want as you conform to that Interface

### Example
Imagine you are building a navigation app. The app needs to calculate a route from Point A to Point B. However, the route depends on whether the user is driving, walking or cycling.

Instead of writing a function with a lot of if statements( if car do this, else if walk do that) you separate each method of travel into its own strategy.

You have a base Navigator object and you it has a slot where you can plug in a specific travel strategy.  The object using them doesnt care which one it gets.

If you plug in the Car Strategy, the Navigator calculates routes using roads and speed limits.

If you swap it for the Walking Strategy, the Navigator ignores highways and uses footpaths.

## Entity Component Pattern