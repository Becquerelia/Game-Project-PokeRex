class Pokemon {
    constructor() {
        this.x = 80;
        this.y = 255;
        this.width = 70;
        this.height = 70;
        this.img = new Image()
        this.img.src = "./Images/Pikachu.png" //Para GIF: https://gifer.com/en/5Q0v o https://gifer.com/en/2iiJ
        
    }

    drawPokemon = () => {        
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

}