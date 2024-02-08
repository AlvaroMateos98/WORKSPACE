// Declaración de un array de números
var numeros = [1, 2, 3, 4, 5];
// Declaración de un array de strings
var palabras = ["hola", "mundo"];
// Acceso a elementos
var frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // Output: 'manzana'
console.log(frutas.length); // Output: 3
// Agregar elementos
var colores = ["rojo", "verde"];
colores.push("azul");
console.log(colores); // Output: ['rojo', 'verde', 'azul']
// Iterar sobre un array
var numerosArray = [1, 2, 3, 4, 5];
numerosArray.forEach(function (numero) {
    console.log(numero);
});
// Tipos de datos mixtos en un array
var mixto = ["hola", 42, "mundo", 7];
mixto.forEach(function (elemento) {
    console.log(typeof elemento);
});
// Ejercicio 3: Gestor de Tareas
// Obtener elementos del DOM
var tareaInput = document.getElementById("tarea");
var agregarBtn = document.getElementById("agregarBtn");
var tareasUl = document.getElementById("tareas");
// Array para almacenar las tareas
var tareas = [];
// Agregar evento de clic al botón de agregar
agregarBtn.addEventListener("click", function () {
    // Obtener el valor de la nueva tarea
    var nuevaTarea = tareaInput.value;
    // Validar que se haya ingresado una tarea válida
    if (nuevaTarea) {
        // Agregar la tarea al array
        tareas.push(nuevaTarea);
        // Limpiar el input
        tareaInput.value = "";
        // Mostrar las tareas en la lista
        mostrarTareas();
    }
    else {
        // Mostrar mensaje de error si no se ingresó una tarea válida
        alert("Por favor, ingresa una tarea válida.");
    }
});
// Función para mostrar las tareas en la lista
function mostrarTareas() {
    // Limpiar la lista
    tareasUl.innerHTML = "";
    // Iterar sobre el array de tareas y agregar elementos a la lista
    tareas.forEach(function (tarea) {
        var li = document.createElement("li");
        li.textContent = tarea;
        tareasUl.appendChild(li);
    });
}
