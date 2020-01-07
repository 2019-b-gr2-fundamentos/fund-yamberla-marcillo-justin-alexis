var arregloMatriz = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 6],
    [9],
    [],
];
function compararMatriz(matrizUno, matrizDos) {
    var esValido = tienenMatricesIgualesDimensiones(matrizUno, matrizDos);
    if (esValido) {
        // Comparar los valores
        return tienenMismosValores(matrizUno, matrizDos); // boolean
    }
    else {
        return false;
    }
}
function tienenMismosValores(matrizUno, matrizDos) {
    var primeraDimension = matrizUno.length;
    var segundaDimension = matrizUno[0].length;
    var banderaSonIguales = true;
    for (var i = 0; i < primeraDimension; i++) {
        for (var j = 0; j < segundaDimension; j++) {
            var valorActualM1 = matrizUno[i][j];
            var valorActualM2 = matrizDos[i][j];
            if (valorActualM1 != valorActualM2) {
                banderaSonIguales = false;
            }
        }
    }
    return banderaSonIguales;
}
function tienenMatricesIgualesDimensiones(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    var noHayFalsos = matrizUnoPrimeraDimension != false &&
        matrizUnoSegundaDimension != false &&
        matrizDosPrimeraDimension != false &&
        matrizDosSegundaDimension != false;
    if (noHayFalsos) {
        var tienenIgualesDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
            matrizUnoSegundaDimension == matrizDosSegundaDimension;
        if (tienenIgualesDimensiones) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
function obtenerPrimeraDimension(matrizUno) {
    // VALIDACIONES
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido) {
        var primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }
    else {
        return false;
    }
}
function obtenerSegundaDimension(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido) {
        var longitudActualMaxima = 0; // Auxiliar
        var longitudActualMinima = -1; // Auxiliar
        for (var i = 0; i < matrizUno.length; i++) {
            var elementoActual = matrizUno[i]; // arreglo
            var longitudActual = elementoActual.length; // segunda dimension
            if (longitudActualMaxima < longitudActual) {
                longitudActualMaxima = longitudActual;
            }
            if (longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }
            else {
                if (longitudActual < longitudActualMinima) {
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if (longitudActualMaxima != longitudActualMinima) {
            return false;
        }
        else {
            return matrizUno[0].length;
        }
    }
    else {
        return false;
    }
}
function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' &&
            elementoActual.indexOf; // Truty
        if (!esUnArreglo) {
            return false;
        }
    }
    return true;
}
function main() {
    var x = [
        [1, 2, 3],
        [3, 3, 3]
    ];
    var y = [
        [1, 2, 3],
        [3, 1, 3]
    ];
    var resultado = compararMatriz(x, y);
    console.log('Resultado: ', resultado);
}
main();
