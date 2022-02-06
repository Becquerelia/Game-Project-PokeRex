class Gastly {
    constructor(positionY) {
        this.x = canvas.width + 100;
        this.y = positionY;
        this.width = 50;
        this.height = 50;
        this.img = new Image()
        this.img.src = "./Images/Gastly.png"
    }


    drawGastly = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    gastlyMove = () => {
        this.x = this.x - 5;
    }

}