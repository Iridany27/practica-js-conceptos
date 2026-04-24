// Problema: Crear objeto a partir de un Libro

// 1. Crear el objeto libro con sus propiedades
const libro = {
    titulo: "La bailarina de Auschwitz",
    autor: "Edith Eger",
    anio: 2017,
    estado: "disponible",
    capitulos: [], // Propiedad opcional para la lista de capítulos

    // 2. Método para imprimir la información básica
    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. El estado es: ${this.estado}.`);
    },

    // 3. Métodos opcionales para gestionar capítulos
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado.`);
    },

    eliminarCapitulo: function(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log("El capítulo no existe.");
        }
    }
};

// --- Pruebas del objeto ---
libro.describirLibro();

// Probando métodos de capítulos
libro.agregarCapitulo("LAS CUATRO PREGUNTAS");
libro.agregarCapitulo("LO QUE PONES EN TU MENTE");
console.log("EL AÑO QUE VIENE EN JERUSALÉN", libro.capitulos);

libro.eliminarCapitulo("LAS CUATRO PREGUNTAS");
console.log("EL AÑO QUE VIENE EN JERUSALÉN", libro.capitulos);