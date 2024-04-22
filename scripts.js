let exp1 = '';
let operator = '';
let exp2 = '';


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

    return result;
}