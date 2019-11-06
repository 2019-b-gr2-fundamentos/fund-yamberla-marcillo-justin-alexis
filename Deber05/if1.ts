const astring = prompt("Ingrese numero uno"); //string
const bstring = prompt("Ingrese numero dos"); //string
const a = Number(astring); //transformar string a numero
const b = Number(bstring); 
if(b <= 0)
{
    console.log("Valor de b menor que cero! no se puede dividir.")
}else{
    const r = a / b;
    console.log("El resultado es: ", r)
}


