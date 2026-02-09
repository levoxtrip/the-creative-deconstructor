---
title: Ticket System
comments: true
tags:
 - VVVV
 - VVVV/DataAndValues

---
![TicketSystem Img](/img/vvvv/TicketSystem.png)

# Ticket System
A ticket system allows us to signal triggers inside a single class/object to notify certain operations that change has happened. For example you tell some operation to recalculate something when that ticket has been changed.

We create a primitive value like Integer as a property. Every operation that should result a downstream draw call or other changes increments the value of the ticket.

![Detect Changes In Classes Workaround 2 Img](/img/vvvv/DetectChangeInClasses1.png)

Downstream we detect if the ticket integer has changed.

![Detect Changes In Classes Workaround 2 Img2](/img/vvvv/DetectChangeInClasses2.png)

We also then can use different tickets to track different changes.