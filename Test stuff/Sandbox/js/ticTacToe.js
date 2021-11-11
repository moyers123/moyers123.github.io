const x_class = 'x';
const o_class = 'o';
const win_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
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
    if (checkWin(currentClass)) {
        end(false)
    } else if (isDraw()) {
        end(true)
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function end(draw) {
    if (draw) {
        winningMessageElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${oTurn ? "O's" : "X's"} Win!`;
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(x_class || cell.classList.contains(o_class))
    })
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

function checkWin(currentClass) {
    return win_combos.some(combo => {
        return combo.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}