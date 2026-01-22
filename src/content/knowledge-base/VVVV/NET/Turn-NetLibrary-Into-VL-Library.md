# Turn .Net Library Into VL Library
ADD EXAMPLARE LIBRARY


We start by creating a folder with the final name of the library `VL.LibraryName`. The idea is to build a library as a package so we save the VL file as the folder name because this will be the main entry point to the package. This then shows as a VL nuget in the editor instead of .net nuget.

Next step is to install the .Net Library via nuget.org. If you can't find a nuget package you have to download the necesarry *dll* file and reference it manually. When installing nuget via `nuget install ...` check if the nuget is a stable release or pre release.

After the installation in VVVV you can reference the library in your .net nugets dependency by going to *Dependencies/.NetNugets/* and right click on the gray box right to the name of your library
![Dependencies Img](/img/VVVV/VLLib2.png)


You the can see it in the node browser
![Nodebrowser Img](/img/VVVV/VLLib3.png)

Always be aware of possible overload functions - libraries often contain some.

When you unwrap libraries in VVVV use `Cache` Regions to make your library performant and only execute certain functionality when necesarry.

You want to wrap each functionality that you need for your VL library into a node which has a lifetime and wherever something changes in our parameters, we want to call the function again. So you want to wrap the .NET function into a `Process` node which contains `Cache` regions that based on inputs calculated something and holds on the result.

There are situations where it is better to process the .NET libraries logic via a C# script instead of doing it in VL. For example if you have a data structure in the C# library that you can't recreate in VL or cast to. So we can create our own converter functionality with C#.

Create a source folder in your VL folder and create a C# project file in it. *Create New Project/Class library .net standard* and store it in src folder. It makes sense to call it like *VL.LibraryName.Utils*. Activate *put project folder and project in same*. You can rename the Class in Visual Studio to the name you want it.

If you need certain dependency libraries you can add them in visual studio by going to nuget package manager and find the packages.

Then compile it by right click on package in visual studio.

We then can reference the `.dll` in our VL project. It also lays at `bin/debug/net`.

So what you want to do is to provide a nice nodeset. For that we create `Process` nodes for the functionality. Adding *getter* and *setter* functions for the properties.
```
(set)			(get)
c.property = c.property
```

To get an overview over a library in visual studio you can go to object browser and see what functions and stuff is inside the library.



In you VL.Library you want to set the default category to your library name.

try to expose typical VL value types. Like not using float64 but float32. Make it as easy as possible to the user.

For functionality that you want to hide for the node browser you can create a `.internal` category. What ever is in there the end user doesn't see it. There you can create operations that should stay unexposed to the user.

When an action is too heavy we can use a `Cache` region and inside use an `Async Task`. This only gets exxecuted when inputs to `Cache` change.

![Nodebrowser Img](/img/VVVV/CacheAsyncExecution.png)


## Forward
If you want that the user of your library can use some data types from the original library you can *forward* themn. Go to solution explorer with `CTRL+SHIFT+J` and drag the data type from the solution explorer into the definition side of your library. Inside of it you then can curate which functions of it you want to use. Click on the left and deactivate "forward" all nodes.