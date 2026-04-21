// Problema: Evaluador de Notas 

// 1. Declarar la variable nota con un valor entre 0 y 100
let nota = 85;

// 2. Usar una condición para verificar si la nota es válida (mayor a 0 es truthy)
if (nota > 0) {
    
    // 3. Utilizar operadores de comparación para determinar el rango
    if (nota >= 90) {
        console.log("Excelente");
    } 
    else if (nota >= 75 && nota <= 89) {
        console.log("Bien");
    } 
    else if (nota >= 60 && nota <= 74) {
        console.log("Suficiente");
    } 
    else {
        console.log("El estudiante no aprueba");
    }

    // 4. Imprimir la nota obtenida para dar contexto
    console.log(`La nota obtenida es: ${nota}`);

} else if (nota === 0) {
    console.log("El estudiante no aprueba (Nota: 0)");
} else {
    console.log("Por favor, ingresa una nota válida mayor a 0.");
}
