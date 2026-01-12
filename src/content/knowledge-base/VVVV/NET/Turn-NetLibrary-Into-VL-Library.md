# Turn .Net Library Into VL Library
We start by creating a folder with the final name of the library `VL.LibraryName`. The idea is to build a library as a package so we save the VL file as the folder name because this will be the main entry point to the package. This then shows as a VL nuget in the editor instead of .net nuget.

Next step is to install the .Net Library via nuget.org. If you can't find a nuget package you have to download the necesarry *dll* file and reference it manually. When installing nuget via `nuget install ...` check if the nuget is a stable release or pre release.

After the installation in VVVV you can reference the library in your .net nugets dependency by going to *Dependencies/.NetNugets/* and right click on the gray box right to the name of your library

VLLib2.png

You the can see it in the node browser

VLLib2.png

Always be aware of possible overload functions - libraries often contain some.

When you unwrap libraries in VVVV use `Cache` Regions to make your library performant and only execute certain functionality when necesarry.

You want to wrap each functionality that you need for your VL library into a node which has a lifetime and whereever something changes in our parameters we want to call the function again. So you want to wrap the .NET function into a Process node which contains cache regions that based on inputs calculated something and holds on the result.