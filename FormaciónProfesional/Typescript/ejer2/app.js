// Obtener elementos del DOM
var nombreInput = document.getElementById("nombre");
var edadInput = document.getElementById("edad");
var saludarBtn = document.getElementById("saludarBtn");
var resultadoDiv = document.getElementById("resultado");
// Agregar evento de clic al botón de saludar
saludarBtn.addEventListener("click", function () {
    // Obtener valores de los campos
    var nombre = nombreInput.value;
    var edad = parseInt(edadInput.value);
    // Validar que se haya ingresado un nombre y una edad válida
    if (nombre && !isNaN(edad)) {
        // Generar saludo
        var saludo = "\u00A1Hola, ".concat(nombre, "! Tienes ").concat(edad, " a\u00F1os.");
        // Mostrar resultado en el div
        resultadoDiv.textContent = saludo;
    }
    else {
        // Mostrar mensaje de error si no se ingresaron datos válidos
        resultadoDiv.textContent =
            "Por favor, ingresa un nombre y una edad válida.";
    }
});
