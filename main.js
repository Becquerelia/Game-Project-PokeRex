//! GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen-change");
let allSplashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let scoreBoard = document.querySelector("#points span");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;



//! STATE MANAGEMENT FUNCTIONS

const startGame = () => {

    splashScreen.style.display = "none";
    canvas.style.display = "flex";

    newGame = new Game()
    newGame.gameLoop()    

}

//! ADD EVENT LISTENERS


startButton.addEventListener("click", startGame);

window.addEventListener("keydown", (event) => {
    newGame.pikachu.pikachuJump(event)
})

restartButton.addEventListener("click", () => {
    //ocultar pantallas
    newGame = new Game();
});

restartButton.addEventListener("click", () => {

    gameOverScreen.style.display = "none";
    allSplashScreen.style.display = "flex";
    canvas.style.display = "flex";

    gameObj = new Game();
    newGame.gameLoop();    
})

