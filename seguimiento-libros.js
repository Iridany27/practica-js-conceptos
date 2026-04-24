// Problema: Seguimiento de Libros

// 1. Declarar un arreglo vacío para almacenar los libros
let librosLeidos = [];

// 2. Definir la función agregarLibro(titulo)
function agregarLibro(titulo) {
    librosLeidos.push(titulo); // .push añade el elemento al final del array
    console.log(`Libro agregado: "${titulo}"`);
}

// 3. Definir la función mostrarLibrosLeidos()
function mostrarLibrosLeidos() {
    console.log("--- Lista de Libros Leídos ---");
    if (librosLeidos.length === 0) {
        console.log("Aún no has agregado libros.");
    } else {
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}

// --- Pruebas del sistema ---
agregarLibro("La bailarina de Auschwitz ");
agregarLibro("Cien años de soledad");
agregarLibro("Diario de Ana Frank");
agregarLibro("Diario Corazón de un niño")

mostrarLibrosLeidos();