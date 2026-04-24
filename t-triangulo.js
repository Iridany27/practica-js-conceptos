let lado1 = 10, lado2 = 10, lado3 = 5;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es Isósceles");
} else {
    console.log("El triángulo es Escaleno");
}