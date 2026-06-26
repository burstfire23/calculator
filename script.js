let num1 = "";
let operator = undefined;
let num2 = "";
let result = "";

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

export function getNum1(){
    return num1;
}

export function getNum2(){
    return num2;
}

export function getOperator(){
    return operator;
}

export function getResult(){
    return result;
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

export function setResult(num) {
    result = num;
}

export function updateOperand(num){
    if (operator == undefined) {
        num1 += num;
    } else if (operator != undefined) {
        num2 += num;
    }
}

export function updateOperator(op){
    if (operator == undefined && num1 != "") {
        operator = op;
        return true;
    }

    return false;
}

function clear(){
    display.replaceChildren();
    num1 = "";
    operator = undefined;
    num2 = "";
    result = "";

}

export function calculate() {

}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const misc = document.querySelectorAll(".misc");
const clearButton = document.querySelector(".clear");
const equal = document.querySelector(".equals");


numbers.forEach((button) => {
    button.addEventListener("click", (event) => {
        let text = event.target.textContent;

        if (result != "") {
            clear();
        }

        displayItem(text);
        updateOperand(text)
    });

});

operators.forEach((button) => {
    button.addEventListener("click", (event) => {
        let text = event.target.textContent;
        if (updateOperator(text)) {
            displayItem(text);
        }

        if (result != "") {
            result = "";
        }
    });
});

if (clearButton) {
    clearButton.addEventListener("click", (event) => {
        clear();
    });
}

