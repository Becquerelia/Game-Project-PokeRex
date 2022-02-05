class Pokemon {
    constructor() {
        this.x = 500;
        this.y = 500;
        this.width = 1000;
        this.height = 1000;
        this.img = new Image ()
        this.img.src = "./Imágenes/pngfind.com-pixelmon-logo-png-4391357.png" //Para GIF: https://gifer.com/en/5Q0v o https://gifer.com/en/2iiJ
        
    }

    drawPokemon = () => {
        console.log("Se ve el poke")
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

}