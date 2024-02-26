function SendEmail(){
let inputElemet =document.getElementById("email");
let emailValue=inputElemet.value;
let checkboxEmail=document.getElementById("01");
if(checkboxEmail.checked)
{
    alert("Рассылка принята!");
}
else
{
    alert("вы неприняли согласие с обработкой данных");
}
}