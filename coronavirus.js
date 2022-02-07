class Coronavirus {
    constructor() {
        this.x = canvas.width + 3600;
        this.y = 230;
        this.width = 50;
        this.height = 50;
        this.img = new Image()
        this.img.src = "./Images/coronavirus.png"
    }


    drawCoronavirus = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    coronavirusMove = () => {
        this.x = this.x - 5;
    }

}