# Game-Project "PokeRex"

https://becquerelia.github.io/Game-Project-PokeRex/

## Description

PokeRex is a simple game inspired by classic Chrome T-Rex dinosaur but with Pokemon theme. The mechanic of game is simple: player must resist with their Pokemon running and jumping to avoid different obstacles that will appear along the way.

Game controls is only about space bar key, which will make the pokemon jump every time it's pressed by the player.

The goal is achieve the Pokemon continue along the path as long as possible; time will be proportional to score the player will get in their counter. If the Pokemon collides with Coronavirus, it will be temporarily infected and player will lose some points as a consequence. But if the Pokemon collides with any other obstacle, the game will finished.

## MVP
- The game has a Pokemon that jumps or not depending on the player's decision.
- Along the way that Pokemon makes, different obstacles will appear both in the upper and lower areas of the screen.
- Collision between the Pokemon and any obstacle (except Coronavirus) will end the game.
- The collide with Coronavirus won't end the game, but will temporarily infected the Pokemon and player will lose some points as a consequence.
- Difficult game will gradually increase by the speed that running Pokemon will reach. 
- The longer game lasts, the higher score.

## Backlog
- Add ranking score.
- Add option to choose the pokemon icon to play (Pikachu, Charmander, Bulbasaur or Squirtle).

## Data Structure
### main.js
- Global variables
- Music data
- State Management Functions: startGame() {}
- EventListeners
### game.js
- Class Game
- Game properties
- Canvas & Background methods
- Obstacles & Nature Elements spawn methods
- Collision methods
- Game difficult (Speed) method
- Game score method
- Pikachu animation (Movement effect) method
- Game Loop
### pikachu.js
- Class Pikachu
- Pikachu properties
- Pikachu draws for run effect methods
- Pikachu jumping method
### obstacles.js
- Class Snorlax (properties, draw & movement methods)
- Class Balloon (properties, draw & movement methods)
- Class Coronavirus (properties, draw & movement methods)
### natureElements.js
- Class Cloud (properties, draw & movement methods)
- Class Stratocumulus (properties, draw & movement methods)

## States y States Transitions
- splashScreen
- gameScreen
- gameOverScreen

## Task
- html structure
- css design
- main - global variables
- main - startGame function
- main - addEventListeners (click & keydown types)
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- pikachu - draw
- pikachu - move
- obstacles - draw (snorlax, balloon, & coronavirus)
- obstacles - move (snorlax, balloon & coronavirus)
- natureElements - draw (single cloud, stratocumulus)
- natureElements - move (single cloud, stratocumulus)
- game - add obstacles & nature elements
- game - spawning obstacles & nature elements
- game - check collisions
- game - counter score
- game - Game over

## Additional Links
### Trello
https://trello.com/b/XBZ65rno/game-project-pokerex
### GitHub
https://github.com/Becquerelia/Game-Project-PokeRex
### Slides
https://docs.google.com/presentation/d/17Bi8Iu7p6kYMrqAgY5sXWIUQnyEehos6mkuytlb9c1o/edit?usp=sharing
