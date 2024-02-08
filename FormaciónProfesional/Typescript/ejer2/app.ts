// Obtener elementos del DOM
const nombreInput: HTMLInputElement = document.getElementById(
  "nombre"
) as HTMLInputElement;
const edadInput: HTMLInputElement = document.getElementById(
  "edad"
) as HTMLInputElement;
const saludarBtn: HTMLButtonElement = document.getElementById(
  "saludarBtn"
) as HTMLButtonElement;
const resultadoDiv: HTMLDivElement = document.getElementById(
  "resultado"
) as HTMLDivElement;

// Agregar evento de clic al botón de saludar
saludarBtn.addEventListener("click", () => {
  // Obtener valores de los campos
  const nombre: string = nombreInput.value;
  const edad: number = parseInt(edadInput.value);

  // Validar que se haya ingresado un nombre y una edad válida
  if (nombre && !isNaN(edad)) {
    // Generar saludo
    const saludo: string = `¡Hola, ${nombre}! Tienes ${edad} años.`;

    // Mostrar resultado en el div
    resultadoDiv.textContent = saludo;
  } else {
    // Mostrar mensaje de error si no se ingresaron datos válidos
    resultadoDiv.textContent =
      "Por favor, ingresa un nombre y una edad válida.";
  }
});
