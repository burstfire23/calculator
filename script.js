export let num1 = undefined;
export let operator = undefined;
export let num2 = undefined;

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

function display(item){
    const p = document.createElement("p");
    const display = document.querySelector(".display");

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
    return null;
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const misc = document.querySelectorAll(".misc");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");


numbers.forEach((button) => {
    button.addEventListener("click", (event) => {
        text = event.target.textContent;
        display(text);
        updateOperand(Number(text))
    });

});

operators.forEach((button) => {
    button.addEventListener("click", (event) => {
        text = event.target.textContent;
        display(text);
        updateOperand(Number(text))
    });

});