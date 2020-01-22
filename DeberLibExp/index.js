var suma = require('oplib-prueba/lib/suma')
var salida1 = suma(1, 4)
console.log("La suma es: ", salida1)

var resta = require('oplib-prueba/lib/resta')
var salida2 = resta(8, 8)
console.log("La resta es: ", salida2)

var producto = require('oplib-prueba/lib/multi')
var salida3 = producto(7, 8)
console.log("La multiplicacion es: ", salida3)

var division = require('oplib-prueba/lib/divi')
var salida4 = division(10, 2)
console.log("La division es: ", salida4)

var volCil = require('oplib-prueba/lib/vol1')
var salida5 = volCil(5, 20)
console.log("El volumen del cilindro en cm es: ", salida5)

var volEsf = require('oplib-prueba/lib/vol2')
var salida6 = volEsf(8)
console.log("El volumen de la esfera en cm es: ", salida6)