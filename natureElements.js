
//CLOUD:

class Cloud {
    constructor() {
        this.x = 300;
        this.y = 80;
        this.width = 50;
        this.height = 50;
        this.img = new Image()
        this.img.src = "./Images/Cloud.png"
    }


    drawCloud = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    cloudMove = () => {
        this.x = this.x - 0.1;
    }

}


//STRATOCUMULUS:

class Stratocumulus {
    constructor() {
        this.x = 800;
        this.y = 110;
        this.width = 80;
        this.height = 80;
        this.img = new Image()
        this.img.src = "./Images/Stratocumulus.png"
    }


    drawStratocumulus = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    stratocumulusMove = () => {
        this.x = this.x - 0.1;
    }

}

//


