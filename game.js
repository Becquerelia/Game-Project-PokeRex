class Game {
    constructor() {
        this.myBackground = new Image();
        this.myBackground.src = "./Images/fondojuego2.png";
        this.pikachu = new Pikachu();
        this.snorlaxArray = [new Snorlax()];
        this.snorlaxDistance = 600;
        this.balloonArray = [new Balloon()];
        this.balloonDistance = 1200;         
    }

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);        
    }

    drawBackground = () => {
        ctx.drawImage(this.myBackground, 0, 0, canvas.width, canvas.height);
    }

    snorlaxSpawn = () => {
        let lastSnorlax = this.snorlaxArray[this.snorlaxArray.length - 1];
        if (lastSnorlax.x < (canvas.width - this.snorlaxDistance)) {
            let newSnorlax = new Snorlax();
            this.snorlaxArray.push(newSnorlax);
        }
    }

    balloonSpawn = () => {
        let lastBalloon = this.balloonArray[this.balloonArray.length -1];
        if (lastBalloon.x < (canvas.width - this.balloonDistance)) {
            let newBalloon = new Balloon();
            this.balloonArray.push(newBalloon);
        }
    }

    gameLoop = () => {        

        //1.Renovar canvas
        this.clearCanvas();
        //2.Mover elementos
        this.pikachu.pikachuGravity();
        this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.snorlaxMove();
        });
        this.balloonArray.forEach((eachBalloon) => {
            eachBalloon.balloonMove();
        })
        this.snorlaxSpawn();
        this.balloonSpawn();
        //3.Dibujar elementos
        this.drawBackground();
        this.pikachu.drawPikachu();
        this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.drawSnorlax();
        this.balloonArray.forEach((eachBalloon) => {
            eachBalloon.drawBalloon();
            })
        })      
        //4.Recursión
        requestAnimationFrame(this.gameLoop);
    }

}