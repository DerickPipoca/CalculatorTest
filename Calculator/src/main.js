const display = document.getElementById("Display");

function appendToDisplay(input)
{
    display.textContent += input;
    console.log('lol');
}

function clearDisplay()
{
    display.textContent = '';
}

function backspace()
{   
    if(display.textContent.length > 0)
    {
        display.textContent = display.textContent.slice(0,-1);
    }
}

function calculate()
{
    try
    {
        display.textContent = eval(display.textContent);
    }
    catch(error)
    {
        display.textContent = 'ERROR.'
    }
}