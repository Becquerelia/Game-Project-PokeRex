class Pokemon {
    constructor() {
        this.x = 80;
        this.y = 255;
        this.width = 70;
        this.height = 70;
        this.img = new Image()
        this.img.src = "./Images/Pikachu.png" //Para GIF: https://gifer.com/en/5Q0v o https://gifer.com/en/2iiJ
        this.jumpSpeed = 150;
        this.groundPosition = 255;
        this.gravitySpeed = 2;
    }

    drawPokemon = () => {        
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    pokemonJump = (event) => {
        if (event.code === "Space" && (this.y - this.height - 10) > 5) {
            this.y = this.y - this.jumpSpeed;
        } 
    }

    pokemonGravity = () => {
        if (this.y < this.groundPosition) {
            this.y = this.y + this.gravitySpeed;
        }
    }

}