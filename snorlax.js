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