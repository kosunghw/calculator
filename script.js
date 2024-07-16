let firstNumber = '';
let operator = '';
let secondNumber = '';
let operatorToggle = false;
let displayValue = '0';


const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b === 0) {
        return 'NOPE';
    }
    return a / b;
}

const operate = function(operator, firstNum, secondNum) {
    if (operator === '+') {
        return add(+firstNum, +secondNum);
    } else if (operator === '-') {
        return subtract(+firstNum, +secondNum);
    } else if (operator === '*') {
        return multiply(+firstNum, +secondNum);
    } else {
        return divide(+firstNum, +secondNum);
    }
}

const numButtons = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const dotButton = document.querySelector(".dot");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const display = document.querySelector(".display");



const populateDisplay = function() {
    
    for (const btn of numButtons) {
        btn.addEventListener("click", () => {
            numberClicked(btn, display);
        });
    }
    
    clearButton.addEventListener("click", () => {
        clear();
        display.textContent = 0
    });
    
    dotButton.addEventListener("click", () => {
        if (!display.textContent.includes('.')) 
            display.textContent += '.';
    });

    for (const operatorButton of operators) {
        operatorButton.addEventListener("click", () => {
            operatorClicked(operatorButton);
        })
    }

    equalButton.addEventListener("click", ()=>{
        display.textContent = operate(operator, firstNumber, secondNumber);
    })
}

const numberClicked = function(btn, display) {
    if (operatorToggle && secondNumber === '') {
        display.textContent = btn.textContent;
        secondNumber += btn.textContent;
    } else if (operatorToggle && secondNumber !== '') {
        display.textContent += btn.textContent;
        secondNumber += btn.textContent;
    } else if (display.textContent === '0') {
        display.textContent = btn.textContent;
    } else if (display.textContent.length < 10) {
        display.textContent += btn.textContent;
    }
}

const clear = function() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

const operatorClicked = function(operatorButton) {
    operatorButton.classList.toggle("operatorClick");
    operatorToggle = !operatorToggle;
    firstNumber = display.textContent;
    operator = operatorButton.textContent;
}

const equalClicked = function() {
    const result = operate(operator, firstNumber, secondNumber);
    firstNumber = result;
    operatorToggle = !operatorToggle;

}

populateDisplay();