// Obtener elementos del DOM
const formularioPeliculas: HTMLFormElement = document.getElementById(
  "formularioPeliculas"
) as HTMLFormElement;
const tituloInput: HTMLInputElement = document.getElementById(
  "titulo"
) as HTMLInputElement;
const anioInput: HTMLInputElement = document.getElementById(
  "anio"
) as HTMLInputElement;
const generoInput: HTMLInputElement = document.getElementById(
  "genero"
) as HTMLInputElement;
const listaPeliculas: HTMLUListElement = document.getElementById(
  "listaPeliculas"
) as HTMLUListElement;

// Array para almacenar las películas
let peliculas: [string, number, string][] = [];

// Agregar evento de envío al formulario
formularioPeliculas.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener valores del formulario
  const titulo: string = tituloInput.value;
  const anio: number = parseInt(anioInput.value);
  const genero: string = generoInput.value;

  // Validar que se hayan ingresado datos válidos
  if (titulo && !isNaN(anio) && genero) {
    // Agregar la película a la tupla
    const nuevaPelicula: [string, number, string] = [titulo, anio, genero];
    peliculas.push(nuevaPelicula);

    // Limpiar el formulario
    formularioPeliculas.reset();

    // Mostrar las películas en la lista
    mostrarPeliculas();
  } else {
    // Mostrar mensaje de error si no se ingresaron datos válidos
    alert("Por favor, completa todos los campos.");
  }
});

// Función para mostrar las películas en la lista
function mostrarPeliculas() {
  // Limpiar la lista
  listaPeliculas.innerHTML = "";

  // Iterar sobre el array de películas y agregar elementos a la lista
  peliculas.forEach(([titulo, anio, genero]) => {
    const li = document.createElement("li");
    li.textContent = `${titulo} (${anio}) - Género: ${genero}`;
    listaPeliculas.appendChild(li);
  });
}
