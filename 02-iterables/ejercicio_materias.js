/*
1. analisis
2. algebra
3. compiladores
5. programacion
7. calculo
11. fisica
13- ingles

numero de deberes que se deben hacer si ingreso un numero:
ej: ingreso 1000: serían 500 para analisis y 500 para algebra.

si es impar aumento a analisis socioeconomico
si es par aumentamos a algebra
si es multiplo de 3 aumentmos a compiladores
primero desde el mayor numero
*/
let deberes = 0;
let analisis = 0;
let algebra = 0;
let compiladores = 0;
let programacion = 0;
let calculo = 0;
let fisica = 0;
let ingles = 0;
while (deberes < 1000) {
    deberes++;
    if ((deberes % 13) == 0) {
        ingles++;
    }
    else if ((deberes % 11) == 0) {
        fisica++;
    }
    else if ((deberes % 7) == 0) {
        calculo++;
    }
    else if ((deberes % 5) == 0) {
        programacion++;
    }
    else if ((deberes % 3) == 0) {
        compiladores++;
    }
    else if ((deberes % 2) == 0) {
        analisis++;
    }
    else if ((deberes % 2) != 0) {
        algebra++;
    }
}
console.log("analisis: ", analisis);
console.log("algebra: ", algebra);
console.log("compiladores: ", compiladores);
console.log("programacion: ", programacion);
console.log("calculo: ", calculo);
console.log("fisica: ", fisica);
console.log("ingles: ", ingles);
console.log("total: ", deberes);
