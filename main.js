//! GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen-change");
let gameOverScreen = document.querySelector("#gameover-screen");
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

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame)
