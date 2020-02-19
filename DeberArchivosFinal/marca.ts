import {propiedadesMarca} from './interfaces/propiedades.interface'
import {eliminarArchivo} from './leer_escribir/borrar';
import {escribirArchivo} from './leer_escribir/escribir';
import {leerArchivo} from './leer_escribir/leer';
import * as prompts from 'prompts';

let id = 0;
const contenidoArchivo = leerArchivo('./registroMarca.txt');
let arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
let minimoAid = -1;
    arregloCargadoDeArchivo
        .forEach(
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoAid){
                    minimoAid = idActual;
                }
            }
        );
    minimoAid = minimoAid + 1;
            id = minimoAid;
let arregloMarcas: propiedadesMarca[] = arregloCargadoDeArchivo;

async function nuevaMarca(){

    const arregloPreguntas = [
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
            type: 'number',
            name: 'precio',
            message: 'Ingresa precio: '
        },
        {
            type: 'text',
            name: 'categoria',
            message: 'Ingresa categoria: '   
        }
    ];
    const marcas = await prompts(arregloPreguntas);
    const nuevaMarca = {
        id: id,
        nombre: marcas.nombre,
        color: marcas.color,
        talla: marcas.talla,
        precio: marcas.precio, 
        categoria: marcas.categoria
    };
    id = id+1;
    arregloMarcas.push(nuevaMarca);
    const arregloTexto = JSON.stringify(arregloMarcas);
    // JSON.stringify -> Convierte objeto o arreglo en memoria
    //                -> a texto
    escribirArchivo(
        './registroMarca.txt',
        arregloTexto
    );
    menu().then().catch();
}

async function menu(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Que opcion desea? \n\t1)Añadir marca\n\t2)Ver lista de marcas\n\t3)Actualizar marca\n\t4)Borrar marca\n\t5)Salir'
    });
    const opcionElegida = preguntas.respuestas;
    if(opcionElegida == 1){
        nuevaMarca().then().catch();
        
    }else if(opcionElegida == 2){
        listaDeMarcas().then().catch();

    }else if(opcionElegida == 3){
        actualizarMarca().then().catch();

    }else if(opcionElegida == 4){
        borrarMarca().then().catch();

    }else if(opcionElegida == 5){
        console.log('Saliendo... Adiós!');
    }else{
        console.log('Opcion Invalida');
        menu().then().catch();
    };
};

async function listaDeMarcas(){
    console.log('Lista de marcas:', arregloMarcas);
    menu().then().catch();
};

async function actualizarMarca(){
    const recorderis =await prompts({
        type: 'number',
        name: 'opcion',
        message: 'Desea ver la lista de marcas antes?\n\t1)SI\t2)NO'
    });
    if(recorderis.opcion==1){
        console.log('Lista de marcas:', arregloMarcas);
    }
    const idDigimon = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el Id de la marca: '
    });
    const marcaEncontrada = arregloMarcas.findIndex(
        function(valorActual){
        return valorActual.id == idDigimon.id
        }
    );
    const propiedadAEditar = await prompts({
        type: 'number',
        name: 'propiedadAEditar',
        message: '\nPropiedades:\n\t1)Nombre\n\t2)Color\n\t3)Talla\n\t4)Precio\n\t5)Categoria\n¿Que propiedad desea cambiar?'
    });
    const propiedadEdicion = propiedadAEditar.propiedadAEditar;
    if(propiedadEdicion == 1){
        const nuevoNombre = await prompts({
            type: 'text',
            name: 'nuevoNombre',
            message: 'Ingrese el nuevo nombre de la marca: '
        });
        arregloMarcas[marcaEncontrada].nombre = nuevoNombre.nuevoNombre;
    }else if(propiedadEdicion == 2){
        const nuevaRaza = await prompts({
            type: 'text',
            name: 'nuevoColor',
            message: 'Ingrese el nuevo color de la marca: '
        });
        arregloMarcas[marcaEncontrada].color = nuevaRaza.nuevaRaza;
    }else if(propiedadEdicion == 3){
        const nuevoAtributo = await prompts({
            type: 'text',
            name: 'nuevaTalla',
            message: 'Ingrese la nueva talla: '
        });
        arregloMarcas[marcaEncontrada].talla = nuevoAtributo.nuevoAtributo;
    }else if(propiedadEdicion == 4){
        const nuevaEvolucion = await prompts({
            type: 'number',
            name: 'nuevoPrecio',
            message: 'Ingrese el nuevo precio: '
        });
        arregloMarcas[marcaEncontrada].precio = nuevaEvolucion.nuevaEvolucion;
    }else if(propiedadEdicion == 5){
        const nuevaTemporada = await prompts({
            type: 'text',
            name: 'nuevaCategoria',
            message: 'Ingrese la nueva categoria: '
        });
        arregloMarcas[marcaEncontrada].categoria = nuevaTemporada.nuevaTemporada;
    }else{
        console.log('Propiedad inexistente!');
    };
    console.log('Actualizacion existosa de la marca :', arregloMarcas[marcaEncontrada]);
    const arregloTexto = JSON.stringify(arregloMarcas);
    // JSON.stringify -> Convierte objeto o arreglo en memoria
    //                -> a texto
    escribirArchivo(
        './registroMarca.txt',
        arregloTexto
    );
    menu().then().catch();
    return arregloMarcas
};
async function borrarMarca(){
    const idToErase = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id de la marca que desea borrar: '
    });
    const marcaEncontrada = arregloMarcas.findIndex(
        function(valorActual){
        return valorActual.id == idToErase.id
        }
    );
    arregloMarcas.splice(marcaEncontrada, 1);
    
    console.log('El nuevo registro de arregloMarcas es:', arregloMarcas);
    const arregloTexto = JSON.stringify(arregloMarcas);
    // JSON.stringify -> Convierte objeto o arreglo en memoria
    //                -> a texto
    escribirArchivo(
        './registroMarca.txt',
        arregloTexto
    );
    menu().then().catch();
    return arregloMarcas
}

function main(){
    
    menu().then().catch();

}

main();