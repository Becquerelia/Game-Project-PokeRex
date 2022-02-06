class Game {
    constructor() {
        this.myBackground = new Image();
        this.myBackground.src = "./Images/fondojuego2.png";
        this.pokemon = new Pokemon();
        this.snorlaxArray = [new Snorlax()];        
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
        this.pokemon.pokemonGravity();
        this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.snorlaxMove();
        });
        //3.Dibujar elementos
        this.drawBackground();
        this.pokemon.drawPokemon();
        this.snorlaxArray.forEach((eachSnorlax) => {
            eachSnorlax.drawSnorlax();
        })      
        //4.Recursión
        requestAnimationFrame(this.gameLoop);
    }

}