class Balloon {
    constructor() {
        this.x = canvas.width + 800;
        this.y = 60;
        this.width = 130;
        this.height = 130;
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