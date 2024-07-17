let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '0';
let operatorToggle = false;



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
    if(b === 0) {
        return "ERROR";
     }
    return Math.round((a / b) * 100) / 100;
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

// update display based on displayValue,
// If length of displayValue is greater than 9,
// Cut it to prevent overflow.
const populateDisplay = function() {
    const display = document.querySelector(".display");
    display.textContent = displayValue;
    if(displayValue.length > 9) {
        displayValue = displayValue.slice(0, 9);
        display.textContent = displayValue;
    }
}
populateDisplay();

const numButtons = Array.from(document.querySelectorAll(".number"));
numButtons.forEach((button) => button.addEventListener("click",
    () => clickNumber(button)
));

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => clickClear());

const dotButton = document.querySelector(".dot")
dotButton.addEventListener("click", () => clickDot(dotButton));

const opButtons = Array.from(document.querySelectorAll(".operator"));
opButtons.forEach((button) => button.addEventListener("click", 
    () => clickOperator(button)
));

const eqButton = document.querySelector(".equal");
eqButton.addEventListener("click", () => clickEqual())

function clickNumber(button) {
    if(displayValue === '0' || displayValue === "ERROR") {
        displayValue = button.textContent;
        populateDisplay();
    } else {
        displayValue += button.textContent;
        populateDisplay();
    }
}

function clickClear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    displayValue = '0';
    operatorToggle = false;
    populateDisplay();
}

function clickDot(button) {
    if(!displayValue.includes('.')) {
        displayValue += button.textContent;
        populateDisplay();
    }
}

function clickOperator(button) {
    if(!operatorToggle) {
        operatorToggle = !operatorToggle;
        firstNumber = displayValue;
        operator = button.textContent;
        displayValue = '0';
    } else {
        clickOpWithOp();
    }
}

function clickEqual() {
    operatorToggle = !operatorToggle;
    secondNumber = displayValue;
    const result = operate(operator, firstNumber, secondNumber);
    displayValue = result;
    firstNumber = result;
    secondNumber = '';
    populateDisplay();
}

function clickOpWithOp() { // run this when user clicks operator again when operator
                         // already has been clicked.
    secondNumber = displayValue;
    displayValue = operate(operator, firstNumber, secondNumber);
    firstNumber = displayValue;
    secondNumber = '';
    populateDisplay();
    displayValue = '0';
}