let firstNumber = '';
let operator = '';
let secondNumber = '';



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

const populateDisplay = function() {
    let display = document.querySelector(".display");
    let numButtons = document.querySelectorAll(".number");
    for (const btn of numButtons) {
        btn.addEventListener("click", () => {
            numberClicked(btn, display);
        });
    }
    let clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", () => {
        clear();
        display.textContent = 0});
}

const numberClicked = function(btn, display) {
    if (display.textContent === '0') {
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

populateDisplay();