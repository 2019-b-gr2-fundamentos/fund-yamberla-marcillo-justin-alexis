/*
import { escribirArchivo } from "./03-escribir_archivo";*/
import { leerArchivo } from "./02-leer_archivo";
import { Estudiante } from "./interfaces/estudiante.interfaces";
import * as prompts from 'prompts'; //para ingresar datos (necesario hacer funcion asincrona)

async function main(){

    let contador = 1;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    )
    const arregloCargadoDeArchivo = JSON.parse(contenidoArchivo) //convierte datos de txt a objeto
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo //arreglo de tipo Estudiante
    const arregloPreguntas = [
    {
        type: 'text',
        name: 'nombre',
        message: 'ingresa nombre de la marca'
    }
];

const respuestaEstudianteUno = await prompts(arregloPreguntas)
console.log(respuestaEstudianteUno)
const nuevoRegistroUno = {
    id: contador ,
    nombre: respuestaEstudianteUno.nombre
};
contador = contador + 1
arregloEstudiantes.push(nuevoRegistroUno)


const respuestaEstudianteDos = await prompts(arregloPreguntas)
console.log(respuestaEstudianteDos)
const nuevoRegistroDos = {
    id: contador ,
    nombre: respuestaEstudianteDos.nombre
};
contador = contador + 1
arregloEstudiantes.push(nuevoRegistroDos)

console.log('Cuál marca deseas editar?')
console.log(arregloEstudiantes)


//Editar
const idBuscar = await prompts({
    type: 'number',
    name: 'id',
    message: 'Ingresa el registro a editar'
})

//OERADORES --> REEMPLAZAN AL FOR
const indiceEncontrado = arregloEstudiantes.findIndex( //return: CONDICION   
    function (valorActual, indice, arreglo){
        //console.log(valorActual);
        //console.log(indice);
        //console.log(arreglo);
        return valorActual.id == idBuscar.id // nos devuelve el indice
    }
)
//Usar splice para eliminar
console.log('Indice encontrado: ', indiceEncontrado)
const nombreEditar = await prompts({
    type: 'text',
    name: 'nombre',
    message: 'Ingresa el nuevo nombre de la marca'
})

arregloEstudiantes[indiceEncontrado].nombre = nombreEditar.nombre
console.log(arregloEstudiantes)

//BUSCAR:
const buscar = await prompts({
    type: 'text',
    name: 'nombre',
    message: 'Buscar por ID o por NOMBRE'
})

const estudianteEcontrado = arregloEstudiantes.find(
    function(valorActual){
        return valorActual.nombre == buscar.nombre
    }
);
console.log(estudianteEcontrado)
 
}
main().then().catch(); 

//Otro ejercicio
    /*const textoLeido = leerArchivo('./ejemplo.txt'); 

    const nuevoContenido = 'Tengo hambre\n'
    escribirArchivo('./ejemplo.txt','ahjshas\n');

    console.log(textoLeido + nuevoContenido)*/
    //para guardar sin borrar (textoLeido + Contenido)
