const displayResult = document.querySelector(".result>p");
const display = document.querySelector(".display")
const btnNums = document.querySelectorAll(".buttons>.num");
const btnOps = document.querySelectorAll(".op");
const btnOff = document.querySelector("#off");

let displayValue = "";
let previousValue = "";
let operation = undefined;
let turnOn = false;

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
            if (button.textContent === "." && displayValue.includes(".")) return;
            displayValue += button.textContent;
            displayResult.textContent = displayValue;
        } else {

        }

    });
});

// function updateOperation() {
//     console.log("pastV: " + pastValue);
//     console.log("currV: " + currValue);
//     result= operate(operation, pastValue, currValue);
//     displayResult.textContent = result;
//     pastValue = result;
//     currValue = 0;
//     displayValue = "";
// }

function compute() {
    let result; 
    const prev = parseFloat(previousValue);
    const curr = parseFloat(displayValue);
    if (isNaN(prev) || isNaN(curr)) return;    
}



btnOps.forEach(button => {
    button.addEventListener("click", () => {
        
        switch (button.id) {
            case "add":
                operation = add;
                if (displayValue === "") return;
                if (displayValue !== "") {
                    let result; 
                    const prev = parseFloat(previousValue);
                    const curr = parseFloat(displayValue);
                    if (isNaN(prev) || isNaN(curr)) return;
                    result = operate(operation, prev, curr);
                    displayValue = result;
                    operation = undefined;
                    previousValue = "";

                }
                previousValue = displayValue;
                displayValue = "";
                break;
            
            case "substraction":
                operation = substraction;
                
                break;
            
            case "multiply":
                operation = multiply;
                
                if(d)
                // pastValue = 1;
                console.log("pastV: " + pastValue);
                console.log("currV: " + currValue);
                console.log("resultA: " + result);
                result = operate(operation, pastValue, currValue);
                console.log("resultB: " + result);
                displayResult.textContent = `${result}`;
                pastValue = result;
                currValue = 0;
                displayValue = "";
                break;
            
            case "divide":
                operation = divide;
                updateOperation();
                break;
        
            case "equal":
                result= operate(operation, pastValue, currValue);
                displayResult.textContent = result;
                pastValue = result;
                currValue = 0;
                displayValue = "";
                lastOperation = "equal";
                break;
            
            case "clear":
                turnOn = true;
                displayValue = "";
                currValue = 0;
                pastValue = "";
                result = 0;
                displayResult.textContent = "_";
                display.style["background-color"] = "#7e8a79";
                lastOperation = "clear";
                break;
        }
    });
});




