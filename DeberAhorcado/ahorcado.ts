import * as prompts from 'prompts';
console.log("Bienvenidos al juego del Ahorcado")
///// aki insertar el string a adivinar
var A = new String("papu");
var a = A.length;

console.log(A);
console.log(a);
var B =  [];                //PROGRESO
var Z = [];                 //MATRIZ A ADIVINAR

for (var i = 0; i < a; i++) {
    B[i] = "*";
    Z[i] = A[i];  
}
console.log("Su palabra a adivinar es :");

console.log(B);
console.log("-----");
console.log(Z);

var intento = 1;
var fallo =0; 
var vidas =10;
var win = 0;
           
        while(vidas>0)  {

            win =0;
            var acierto=0;
                var b = prompt("escribe una letra", "a-z");
                console.log(b);
                for (var i= 0; i < a ; i++) {   // compara la letra con el string correcto                    
                    if (Z[i] == b)          // mostrar los aciertos
                    {
                        B[i]= b ; 
                        acierto ++;
                    } 
                } 
                console.log(acierto);   

                console.log("B",B);   
                console.log("Z",Z);   

                if (acierto==0) {
                    fallo ++;
                    vidas=vidas-1;
                        switch (fallo) {    //TRONCO1
                            case 1:
                                console.log("   |           .       ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                break;
                            case 2:         //TRONCO2
                                console.log("   |___________.       ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                break;
                            case 3:         // CUERDA
                                console.log("   |___________.       ");
                                console.log("   |           |       ");
                                console.log("   |           |       ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                break;
                            case 4:         //CABEZA
                                console.log("   |___________.       ");
                                console.log("   |           |       ");
                                console.log("   |           |       ");
                                console.log("   |           0       ");
                                console.log("   |                   ");
                                console.log("   |                   ");
                                break;
                            case 5:         //CUERPO
                                console.log("   |___________.       ");
                                console.log("   |           |       ");
                                console.log("   |           |       ");
                                console.log("   |           0       ");
                                console.log("   |           |       ");
                                console.log("   |                   ");
                            case 6:         //MANO1
                                console.log("   |___________.       ");
                                console.log("   |           |       ");
                                console.log("   |           |       ");
                                console.log("   |           0/      ");
                                console.log("   |           |       ");
                                console.log("   |                   ");
                            case 7:         //MANO2
                                console.log("   |___________.       ");
                                console.log("   |           |       ");
                                console.log("   |           |       ");
                                console.log("   |          L0/      ");
                                console.log("   |           |       ");
                                console.log("   |                   ");
                                break;       
                            case 8:         //PIERNA1
                                console.log("   |___________.       ");
                                console.log("   |           |       ");
                                console.log("   |           |       ");
                                console.log("   |          L0/      ");
                                console.log("   |           |       ");
                                console.log("   |            L      ");
                                break;                                                    
                            case 9:
                                console.log("HAS PERDIDO");
                                console.log("   |___________.       ");
                                console.log("   |           |       ");
                                console.log("   |           |       ");
                                console.log("   |          L0/      ");
                                console.log("   |           |       ");
                                console.log("   |          / L      ");
                                vidas=vidas-1;
                                break;
                    
                        }
                }
               
        console.log("vidas restantes : ", vidas)
                for (var i= 0; i < a ; i++) {   // Condicion de Victoria win = a
                            
                            
                    if (Z[i] == B[i])          
                    {                
                        win ++;
                    }               
                    
                } 
                console.log("win",win); 
            if (win==a) {
                alert("Felicidades has ganado");
                break;
            }

        }
       
        if (vidas=0) {
            console.log("Has perdido");
        }
             