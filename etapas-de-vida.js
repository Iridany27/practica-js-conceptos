let edad = 25; // Cambiamos este valor para probar

if (edad >= 0 && edad <= 12) {
    console.log("Es un niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Es un adolescente");
} else if (edad >= 18 && edad <= 60) {
    console.log("Es un adulto");
} else {
    console.log("Edad fuera de los rangos definidos");
}