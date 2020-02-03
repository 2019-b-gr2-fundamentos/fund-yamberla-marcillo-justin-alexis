import * as prompts from 'prompts'; 
import { brand } from './Interfaces/Marcas-interfaces';
import { leerArchivo } from '../07-archivos/02-leer_archivo';
import { escribirArchivo } from '../07-archivos/03-escribir_archivo';
import { eliminarArchivo } from './eliminar-archivo';

let id = 0;
const contenidoArchivo = leerArchivo('./marcas.txt');
let arregloMarcaCargadoDeArchivo = JSON.parse(contenidoArchivo);
let minimoMid = 0;
    arregloMarcaCargadoDeArchivo
        .forEach(
            function(valorActual){
                const idActual = valorActual.Aid;
                if(idActual > minimoMid){
                    minimoMid = idActual;
                }
            }
        );
    minimoMid = minimoMid + 1;
            id = minimoMid;
let marcas: brand[] = arregloMarcaCargadoDeArchivo;

async function crearDatosMarcas(){
    const preguntasMarca = [
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
    const respuestaPreguntas = await prompts(preguntasMarca);
    const nuevoRegistroMarca = {
        Mid: id,
        Nombre: respuestaPreguntas.Nombre,
        Color: respuestaPreguntas.Color,
        Talla: respuestaPreguntas.Talla,
        Precio: respuestaPreguntas.Precio,
        Categoría: respuestaPreguntas.Categoría,
    };
    id = id + 1;
    marcas.push(nuevoRegistroMarca);
    const arregloParseado = JSON.stringify(marcas);
    escribirArchivo('./marcas.txt', arregloParseado);
    queDeseaHacer().then().catch();

};
async function queDeseaHacer(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Qué desea hacer? \n 1: Crear otro registro \n 2: Leer los registros actuales \n 3: Actualizar datos \n 4: Eliminar registros \n 5: Salir'
    });
    const respuesta1 = preguntas.respuestas;
    if(respuesta1 == 1){
        crearDatosMarcas().then().catch();
        
    }else if(respuesta1 == 2){
        leerRegistros().then().catch();

    }else if(respuesta1 == 3){
        editarRegistro().then().catch();

    }else if(respuesta1 == 4){
        eliminarRegistro().then().catch();

    }else if(respuesta1 == 5){
        console.log('Saliendo... Adios');
    }else{
        console.log('Elija una opcion valida');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('El archivo tiene el siguiente registro: \n', marcas);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const MidAEditar = await prompts({
        type: 'number',
        name: 'Mid',
        message: 'Ingrese el id de la marca para editar su información: '
    });
    const MidEncontrado = marcas.findIndex(
        function(valorActual){
        return valorActual.Mid == MidAEditar.Mid
        }
    );
    const queDeseaEditar = await prompts({
        type: 'text',
        name: 'campoAEditar',
        message: '¿Que campo desea editar?'
    });
    const respuestaCampo = queDeseaEditar.campoAEditar;
    if(respuestaCampo == 'Nombre'){
        const nuevoNombre = await prompts({
            type: 'text',
            name: 'nuevoNombre',
            message: 'Ingrese el nombre de la marca: '
        });
        marcas[MidEncontrado].Nombre = nuevoNombre.nuevoNombre;
    }else if(respuestaCampo == 'Talla'){
        const nuevaTalla = await prompts({
            type: 'text',
            name: 'newTalla',
            message: 'Ingrese la nueva talla: '
        });
        marcas[MidEncontrado].Color = nuevaTalla.newTalla;
    }else if(respuestaCampo == 'Color'){
        const nuevoColor = await prompts({
            type: 'text',
            name: 'newColor',
            message: 'Ingrese el nuevo color: '
        });
        marcas[MidEncontrado].Talla = nuevoColor.newColor;
    }else if(respuestaCampo == 'Precio'){
        const nuevoPrecio = await prompts({
            type: 'text',
            name: 'newPrecio',
            message: 'Ingrese el nuevo precio: '
        });
        marcas[MidEncontrado].Precio = nuevoPrecio.newPrecio;
    }else if(respuestaCampo == 'Categoria'){
        const nuevaCategoria = await prompts({
            type: 'text',
            name: 'Category',
            message: 'Ingrese la nueva categoría: '
        });
        marcas[MidEncontrado].Categoría = nuevaCategoria.Category;
    }else{
        console.log('Ingrese un campo valido');
    };
    console.log('El registro de marcas actualizado es:', marcas);
    const nuevoRegistroStringificado = JSON.stringify(marcas);
    escribirArchivo('./marcas.txt', nuevoRegistroStringificado);
    queDeseaHacer().then().catch();
    return marcas
};
async function eliminarRegistro(){
    const AidAEliminar = await prompts({
        type: 'number',
        name: 'Mid',
        message: 'Ingrese el id del Vengador cuya informacion desea eliminar'
    });
    const MidEncontrado = marcas.findIndex(
        function(valorActual){
        return valorActual.Mid == AidAEliminar.Mid
        }
    );
    marcas.splice(MidEncontrado, 1); 
    const registroBorrado = JSON.stringify(marcas);
    escribirArchivo('./marcas.txt', registroBorrado);
    console.log('El nuevo registro de marcas es:', marcas);
    queDeseaHacer().then().catch();
    return marcas
};

function main(){
    crearDatosMarcas().then().catch();

}

main();