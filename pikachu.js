class Pikachu {
    constructor() {
        this.x = 150;
        this.y = 270;
        this.width = 70;
        this.height = 55;
        this.img = new Image()
        this.img.src = "./Images/Pikarun.gif" //Para GIF: https://gifer.com/en/5Q0v o https://gifer.com/en/2iiJ
        this.jumpSpeed = 220;
        this.groundPosition = 270;
        this.gravitySpeed = 2.5;
    }

    drawPikachu = () => {        
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    pikachuJump = (event) => {
        if (event.code === "Space" && (this.y === this.groundPosition)) {
            this.y = this.y - this.jumpSpeed;
            pikaSound.play();
        } 
    }

    pikachuGravity = () => {
        if (this.y < this.groundPosition) {
            this.y = this.y + this.gravitySpeed;
        }
    }

}