let number1= document.getElementById('number1');
let number2 = document.getElementById('number2');

console.log(number2,number1)
document.getElementById('sum').addEventListener('click',function()
 {
    res.innerHTML= parseInt(number1.value) + parseInt(number2.value)
 });
 document.getElementById('mins').addEventListener('click',function(){
    res.innerHTML= parseInt(number1.value) - parseInt(number2.value)
    if(number1.value==="e"||number2.value==='e')
{
    qq.style.display="block";
}
 });
document.getElementById('divs').addEventListener('click',function()
{
    res.innerHTML= parseInt(number1.value) / parseInt(number2.value)

});
 aa = document.getElementById('aa').addEventListener('click',function()
 {
    res.innerHTML= parseInt(number1.value) * parseInt(number2.value)

 });
let res = document.getElementById('res')

let qq = document.getElementById('qq').style.display="none";




/*
    sum 
    mins 
    divs
    aa

*/