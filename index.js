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
    if(screen.textContent=='0'||screen.textContent=='Syntax Error'||
    screen.textContent=='Math Error')
    {
        screen.textContent = '';
    }
    if(this.textContent=='.' && decimalCheck())
    {
        return;
    }
    if( pushElement(this.textContent)!="error" )
    {
        screen.textContent += `${this.textContent}`;
    }
}

const pushElement = function(element)
{
    if( ((element=='+'||element=='-'||element=='*'||element=='/') && exp.length==3) || 
    (exp[2]=='+'||exp[2]=='-'||exp[2]=='*'||exp[2]=='/'))
    {
        if(syntaxErrorCheck())
        {
            clearDisplay();
            screen.textContent = 'Syntax Error';
            return "error";
        }
        else if(exp[1]=='/' && parseFloat(exp[2])==0)
        {
            clearDisplay();
            screen.textContent = 'Math Error';
            return "error";
        }

        evaluateExpression();
    }
    
    if(exp.length==0)
    {
        exp.push(element);
    }
    else if( !(element=='+'||element=='-'||element=='*'||element=='/') && 
    !(exp[exp.length-1]=='+'||exp[exp.length-1]=='-'||exp[exp.length-1]=='*'||
    exp[exp.length-1]=='/'))
    {
        exp[exp.length-1]+=element;
    }
    else if(element=='+'||element=='-'||element=='*'||element=='/')
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
    if(exp.length!=3)
    {
        return true;
    }
    if(exp[0]=='+'||exp[0]=='-'||exp[0]=='*'||exp[0]=='/')
    {
        return true;
    }
    if( !(!(exp[0]=='+'||exp[0]=='-'||exp[0]=='*'||exp[0]=='/'||exp[0]=='.') && 
    (exp[1]=='+'||exp[1]=='-'||exp[1]=='*'||exp[1]=='/') && 
    !(exp[2]=='+'||exp[2]=='-'||exp[2]=='*'||exp[2]=='/'||exp[2]=='.') ))
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
    else if(exp[1]=='/' && parseFloat(exp[2])==0)
    {
        clearDisplay();
        screen.textContent = 'Math Error';
    }
    else
    {
        result = operate(parseFloat(exp[0]),exp[1],parseFloat(exp[2])).toFixed(2);
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

const decimalCheck = function()
{
    if(exp.length==0)
    return false;
    else if(exp[exp.length-1].includes('.'))
    return true;
}

const deleteElement = function()
{
    if(exp.length==0)
    return;
    else if(exp[exp.length-1]=='+'||exp[exp.length-1]=='-'||exp[exp.length-1]=='*'
    ||exp[exp.length-1]=='/')
    {
        if(exp.length==1)
        clearDisplay();
        else
        {
            exp.pop();
            screen.textContent = screen.textContent.slice(0,-1);
        }
    }
    else if(exp[exp.length-1].length==1)
    {
        if(exp.length==1)
        clearDisplay();
        else
        {
            exp.pop();
            screen.textContent = screen.textContent.slice(0,-1);
        }
    }
    else
    {
        exp[exp.length-1] = exp[exp.length-1].slice(0,-1);
        screen.textContent = screen.textContent.slice(0,-1);
    }
}

let exp = [];

const screen = document.querySelector('.display');
const screen2 = document.querySelector('.display2');

const numbers = document.querySelectorAll('.num');
numbers.forEach( button => button.addEventListener('click',display) );

const operators = document.querySelectorAll('.operators');
operators.forEach( button => button.addEventListener('click',display)) ;

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearDisplay);

const evaluateButton = document.querySelector('.evaluate');
evaluateButton.addEventListener('click',evaluateExpression);

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click',display);

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click',deleteElement);

document.addEventListener('keydown',function(e)
{
    if(e.key=='0'||e.key=='1'||e.key=='2'||e.key=='3'||e.key=='4'||e.key=='5'||e.key=='6'||
    e.key=='7'||e.key=='8'||e.key=='9'||e.key=='+'||e.key=='-'||e.key=='*'||e.key=='/'||e.key=='.')
    {
        if(screen.textContent=='0'||screen.textContent=='Syntax Error'||
        screen.textContent=='Math Error')
        {
            screen.textContent = '';
        }
        if(e.key=='.' && decimalCheck())
        {
            return;
        }
        if( pushElement(e.key)!="error" )
        {
            screen.textContent += `${e.key}`;
        }
    }
    else if(e.key=='=')
    {
        evaluateExpression();
    }
    else if(e.key=='Backspace')
    {
        deleteElement();
    }
    else if(e.key=='Escape')
    {
        clearDisplay();
    }
})

