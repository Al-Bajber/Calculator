//variable definition
const buttons = document.getElementsByClassName('button')
const operatorButtons = document.getElementsByClassName('operator')
const numberButtons = document.getElementsByClassName('number')
const allClear = document.getElementsByClassName('clear')
const deleteButton = document.getElementsByClassName('delete')
const equalsButton = document.getElementsByClassName('equals')
const firstOperand = document.getElementsByClassName('first')
const secondOperand = document.getElementsByClassName('second')
let selectedOperator = null;
let result = null;
secondOperand[0].innerText=0;
const calc = document.getElementById('calculator')
const body = document.querySelector('body');
//function definition
function clear() {
    firstOperand[0].innerText='';
    secondOperand[0].innerText='0';
}
function backspace() {
    let currentText = secondOperand[0].innerText;
    currentText = currentText.slice(0,-1);
    secondOperand[0].innerText = currentText;
}
function appendNumber(number) {
    if (number==='.' && secondOperand[0].innerText.includes('.')) {return}
    if (secondOperand[0].innerText === '0' && number !== '.' && number !== '*' && number !== '/' && number !== '+' && number !== '-') {
        secondOperand[0].innerText = number} else if(secondOperand[0].innerText !== '') {
        secondOperand[0].innerText += number;
    }
}

function compute() {
    const operator = selectedOperator;
    if(secondOperand[0].innerText !=='' && firstOperand[0].innerText ==''){
        console.log("Ya Marhaba")
    } else {
        if (operator==='+') {
            result=parseFloat(firstOperand[0].innerText)+parseFloat(secondOperand[0].innerText)
        } else if (operator === '-') {
            result= parseFloat(firstOperand[0].innerText)-parseFloat(secondOperand[0].innerText)
        } else if (operator === '*') {
            result=parseFloat(firstOperand[0].innerText)*parseFloat(secondOperand[0].innerText)
        }else if (operator === '/') {
            if (parseFloat(secondOperand[0].innerText)===0){
                result="Error: Div/0"
            } else {
            result=parseFloat(firstOperand[0].innerText)/parseFloat(secondOperand[0].innerText)
            }
        }
        secondOperand[0].innerText = result
        firstOperand[0].innerText = ''
    }
    
}
function chooseOperation(operator) {
    selectedOperator = operator
}
function updateDisplay() {
    firstOperand[0].innerText = secondOperand[0].innerText
    secondOperand[0].innerText = ''
}

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
        if (isNaN(parseFloat(secondOperand[0].innerText))) {
            secondOperand[0].innerText = this.innerText;
        } else {
            appendNumber(this.innerText);
        }
    });
}
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function () {
        if(secondOperand[0].innerText !=='' && firstOperand[0].innerText !==''){
            compute();
            chooseOperation(this.innerText)
            appendNumber(this.innerText);
            updateDisplay();
        } else {
            chooseOperation(this.innerText)
            appendNumber(this.innerText);
            updateDisplay();
        }
    });
}

equalsButton[0].addEventListener('click', function () {
    compute();
});
allClear[0].addEventListener('click', clear);
deleteButton[0].addEventListener('click',backspace);


document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        equalsButton[0].click()
    } else {
        switch (e.key) {
            case '0':
                buttons[16].click();
                break;
            case '1':
                buttons[3].click();
                break;
            case '2':
                buttons[4].click();
                break;
            case '3':
                buttons[5].click();
                break;
            case '4':
                buttons[7].click();
                break;
            case '5':
                buttons[8].click();
                break;
            case '6':
                buttons[9].click();
                break;
            case '7':
                buttons[11].click();
                break;
            case '8':
                buttons[12].click();
                break;
            case '9':[]
                buttons[13].click();
                break;
            case '.':
                buttons[15].click();
                break;
            case '=':
                buttons[17].click();
                break; 
            case '+':
                buttons[10].click();
                break;
            case '-':
                buttons[14].click();
                break;
            case '*':
                buttons[6].click();
                break;
            case '/':
                buttons[2].click();
                break; 
            case 'Backspace':
                buttons[1].click();
                break;
            case 'Delete':
                buttons[1].click();
                break;     
            default:
                break;
        }
    }
});
