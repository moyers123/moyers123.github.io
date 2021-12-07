import Ball from './Pong Classes/pongBall.js';
import Paddle from './Pong Classes/pongPaddle.js';

const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('p1-paddle'));
const player2Paddle = new Paddle(document.getElementById('p2-paddle'));

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta);
    }

    lastTime = time;
    window.requestAnimationFrame(update);
}

document.addEventListener('mousemove', e => {
    //if (event.key === 'w') {}//
    playerPaddle.position = (e.y / window.innerHeight) * 100;
})

window.requestAnimationFrame(update);