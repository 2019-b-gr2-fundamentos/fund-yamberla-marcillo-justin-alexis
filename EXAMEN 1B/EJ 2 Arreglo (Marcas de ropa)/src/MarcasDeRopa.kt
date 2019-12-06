import java.util.Scanner
var nBrand: Int = 0
var marcas = Array<String>(nBrand){""}

fun main(args: Array<String>)
{
    brand()
}

//FUNCION MENU
fun menu() {
    println("Seleccione una opción: \n1) Añadir \n2) Actualizar \n3) Eliminar \n4) Salir")
    var opVal: String? = readLine()
    var opCrear: Boolean = opVal == "crear" || opVal == "1"
    var opActualizar: Boolean = opVal == "actualizar" || opVal == "2"
    var opEliminar: Boolean = opVal == "eliminar" || opVal == "3"
    var opSalir: Boolean = opVal == "salir" || opVal == "4"
    var validar: Boolean = opCrear || opActualizar || opEliminar || opSalir
    if (validar) {
        if (opCrear) aniadir()
        if (opActualizar) actualizar()
        if (opEliminar) borrar()
        if (opSalir) println("Ha salido del programa!")
        }
}

//FUNCION INICIAL PARA INGRESAR MARCAS
fun brand()
{
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado
    print("Cuantas marcas desea ingresar?: ")
    nBrand = reader.nextInt()
    marcas = Array(nBrand){""}
    for (i in 0 until marcas.size)
    {
        print("Ingrese elemento: ")
        marcas[i] = readLine()!!
    }
    listar()
    menu()
}

//FUNCION PARA AÑADIR MAS MARCAS
fun aniadir() {
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado
    var last_i: Int // indice inicial
    var op: String?    // operacion
    var last_marcas = Array<String>(nBrand) { "" } //arreglo inicial
    listar()
    print("Cuantos elementos mas desea ingresar?: ")
    var add: Int = reader.nextInt() // elemento extra
    last_marcas = marcas
    last_i = nBrand
    nBrand += add
    marcas = Array(nBrand) { "" }
    for (i in 0 until last_i step 1) {
        marcas[i] = last_marcas[i]
    }
    for (j in last_i until nBrand step 1) {
        print("Ingrese elemento: ")
        marcas[j] = readLine()!!
    }
    println("La lista de marcas se ha actualizado!")
    listar()
    //Se pregunta al usuario si desea continuar
    do {
        print("Desea ingresar mas nombres? si/no: ")
        op = readLine()!!        //ingresar valor de la operacion si/no
        if (op == "si") aniadir()
        else if (op == "no") println("Terminar")
    }while (op == "si" && op == "no")
    menu()
}

//FUNCION PARA ACTUALIZAR
fun actualizar()
{
    val reader = Scanner(System.`in`)       //instancia para leer datos del teclado
    listar()
    print("Ingrese el numero de marca que desea actualizar: ")
    var up_brand: Int = reader.nextInt()   //ingresar el numero de marca a actualizar
    print("Ingrese la nueva marca: ")
    marcas[up_brand] = readLine()!!        //ingresa marca
    println("La lista de marcas se ha actualizado!")
    listar()
    menu()
}

//FUNCION PARA BORRAR
fun borrar()
{
    val reader = Scanner(System.`in`)       //instancia para leer datos del teclado
    //IMPRIMIR ELEMENTOS
    listar()
    print("Ingrese el numero de marca que desea eliminar: ")
    var del_brand: Int = reader.nextInt()   //ingresar el numero de marca a borrar
    for (i in 0 until marcas.size -1 step 1){
        var j: Int = i
        if (j == (del_brand)) {
            do{
                marcas[j] = marcas[j + 1] //el elemnto numero i para a ser el elemento superior
                j++
                }while (j < nBrand-1)
            break
            }
        }
    nBrand-=1
    println("La lista de marcas se ha actualizado!")
    listar()
    menu()
}

//FUNCION PARA DESPLEGAR ELEMENTOS
fun listar()
{
    println("Lista de marcas existentes: ")
    for (i in 0 until nBrand step 1)
        println("Marca $i: ${marcas[i]}")
}
