console.log("Operaciones: \nSuma(s)\nResta(r)\nMultiplicación(m)\nDivision(d)")
console.log("Ingrese dos valores")
const  numas = prompt("Ingrese numero a: "); //string
const  numbs = prompt("Ingrese numero b: "); //string
const numa = Number(numas); //transformar string a numero
const numb = Number(numbs); //transformar string a numero
let op = prompt("Ingrese la inicial de operación que desea: ",'');
switch (op){
    case 's':
        const suma = numa + numb;
        console.log("La suma es: ", suma)
        break;
    case 'r':
        const resta = numa - numb;
        console.log("La resta es: ", resta)
        break;
}