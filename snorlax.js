class Snorlax {
    constructor() {
        this.x = canvas.width;
        this.y = 250;
        this.width = 100;
        this.height = 100;
        this.img = new Image()
        this.img.src = "./Images/Snorlax.png"
    }


    drawSnorlax = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    snorlaxMove = () => {
        this.x = this.x - 5;
    }

}