//do while
let vecesQueHeComido = 0;
do {
    vecesQueHeComido++;
    console.log("vamos a comer");
    switch (vecesQueHeComido) {
        case 1:
            console.log("Desayuno");
            break;
        case 2:
            console.log("Almuerzo");
            break;
        case 3:
            console.log("Merienda");
            break;
        default:
            console.log("Gordito");
    }
} while (vecesQueHeComido < 3);
