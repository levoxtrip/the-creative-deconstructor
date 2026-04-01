---
title: Set Settings For Game
tag: Unreal
---
# Set Settings For Game
You can create a `Game Mode Base` blueprint to set or override the rules and settings for your project/game. A `Game Mode` blueprint has additional functionality regarding multiplayer games.
Inside a `Game Mode Base` you can provide default settings for important components of your game like `Player Controller Class` or `Default Pawn Class` to set up with which the player spawns into the game.

In the *Project Settings* under *Maps & Modes*  you can select your default Game Mode.

By opening the world settings of your level you can also overwrite the `GameMode` and select the game mode that should be used for the specific level. So it overwrite the default game mode from the project settings.

![Define Startup Level Img](/img/Unreal/DefineStartupLevel.png)