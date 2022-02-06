class Obstacles {
    constructor() {
        this.x = 500;
        this.y = 240;
        this.width = 110;
        this.height = 110;
        this.img = new Image()
        this.img.src = "./Images/Snorlax.png"
    }


    drawObstacles = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //obstacleMove = () => {
    //    this.x = this.x - 10;
    //}

}