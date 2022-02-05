class Game {
    constructor() {
        this.myBackground = new Image();
        this.myBackground.src = "./Imágenes/fondojuego2.jpg";
    }

    gameLoop = () => {        

        //1.Renovar canvas
        //2.Mover elementos
        //3.Dibujar elementos
        ctx.drawImage(this.myBackground, 0, 0, canvas.width, canvas.height)       
        //4.Recursión
        requestAnimationFrame(this.gameLoop);
    }

}