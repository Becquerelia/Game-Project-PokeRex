
//SNORLAX OBSTACLE:

class Snorlax {
    constructor() {
        this.x = canvas.width;
        this.y = 258;
        this.width = 120;
        this.height = 85;
        this.img = new Image()
        this.img.src = "./Images/SleepingSnorlax.png"
    }


    drawSnorlax = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    snorlaxMove = () => {
        this.x = this.x - 5;        
    }

}


//BALLOON OBSTACLE:

class Balloon {
    constructor(positionY) {
        this.x = canvas.width + 700;
        this.y = positionY;
        this.width = 70;
        this.height = 70;
        this.img = new Image()
        this.img.src = "./Images/rocketballoon.png"
    }


    drawBalloon = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    balloonMove = () => {
        this.x = this.x - 5;
    }

}


//CLOUDS:

class Cloud {
    constructor() {
        this.x = 400;
        this.y = 80;
        this.width = 50;
        this.height = 50;
        this.img = new Image()
        this.img.src = "./Images/Cloud.png"
    }


    drawCloud = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    cloudMove = () => {
        this.x = this.x - 0.1;
    }

}


// CORONAVIRUS OBSTACLE:

class Coronavirus {
    constructor() {
        this.x = canvas.width + 3600;
        this.y = 230;
        this.width = 40;
        this.height = 40;
        this.img = new Image()
        this.img.src = "./Images/coronavirus.png"
    }


    drawCoronavirus = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    coronavirusMove = () => {
        this.x = this.x - 5;
    }

}


