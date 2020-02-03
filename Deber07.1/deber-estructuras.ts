//import * as prompts from 'C:/Users/USREPS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts';
import * as prompts from 'prompts';
//import * as prompts from ''
import { brand } from './interface/marcas.interfaces';
let id = 1;
let Marcas: brand[] = [];

async function crearDatosMarcas(){
    const preguntasMarca = [
        {
            type: 'text',
            name: 'Nombre',
            message: 'Ingrese el nombre de la marca: '
        },
        {
            type: 'text',
            name: 'Color',
            message: 'Ingrese el color de la prenda: '
        },
        {
            type: 'text',
            name: 'Talla',
            message: 'Ingrese la talla de la prenda: '
        },
        {
            type: 'text',
            name: 'Precio',
            message: 'Ingrese el precio de la prenda: '
        },
        {
            type: 'text',
            name: 'Categoría',
            message: 'Categoría de la marca: '
        }
];
    const respuestaPreguntas = await prompts(preguntasMarca);
    const nuevoRegistroMarca = {
        Mid: id,
        Nombre: respuestaPreguntas.Nombre,
        Color: respuestaPreguntas.Color,
        Talla: respuestaPreguntas.Talla,
        Precio: respuestaPreguntas.Precio,
        Categoría: respuestaPreguntas.Categoría
    };
    id = id + 1;
    Marcas.push(nuevoRegistroMarca);
    queDeseaHacer().then().catch();

};
async function queDeseaHacer(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Que desea hacer?: \n 1: Crear otro registro \n 2: Leer los registros existentes \n 3: Actualizar datos \n 4: Eliminar registros \n 5: Salir\n '
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
        console.log('Saliendo... Adios!');
    }else{
        console.log('Elija una opcion valida');
        queDeseaHacer().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('Registro de Marcas:', Marcas);
    queDeseaHacer().then().catch();
};
async function editarRegistro(){
    const MidAEditar = await prompts({
        type: 'number',
        name: 'Mid',
        message: 'Ingrese el Mid de a marca cuya informacion desea editar'
    });
    const MidEncontrado = Marcas.findIndex(
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
        Marcas[MidEncontrado].Nombre = nuevoNombre.nuevoNombre;
    }else if(respuestaCampo == 'Color'){
        const nuevoColor = await prompts({
            type: 'text',
            name: 'nuevoColor',
            message: 'Ingrese el Color de la nueva marca: '
        });
        Marcas[MidEncontrado].Color = nuevoColor.nuevoColor;
    }else if(respuestaCampo == 'Talla'){
        const nuevoTalla = await prompts({
            type: 'text',
            name: 'nuevoTalla',
            message: 'Ingrese la nueva Talla: '
        });
        Marcas[MidEncontrado].Talla = nuevoTalla.nuevoTalla;
    }else if(respuestaCampo == 'Precio'){
        const nuevoPrecio = await prompts({
            type: 'text',
            name: 'newPrecio',
            message: 'Ingrese el nuevo Precio de la marca: '
        });
        Marcas[MidEncontrado].Precio = nuevoPrecio.newPrecio;
    }else if(respuestaCampo == 'Categoría'){
        const nuevaCategoría = await prompts({
            type: 'text',
            name: 'Category',
            message: 'Ingrese la nueva Categoría'
        });
        Marcas[MidEncontrado].Categoría = nuevaCategoría.Category;
    }else{
        console.log('Ingrese un campo valido');
    };
    console.log('El registro de Marcas actualizado es:', Marcas);
    queDeseaHacer().then().catch();
    return Marcas
};
async function eliminarRegistro(){
    const MidAEliminar = await prompts({
        type: 'number',
        name: 'Mid',
        message: 'Ingrese el Mid de la marca cuya informacion desea eliminar'
    });
    const MidEncontrado = Marcas.findIndex(
        function(valorActual){
        return valorActual.Mid == MidAEliminar.Mid
        }
    );
    Marcas.splice(MidEncontrado, 1);
    console.log('El nuevo registro de Marcas es:', Marcas);
    queDeseaHacer().then().catch();
    return Marcas
}

function main(){
    crearDatosMarcas().then().catch();

}

main();