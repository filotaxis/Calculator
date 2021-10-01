const displayResult = document.querySelector(".result>p");
const display = document.querySelector(".display")
const btnNums = document.querySelectorAll(".buttons>.num");
const btnOps = document.querySelectorAll(".op");
const btnOff = document.querySelector("#off");

let displayValue = "";
let currValue = 0;
let pastValue = 0;
let result = 0;
let turnOn = false;
let operation;

const add = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, a, b) => operator(a, b);

btnOff.addEventListener("click", () => {
    turnOn = false;
    display.style["background-color"] = "#141c16";
});

btnNums.forEach(button => {
    button.addEventListener("click", () => {
        if (turnOn) {
            display.style["background-color"] = "#7e8a79";
            displayValue += button.textContent;
            currValue = parseFloat(displayValue);
            displayResult.textContent = displayValue;
        } else {

        }

    });
});

function updateOperation() {
    console.log("pastV: " + pastValue);
    console.log("currV: " + currValue);
    result= operate(operation, pastValue, currValue);
    displayResult.textContent = result;
    pastValue = result;
    currValue = 0;
    displayValue = "";
}


btnOps.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "add":
                operation = add;
                updateOperation();
                break;
            
            case "substraction":
                operation = substraction;
                updateOperation();
                break;
            
            case "multiply":
                operation = multiply;
                console.log("pastV: " + pastValue);
                console.log("currV: " + currValue);
                result= operate(operation, pastValue, currValue);
                displayResult.textContent = result;
                pastValue = result;
                currValue = 0;
                displayValue = "";
                break;
            
            case "divide":
                operation = divide;
                updateOperation();
                break;
        
            case "equal":
                updateOperation();
                break;
            
            case "clear":
                turnOn = true;
                displayValue = "";
                currValue = 0;
                pastValue = 0;
                result = 0;
                displayResult.textContent = "0";
                display.style["background-color"] = "#7e8a79";
                break;
        }
    });
});




