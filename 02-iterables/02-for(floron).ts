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