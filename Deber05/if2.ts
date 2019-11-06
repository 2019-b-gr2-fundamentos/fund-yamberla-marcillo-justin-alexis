const edadstring = prompt("Ingrese edad: "); //string
const edadf = Number(edadstring); //transformar string a numero
if(edadf < 18)
{
    console.log("Es menor de edad")
}else{
    console.log("Es mayor de edad")
}