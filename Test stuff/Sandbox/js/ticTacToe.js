const x_class = 'x';
const o_class = 'o';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')
let oTurn;

start();

function start() {
    oTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true })
    })
    setBoardHoverClass();
}

function handleClick(event) {
    const cell = event.target;
    const currentClass = oTurn ? o_class : x_class;
    placeMark(cell, currentClass)
    swapTurns();
    setBoardHoverClass();
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    oTurn = !oTurn
}

function setBoardHoverClass() {
    board.classList.remove(x_class);
    board.classList.remove(o_class);
    if (oTurn) {
        board.classList.add(o_class);
    } else {
        board.classList.add(x_class);
    }
}