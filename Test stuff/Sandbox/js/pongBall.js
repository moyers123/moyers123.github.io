const initialVelocity = .025;

export default class Ball {
    constructor(ballElement) {
        this.ballElement = ballElement;
        this.reset();
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue('--x'));
    }

    set x(value) {
        this.ballElement.style.setProperty('--x', value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue('--y'));
    }

    set y(value) {
        this.ballElement.style.setProperty('--y', value)
    }

    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = {x: 0};
        while (Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {
            const heading = randomNumberBetween(0, 2 * Math.PI);
            this.direction = {x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = initialVelocity;
    }

    update(delta) {
        this.x += this.direction.x * this.velocity * delta;
        this.y += this.direction.y * this.velocity *delta;
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}