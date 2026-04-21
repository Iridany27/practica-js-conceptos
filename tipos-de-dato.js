// Ejercicio: Identificación de tipos de datos en JavaScript

console.log(typeof 42);          // number
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);        // number
console.log(typeof true);        // boolean
console.log(typeof 0);           // number
console.log(typeof '');         // string
console.log(typeof null);       // object (Nota: Esto es un error histórico de JS)
console.log(typeof undefined);  // undefined
console.log(typeof FALSE);      // error o undefined (JS es case-sensitive, 'FALSE' no es lo mismo que 'false')

// ---ejemplos ---
console.log(typeof 3.1416);     // number (decimales también son number)
console.log(typeof [1, 2, 3]);  // object (los arreglos son objetos en JS)
console.log(typeof { nombre: 'Alondra' }); // object
// BigInt: Para números enteros muy grandes que el tipo 'number' no puede manejar
console.log(typeof 9007199254740991n); // bigint

// Symbol: Para crear identificadores únicos
console.log(typeof Symbol('id'));      // symbol

// Arreglos (Arrays): Aunque los usamos como listas, técnicamente son objetos
console.log(typeof [1, 2, 3]);         // object

// Objetos literales: Para representar entidades con propiedades
console.log(typeof { curso: 'JS', nivel: 'Básico' }); // object

// Fechas: Un tipo de objeto especial para manejar tiempo
console.log(typeof new Date());        // object

// Funciones: Bloques de código reutilizables
console.log(typeof function() {});     // function
console.log(typeof console.log);       // function

// NaN (Not a Number): Resultado de operaciones matemáticas imposibles
// ¡Irónicamente, su tipo es number!
console.log(typeof NaN);               // number

// Una cadena que parece número sigue siendo cadena
console.log(typeof "123");             // string

// Una comparación booleana
console.log(typeof (10 > 5));          // boolean