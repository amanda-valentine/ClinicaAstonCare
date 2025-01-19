/* index.js
Interacción:
-Este código maneja la interacción del menú desplegable en dispositivos móviles
-Se utiliza en todas las páginas */

//Seleccionamos la hamburguesa
const boton = document.querySelector(".hamburguesa");

//Seleccionamos la lista que se encuentra dentro del nav
const navegacion = document.querySelector(".nav-list");

// Al hacer clic en el ícono de la hamburguesa, se alterna la visibilidad del menú de navegación
boton.addEventListener("click", () => {
    // El método toggle() añade la clase "desplegado" si no está presente, o la elimina si ya está.
    navegacion.classList.toggle("desplegado"); 
});



  

