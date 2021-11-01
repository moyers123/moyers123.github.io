setInterval(setClock, 1000)

//document.querySelector will target the attribute in the html (html src is linked to this JS sheet)//
const hourHand = document.querySelector(['data-hour-hand']);
const minuteHand = document.querySelector(['data-minute-hand']);
const secondHand = document.querySelector(['data-second-hand']);

function setClock() {
    const currentDate = new Date(hours, minutes, seconds);
    const secondsRatio = (currentDate.getSeconds() / 60);
    const minutesRatio = ((secondsRatio + currentDate.getMinutes()) / 60);
    const hoursRatio = ((minutesRatio + currentDate.getHours()) / 12);
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();