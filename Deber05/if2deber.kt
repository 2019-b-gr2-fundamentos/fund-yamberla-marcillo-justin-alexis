import java.util.Scanner //libreria de java para ingresar datos

fun main(args : Array<String>)
{
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado
    print("Ingrese edad: ")
    var edad: Int = reader.nextInt()
    if (edad < 18)
        println("Es menor de edad")
    else
        println("Es mayor de edad")
}