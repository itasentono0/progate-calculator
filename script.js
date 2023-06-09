const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number 
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("clik", (event)=>{
        updateScreen(event.target.value)
    }
    )
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber= '';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }    
}
numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=>{
    calculate()
    updateScreen(currentNumber)
})

function calculate() {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break; 
        case "%": 
            result = prevNumber / 100 * currentNumber;
            break;              
        default: 
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

const clearAll =() => {
    prevNumber=''
    calculationOperator=''
    currentNumber='0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () =>{
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) =>{
    currentNumber += dot
}


