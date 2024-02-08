// Obtener elementos del DOM
var formularioPeliculas = document.getElementById("formularioPeliculas");
var tituloInput = document.getElementById("titulo");
var anioInput = document.getElementById("anio");
var generoInput = document.getElementById("genero");
var listaPeliculas = document.getElementById("listaPeliculas");
// Array para almacenar las películas
var peliculas = [];
// Agregar evento de envío al formulario
formularioPeliculas.addEventListener("submit", function (event) {
    event.preventDefault();
    // Obtener valores del formulario
    var titulo = tituloInput.value;
    var anio = parseInt(anioInput.value);
    var genero = generoInput.value;
    // Validar que se hayan ingresado datos válidos
    if (titulo && !isNaN(anio) && genero) {
        // Agregar la película a la tupla
        var nuevaPelicula = [titulo, anio, genero];
        peliculas.push(nuevaPelicula);
        // Limpiar el formulario
        formularioPeliculas.reset();
        // Mostrar las películas en la lista
        mostrarPeliculas();
    }
    else {
        // Mostrar mensaje de error si no se ingresaron datos válidos
        alert("Por favor, completa todos los campos.");
    }
});
// Función para mostrar las películas en la lista
function mostrarPeliculas() {
    // Limpiar la lista
    listaPeliculas.innerHTML = "";
    // Iterar sobre el array de películas y agregar elementos a la lista
    peliculas.forEach(function (_a) {
        var titulo = _a[0], anio = _a[1], genero = _a[2];
        var li = document.createElement("li");
        li.textContent = "".concat(titulo, " (").concat(anio, ") - G\u00E9nero: ").concat(genero);
        listaPeliculas.appendChild(li);
    });
}
