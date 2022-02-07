# Game-Project "PokeRex"


PokéRex es un sencillo juego inspirado en el clásico dinousaurio T-Rex de Chrome que incluye temática de Pokémon. La mecánica del juego es sencilla: el jugador debe hacer saltar a su pokémon para esquivar los obstáculos que encontrará a lo largo de su recorrido, evitando chocar con ninguno de ellos.

El control del juego se reducen únicamente a la barra espaciadora del teclado, la cual hará que el pokémon salte cada vez que sea pulsada por el jugador.

El objetivo consiste en que el pokémon continúe su recorrido durante el mayor tiempo posible, siendo este tiempo proporcional a la cantidad de puntos que conseguirá el jugador en su contador. Si el pokémon choca con alguno de los obstáculos durante su recorrido, finaliza el juego.
## MVP

- El juego tiene un pokémon que salta o no según decida el jugador.
- Van apareciendo diferentes obstáculos a lo largo del recorrido horizontal que realiza el pokémon, pudiendo estos aparecer tanto por la zona superior como por la inferior de la pantalla.
- El choque del pokémon con cualquiera de los obstáculos pone fin al juego.
- La puntuación obtenida por el jugador se incrementa conforme aumenta el tiempo que logra mantener al pokémon realizando su recorrido.
- La dificultad aumenta progresivamente por medio de un incremento gradual de la velocidad de aparición de los obstáculos.

## Backlog
## Data Structure
### main.js
### game.js
### pikachu.js
### snorlax.js
### balloon.js
### gastly.js
### coronavirus.js
## States y States Transitions

- splashScreen
- gameScreen
- gameOverScreen
## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener (Click)
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- pikachu - draw
- pikachu - move
- game - addEventListener (Keydown)
- snorlax - draw
- snorlax - move
- snorlax - spawn
- balloon - draw
- balloon - move
- balloon - spawn
- gastly - draw
- gastly - move
- gastly - spawn
- coronavirus - draw
- coronavirus - move
- coronavirus - spawn
- game - addObstacles
- game - checkCollision
- game - GameOver

## Additional Links
### Trello

(link here)
### GitHub

(link here)
### Slides

(link here)
