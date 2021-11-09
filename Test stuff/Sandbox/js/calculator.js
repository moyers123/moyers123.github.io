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
        this.current = this.current.toString().slice(0, -1)

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
        let computation;
        const prev = parseFloat(this.previous);
        const curr = parseFloat(this.current);
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '/':
                computation = prev / curr;
                break;
            default: 
                return;
        }
        this.current = computation;
        this.operation = undefined;
        this.previous = '';
    }

    display() {
        this.currentTextElement.innerText = this.current;
        if (this.operation != null){
            this.previousTextElement.innerText = `${this.previous} ${this.operation}`
        }
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

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.display()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.display()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.display()
})