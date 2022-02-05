class Game {
    constructor() {
        this.myBackground = new Image();
        this.myBackground.src = "./Images/fondojuego2.png";
        this.pokemon = new Pokemon()        
    }

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);        
    }

    drawBackground = () => {
        ctx.drawImage(this.myBackground, 0, 0, canvas.width, canvas.height);
    }

    gameLoop = () => {        

        //1.Renovar canvas
        this.clearCanvas();
        //2.Mover elementos
        //3.Dibujar elementos
        this.drawBackground();
        this.pokemon.drawPokemon();       
        //4.Recursión
        requestAnimationFrame(this.gameLoop);
    }

}