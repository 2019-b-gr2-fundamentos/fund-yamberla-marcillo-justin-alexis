const frase  = prompt('Ingrese una frase: ', '')
console.log("Formatear texto: \nTodo mayúsculas(TM)\nTodo minusculas(Tm)")
let ope = prompt("Ingrese la operación que desee: ",'');
switch (ope){
    case 'Tm':
        console.log(frase.toLowerCase())
        break;
    case 'TM':
        console.log(frase.toLocaleUpperCase())
        break;
}