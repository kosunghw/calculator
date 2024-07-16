let firstNumber = '';
let operator = '';
let secondNumber = '';
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
    return a / b;
}

const operate = function(operator, firstNum, secondNum) {
    if (operator === '+') {
        return add(firstNum, secondNum);
    } else if (operator === '-') {
        return subtract(firstNum, secondNum);
    } else if (operator === '*') {
        return multiply(firstNum, secondNum);
    } else {
        return divide(firstNum, secondNum);
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
    () => {
        clickNumber(button);
    }
))

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => clickClear());

const dotButton = document.querySelector(".dot")
dotButton.addEventListener("click", () => clickDot(dotButton));

function clickNumber(button) {
    if(displayValue === '0') {
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
    populateDisplay();
}

function clickDot(button) {
    if(!displayValue.includes('.')) {
        displayValue += button.textContent;
        populateDisplay();
    }
}