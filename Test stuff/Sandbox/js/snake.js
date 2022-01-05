//game loop//
let lastRenderTime = 0;
const snakeSpeed = 2;
const snakeBody = [{ x: 11, y:11 }];
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return


    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main);

function update() {
    
}

function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}