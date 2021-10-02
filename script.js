const displayResult = document.querySelector(".result>p");
const display = document.querySelector(".display")
const btnNums = document.querySelectorAll(".buttons>.num");
const btnOps = document.querySelectorAll(".op");
const btnOff = document.querySelector("#off");

let currentValue = "";
let pastValue = "";
let operation = undefined;
let result = 0;
let turnOn = false;

const add = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "error :C" : a / b;
const operate = (operator, a, b) => operator(a, b);

btnOff.addEventListener("click", () => {
    turnOn = false;
    display.style["background-color"] = "#141c16";
    currentValue = "";
    pastValue = "";
    operation = undefined;
    result = 0;
    displayResult.textContent = "";
});

btnNums.forEach(button => {
    button.addEventListener("click", () => {
        if (turnOn) {
            if (button.textContent === '.' && currentValue.includes('.')) return;
            currentValue += button.textContent;
            displayResult.textContent = currentValue;
                
            }
        });
    });

function computation(){
        if (currentValue === '') return
        if (pastValue !== '') {
            const prev = parseFloat(pastValue);
            const curr = parseFloat(currentValue);
            if (isNaN(prev) || isNaN(curr)) return;
            result = operate(operation, prev, curr).toFixed(2);
            if (result.split(".")[1] === "00") {
                result = result.split(".")[0];
            }
            currentValue = result;
            pastValue = "";
        }
        pastValue = currentValue;
        currentValue = '';
        displayResult.textContent = pastValue;
}



btnOps.forEach(button => {
    button.addEventListener("click", () => {
        
        switch (button.id) {
            case "add":
                operation = add;
                computation();
                break;
            
            case "substraction":
                operation = substraction;
                computation();
                break;
            
            case "multiply":
                operation = multiply;
                computation();
                break;
            
            case "divide":
                operation = divide;
                computation();
                break;
                    
            case "equal":
                computation();
                break;
                
            case "clear":
                turnOn = true;
                display.style["background-color"] = "#7e8a79";
                currentValue = "";
                pastValue = "";
                operation = undefined;
                result = 0;
                displayResult.textContent = "";
                break;            
        }
    });
});




