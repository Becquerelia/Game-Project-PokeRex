class Game {
    constructor() {
        this.myBackground = new Image();
        this.myBackground.src = "./Images/fondojuego2.png";
        this.pikachu = new Pikachu();
        this.snorlaxArray = [new Snorlax()];
        this.snorlaxDistance = 1000;
        this.balloonArray = [new Balloon(0)];
        this.balloonDistance = 5200;
        this.gastlyArray = [new Gastly(0)];
        this.gastlyDistance = 2100;
        this.coronavirusArray = [new Coronavirus(0)];
        this.coronavirusDistance = 3300; 
        this.isGameOn = true;        
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

    coronavirusSpawn = () => {
        let lastCoronavirus = this.coronavirusArray[this.coronavirusArray.length - 1];
        if (lastCoronavirus.x < (canvas.width - this.coronavirusDistance)) {
            let newCoronavirus = new Coronavirus();
            this.coronavirusArray.push(newCoronavirus);
        }
    }

    collisionPikachuSnorlax = (eachCollision) => {
        if (this.pikachu.x < eachCollision.x + eachCollision.width &&
            this.pikachu.x + this.pikachu.width > eachCollision.x &&
            this.pikachu.y < eachCollision.y + eachCollision.height &&
            this.pikachu.height + this.pikachu.y > eachCollision.y) {
                this.isGameOn = false;
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
        this.snorlaxSpawn();

        this.balloonArray.forEach((eachBalloon) => {
            eachBalloon.balloonMove();
        })
        this.balloonSpawn();
        
        this.gastlyArray.forEach((eachGastly) => {
            eachGastly.gastlyMove();
        })        
        this.gastlySpawn();

        this.coronavirusArray.forEach((eachCoronavirus) => {
            eachCoronavirus.coronavirusMove();
        })        
        this.coronavirusSpawn();

        this.snorlaxArray.forEach((eachSnorlax) => {
            this.collisionPikachuSnorlax(eachSnorlax);
        })
        
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
        this.coronavirusArray.forEach((eachCoronavirus) => {
            eachCoronavirus.drawCoronavirus();
        })            

        //4.Recursión
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);
        }
        
    }

}