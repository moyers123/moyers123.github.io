class Calculator{
    constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear ()
    }
    //what can this calculator do?//
    clear() {
        this.current = '';
        this.previous = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.current.includes('.')) return;
        this.current = this.current.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.current === '') return;
        if (this.previous !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previous = this.current;
        this.current = '';

    }

    compute() {

    }

    display() {
        this.currentTextElement.innerText = this.current;
        this.previousTextElement.innerText = this.previous;
    }
}

//variables to select everything in the html//
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelectorAll('[data-AC]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const previousTextElement = document.querySelectorAll('[data-previous]');
const currentTextElement = document.querySelectorAll('[data-current]');

const calculator = new Calculator (previousTextElement, currentTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.display()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.display()
    })
})