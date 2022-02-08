class Game {
    constructor() {
        this.myBackground = new Image();
        this.myBackground.src = "./Images/fondo.png";
        this.pikachu = new Pikachu();
        this.snorlaxArray = [new Snorlax ()];
        this.snorlaxDistance = 1000;
        this.balloonArray = [new Balloon (0)];
        this.balloonDistance = 4000;
        this.cloudArray = [new Cloud ()];
        this.cloudDistance = 800;
        this.stratocumulusArray = [new Stratocumulus ()];
        this.stratocumulusDistance = 800;
        this.coronavirusArray = [new Coronavirus(0)];
        this.coronavirusDistance = 3300;
        this.score = 0;
        this.animation = 0; 
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
        if (this.snorlaxArray.lenght === 3) {            
            this.snorlaxArray.shift(this.snorlaxArray[0]);            
        }        
    }

    balloonSpawn = () => {
        let lastBalloon = this.balloonArray[this.balloonArray.length -1];
        if (lastBalloon.x < (canvas.width - this.balloonDistance)) {
            let randomHeight = Math.random() * 120; 
            let newBalloon = new Balloon(randomHeight);
            this.balloonArray.push(newBalloon);
        }
    }

    cloudSpawn = () => {
        let lastCloud = this.cloudArray[this.cloudArray.length - 1];
        if (lastCloud.x < (canvas.width - this.cloudDistance)) {            
            let newCloud = new Cloud ();
            this.cloudArray.push(newCloud);
        }
    }

    stratocumulusSpawn = () => {
        let lastStratocumulus = this.stratocumulusArray[this.stratocumulusArray.length - 1];
        if (lastStratocumulus.x < (canvas.width - this.stratocumulusDistance)) {            
            let newStratocumulus = new Stratocumulus ();
            this.stratocumulusArray.push(newStratocumulus);
        }
    }

    coronavirusSpawn = () => {
        let lastCoronavirus = this.coronavirusArray[this.coronavirusArray.length - 1];
        if (lastCoronavirus.x < (canvas.width - this.coronavirusDistance)) {
            let newCoronavirus = new Coronavirus();
            this.coronavirusArray.push(newCoronavirus);
        }
    }
   
    pikachuCollision = (eachCollision) => {
        if (this.pikachu.x < eachCollision.x + eachCollision.width &&
            this.pikachu.x + this.pikachu.width > eachCollision.x &&
            this.pikachu.y < eachCollision.y + eachCollision.height &&
            this.pikachu.height + this.pikachu.y > eachCollision.y) {
                this.isGameOn = false;
                gameSound.pause();
                gameOverSound.load();
                gameOverSound.play();
                canvas.style.display = "none";                
                allSplashScreen.style.display = "none";
                gameOverScreen.style.display = "flex";
                scoreBoard.innerText = this.score;
                
        }        
    }

    gameDifficult = () => {
        if (this.score >= 150 && this.score <= 299) {
            this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.snorlaxSpeed = 6;
            })
        } else if (this.score >= 300 && this.score <= 899) {
            this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.snorlaxSpeed = 7;
               })
        } else if (this.score >= 900 && this.score <= 1999) {
            this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.snorlaxSpeed = 8;
                })
        } else if (this.score >= 2000) {
            this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.snorlaxSpeed = 11;
                })
        }        
    }
          
    counterScore = () => {
        ctx.font = "30px impact";
        ctx.fillStyle = "#000000";
        ctx.fillText(this.score, 780, 40);

        this.snorlaxArray.forEach((eachSnorlax) => {
            if (eachSnorlax.x === 0) {
                this.score += 50;
            } else if (eachSnorlax.x === 4){
                this.score += 100;
            } else if (eachSnorlax.x === 3){
                this.score += 200;
            } else if (eachSnorlax.x === 2){
                this.score += 300;
            } else if (eachSnorlax.x > 0 && eachSnorlax.x < 2){
                this.score += 300;
            }
        })
    }

    coronavirusCollision = (eachCollision) => {
        if (this.pikachu.x < eachCollision.x + eachCollision.width &&
            this.pikachu.x + this.pikachu.width > eachCollision.x &&
            this.pikachu.y < eachCollision.y + eachCollision.height &&
            this.pikachu.height + this.pikachu.y > eachCollision.y) {
                this.score -= 5;
                pikaInfectionSound.play();
                ctx.font = "50px impact";
                ctx.fillStyle = "#000000";
                ctx.fillText("Infected!", 350, 150);
        }        
    }

    coronavirusInfection = (eachCollision) => {
        if (this.pikachu.x < eachCollision.x + eachCollision.width &&
            this.pikachu.x + this.pikachu.width > eachCollision.x &&
            this.pikachu.y < eachCollision.y + eachCollision.height &&
            this.pikachu.height + this.pikachu.y > eachCollision.y) {                
                ctx.font = "60px impact";
                ctx.fillStyle = "#FF0000";
                ctx.fillText("Infected!", 350, 150);
        }        
    }
    
    pikachuAnimation = () => {
        this.animation ++
              
       if (this.animation % 10 === 0) {
            if (this.pikachu.realPikachu === this.pikachu.pikachu1) {
                this.pikachu.realPikachu = this.pikachu.pikachu2; 
            } else {
                this.pikachu.realPikachu = this.pikachu.pikachu1;
            }
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
        
        this.cloudArray.forEach((eachCloud) => {
            eachCloud.cloudMove();
        })        
        this.cloudSpawn();

        this.stratocumulusArray.forEach((eachStratocumulus) => {
            eachStratocumulus.stratocumulusMove();
        })        
        this.stratocumulusSpawn();

        this.coronavirusArray.forEach((eachCoronavirus) => {
            eachCoronavirus.coronavirusMove();
        })        
        this.coronavirusSpawn();

        this.snorlaxArray.forEach((eachSnorlax) => {
            this.pikachuCollision(eachSnorlax);
        })

        this.balloonArray.forEach((eachBalloon) => {
            this.pikachuCollision(eachBalloon);
        })
       
        this.coronavirusArray.forEach((eachCoronavirus) => {
            this.coronavirusCollision(eachCoronavirus);
        })

        this.gameDifficult();
        
        //3.Dibujar elementos
        this.drawBackground();
        this.pikachuAnimation();
        this.pikachu.drawPikachu();
        this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.drawSnorlax();
        })
        this.balloonArray.forEach((eachBalloon) => {
            eachBalloon.drawBalloon();
        })
        this.cloudArray.forEach((eachCloud) => {
            eachCloud.drawCloud();
        })
        this.stratocumulusArray.forEach((eachStratocumulus) => {
            eachStratocumulus.drawStratocumulus();
        })
        this.coronavirusArray.forEach((eachCoronavirus) => {
            eachCoronavirus.drawCoronavirus();
        })
        this.coronavirusArray.forEach((eachCoronavirus) => {
            this.coronavirusInfection(eachCoronavirus);
        })
        this.counterScore();           

        //4.Recursión
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);
        }
        
    }

}