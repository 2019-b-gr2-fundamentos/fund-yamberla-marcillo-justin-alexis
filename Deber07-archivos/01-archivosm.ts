import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
async function main(){

   
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenidoArchivo', contenidoArchivo);
    // PARSEAR -> TEXTO -> Estructura en memoria
    /*
    {
        "nombre":"Adrian"
    }
    <universidad>
        <factultad></facultad>
    </universidad>
    */
    let arregloCargadoDeArchivo; // undefined
    try{
        arregloCargadoDeArchivo = JSON
                .parse(contenidoArchivo);
    } catch(error){
        arregloCargadoDeArchivo = [
            {"id":1,"nombre":"Juanito"},
            {"id":2,"nombre":"Pepito"}
        ];
        console.error('Error parseando archivo');
    }

    let contador = 3;

    // OPERADORES
    let minimoId = -1;
    arregloCargadoDeArchivo
        .forEach( // NO ENVIA NADA y NO DEVUELVE NADA
            // ITERAR
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoId){
                    minimoId = idActual
                }
            }
        );
    minimoId = minimoId + 1;
    contador = minimoId;
    /*
    try{
        console.log('1');
        console.log('2');
        console.log('3');
        // Syntax Error}
        let a = 1;
        let a = 2;
        let a = 3; // ESTA MAL!
        console.log(123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123)
        throw new ReferenceError("EL ARCHIVO ESTA MAL PARSEADO");
        console.log('4');
        console.log('5');
    }catch(error){
        console.log(error);
        console.log(':3')
    }
    */
   


    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    
    console.log('Cual usuario quieres Editar?');
    console.log(arregloEstudiantes);

    // OPERADORES!!! -> REEMPLAZAR AL !FOR!

    const idABuscar = await prompts({
            type: 'number',
            name: 'id',
            message: 'Ingresa el ID del registro a Editar'
    })
    const indiceEncontrado = arregloEstudiantes.findIndex( // return CONDICION ->
        function (valorActual, indice, arreglo){
            return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
        } // Si encuentra nos devuelve el indice
          // No encuentra
    )
    console.log('Indice encontrado:', indiceEncontrado);
    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    })
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });
    const estudianteEncontrado = arregloEstudiantes
            .find( // return CONDICION
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );
    console.log(estudianteEncontrado);

    const arregloTexto = JSON.stringify(arregloEstudiantes);
    // JSON.stringify -> Convierte objeto o arreglo en memoria
    //                -> a texto
    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
        );








    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
    */
}

main().then().catch();