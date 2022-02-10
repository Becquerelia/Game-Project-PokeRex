
//! SNORLAX OBSTACLE:

class Snorlax {

    //!PROPERTIES

    constructor() {
        this.x = canvas.width;
        this.y = 258;
        this.width = 120;
        this.height = 85;
        this.img = new Image()
        this.img.src = "./Images/SleepingSnorlax.png"
        this.snorlaxSpeed = 5;
    }

    //!METHODS

    //SNORLAX DRAW

    drawSnorlax = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //SNORLAX MOVEMENT

    snorlaxMove = () => {
        this.x = this.x - this.snorlaxSpeed;        
    }
}


//! BALLOON OBSTACLE:

class Balloon {

    //!PROPERTIES

    constructor(positionY) {
        this.x = canvas.width + 1500;
        this.y = positionY;
        this.width = 100;
        this.height = 100;
        this.img = new Image()
        this.img.src = "./Images/rocketballoon.png"
    }

    //!METHODS

    //BALLOON DRAW

    drawBalloon = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //BALLOON MOVEMENT

    balloonMove = () => {
        this.x = this.x - 8;
    }

}


//! CORONAVIRUS OBSTACLE:

class Coronavirus {

    //!PROPERTIES

    constructor(positionY) {
        this.x = canvas.width + 200;
        this.y = positionY;
        this.width = 40;
        this.height = 40;
        this.img = new Image()
        this.img.src = "./Images/coronavirus.png"
    }

    //!METHODS

    //CORONAVIRUS DRAW

    drawCoronavirus = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //CORONAVIRUS MOVEMENT

    coronavirusMove = () => {
        this.x = this.x - 5;
    }
}