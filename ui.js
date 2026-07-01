import {updateOperand, updateOperator, setNum1, setNum2, setOperator, setResult, calculate, getNum1, getNum2, getOperator, getResult} from "./calculator.js"

const root = document.documentElement;
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const misc = document.querySelectorAll(".misc");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const toggleButton = document.querySelector(".toggle");
const backspace = document.querySelector(".backspace");

function displayItem(item){
    const p = document.createElement("p");
    
    p.textContent = item;

    if (display) {
        display.appendChild(p);

    }
}

function clear(){
    if (display) {
        display.replaceChildren();
    }
    setNum1("");
    setOperator(undefined);
    setNum2("");
    setResult("");

}

function handleNumbersClick(text) {
    if (getResult() != "" && getOperator() == undefined) {
        clear();
    }

    displayItem(text);
    updateOperand(text)

}

function handleOperatorsClick(text) {
    if (updateOperator(text)) {
        displayItem(text);
    }

    if (getResult() != "") {
        setResult("");
    }

    if (getNum1() != "" && getNum2() != "" && getOperator() != undefined) {
        let answer = calculate();
        clear();
        displayItem(answer);
        setNum1(answer);
        setResult(answer);
        setOperator(text);
        displayItem(text);
    }

}

function handleEqualsClick(){
    let answer = calculate();
    clear();

    for (let letter of answer) {
        displayItem(letter);
    }
    setNum1(answer);
    setResult(answer);

}

function handleDecimalClick() {
    if (getResult() == "") {
        if (getOperator() == undefined) {
            if (!getNum1().includes(".")) {
                updateOperand(".");
                displayItem(".");
            }
        } else {
            if (!getNum2().includes(".")) {
                updateOperand(".");
                displayItem(".");
            }
        }
    }
}

function handleNegativeClick() {
    if (getResult() == "") {
        if (getOperator() == undefined) {
            if (getNum1() == "") {
                updateOperand("-");
                displayItem("-");
            }
        } else {
            if (getNum2() == "") {
                updateOperand("-");
                displayItem("-");
            }
        }
    }
}

function toggleTheme() {
    const root = document.documentElement; 
  	const newTheme = root.className === "dark" ? "light" : "dark"; 
  	const toggleIcon = document.querySelector(".toggle img");
    const backspaceIcon = document.querySelector(".backspace img");
    root.className = newTheme;

    if (newTheme == "dark") {
        toggleIcon.src = "./images/sun.png";
        toggleIcon.alt = "sun icon";
        toggleIcon.width = "40";

        backspaceIcon.src = "./images/backspace-white.png";
        backspaceIcon.alt = "white backpace icon";
        backspaceIcon.width = "40";

    } else {
        toggleIcon.src = "./images/moon.png";
        toggleIcon.alt = "moon icon";
        toggleIcon.width = "40";

        backspaceIcon.src = "./images/backspace-black.png";
        backspaceIcon.alt = "black backpace icon";
        backspaceIcon.width = "40";

    }
}

function handleBackspace() {
    if (getNum2() != "") {
        let newNum2 = getNum2().split("").slice(0, -1).join("");
        setNum2(newNum2);
        display.removeChild(display.lastElementChild);
    } else if (getOperator() != undefined) {
        setOperator(undefined);
        display.removeChild(display.lastElementChild);
    } else if (getNum1() != "") {
        let newNum1 = getNum1().split("").slice(0, -1).join("");
        console.log(newNum1);
        setNum1(newNum1);
        display.removeChild(display.lastElementChild);
    }
}

numbers.forEach((button) => {
    button.addEventListener("click", (event) => {
        let text = event.target.textContent;

        handleNumbersClick(text);

        event.currentTarget.blur();
    });

});

operators.forEach((button) => {
    button.addEventListener("click", (event) => {
        let text = event.target.textContent;

        handleOperatorsClick(text);

        event.currentTarget.blur();
        
    });
});


clearButton.addEventListener("click", (event) => {
    clear();

    event.currentTarget.blur();
});


equalsButton.addEventListener("click", (event) => {
    handleEqualsClick();

    event.currentTarget.blur();
});


misc.forEach((button) => {
    if (button.textContent == ".") {
        button.addEventListener("click", () => {
            handleDecimalClick();

            event.currentTarget.blur();
            
        });
    } else if (button.textContent == "+/-") {
        button.addEventListener("click", () => {
            handleNegativeClick();

            event.currentTarget.blur();
            
        });
    }
});

toggleButton.addEventListener("click", () => {
    toggleTheme();

    event.currentTarget.blur();
});

backspace.addEventListener("click", () => {
    handleBackspace();
});


root.addEventListener("keydown", (event) => {
    const key = event.key;
    const nums = "0123456789";
    const operators = "+-x/";

    if (nums.includes(key)) {
        handleNumbersClick(key);
    } else if (operators.includes(key)) {
        handleOperatorsClick(key);
    } else if (key == "=") {
        handleEqualsClick();
    } else if (key == ".") {
        handleDecimalClick();
    } else if (key == "n") {
        handleNegativeClick();
    } else if (key == "c") {
        clear();
    } else if (key == "t") {
        toggleTheme();
    }
});
