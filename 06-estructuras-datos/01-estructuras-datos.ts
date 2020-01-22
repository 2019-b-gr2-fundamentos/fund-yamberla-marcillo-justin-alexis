//Su estructura es similiar al archivo .json
//Se diferencia es que no es necesario usar comillas dobles en las llaves "llave":"valor"
//Se puede poner la última coma en el último valor
//Se puede usar undefined
//Se puede escribir comentarios

import {animalPerrito} from './interfaces/animal-perrito.interface'
import { Duenio } from './interfaces/duenio.interface'

//Estructra de datos en lenguaje no tipado
/*const poliperro = {
    nombreCientifico: 'Canis Lupus Familiaris', 
    nombre: 'grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ["Manuela", "Zoraida"],
    vacunado: true,
}
console.log(poliperro.nombre)*/

//Estructura de datos en lenguaje tipado

const poliperroAmarillo: animalPerrito = {
    nombreCientifico: 'Canis Lupus Familiaris', 
    nombre: 'Amarillo',
    clan: null, /* A cualquier propiedad de la Struct se puede poner null */
    //edad: 4,
    //hijos: null,
    //perritas: [],
    //vacunado: false,
}

const duenioPoliPerroAmarillo: Duenio = {
    nombres: 'Justin',
    apellidos: '',
    fechaNacimiento: 2,
    mascotasPerros: [poliperroAmarillo]
}
//Guardar datos en una estructura de datos
poliperroAmarillo.duenio = duenioPoliPerroAmarillo;
poliperroAmarillo.edad = 4;
poliperroAmarillo.vacunado = true;

//Acceder a los datos de una estructura de datos
console.log(poliperroAmarillo.duenio.nombres)
console.log(poliperroAmarillo.duenio.apellidos)7
console.log(poliperroAmarillo.nombre)





