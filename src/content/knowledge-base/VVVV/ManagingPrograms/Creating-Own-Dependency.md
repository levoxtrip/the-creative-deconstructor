---
title: Creating Own Dependency
comments: true
tags:
 - VVVV
 - VVVV/ManagingPrograms
---
# Creating Own Dependency
To create your own dependency that you then can use in other projects you create your own nodes on the *definition side* of your dependency patch.

It is important that you don't set them on the *application side* of the patch. Otherwise it is always opening up the application side when you reference your dependency.

You can name your dependency on the *definition side* on the top left corner where `[main]` is written.

If you want that certain parts of your dependency nodes are shown in a category in the node browser you can create your own categories by looking for `Category` in the node browser. They are always starting with a dot.

---

# Dependency
A dependency allows a document to access definitions from another document. This enables you to do build more modular programs where certain definitions and functionality is spread over different files that only contain specific logic.

To create a dependency:
- Create a file with only definitions of processes.
- Add dependency in base file: Dependencies -> Files -> Add Existing

## Organizing Dependency with Category
![Categories in Dependencies Img](/img/vvvv/CategoryDependency.png)
To create a more structured order of your dependency you can use a `Category` inside the node browser. This allows to group and organize some sub logic inside of it. Start the name of your *category* with a `.`. Each *Category* gets its own folder in the node browser.

## Organizing Dependency with Group
`Group` allows visual organization of the dependency site without actually organizing them in the node browser. So the nodes don't appear in folders in the node browser.

## Forwarding Libraries
If you have a sub dependency to our own definitions and we want to make it accessible to the main application in another file we can set the sub dependency as *forward dependencies*

More you can find [here](https://thegraybook.vvvv.org/reference/extending/forwarding.html)