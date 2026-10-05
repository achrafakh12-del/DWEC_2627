// Función 1: Saludar
function saludar() {
    console.log("El usuario Achraf Akhmoul ha pulsado el botón Saludar.");
    alert("¡Hola! Soy Achraf Akhmoul.");
}

// Función 2: Simular un error
function simularError() {
    console.error("Error simulado: No se ha podido conectar con el servidor de la aplicación.");
}

// Función 3: ¿Qué navegador soy?
function queNavegadorSoy() {
    const agenteUsuario = navigator.userAgent;
    console.warn("Consulta de información del navegador realizada por el usuario.");
    console.log("UserAgent actual:", agenteUsuario);
    alert("Información de tu navegador:\n\n" + agenteUsuario);

}