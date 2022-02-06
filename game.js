class Game {
    constructor() {
        this.myBackground = new Image();
        this.myBackground.src = "./Images/fondojuego2.png";
        this.pikachu = new Pikachu();
        this.snorlaxArray = [new Snorlax()];
        this.snorlaxDistance = 600;
        this.balloonArray = [new Balloon(0)];
        this.balloonDistance = 3200;
        this.gastlyArray = [new Gastly(0)];
        this.gastlyDistance = 1100;         
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
            let randomHeight = Math.random() * 60; 
            let newBalloon = new Balloon(randomHeight);
            this.balloonArray.push(newBalloon);
        }
    }

    gastlySpawn = () => {
        let lastGastly = this.gastlyArray[this.gastlyArray.length - 1];
        if (lastGastly.x < (canvas.width - this.gastlyDistance)) {
            let randomHeight = Math.random() * 100;
            let newGastly = new Gastly (randomHeight);
            this.gastlyArray.push(newGastly);
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
        this.gastlyArray.forEach((eachGastly) => {
            eachGastly.gastlyMove();
        })
        this.snorlaxSpawn();
        this.balloonSpawn();
        this.gastlySpawn();

        //3.Dibujar elementos
        this.drawBackground();
        this.pikachu.drawPikachu();
        this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.drawSnorlax();
        })
        this.balloonArray.forEach((eachBalloon) => {
            eachBalloon.drawBalloon();
        })
        this.gastlyArray.forEach((eachGastly) => {
            eachGastly.drawGastly();
        })      

        //4.Recursión
        requestAnimationFrame(this.gameLoop);
    }

}