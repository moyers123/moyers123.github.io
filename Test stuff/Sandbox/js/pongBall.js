export default class Ball {
    constructor(ballElement) {
        this.ballElement = ballElement;
        this.reset();
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue('--x'));
    }

    set x() {
        this.ballElement.style.setProperty('--x', value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue('--y'));
    }

    set y() {
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
    }

    update(delta) {

    }
}