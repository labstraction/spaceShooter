class BaseEnemy extends GameObject{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.speed = 3;
        this.isAlive = true;
    }

    draw(ctx){
        super.draw(ctx);
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
}