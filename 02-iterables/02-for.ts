//for
// declarar una variable
// existir una condicion
// aumenta o reduce la variable

//1
for (let numeroDeExDeMiCrush = 7; numeroDeExDeMiCrush != 0 ; numeroDeExDeMiCrush --)
{
    console.log('escandalo', numeroDeExDeMiCrush);
}

//2
for (let numeroDeExDeMiCrush = 0; numeroDeExDeMiCrush <= 7 ; numeroDeExDeMiCrush ++)
{
    console.log('escandalo', numeroDeExDeMiCrush);
}

//3
for (let numeroDeExDeMiCrush = 7; numeroDeExDeMiCrush >= 0 ; numeroDeExDeMiCrush --)
{
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
const indiceElementoUno = 0;
//acceder a cada elemento
arregloNumeros[indiceElementoUno];
console.log(arregloNumeros[indiceElementoUno]);
console.log(arregloNumeros[4]);

/*Arreglo
1) Elemento
2)Indices (0 based) -> posicion
3) Longitud
*/

let arreglo = [1, 2, 3, 4, 5];
console.log(arreglo.length);

/*FOR
1) let cambio = arregloNumeros.lenght 
2) tamaño = 
*/


/* 
1) Crear un arreglo de 5 elementos
2) Cada elemento 1 o un 0
Ej: [0, 0, 1, 0, 0]
*Exista al menos un elemento 1:
[0, 0, 0, 0, 0] no valido
[0, 0, 0, 1, 0] valido

Adivinar donde está en 1 (el florón).

funcion para generar numeros random del 0 - 1: Math.floor(Math.random() *2) 
el *2 indica el rango en que pueden variar los numeros. Si es *10 sería de 0 - 9
 */

const arreglo1 = [];
let cont = 0;
for (let i = 0; i < 5; i ++)
{
    arreglo1[i] = Math.floor(Math.random() *2)
    if (arreglo1[i] == 0){
        cont ++;
    }
}
if (cont >= 5){
    console.log("Arreglo no valido")
    
}
else{console.log(arreglo1)}

