let exp1 = '';
let operator = '';
let exp2 = '';

let display = '';
const displayText = document.querySelector('.display-text');

//to prevent displaying blank screen when '=' is pressed twice
let equalToFlag = false;

function displayScreen(exp){
    //display operators and assign value to operator
    if(exp === '+' || exp === '-' || exp === '*' || exp ==='/' || exp === '%'){
        operator = exp;
        displayText.textContent = exp;
        
        equalToFlag = true;


        //if an operator is clicked, then display exp2 next
        display = '';
    }else{
        //display numbers
        display+=exp;
        displayText.textContent = display;

        if(!operator){
            exp1 = display;
        }else{
            exp2 = display;
        }
    }
}

function add(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}

function subtract(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
}

function multiply(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}

function divide(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 / num2;
}

function modulus(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 % num2;
}

function operate(operator){
    let result = '';
    
    if(operator === '+') result = add(exp1, exp2);
    if(operator === '-') result = subtract(exp1, exp2);
    if(operator === '*') result = multiply(exp1, exp2);
    if(operator === '/') result = divide(exp1, exp2);
    if(operator === '%') result = modulus(exp1, exp2);

    //if result is float, round it to 2 decimals
    if((result%1)!== 0){
        result = result.toFixed(2);
    }

    return result;
}

function AC(){
    display = '';
    displayText.textContent = 0;
}

function DEL(){
    if(display!==''){

        let expArr = display.split("");
        // console.log(expArr);


        lastChar = expArr.length-1;
        // console.log(lastChar);


        expArr.splice(lastChar,1);
        expArr = expArr.join('');
        // console.log(expArr);

        display = expArr;
        displayText.textContent = display;
    }
}


function equalTo(){

    if(equalToFlag){
        let result =  operate(operator);

        display = result;
        displayText.textContent = display;

        exp1 = result;
        operator = '';
    }

    equalToFlag = false;
}