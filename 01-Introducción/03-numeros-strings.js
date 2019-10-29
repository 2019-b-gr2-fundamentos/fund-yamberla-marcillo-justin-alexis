const numeroUno = 1; //camelCase
const numeroDos = 2;
let resultado = 0;
resultado = 1 + 1; //suma
resultado = 1 - 2; //resta
resultado = 1 * 2; //mult.
resultado = 1 / 2; //div.
resultado = 1 ^ 2; //pow.
resultado = 2 % 1; //mod (residuo = 0)

//NumeroUno -->
//NUMEROUNO --> Todo mayúscula 
//numeroUno
//NUMERO_UNO
//Strings

const mensaje = "\"Hola mundo\"\n"
const saludo = "\"Adios mundo\"" //backslash escapa caracteres
console.log(mensaje + "\t\t\t" + saludo)
const edad = 30;
const SaludEdad = `Mi edad es: ${edad}` //template strings
console.log(SaludEdad)

const SaludoCompleto = `${mensaje}${saludo}` //tempalte strings
console.log(SaludoCompleto)

//COntamos los elementos
const nombreLongitud = "Justin Yamberla"
console.log(nombreLongitud.length)

//para quitar espacios
console.log(nombreLongitud.trim())  

//cambiar entre mayusculos o minusculas
console.log(nombreLongitud.toLocaleLowerCase())
console.log(nombreLongitud.toLocaleUpperCase())

//reemplazar
console.log(nombreLongitud.replace("i","a"))

/*para buscar caracteres (devuelve la posición si se trata de un solo caracter, 
si es una palabra devuelve la pos. de la primera letra; si no existe devuelve -1)*/
console.log(nombreLongitud.search("Justin"))

//para separar caracteres o palabras: (pos1, pos2)
console.log(nombreLongitud.slice(0,6))

//indice (devuelve la posicion, si no eciste devuelve -1); igual a search
console.log(nombreLongitud.indexOf("Y"))

//devuelve true si encuentra
console.log(nombreLongitud.includes("a"))

//devuelve boolean si termina en:... o empieza en: ...
console.log(nombreLongitud.endsWith("n"))
console.log(nombreLongitud.startsWith("J"))

//hace lo mismo que slice
console.log(nombreLongitud.substring(0,3));

 
