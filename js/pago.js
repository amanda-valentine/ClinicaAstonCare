/* pago.js
Interacción:
-Este código maneja la interacción del formulario de pago y la ventana emergente.
-Se utiliza en la página de pago 

Estructura:
-Funciones
-Constantes
-Variables
*/

//// Código a ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    //Selección de botón aceptar
    const aceptar = document.querySelector(".aceptar");
    //Selección de ventana emergente
    const ventana = document.querySelector(".ventana_emergente");
    //Selección del formulario pago cliente
    const formulario = document.querySelector("#pago-cliente");
    //Selección del botón de ventana emergente
    const cerrar = document.querySelector(".cierre_ventana_emergente");
    
    // Verificamos si los elementos existen
    if (aceptar && ventana && formulario) {
        aceptar.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el envío del formulario para validarlo primero

            // Verificación de los campos de pago (número de tarjeta, fecha de expiración, CVC)
            // Selección número de tarjeta
            const tarjeta = document.querySelector("#numero-tarjeta").value;
            // Selección dato de expiración
            const expiracion = document.querySelector("#dato-expiracion").value;
            // Selección cvc
            const cvc = document.querySelector("#cvc").value;

            // Evento que controla si los campos están completos
            if (!tarjeta || !expiracion || !cvc) {
                // Mensaje que se muestra al no rellenar los datos
                alert("Por favor, completa todos los campos.");
            } else {
                // Muestra ventana emergente
                ventana.classList.add("aparecer");
                // Reseteo de formulario
                formulario.reset();
            }
        });
    } else {
        console.log("No se encontraron los elementos.");
    }

    // Evento asociado al botón "cerrar" para cerrar la ventana emergente
    if (cerrar && ventana) {
        // Evento al botón de cerrar para ocultar la ventana emergente
        cerrar.addEventListener("click", function() {
            ventana.classList.remove("aparecer");
        });
    } else {
        // Si no se encuentra los elementos, sale en la consola
        console.log("No se encontró el botón de cerrar o la ventana emergente.");
    }
});