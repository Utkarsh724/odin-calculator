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
    if(operator=='+')
    return add(num1,num2);
    if(operator=='-')
    return subtract(num1,num2);
    if(operator=='*')
    return multiply(num1,num2);
    if(operator=='/')
    return divide(num1,num2);
}

const display = function(){
    if(screen.textContent=='0'||screen.textContent=='Syntax Error')
    {
        screen.textContent = '';
    }
    if( pushElement(this.textContent)!="error" )
    {
        screen.textContent += `${this.textContent}`;
    }
}

const pushElement = function(element)
{
    if(!Number.isInteger(parseInt(element)) && exp.length==3)
    {
        if(syntaxErrorCheck())
        {
            clearDisplay();
            screen.textContent = 'Syntax Error';
            return "error";
        }
        evaluateExpression();
    }
    
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

const syntaxErrorCheck = function() //0 handling left
{
    if(exp.length!=3)
    {
        return true;
    }
    if( !(Number.isInteger(parseInt(exp[0])) && !Number.isInteger(parseInt(exp[1])) && 
    Number.isInteger(parseInt(exp[2]))) )
    {
        return true;
    }
}

const evaluateExpression = function() //Decimal, backspace
{
    if(syntaxErrorCheck())
    {
        if(exp.length != 0)
        {
            clearDisplay();
            screen.textContent = 'Syntax Error';
        }
        else
        {
            clearDisplay();
        }
    }
    else
    {
        result = operate(parseInt(exp[0]),exp[1],parseInt(exp[2]));
        exp.splice(0,3,result);
        screen.textContent = `${exp[0]}`;
        screen2.textContent = `${exp[0]}`;
    }
}

const clearDisplay = function(){
    screen.textContent = '0';
    screen2.textContent = '0';
    exp = [];
}

let exp = [];

const screen = document.querySelector('.display');
const screen2 = document.querySelector('.display2');

const numbers = document.querySelectorAll('.num');
numbers.forEach( button => button.addEventListener('click',display) );

const operators = document.querySelectorAll('.operators');
operators.forEach( button => button.addEventListener('click',display) );

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearDisplay);

const evaluateButton = document.querySelector('.evaluate');
evaluateButton.addEventListener('click',evaluateExpression);



