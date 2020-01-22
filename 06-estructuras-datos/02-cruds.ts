// 02-crud.ts create read update delete
// const prompts = require('prompts');
import * as prompts from 'prompts';

function main(){
    obtenerDatosAnimalPerrito();
}
async function obtenerDatosAnimalPerritoSincrono(){
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');3333333
    const promesaEdad = prompts({ // PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
      });


    console.log('Fin');
}
main();