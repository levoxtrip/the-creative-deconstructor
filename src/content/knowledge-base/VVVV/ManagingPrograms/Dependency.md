---
title: Dependency
comments: true
tags:
 - VVVV
 - VVVV/ManagingPrograms
---
# Dependency
A dependency allows a document to access definitions from another document. This enables you to do build more modular programs where certain definitions and functionality is spread over different files that only contain specific logic.

To create a dependency:
- Create a file with only definitions of processes.
- Add dependency in base file: Dependencies -> Files -> Add Existing

## Organizing Dependency with Category

To create a more structured order of your dependency you can use a `Category` inside the node browser. This allows to group and organize some sub logic inside of it. Start the name of your *category* with a `.`. Each *Category* gets its own folder in the node browser.

## Organizing Dependency with Group
`Group` allows visual organization of the dependency site without actually organizing them in the node browser.