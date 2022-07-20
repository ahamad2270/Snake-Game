
import {update as updateSnake , draw as drawSnake,SNAKE_SPEED, outsideGrid, snakeIntersection,getSnakeHead} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'


let lastRenderTime = 0;
let gameOver = false
const gameboard = document.getElementById("game-board");


function main(currentTime){
    if(gameOver){
        if(confirm('You lost. Press ok to restart')){
            window.location = './index.html'
        }
        return
       
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000
    if(secondsSinceLastRender < 1/SNAKE_SPEED ){
        return
    }
    
    lastRenderTime = currentTime;
    console.log("Render");
    update();
    draw();
}
window.requestAnimationFrame(main);


function update(){
updateSnake()
updateFood()
checkDeath()
}
function draw(){
    gameboard.innerHTML = ''
drawSnake(gameboard)
drawFood(gameboard)
}
function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
