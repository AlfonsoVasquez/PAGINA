function loguear()
{
let usuario=document.getElementById("usuario").value;
let pasword=document.getElementById("clave").value;

if(usuario=="francisco" && pasword=="1234")
{
    window.location="pagina.html";
}
else{
alert("Datos muy malos incorrectos") ;   
}
}
