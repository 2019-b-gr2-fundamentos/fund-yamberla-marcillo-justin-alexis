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
var prompts = require("prompts");
var _02_leer_archivo_1 = require("../07-archivos/02-leer_archivo");
var _03_escribir_archivo_1 = require("../07-archivos/03-escribir_archivo");
var id = 0;
var contenidoArchivo = _02_leer_archivo_1.leerArchivo('./marcas.txt');
var arregloMarcaCargadoDeArchivo = JSON.parse(contenidoArchivo);
var minimoMid = 0;
arregloMarcaCargadoDeArchivo
    .forEach(function (valorActual) {
    var idActual = valorActual.Aid;
    if (idActual > minimoMid) {
        minimoMid = idActual;
    }
});
minimoMid = minimoMid + 1;
id = minimoMid;
var marcas = arregloMarcaCargadoDeArchivo;
function crearDatosMarcas() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntasMarca, respuestaPreguntas, nuevoRegistroMarca, arregloParseado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntasMarca = [
                        {
                            type: 'text',
                            name: 'Nombre',
                            message: 'Ingrese el nombre de la marca: '
                        },
                        {
                            type: 'text',
                            name: 'Talla',
                            message: 'Ingrese la talla de la prenda: '
                        },
                        {
                            type: 'text',
                            name: 'Color',
                            message: 'Ingrese el color de la prenda: '
                        },
                        {
                            type: 'text',
                            name: 'Precio',
                            message: 'Ingrese el precio de la prenda: '
                        },
                        {
                            type: 'text',
                            name: 'Categoría',
                            message: 'Ingrese la categoría de la marca: c'
                        }
                    ];
                    return [4 /*yield*/, prompts(preguntasMarca)];
                case 1:
                    respuestaPreguntas = _a.sent();
                    nuevoRegistroMarca = {
                        Mid: id,
                        Nombre: respuestaPreguntas.Nombre,
                        Color: respuestaPreguntas.Color,
                        Talla: respuestaPreguntas.Talla,
                        Precio: respuestaPreguntas.Precio,
                        Categoría: respuestaPreguntas.Categoría
                    };
                    id = id + 1;
                    marcas.push(nuevoRegistroMarca);
                    arregloParseado = JSON.stringify(marcas);
                    _03_escribir_archivo_1.escribirArchivo('./marcas.txt', arregloParseado);
                    queDeseaHacer().then()["catch"]();
                    return [2 /*return*/];
            }
        });
    });
}
;
function queDeseaHacer() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, respuesta1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: '¿Qué desea hacer? \n 1: Crear otro registro \n 2: Leer los registros actuales \n 3: Actualizar datos \n 4: Eliminar registros \n 5: Salir'
                    })];
                case 1:
                    preguntas = _a.sent();
                    respuesta1 = preguntas.respuestas;
                    if (respuesta1 == 1) {
                        crearDatosMarcas().then()["catch"]();
                    }
                    else if (respuesta1 == 2) {
                        leerRegistros().then()["catch"]();
                    }
                    else if (respuesta1 == 3) {
                        editarRegistro().then()["catch"]();
                    }
                    else if (respuesta1 == 4) {
                        eliminarRegistro().then()["catch"]();
                    }
                    else if (respuesta1 == 5) {
                        console.log('Saliendo... Adios');
                    }
                    else {
                        console.log('Elija una opcion valida');
                        queDeseaHacer().then()["catch"]();
                    }
                    ;
                    return [2 /*return*/, preguntas.respuestas];
            }
        });
    });
}
;
function leerRegistros() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('El archivo tiene el siguiente registro: \n', marcas);
            queDeseaHacer().then()["catch"]();
            return [2 /*return*/];
        });
    });
}
;
function editarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var MidAEditar, MidEncontrado, queDeseaEditar, respuestaCampo, nuevoNombre, nuevaTalla, nuevoColor, nuevoPrecio, nuevaCategoria, nuevoRegistroStringificado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Mid',
                        message: 'Ingrese el id de la marca para editar su información: '
                    })];
                case 1:
                    MidAEditar = _a.sent();
                    MidEncontrado = marcas.findIndex(function (valorActual) {
                        return valorActual.Mid == MidAEditar.Mid;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'campoAEditar',
                            message: '¿Que campo desea editar?'
                        })];
                case 2:
                    queDeseaEditar = _a.sent();
                    respuestaCampo = queDeseaEditar.campoAEditar;
                    if (!(respuestaCampo == 'Nombre')) return [3 /*break*/, 4];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoNombre',
                            message: 'Ingrese el nombre de la marca: '
                        })];
                case 3:
                    nuevoNombre = _a.sent();
                    marcas[MidEncontrado].Nombre = nuevoNombre.nuevoNombre;
                    return [3 /*break*/, 13];
                case 4:
                    if (!(respuestaCampo == 'Talla')) return [3 /*break*/, 6];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newTalla',
                            message: 'Ingrese la nueva talla: '
                        })];
                case 5:
                    nuevaTalla = _a.sent();
                    marcas[MidEncontrado].Color = nuevaTalla.newTalla;
                    return [3 /*break*/, 13];
                case 6:
                    if (!(respuestaCampo == 'Color')) return [3 /*break*/, 8];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newColor',
                            message: 'Ingrese el nuevo color: '
                        })];
                case 7:
                    nuevoColor = _a.sent();
                    marcas[MidEncontrado].Talla = nuevoColor.newColor;
                    return [3 /*break*/, 13];
                case 8:
                    if (!(respuestaCampo == 'Precio')) return [3 /*break*/, 10];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newPrecio',
                            message: 'Ingrese el nuevo precio: '
                        })];
                case 9:
                    nuevoPrecio = _a.sent();
                    marcas[MidEncontrado].Precio = nuevoPrecio.newPrecio;
                    return [3 /*break*/, 13];
                case 10:
                    if (!(respuestaCampo == 'Categoria')) return [3 /*break*/, 12];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'Category',
                            message: 'Ingrese la nueva categoría: '
                        })];
                case 11:
                    nuevaCategoria = _a.sent();
                    marcas[MidEncontrado].Categoría = nuevaCategoria.Category;
                    return [3 /*break*/, 13];
                case 12:
                    console.log('Ingrese un campo valido');
                    _a.label = 13;
                case 13:
                    ;
                    console.log('El registro de marcas actualizado es:', marcas);
                    nuevoRegistroStringificado = JSON.stringify(marcas);
                    _03_escribir_archivo_1.escribirArchivo('./marcas.txt', nuevoRegistroStringificado);
                    queDeseaHacer().then()["catch"]();
                    return [2 /*return*/, marcas];
            }
        });
    });
}
;
function eliminarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var AidAEliminar, MidEncontrado, registroBorrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Mid',
                        message: 'Ingrese el id del Vengador cuya informacion desea eliminar'
                    })];
                case 1:
                    AidAEliminar = _a.sent();
                    MidEncontrado = marcas.findIndex(function (valorActual) {
                        return valorActual.Mid == AidAEliminar.Mid;
                    });
                    marcas.splice(MidEncontrado, 1);
                    registroBorrado = JSON.stringify(marcas);
                    _03_escribir_archivo_1.escribirArchivo('./marcas.txt', registroBorrado);
                    console.log('El nuevo registro de marcas es:', marcas);
                    queDeseaHacer().then()["catch"]();
                    return [2 /*return*/, marcas];
            }
        });
    });
}
;
function main() {
    crearDatosMarcas().then()["catch"]();
}
main();
