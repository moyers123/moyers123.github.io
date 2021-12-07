const speed= .02;

export default class Paddle {
    constructor(paddleElement) {
        this.paddleElement = paddleElement;
        this.reset();
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElement).getPropertyValue('--position'));
    }

    set position(value) {
        this.paddleElement.style.setProperty('--position', value)
    }

    rect() {
        return this.paddleElement.getBoundClientRect();
    }

    reset() {
        this.position = 50;
    }

    update(delta, ballY) {
        this.position = speed * delta * (ballY - this.position);
    }
}