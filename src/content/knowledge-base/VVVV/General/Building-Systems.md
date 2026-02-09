# Building Systems in VL
A `Process` is a way to create a cleaner patch because it allows to have *Create* and *Update* method executed inside the node. It takes care of creating and updating what lives inside the node. A `Process` node is encapsulation of a living thing; an object that has its own state and lifetime.

When your app is bigger and more complex it makes sense to capture the state of your app in a *model* at one central place for all information of your app. A *model*  
represents and manages your application's data and business logic. What your data is and what it can do.

## Model-View-Controller Pattern
The *MVC* pattern separeates an application into three parts:
- Model(Brain) - The data and business logic (the "brain")
- View(Interface) - What the user sees
- Controller - Handles user-input and changes state - it coordinates between Model and View.

# Snapshots
We can use an *immutable* structure that can't change so it acts like a *snapshot*. These snapshots can be stored and even be undone, jump to different snapshots and lerp between them.

Because the structure is not *mutable* a `Cache` region detects changes in the structure.

# AppState Class
So the idea is that we create an *AppState* `Class` where we store the different snapshots of  our app.

![Model Controller View Img](/img/vvvv/ModelControllerView.png)

In the `Controller` we then *set the current snapshot.* So we have a combination of an unmutable type of the snapshot and the mutable type of the class. 
This approach makes sense when you want to be able to undo changes, or jump between fixed snapshots of your app states.


# Strategy Pattern

You create one idle state that is super performant because all elements are "inactive" and then a state where something gets performed.

You can create `Class1` for one state and `Class2` for another state. On start you run state1, if something happens you set state2. 

For the states you create an interface which the states subscripe to. So you can define operations on the interface that then all objects that subscribe to interface need. What is common between thetypes? Interfaces can inherit from other interfaces.

# Object graph based on interfaces
Interfaces are contracts. The element only allow other objects with the same interface.

# Entity Component Pattern
how you organize and build the objects in your entire world

Lego Construction Kit

breaking everything down into tiny, reusable parts.



Separates identity, data and behavior in three parts:
Entity: Just an ID
Component: Pure data attached to entities(Position, Health, Sprite)
System: Logic that operates on entities with specific components

Use when you need flexible composition of your entities. You can mix and match components to define what somethign is and what it can do. 
When you want or have to avoid inheritance and make reusable code
Instead of innate behaviors to an entity we ften we want to op for composition, where we attach behaviors to an entity using *components*. We then use these components in a *system* which takes the components that belong to n entity and operates on them.
Entities: Group of components; Components are Data: Systems: Functions(use and alter data)


We can imagine it as a tree. The branches of a tree are the entities and the leaves on the branch are the component. Sometimes you want an object graph where you postpone the decision what the objects can do. You want some flexibilities to enrich the objects. You have a basic container that you can extend with features. You add an IEntity interface to make sure they subscripe to the same. All the classes taht subscribe need to implement the IEntity which basically references this entity. And in each class that subscripes ou add some data as an extention. Component onl yholds some small data(they are stupid). 
Component processor does something with the data. You want to keep all the processing part in one place the processor.

You describe a graph with entitties and properties of the entities and features and then add the end you describe how to operate the features using component processor.

To make a Dog, you take an empty Entity and stick on: Position, Health, BarkSound, FurRender. To make a Robot, you take an empty Entity and stick on: Position, Health, MetalRender. To make a Robot Dog, you just mix them: Position, Health, BarkSound, MetalRender.