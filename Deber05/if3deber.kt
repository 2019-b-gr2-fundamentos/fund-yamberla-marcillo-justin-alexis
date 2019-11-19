
import java.util.Scanner //libreria de java para ingresar datos

fun main(args : Array<String>)
{
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado
    print("Ingrese un numero: ")
    var num: Int = reader.nextInt()

    if (num < 0)
        println("El numero es negativo")
    else if (num > 0)
        println("El numero es positivo")
        else
            println("El numero es cero")
}