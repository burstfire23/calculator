export let num1 = undefined;
export let operator = undefined;
export let num2 = undefined;

const display = document.querySelector(".display");

export function add(num1, num2) {
    return num1 + num2;
}

export function subtract(num1, num2) {
    return num1 - num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

export function divide(num1, num2) {
    return num1 / num2;
}

export function operate(operator, num1, num2) {
    switch (operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    };
}

function displayItem(item){
    const p = document.createElement("p");
    

    p.textContent = item;

    display.appendChild(p);
}

export function setNum1(num) {
    num1 = num;
}

export function setNum2(num) {
    num2 = num;
}

export function setOperator(op) {
    operator = op;
}

export function updateOperand(num){
    if (num1 == undefined) {
        num1 = num;
    } else if (num2 == undefined) {
        num2 = num;
    }
}

export function updateOperator(op){
    if (operator == undefined) {
        operator = op;
        return true;
    }

    return false;
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const misc = document.querySelectorAll(".misc");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");


numbers.forEach((button) => {
    button.addEventListener("click", (event) => {
        let text = event.target.textContent;
        displayItem(text);
        updateOperand(Number(text))
    });

});

operators.forEach((button) => {
    button.addEventListener("click", (event) => {
        let text = event.target.textContent;
        if (updateOperator(text)) {
            displayItem(text);

        }
    });
});

clear.addEventListener("click", (event) => {
    display.replaceChildren();
    num1 = undefined;
    operator = undefined;
    num2 = undefined;
})