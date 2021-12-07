export default class Ball {
    constructor(ballElement) {
        this.ballElement = ballElement;
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

    update(delta) {

    }
}