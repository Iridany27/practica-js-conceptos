let usuarioRegistrado = "admin";
let passwordRegistrado = "12345";

let inputUsuario = "admin";     // Lo que el usuario escribe
let inputPassword = "password"; // Lo que el usuario escribe

if (inputUsuario === usuarioRegistrado && inputPassword === passwordRegistrado) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado: Usuario o contraseña incorrectos");
}