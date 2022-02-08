//! GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen-change");
let allSplashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let goHomeButton = document.querySelector(".goHome");
let scoreBoard = document.querySelector("#points span");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;

//MUSIC:

let gameSound = new Audio("./Music/LeaderBattleGameOn.mp4");
gameSound.volume = 0.1;
gameSound.preload ="auto";
gameSound.load();

let gameOverSound = new Audio ("./Music/RivalAppearsGameOver.mp3");
gameOverSound.volume = 0.1;
gameOverSound.preload ="auto";
gameOverSound.load();

let pikaSound = new Audio ("./Music/Pika.mp3");
pikaSound.volume = 0.5;
pikaSound.preload ="auto";
pikaSound.load();

let pikaInfectionSound = new Audio ("./Music/Pikainfection.mp3");
pikaInfectionSound.volume = 0.9;
pikaInfectionSound.preload ="auto";
pikaInfectionSound.load();



//! STATE MANAGEMENT FUNCTIONS

const startGame = () => {

    splashScreen.style.display = "none";
    canvas.style.display = "flex";
    gameSound.load();
    gameSound.play();

    newGame = new Game()
    newGame.gameLoop()    

}

//! ADD EVENT LISTENERS


startButton.addEventListener("click", startGame);

window.addEventListener("keydown", (event) => {
    newGame.pikachu.pikachuJump(event)
})

restartButton.addEventListener("click", () => {    
    newGame = new Game();
});

restartButton.addEventListener("click", () => {

    gameOverScreen.style.display = "none";
    allSplashScreen.style.display = "flex";
    canvas.style.display = "flex";

    gameObj = new Game();
    gameOverSound.pause();
    gameSound.load();
    gameSound.play();
    newGame.gameLoop();    
})

goHomeButton.addEventListener("click", () => {
    gameOverScreen.style.display = "none";
    gameOverSound.pause();    
    allSplashScreen.style.display = "flex";
    splashScreen.style.display = "flex";    
})

