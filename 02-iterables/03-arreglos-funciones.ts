const arregloNumeros = [1,2,3,4,5,9,6,7,8,9,10];
// Acceder 
// Necesito: Indice
console.log(arregloNumeros[6]); // 7
// Anadir al final
// Necesito: Elemento a anadirse
arregloNumeros.push(11);
// Borrar al final
arregloNumeros.pop();
// Anadir en un indice 
// Necesito: Indice
//           Elemento
arregloNumeros.splice(1, 0, 1.1);
console.log(arregloNumeros);
// o Borrar
arregloNumeros.splice(7, 1);
console.log(arregloNumeros);
// BUSCAR INDICE DE UN ELEMENTO! :D 
arregloNumeros.indexOf(5); // 5
arregloNumeros.indexOf(7); // 

arregloNumeros[0] = 999;