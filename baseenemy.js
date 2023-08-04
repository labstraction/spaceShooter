class BaseEnemy extends GameObject{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.speed = 3;
        this.isAlive = true;
        this.healthPoints = 1;
        this.score = 100;
    }

    draw(ctx){
        ctx.fillStyle = "red";
        super.draw(ctx);
        // this.death();
    }

    move(canvasHeight){
        this.y = this.y + this.speed;
        this.outOfGame(canvasHeight);
    }

    outOfGame(canvasHeight){
        if (this.y >= canvasHeight) {
            this.isAlive = false;
        }
    }

    death(){
        if (this.healthPoints <= 0){
            this.isAlive = false;
        }
    }
}