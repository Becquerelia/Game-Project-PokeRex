class Pikachu {
    constructor() {
        this.x = 150;
        this.y = 255;
        this.width = 70;
        this.height = 70;
        this.img = new Image()
        this.img.src = "./Images/Pikachu.png" //Para GIF: https://gifer.com/en/5Q0v o https://gifer.com/en/2iiJ
        this.jumpSpeed = 200;
        this.groundPosition = 255;
        this.gravitySpeed = 2.5;
    }

    drawPikachu = () => {        
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    pikachuJump = (event) => {
        if (event.code === "Space" && (this.y - this.height - 10) > 5) {
            this.y = this.y - this.jumpSpeed;
        } 
    }

    pikachuGravity = () => {
        if (this.y < this.groundPosition) {
            this.y = this.y + this.gravitySpeed;
        }
    }

}