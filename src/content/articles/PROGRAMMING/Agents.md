
# What is OpenClaw
An autonomous AI agent that runs locally on your machine and uses messaging platforms like WhatsApp, Telegram, Discord as main interface. 

It is built around goals and actions rather just answering questions. You tell it an objective "organize this" "remind me" and it breaks that down into steps and executes them - with minimal supervision.

# How agents get their power
OpenClaw uses an LLM it interpret each objective, then decides how to carry it out by deploying the appropriate tools - browser automation, shell commands, file manipulation and more.

At the center of the system is the Gateway - a locally running service that brokers communication between chat interface, AI model and tools or skills. 

Skills = Capabilities

OpenClaw uses a skills system where skills are stored as directories containing a SKILL.md file with metadata and instructions for tool usage. Skills can be bundled with software or added by the community. Each skill is a plugin

Agent improvises

Persistent memory allows OpenClaw to retain context and personalization across sessions which is key part of being an assistant.

OpenClaw can store credentials, remember conversations, execute commands and communiate externally on behalf of the user - privileged identity.

It has direct access to your computer and accounts - running on your machine with whatever permissions you grant it. 

The risk is that it combines three properties: access to sensitive data and credentials, exposure to untrusted input, ability to take autonomous actions. 

The first principle of agents is: an agent is just an LLM in a loop with tools. 

Regular LLM takes input, produces output and stops. 

An agent Receives a gaol, thinks about what to do next, calls a tool(search, run code, send message, generate ...) observes the result, loops back to step 2 until the goal is done.

Every agent, needs exactly three things: A model as the reasoning brain, Tools ways to affect the world(filesystem,APIs,browser,shell) and Memory - context to carry state across steps, conversion history, stored facts).

The LLM decides when to stop, which tool to use and how to interpret the result!

# 
You can connect openclaw via bluetooth

Heartbeat - agent wakes up periodically - can check your email, check your calender, follow loose ends


In the future we gonna have multiple agents, one for health, one for work

agents to specialize and collaborate

small business that has 10 agents all taking over various parts of the business.

Automating groceries,  tutoring business 

Agents change who can build things

sandbox - what are the security layers - only put what you want on that machine

So the gap between a simple LLM and an agent is knowing and doing.

Agent is an LLM connected to tools that solves the problems which humans would have to do themselves - to move information themselves 

OpenClaw does that autonomy

AI agent is a system that combines LLM with the ability to use tools and to take autonomous actions. The agent is operating in an agentic loop. 
A task comes into the agent - Task can come from slack, whatsapp, imessage. From there the agent begins to assemble the context that is passed to the llm - the conversation history, long term memory and system instructions and the available tools that the model can use if it needs to pull in additional information to aswer the user request.

The agent sends that accumulated context to the llm to perform reasoning - the model decides, do I need to use a tool to pull in data  for my response. If we do need a tool, we pull in additional information from a terminal command, to read a file we have on our harddrive, to search the web, to call an api. If the tool is executed the agent receives the results and that information is passed again to the context window that we had in the beginning. This loop continues - reasoning, acting, observing until the task is done. If we dont need any tool anymore the result is passed back to the user via the communication platform.

How does open claw works
the agent runs on a local node.js service on your machine - laptop, rasperry pi, virtual machine. It follows a hub and spoke model thats centered around the gateway - the gateway is a control plane that is always on as websocket server that handles things like message routing, session management and the usage of tools.
To access the gateway you can use the UI or the CLI. You have adapters that takes the different types of incomming sources of data into a unified internal format that can be provided to the gateway