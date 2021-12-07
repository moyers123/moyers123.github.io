import Ball from './Pong Classes/pongBall.js';
import Paddle from './Pong Classes/pongPaddle.js';

const ball = new Ball(document.getElementById('ball'));
const player1Paddle = new Paddle(document.getElementById('p1-paddle'));
const player2Paddle = new Paddle(document.getElementById('p2-paddle'));
const player1Score = document.getElementById('p1-score');
const player2Score = document.getElementById('p2-score');

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta, [player1Paddle.rect(), player2Paddle.rect()]);
        player2Paddle.update(delta, ball.y)

        if(lose()) {
            handleLose();
        }
    }

    lastTime = time;
    window.requestAnimationFrame(update);
}

function lose() {
    const rect = ball.rect();
    return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
    const rect = ball.rect();
    if (rect.right >= window.innerWidth) {
        player1Score.textContent = parseInt(player1Score.textContent) + 1;
    } else {
        player2Score.textContent = parseInt(player2Score.textContent) + 1;
    }
    ball.reset();
    player2Paddle.reset();
    player1Paddle.reset();
}

document.addEventListener('mousemove', e => {
    //if (event.key === 'w') {}//
    player1Paddle.position = (e.y / window.innerHeight) * 100;
})

window.requestAnimationFrame(update);