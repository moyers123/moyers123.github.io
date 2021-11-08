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

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    display() {

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

