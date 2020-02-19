"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var escribir_1 = require("./leer_escribir/escribir");
var leer_1 = require("./leer_escribir/leer");
var prompts = require("prompts");
var id = 0;
var contenidoArchivo = leer_1.leerArchivo('./registroMarca.txt');
var arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
var minimoAid = -1;
arregloCargadoDeArchivo
    .forEach(function (valorActual) {
    var idActual = valorActual.id;
    if (idActual > minimoAid) {
        minimoAid = idActual;
    }
});
minimoAid = minimoAid + 1;
id = minimoAid;
var arregloMarcas = arregloCargadoDeArchivo;
function nuevaMarca() {
    return __awaiter(this, void 0, void 0, function () {
        var arregloPreguntas, marcas, nuevaMarca, arregloTexto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    arregloPreguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa nombre: '
                        },
                        {
                            type: 'text',
                            name: 'color',
                            message: 'Ingresa color: '
                        },
                        {
                            type: 'text',
                            name: 'talla',
                            message: 'Ingresa talla: '
                        },
                        {
                            type: 'text',
                            name: 'precio',
                            message: 'Ingresa precio: '
                        },
                        {
                            type: 'number',
                            name: 'categoria',
                            message: 'Ingresa categoria: '
                        }
                    ];
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 1:
                    marcas = _a.sent();
                    nuevaMarca = {
                        id: id,
                        nombre: marcas.nombre,
                        color: marcas.color,
                        talla: marcas.talla,
                        precio: marcas.precio,
                        categoria: marcas.categoria
                    };
                    id = id + 1;
                    arregloMarcas.push(nuevaMarca);
                    arregloTexto = JSON.stringify(arregloMarcas);
                    // JSON.stringify -> Convierte objeto o arreglo en memoria
                    //                -> a texto
                    escribir_1.escribirArchivo('./registroMarca.txt', arregloTexto);
                    menu().then()["catch"]();
                    return [2 /*return*/];
            }
        });
    });
}
function menu() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, opcionElegida;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: '¿Que opcion desea? \n\t1)Añadir marca\n\t2)Ver lista de marcas\n\t3)Actualizar marca\n\t4)Borrar marca\n\t5)Salir'
                    })];
                case 1:
                    preguntas = _a.sent();
                    opcionElegida = preguntas.respuestas;
                    if (opcionElegida == 1) {
                        nuevaMarca().then()["catch"]();
                    }
                    else if (opcionElegida == 2) {
                        listaDeMarcas().then()["catch"]();
                    }
                    else if (opcionElegida == 3) {
                        actualizarMarca().then()["catch"]();
                    }
                    else if (opcionElegida == 4) {
                        borrarMarca().then()["catch"]();
                    }
                    else if (opcionElegida == 5) {
                        console.log('Saliendo... Adiós!');
                    }
                    else {
                        console.log('Opcion Invalida');
                        menu().then()["catch"]();
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
function listaDeMarcas() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Lista de marcas:', arregloMarcas);
            menu().then()["catch"]();
            return [2 /*return*/];
        });
    });
}
;
function actualizarMarca() {
    return __awaiter(this, void 0, void 0, function () {
        var recorderis, idDigimon, marcaEncontrada, propiedadAEditar, propiedadEdicion, nuevoNombre, nuevaRaza, nuevoAtributo, nuevaEvolucion, nuevaTemporada, arregloTexto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'opcion',
                        message: 'Desea ver la lista de marcas antes?\n\t1)SI\t2)NO'
                    })];
                case 1:
                    recorderis = _a.sent();
                    if (recorderis.opcion == 1) {
                        console.log('Lista de marcas:', arregloMarcas);
                    }
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingrese el Id de la marca: '
                        })];
                case 2:
                    idDigimon = _a.sent();
                    marcaEncontrada = arregloMarcas.findIndex(function (valorActual) {
                        return valorActual.id == idDigimon.id;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'propiedadAEditar',
                            message: '\nPropiedades:\n\t1)Nombre\n\t2)Color\n\t3)Talla\n\t4)Precio\n\t5)Categoria\n¿Que propiedad desea cambiar?'
                        })];
                case 3:
                    propiedadAEditar = _a.sent();
                    propiedadEdicion = propiedadAEditar.propiedadAEditar;
                    if (!(propiedadEdicion == 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoNombre',
                            message: 'Ingrese el nuevo nombre de la marca: '
                        })];
                case 4:
                    nuevoNombre = _a.sent();
                    arregloMarcas[marcaEncontrada].nombre = nuevoNombre.nuevoNombre;
                    return [3 /*break*/, 14];
                case 5:
                    if (!(propiedadEdicion == 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoColor',
                            message: 'Ingrese el nuevo color de la marca: '
                        })];
                case 6:
                    nuevaRaza = _a.sent();
                    arregloMarcas[marcaEncontrada].color = nuevaRaza.nuevaRaza;
                    return [3 /*break*/, 14];
                case 7:
                    if (!(propiedadEdicion == 3)) return [3 /*break*/, 9];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevaTalla',
                            message: 'Ingrese la nueva talla: '
                        })];
                case 8:
                    nuevoAtributo = _a.sent();
                    arregloMarcas[marcaEncontrada].talla = nuevoAtributo.nuevoAtributo;
                    return [3 /*break*/, 14];
                case 9:
                    if (!(propiedadEdicion == 4)) return [3 /*break*/, 11];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoPrecio',
                            message: 'Ingrese el nuevo precio: '
                        })];
                case 10:
                    nuevaEvolucion = _a.sent();
                    arregloMarcas[marcaEncontrada].precio = nuevaEvolucion.nuevaEvolucion;
                    return [3 /*break*/, 14];
                case 11:
                    if (!(propiedadEdicion == 5)) return [3 /*break*/, 13];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'nuevaCategoria',
                            message: 'Ingrese la nueva categoria: '
                        })];
                case 12:
                    nuevaTemporada = _a.sent();
                    arregloMarcas[marcaEncontrada].categoria = nuevaTemporada.nuevaTemporada;
                    return [3 /*break*/, 14];
                case 13:
                    console.log('Propiedad inexistente!');
                    _a.label = 14;
                case 14:
                    ;
                    console.log('Actualizacion existosa de la marca :', arregloMarcas[marcaEncontrada]);
                    arregloTexto = JSON.stringify(arregloMarcas);
                    // JSON.stringify -> Convierte objeto o arreglo en memoria
                    //                -> a texto
                    escribir_1.escribirArchivo('./registroMarca.txt', arregloTexto);
                    menu().then()["catch"]();
                    return [2 /*return*/, arregloMarcas];
            }
        });
    });
}
;
function borrarMarca() {
    return __awaiter(this, void 0, void 0, function () {
        var idToErase, marcaEncontrada, arregloTexto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'id',
                        message: 'Ingrese el id de la marca que desea borrar: '
                    })];
                case 1:
                    idToErase = _a.sent();
                    marcaEncontrada = arregloMarcas.findIndex(function (valorActual) {
                        return valorActual.id == idToErase.id;
                    });
                    arregloMarcas.splice(marcaEncontrada, 1);
                    console.log('El nuevo registro de arregloMarcas es:', arregloMarcas);
                    arregloTexto = JSON.stringify(arregloMarcas);
                    // JSON.stringify -> Convierte objeto o arreglo en memoria
                    //                -> a texto
                    escribir_1.escribirArchivo('./registroMarca.txt', arregloTexto);
                    menu().then()["catch"]();
                    return [2 /*return*/, arregloMarcas];
            }
        });
    });
}
function main() {
    menu().then()["catch"]();
}
main();
