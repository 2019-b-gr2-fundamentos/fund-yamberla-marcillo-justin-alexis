console.log("Operaciones: \nMultiplicación(m)\nDivision(d)")
console.log("Ingrese dos valores")
const  cstring = prompt("Ingrese numero a: "); //string
const  dstring = prompt("Ingrese numero b: "); //string
const c = Number(cstring); //transformar string a numero
const d = Number(dstring); //transformar string a numero
let opr = prompt("Ingrese la inicial de operación que desea: ",'');
switch (opr){
    case 'm':
        const producto = c * d;
        console.log("La multiplicacion es: ", producto)
        break;
    case 'd':
        const div = c / d;
        console.log("La division es: ", div)
        break;
}