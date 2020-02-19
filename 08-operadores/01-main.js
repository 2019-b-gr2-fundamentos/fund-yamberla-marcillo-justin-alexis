"use strict";
exports.__esModule = true;
var _02_filter_1 = require("./02-filter");
var _03_foreach_1 = require("./03-foreach");
var _04_map_1 = require("./04-map");
var _05_every_1 = require("./05-every");
var _06_some_1 = require("./06-some");
var _07_reduce_1 = require("./07-reduce");
function main() {
    //Una ventaja de TypeScript es que no es necesario definir una estructura.
    //Si eciste un problema como la ausencia de variables, tipar 'any'.
    var arregloEstudiantes = [
        { id1: 1, nombre: "Justin", nota: 7 },
        { id1: 2, nombre: "Alexis", nota: 6 },
        { id1: 3, nombre: "Juan", nota: 8 },
        { id1: 4, nombre: "Jose", nota: 4 },
        { id1: 5, nombre: "Maria", nota: 3.5 },
    ];
    //Operador: FOREACH: Imprimir cada elemento, iterar.
    //Enviamos -> Nada
    //Recibimos -> Nada
    var respuestaForEach = arregloEstudiantes.forEach(function (ValorActual, indice, arreglo) {
        console.log(ValorActual.nota);
        //ValorActual.nota20 = ValorActual.nota*2; ---> hacerlo com Map
    });
    //Respuesta FOREACH
    console.log('Respuesta Foreach: ', respuestaForEach);
    //Operador: MAP: Transformar o mutar el arreglo.
    //Eviamos -> valor actual modificado o nuevo objeto. 
    //Recibe -> nuevo arreglo con valores modificados.
    var respuestaMap = arregloEstudiantes.map(function (ValorActual, i, arreglo) {
        var nuevoObjeto = {
            //Se puede elegir el elemento que se desea retornar. 
            id: ValorActual.id,
            nombre: ValorActual.nombre,
            nota: ValorActual.nota,
            nota20: ValorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log('Respuesta Map: ', respuestaMap);
    //Operador: FILTER: filtra el arreglo
    //Enviamos  -> condicion
    //Recibimos -> Nuevo arreglo con valores filtrados
    var respuestaFilter = arregloEstudiantes.filter(function (ValorActual, i, arreglo) {
        var condicion7 = ValorActual.nota > 7;
        var condicion5 = ValorActual.nota < 5;
        return condicion7 || condicion5;
    });
    console.log('Notas mayores que 7 y menores que 5: ', respuestaFilter);
    //AND -> every (todos cumplan) / OR -> some (uno cumpla)
    /*Some -> Devuelve verdadero o falso dep. Condicion
        SI ALGUNO CUMPLE DEVUELVE TRUE
        SI NINGUNO CUMPLE DEVUELVE FALSE
    Enviamos -> Condicion
    Recibimo -> Booleano            */
    var respuestaSome = arregloEstudiantes.some(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota < 7;
        return condicion;
    });
    console.log('Respuesta Some: ', respuestaSome);
    /*Every -> Devuelve verdadero o falso dep. Condicion
        SI Todos CUMPLE DEVUELVE TRUE
        SI alguno no CUMPLE DEVUELVE FALSE
    Enviamos -> Condicion
    Recibimo -> Booleano            */
    var respuestaEvery = arregloEstudiantes.every(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    console.log('Respuesta Every: ', respuestaEvery);
    //REDUCE: Devuelve un valor con el calculo aplicado
    //Enviamos -> calculo
    //Recibimos -> valor (number)
    //Se puede usar reduceRight
    var respuestaReduce = arregloEstudiantes.reduce(function (acumulador, valorActual, i, arreglo) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0 // valor inicial del acumulador = 0
    );
    console.log('Respuesta de Reduce: ', respuestaReduce);
    console.log('Promedio: ', respuestaReduce / arregloEstudiantes.length);
    //--------------------------------------OP a MANO----------------------
    //Filter
    var respuestaFilterNuestro = _02_filter_1.filter(arregloEstudiantes, function (valorActual, i, arr) {
        /*console.log('Valor', valorActual);
        console.log('Indice', i);
        console.log('Arreglo', arr);*/
        return valorActual.nota >= 7;
    });
    console.log('RespuestaFilterNuestro', respuestaFilterNuestro);
    //Foreach
    var respuestaForNuestro = _03_foreach_1.forEach(arregloEstudiantes, function (valorActual, i, arr) {
        return valorActual.nota;
    });
    console.log('RespuestaForNuestro: ', respuestaForNuestro);
    //Map
    var respuestaMapNuestro = _04_map_1.map(arregloEstudiantes, function (valorActual, i, arr) {
        return valorActual.nota;
    });
    console.log('RespuestaMapNuestro: ', respuestaMapNuestro);
    //every
    var respuestaEveryNuestro = _05_every_1.every(arregloEstudiantes, function (valorActual, i, arr) {
        return valorActual.nota;
    });
    console.log('RespuestaEveryNuestro: ', respuestaEveryNuestro);
    //some
    var respuestaSomeNuestro = _06_some_1.some(arregloEstudiantes, function (valorActual, i, arr) {
        return valorActual.nota;
    });
    //reduce
    var respuestaReduceNuestro = _07_reduce_1.reduce(arregloEstudiantes, function (valorActual, i, arr) {
        return valorActual;
    });
    console.log('RespuestaReduceNuestro: ', respuestaReduceNuestro);
    console.log('Arreglo original: ', arregloEstudiantes);
}
main();
