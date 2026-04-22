// Problema: Clasificación de Frutas
// Estudiante: Alondra Iridany Saucedo Jiménez

// 1. Declarar un arreglo con una variedad de frutas diferente
const frutas = [
    'fresa', 'mango', 'fresa', 'kiwi', 'mango', 
    'fresa', 'piña', 'kiwi', 'mango', 'fresa', 
    'piña', 'cereza', 'mango', 'cereza'
];

// 2. Crear un objeto vacío para almacenar el conteo
const conteoFrutas = {};

// 3. Uso de un ciclo FOR para recorrer el arreglo
for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];

    // Verificamos si la fruta ya existe como llave en nuestro objeto
    if (conteoFrutas[frutaActual]) {
        // Si existe, aumentamos el contador en 1
        conteoFrutas[frutaActual]++;
    } else {
        // Si no existe, la agregamos y empezamos el conteo en 1
        conteoFrutas[frutaActual] = 1;
    }
}

// 4. Imprimir los resultados en la consola
console.log("--- Reporte de Inventario de Frutas ---");
console.log(conteoFrutas);

