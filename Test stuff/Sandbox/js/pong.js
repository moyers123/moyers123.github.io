import Ball from './pongBall.js';

const ball = new Ball(document.getElementById('ball'));

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
    }

    lastTime = time;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);