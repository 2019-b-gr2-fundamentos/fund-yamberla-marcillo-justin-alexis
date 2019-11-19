//for
// declarar una variable
// existir una condicion
// aumenta o reduce la variable
//1
for (let numeroDeExDeMiCrush = 7; numeroDeExDeMiCrush != 0; numeroDeExDeMiCrush--) {
    console.log('escandalo', numeroDeExDeMiCrush);
}
//2
for (let numeroDeExDeMiCrush = 0; numeroDeExDeMiCrush <= 7; numeroDeExDeMiCrush++) {
    console.log('escandalo', numeroDeExDeMiCrush);
}
//3
for (let numeroDeExDeMiCrush = 7; numeroDeExDeMiCrush >= 0; numeroDeExDeMiCrush--) {
    console.log('escandalo', numeroDeExDeMiCrush);
}
//conjunto de numeros
const arregloNumeros = [1, 2, 3, 4, 5];
//reasignar
//aareglonumeros = [1, 2, 3, 4, 5, 6]
arregloNumeros.push(6);
console.log('arreglonumeros:', arregloNumeros);
arregloNumeros.pop();
console.log('arreglonumeros:', arregloNumeros);
/*Arreglo
1) Elemento
2)Indices (0 based) -> posicion
3) Longitud
*/
