let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

let animate;
const player = new Player((canvasWidth/2), (canvasHeight/2), 50, 50);
let allEnemies = [];
let enemyCooldown = 120;
let playerProjectiles = player.projectiles;

function animation() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    animate = requestAnimationFrame(animation);
    // canvasWidth = window.innerWidth;
    // canvasHeight = window.innerHeight;
    // canvas.width = canvasWidth;
    // canvas.height = canvasHeight;

    if (player) {
        player.draw(ctx);
        player.control(canvasWidth, canvasHeight);
        playerProjectiles = player.projectiles;
    }

    enemyCooldown--;
    if (enemyCooldown <= 0) {
        enemySpawn();
        enemyCooldown = 120;
    }

    allEnemies = allEnemies.filter(e => e.isAlive);
    for (let i = 0; i < allEnemies.length; i++) {
        const enemy = allEnemies[i];
        enemy.draw(ctx);
        enemy.move(canvasHeight);
    }

    enemyCollision();
}

function enemySpawn() {
    const randomX = Math.random() * (canvasWidth - 50);
    let enemy = new BaseEnemy(randomX,-50,50,50);
    allEnemies.push(enemy);
}

function enemyCollision(){
    let playerAssets = [player, ...playerProjectiles];
    for (let i = 0; i < playerAssets.length; i++) {
        const pA = playerAssets[i];
        for (let j = 0; j < allEnemies.length; j++) {
            const enemy = allEnemies[j];
            if (
                enemy.x< pA.x + pA.width &&
                enemy.x + enemy.width > pA.x &&
                enemy.y< pA.y + pA.height &&
                enemy.y + enemy.height > pA.y
            ) {
                console.log("collision");
            }
        }
    }
}

animation();