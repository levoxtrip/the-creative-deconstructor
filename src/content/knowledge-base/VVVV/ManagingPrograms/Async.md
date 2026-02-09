---
title: Async
comments: true
tags:
 - VVVV
 - VVVV/ManagingPrograms
---
![Async Task/Loop Img](/img/vvvv/AsyncTaskLoop.png)
# Async
If we want to execute some behavior asynchronously on the side, while the program continues running, we can use a `Async Loop` or `Async Task`. *Async* behavior avoids freezing of the application.

An `Async Task` gets executed only once on a `Bang` event.
`Async Loop` runs continuously -  as fast as it can

`IsAssigned` gives back true if new value after execution is assigned, which allows to only show something if new value got assigned.

The *Async* regions also have the `In Progress` outputs which allow us to execute/show information while the async task is working and we want to show for example a loading screen.

`HoldLatest` keeps the last value it got from the *async* operation - until a new value comes.

The `Sampler` shows a value for one frame and has a `OnData` output which can be useful to trigger for example *if* conditions.

If you work with `Aync` operations that change your objects you have to work with *immutable objects*.

## Multiple outputs
In `Async Loop` o `Async Task` if you want to output more than one value you either want to have a `Record`with your own datatype or you use `Tuple(Create)`.

![Multiple Output Values Async](/img/vvvv/OutputMultipleValuesAsync.png)