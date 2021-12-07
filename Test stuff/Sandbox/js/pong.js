import Ball from './pongBall.js';

const ball = new Ball(document.getElementById('ball'));

function update(time) {
    
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);