const displayResult = document.querySelector(".result>p");
const btnNums = document.querySelectorAll(".buttons>.num");
const btnOps = document.querySelectorAll(".buttons>.op");

let displayValue = "";
let currValue = 0;
let pastValue = 0;
let result = 0;
let operation;

const add = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, a, b) => operator(a, b);

btnNums.forEach(button => {
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        currValue = parseFloat(displayValue);
        displayResult.textContent = displayValue;
    });
});

function updateOperation() {
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
                updateOperation();
                break;
            
            case "divide":
                operation = divide;
                updateOperation();
                break;
        
            case "equal":
                console.log(`${pastValue} + `);
                updateOperation();
                break;
        }
    });
});




