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

fun main(args : Array<String>)
{
    var deberes = 0
    var analisis = 0
    var algebra = 0
    var compiladores = 0
    var programacion = 0
    var calculo = 0
    var fisica = 0
    var ingles = 0

    while (deberes < 1000)
    {
        deberes ++;
        if((deberes % 13) == 0){
            ingles ++;
        }
        else if((deberes % 11) == 0){
            fisica ++;
        }
        else if((deberes % 7) == 0){
            calculo ++;
        }
        else if((deberes % 5) == 0){
            programacion ++;
        }
        else if((deberes % 3) == 0){
            compiladores ++;
        }
        else if((deberes % 2) == 0){
            analisis ++;
        }
        else if((deberes % 2) != 0){
            algebra ++;
        }
    }

    println("analisis: " + analisis)
    println("algebra: " + algebra)
    println("compiladores: " + compiladores)
    println("programacion: " + programacion)
    println("calculo: " + calculo)
    println("fisica: " + fisica)
    println("ingles: " + ingles)
    println("total: " + deberes)
}