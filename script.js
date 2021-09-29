const displayOperation = document.querySelector(".display>p");
const displayResult = document.querySelector(".display>.result");
const btnNums = document.querySelectorAll(".buttons>.num");
const btnOps = document.querySelectorAll(".buttons>.op");

let displayValue = "";
let currValue = 0;
let pastValue = 0;
let res = 0;
let operationFn;

btnNums.forEach(button => {
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        currValue = parseFloat(displayValue);
        displayResult.textContent = displayValue;
        console.log("- currVal: " + currValue);
    });
});

function operation(sign) {
    valBeforeOp = parseFloat(displayValue);
    displayOperation.textContent = displayValue + sign;
    displayValue = "";
    operationPressed = true;
}

btnOps.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "add":
                res = operate(add, pastValue, currValue);
                displayResult.textContent = res;
                pastValue = res;
                currValue = 0;
                displayValue = "";
                console.log("pastVal: " + pastValue);
                console.log("currVal: " + currValue);
                console.log("res: " + res);
                break;
            
            case "substraction":
                operationFn = substraction;
                operation(" - ");
                break;
            
            case "multiply":
                operationFn = multiply;
                operation(" × ");
                break;
            
            case "divide":
                operationFn = divide;
                operation(" ÷ ");
                break;
        
            case "equal":
                res = operate(add, pastValue, currValue);
                displayResult.textContent = res;
                pastValue = res;
                currValue = 0;
                console.log(pastValue + " + " + displayValue + " = " + res);
                break;
                
                
                // displayOperation.textContent += displayValue + " =";
                // const valAfterOp = parseFloat(displayValue);
                // res = operate(operationFn, valBeforeOp, valAfterOp)
                // displayResult.textContent = `${res}`;
                // displayValue = res;
                // break;
        }
    });
});


const add = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, a, b) => operator(a, b);

