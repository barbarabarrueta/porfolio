const contenido = document.getElementById("contenido")

let nombre = "Barbara";
let edad = 17;
const COLOR_ROJO = "#FF0000";

let saludo = "hola, me llamo: " + nombre;

contenido.innerHTML = `<h2>${saludo}</h2>`;
contenido.innerHTML += `<h3>${edad}</h3>`;

