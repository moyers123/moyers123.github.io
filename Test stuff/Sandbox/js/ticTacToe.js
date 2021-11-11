const x_class = 'x';
const o_class = 'o';
const cellElements = document.querySelectorAll(['data-cell']);
let oTurn;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true })
})

function handleClick(event) {
    const cell = event.target;
    const currentClass = oTurn ? o_class : x_class;
    placeMark(cell, currentClass)
    swapTurns()
    console.log('clicked')
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    oTurn = !oTurn
}