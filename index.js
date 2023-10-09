const add = function(a,b)
{
    return a+b;
}

const subtract = function(a,b)
{
    return a-b;
}

const multiply = function(a,b)
{
    return a*b;
}

const divide = function(a,b)
{
    return a/b;
}

const operate = function(num1, operator, num2)
{
    if(operator === '+')
    console.log(add(num1,num2));
    else if(operator === '-')
    console.log(subtract(num1,num2));
    else if(operator === '*')
    console.log(multiply(num1,num2));
    else if(operator === '/')
    console.log(divide(num1,num2));
}

const display = function(){
    if(screen.textContent=='0')
    screen.textContent = '';

    screen.textContent += `${this.textContent}`;
}

const clearDisplay = function(){
    screen.textContent = '0';
}

const num1 = 5;

const operator = '-';

const num2 = 10;

const screen = document.querySelector('.display');

const numbers = document.querySelectorAll('.num');
numbers.forEach( button => button.addEventListener('click',display) );

const operators = document.querySelectorAll('.operators');
operators.forEach( button => button.addEventListener('click',display) );

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearDisplay);

