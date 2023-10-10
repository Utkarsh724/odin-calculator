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
    return add(num1,num2);
    else if(operator === '-')
    return subtract(num1,num2);
    else if(operator === '*')
    return multiply(num1,num2);
    else if(operator === '/')
    return divide(num1,num2);
}

const display = function(){
    if(screen.textContent=='0'||screen.textContent=='Syntax Error')
    screen.textContent = '';
    
    if(this.textContent=='+'||this.textContent=='-'||this.textContent=='*'
    ||this.textContent=='/')
    {
        pushElement(this.textContent);
    }
    else
    {
        pushElement(this.textContent);
    }

    screen.textContent += `${this.textContent}`;
}

const pushElement = function(element)
{
    if(exp.length==0)
    {
        exp.push(element);
    }
    else if(Number.isInteger(parseInt(element)) && Number.isInteger(parseInt(exp[exp.length-1])))
    {
        exp[exp.length-1]+=element;
    }
    else if(!Number.isInteger(parseInt(element)))
    {
        exp.push(element);
    }
    else
    {
        exp.push(element); //When the recent element in array is an operator
    }
}

const syntaxErrorCheck = function()
{
    if(exp.length%2==0)
    {
        return true;
    }
    for(let i=0; i<exp.length; i++)
    {
        if( !Number.isInteger(parseInt(exp[i])) && !Number.isInteger(parseInt(exp[i+1])))
        {
            return true;
        }
    }
}

const evaluateExpression = function() 
{
    if(syntaxErrorCheck())
    {
        clearDisplay();
        screen.textContent = 'Syntax Error';
    }
    else{
    let result;
    for(let i=0; i<exp.length; i++)
    {
        if(exp[i]=='/')
        {
            result = divide(parseInt(exp[i-1]),parseInt(exp[i+1]));
            exp.splice(i-1,3,result);
        }
    }
    for(let i=0; i<exp.length; i++)
    {
        if(exp[i]=='*')
        {
            result = multiply(parseInt(exp[i-1]),parseInt(exp[i+1]));
            exp.splice(i-1,3,result);
        }
    }
    for(let i=0; i<exp.length; i++)
    {
        if(exp[i]=='+')
        {
            result = add(parseInt(exp[i-1]),parseInt(exp[i+1]));
            exp.splice(i-1,3,result);
        }
        if(exp[i]=='-')
        {
            result = subtract(parseInt(exp[i-1]),parseInt(exp[i+1]));
            exp.splice(i-1,3,result);
        }
    }
   screen.textContent = `${exp[0]}`;
   screen2.textContent = `${exp[0]}`;
}
}

const clearDisplay = function(){
    screen.textContent = '0';
    screen2.textContent = '0';
    exp = [];
}

let num1 = 5;

let operator = '-';

let num2 = 10;

let exp = [];

const screen = document.querySelector('.display');
const screen2 = document.querySelector('.display2');

const numbers = document.querySelectorAll('.num');
numbers.forEach( button => button.addEventListener('click',display) );

const operators = document.querySelectorAll('.operators');
operators.forEach( button => button.addEventListener('click',display) );

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearDisplay);

const evaluateButton = document.querySelector('.evaluate')
evaluateButton.addEventListener('click',evaluateExpression);

