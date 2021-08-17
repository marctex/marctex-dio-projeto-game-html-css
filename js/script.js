var canvas = document.getElementById('snake');
var ctx = canvas.getContext('2d');
var box = 32;
var snake =[];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
var direction = 'right';

function createBG() {
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(0, 0, 16 * box, 16 * box);    
}

function createSnake() {
    for(i=0; i < snake.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x, snake[i].y, box , box);   
    }
}

function startGame() {
    createBG();
    createSnake();

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    snake.pop();

    var newHead = {
        x: snakeX,
        y: snakeY
    }
    
    snake.unshift(newHead)

}

var game = setInterval(startGame, 100);



