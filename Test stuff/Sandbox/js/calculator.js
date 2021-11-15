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
        let computation
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

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDisplay)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
        /*does not work well with decimals:
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber)) return '';
        return floatNumber.toLocaleString('en')*/
    }

    display() {
        this.currentTextElement.innerText = 
        this.getDisplayNumber(this.current)
        if (this.operation != null){
            this.previousTextElement.innerText = 
            `${this.getDisplayNumber(this.previous)} ${this.operation}`
        } else {
            this.previousTextElement.innerText = '';
        }
    }
}

//variables to select everything in the html//
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-AC]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const previousTextElement = document.querySelector('[data-previous]');
const currentTextElement = document.querySelector('[data-current]');

//clicking//
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