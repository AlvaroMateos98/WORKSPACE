// Declaración de un array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Declaración de un array de strings
let palabras: string[] = ["hola", "mundo"];

// Acceso a elementos
let frutas: string[] = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // Output: 'manzana'
console.log(frutas.length); // Output: 3

// Agregar elementos
let colores: string[] = ["rojo", "verde"];
colores.push("azul");
console.log(colores); // Output: ['rojo', 'verde', 'azul']

// Iterar sobre un array
let numerosArray: number[] = [1, 2, 3, 4, 5];
numerosArray.forEach((numero) => {
  console.log(numero);
});

// Tipos de datos mixtos en un array
let mixto: (string | number)[] = ["hola", 42, "mundo", 7];
mixto.forEach((elemento) => {
  console.log(typeof elemento);
});

// Ejercicio 3: Gestor de Tareas
// Obtener elementos del DOM
const tareaInput: HTMLInputElement = document.getElementById(
  "tarea"
) as HTMLInputElement;
const agregarBtn: HTMLButtonElement = document.getElementById(
  "agregarBtn"
) as HTMLButtonElement;
const tareasUl: HTMLUListElement = document.getElementById(
  "tareas"
) as HTMLUListElement;

// Array para almacenar las tareas
let tareas: string[] = [];

// Agregar evento de clic al botón de agregar
agregarBtn.addEventListener("click", () => {
  // Obtener el valor de la nueva tarea
  const nuevaTarea: string = tareaInput.value;

  // Validar que se haya ingresado una tarea válida
  if (nuevaTarea) {
    // Agregar la tarea al array
    tareas.push(nuevaTarea);

    // Limpiar el input
    tareaInput.value = "";

    // Mostrar las tareas en la lista
    mostrarTareas();
  } else {
    // Mostrar mensaje de error si no se ingresó una tarea válida
    alert("Por favor, ingresa una tarea válida.");
  }
});

// Función para mostrar las tareas en la lista
function mostrarTareas() {
  // Limpiar la lista
  tareasUl.innerHTML = "";

  // Iterar sobre el array de tareas y agregar elementos a la lista
  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    li.textContent = tarea;
    tareasUl.appendChild(li);
  });
}
