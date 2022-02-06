class Balloon {
    constructor(positionY) {
        this.x = canvas.width + 800;
        this.y = positionY;
        this.width = 100;
        this.height = 100;
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