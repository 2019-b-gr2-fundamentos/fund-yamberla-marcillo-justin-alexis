const  num1st = prompt("Ingrese numero: "); //string
const num1 = Number(num1st); //transformar string a numero
if(num1 < 0)
{
    console.log("Es un numero negativo!")
}else{
    if(num1 > 0)
    {
        console.log("Es un numero positivo!")
    }else{
        console.log("El numero de cero!")
    }
}