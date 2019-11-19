import java.util.Scanner //libreria de java para ingresar datos

fun main(args : Array<String>)
{
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado

    println("Ingrese el valor de a: ")
    var a : Double = reader.nextDouble()

    println("Ingrese el valor de b: ")
    var b : Double = reader.nextDouble()
    var result = a / b

    if (b <= 0)
        println("No se puede dividir para cero!")
    else
        println("El resultado es: $result")
}