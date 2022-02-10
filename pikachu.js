class Pikachu {

    //!PROPERTIES

    constructor() {
        this.x = 150;
        this.y = 270;
        this.width = 70;
        this.height = 55;
        this.pikachu1 = new Image ();
        this.pikachu1.src = "./Images/pikagif1.gif"
        this.pikachu2 = new Image ();
        this.pikachu2.src = "./Images/pikagif2.gif"
        this.realPikachu = this.pikachu1;
        this.jumpSpeed = 231;
        this.groundPosition = 270;
        this.gravitySpeed = 3.5;
    }

    //!METHODS

    //PIKACHU DRAWS FOR RUN EFFECT

    drawPikachu = () => {        
        ctx.drawImage(this.realPikachu, this.x, this.y, this.width, this.height);
    }

    drawPikachu1 = () => {        
        ctx.drawImage(this.pikachu1, this.x, this.y, this.width, this.height);
    }

    drawPikachu2 = () => {        
        ctx.drawImage(this.pikachu2, this.x, this.y, this.width, this.height);
    }

    //PIKACHU JUMPING

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