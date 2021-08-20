var canvas = document.getElementById('snake');
var ctx = canvas.getContext('2d');
var box = 32;
var snake =[];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
var direction = 'right';
var food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function createFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "up") direction = "down";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "down") direction = "up";
}

function startGame() {
    
    if(snake[0].x > 15 * box && direction =="right") snake[0].x = 0;
    if(snake[0].x < 0 && direction =="left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if(snake[0].y < 0 && direction =="down") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('GAME OVER : :(');
        }
    }
    
    createBG();
    createSnake();
    createFood();

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); 
    }  
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }           

    var newHead = {
        x: snakeX,
        y: snakeY
    }
    
    snake.unshift(newHead)

}

var game = setInterval(startGame, 100);



