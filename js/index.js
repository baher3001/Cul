let Number1 = document.getElementById('number1');
let Number2 = document.getElementById('number2');
let Clear = document.getElementById('clear');
let Result = document.getElementById('result');
let Sum = document.getElementById('sum'); //+
let Mins = document.getElementById('mins')//-
let qq = document.getElementById('qq')// *
let divs = document.getElementById('divs') /// /



Sum.onclick = function()
{
    if(Number1.value && Number2.value)
    {
        if(Number1.value=="e" && Number2.value=="e")
        {
            Result.innerHTML ='Please Enter your Number';
            Result.style.color="red";
        }
        else
        {
            Result.innerHTML= parseInt(Number1.value) + parseInt(Number2.value);
            Result.style.color="white";
        }
    }
    else
    {
        Result.innerHTML = "Please Enter your Number Here";
        Result.style.color="red";
    }
}

Mins.onclick = function()
{
    if(Number1.value && Number2.value)
    {
        if(Number1.value=="e" && Number2.value=="e")
        {
            Result.innerHTML ='Please Enter your Number';
            Result.style.color="red";
        }
        else
        {
            Result.innerHTML= parseInt(Number1.value) - parseInt(Number2.value);
            Result.style.color="white";
        }
    }
    else
    {
        Result.innerHTML = "Please Enter your Number Here";
        Result.style.color="red";
    }
}



qq.onclick = function()
{
    if(Number1.value && Number2.value)
    {
        if(Number1.value=="e" && Number2.value=="e")
        {
            Result.innerHTML ='Please Enter your Number';
            Result.style.color="red";
        }
        else
        {
            Result.innerHTML= parseInt(Number1.value) * parseInt(Number2.value);
            Result.style.color="white";
        }
    }
    else
    {
        Result.innerHTML = "Please Enter your Number Here";
        Result.style.color="red";
    }
}


divs.onclick = function()
{
    if(Number1.value && Number2.value)
    {
        if(Number1.value=="e" && Number2.value=="e")
        {
            Result.innerHTML ='Please Enter your Number';
            Result.style.color="red";
        }
        else
        {
            Result.innerHTML= parseInt(Number1.value) / parseInt(Number2.value);
            Result.style.color="white";
        }
    }
    else
    {
        Result.innerHTML = "Please Enter your Number Here";
        Result.style.color="red";
    }
}

Clear.onclick = function()
{
    location.reload();
}




