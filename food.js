import { SNAKE_SPEED } from "./snake.js";
import {onSnake, expandSnake} from "./snake.js";
let food = getRandomFoodPosition()
const EXPANSION_RATE = 2;
export function update(){
  if(onSnake(food)){
    expandSnake(EXPANSION_RATE)
    food=getRandomFoodPosition()
  }
}

export function draw(gameBoard){
  
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
   
}
function getRandomFoodPosition(){
    let newFoodPositiion = null
    while(newFoodPositiion == null || onSnake(newFoodPositiion))
    {
        newFoodPositiion = randomGridPosition()
    }
    return newFoodPositiion
}

function randomGridPosition(){
    return{
        x: Math.floor(Math.random()*21)+1,
        y:Math.floor(Math.random()*21)+1,
    }
}