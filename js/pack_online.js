/* productos.js
Interacción:
-Este código maneja la visualización dinámica de productos en la página.
-Permite al usuario agregar productos al carrito y redirigir a la página de pago con los productos seleccionados.
-Se utiliza en la página de productos y en la página de pasarela de pago.

Estructura:
-Funciones
-Constantes
-Variables
*/

// Función para inicializar el Slideshow

function initSlideshow(contenedorSelector) {
    // Seleccionamos el contenedor del slideshow mediante el selector
    const contenedor = document.querySelector(contenedorSelector);
    if (!contenedor) {
        console.error('Contenedor no encontrado:', contenedorSelector);
        return;
    }
  
    // Seleccionamos el texto
    const texto = contenedor.querySelectorAll('.texto_productos_destacados');
    // Seleccionamos el boton anterior
    const retroceder = contenedor.querySelector('.anterior');
    // Seleccionamos el boton siguiente
    const proximo = contenedor.querySelector('.siguiente');
    // Seleccionamos la galeria de productos destacados 
    const galeria = document.querySelector(".galeria_productos_destacados");
  
    // Verificamos que todos los elementos existan
    if (!texto.length || !retroceder || !proximo) {
        console.error('Elementos necesarios no encontrados dentro del contenedor:', contenedorSelector);
        return;
    }
  
    // Índice de la diapositiva activa
    let currentSlide = 0;
  
    // Definimos las imágenes que se mostrarán en el slideshow
    const imagenes = [
        //imagen 1
        'img/pack_img5.jpeg',
        //imagen 2
        'img/pack_img11.jpg',
        //imagen 3
        'img/pack_img7.jpg'
    ];
  
    // Función para actualizar la diapositiva activa
    function updateSlides() {
        texto.forEach((slide) => {
            // Oculta todas las diapositivas
            slide.classList.remove('activo');
        });
        // Muestra solo la diapositiva actual
        texto[currentSlide].classList.add('activo');
        // Muestra el background actual
        galeria.style.backgroundImage = `url(${imagenes[currentSlide]})`;
    }
  
    // Función para avanzar a la siguiente diapositiva
    function siguiente() {
        // Reinicia si llega al final
        currentSlide = (currentSlide + 1) % texto.length;
        updateSlides();
    }
  
    // Función para retroceder a la diapositiva anterior
    function anterior() {
        // Vuelve al final si llega al principio
        currentSlide = (currentSlide - 1 + texto.length) % texto.length;
        updateSlides();
    }
  
    // Agregar los eventos de clic a los botones
    proximo.addEventListener('click', siguiente);
    retroceder.addEventListener('click', anterior);
  
    // Inicializar mostrando la primera diapositiva
    updateSlides();
  }
  document.addEventListener('DOMContentLoaded', function() {
      // Inicializar el slideshow en el contenedor '.productos_destacados'
      initSlideshow('.productos_destacados');
  });
  
  
  
  
  
  // Función para agregar productos dinámicamente a la página
  function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('catalogo_productos');
  
    // Recorrer el arreglo de productos y generar el HTML dinámicamente
    productos.forEach(producto => {
        const productoCarta = document.createElement('div');
        productoCarta.className = 'producto-carta';
        // Genera el contenido HTML para cada producto
        productoCarta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.imagen}" class="producto-imagen">
            <div class="titulo_producto">${producto.nombre}</div>
            <div class="precio_producto">${producto.precio.toFixed(2)}€</div>
            <div><a href="#" class="añadir_carrito">Añadir</a></div>
        `;
  
        // Agrega funcionalidad al clic en la imagen para redirigir a la pagina de detalle producto
        const img = productoCarta.querySelector('.producto-imagen');
        img.onclick = () => {
            window.location.href = `detalle_producto.html?id=${producto.id}`;
        };
  
        // Funcionalidad para agregar el producto al carrito de compras
        const addToCartLink = productoCarta.querySelector('.añadir_carrito');
        addToCartLink.onclick = (event) => {
            // Evitar redirección del enlace
            event.preventDefault();
            // Guardar el producto en el carrito
            carrito.push(producto.id);
            // Convertir el carrito a formato JSON 
            const lista = JSON.stringify(carrito);
            const verCarritoLink = document.querySelector('.pasarela');
            // Actualizar el enlace para ver el carrito
            verCarritoLink.href = `pasarela_de_pago.html?lista=${lista}`;
            // Actualizar el contador de productos en el carrito
            verCarritoLink.innerHTML = `Ver Carrito (${carrito.length})`;
            alert('Producto agregado a la cesta correctamente');
        };
  
        contenedorProductos.appendChild(productoCarta);
    });
  }
  
  
  
  
  
  // Lista de productos
  const productos = [
    { 
        "id": 1, 
        "nombre": "Bono Regalo", 
        "descripcion": "Descripción del producto 1", 
        "precio": 150.00, 
        "imagen": "./img/pack_img2.jpg" 
    },
    { 
        "id": 2, 
        "nombre": "Bono 5 sesiones en fisioterapia", 
        "descripcion": "Descripción del producto 2", 
        "precio": 140.50, 
        "imagen": "./img/pack_img3.jpg" 
    },
    { 
        "id": 3, 
        "nombre": "Bono 10 sesiones en fisioterapia", 
        "descripcion": "Descripción del producto 3", 
        "precio": 280.00, 
        "imagen": "./img/pack_img4.jpeg" 
    },
    { 
        "id": 4, 
        "nombre": "Bono 5 sesiones exclusivo para ATM", 
        "descripcion": "Descripción del producto 4", 
        "precio": 150.00, 
        "imagen": "./img/pack_img5.jpeg" 
    },
    { 
        "id": 5, 
        "nombre": "Bono 10 sesiones exclusivo para ATM", 
        "descripcion": "Descripción del producto 5", 
        "precio": 290.00, 
        "imagen": "./img/pack_img6.jpg" 
    },
    { 
        "id": 6, 
        "nombre": "Bono 3 sesiones en masculanización facial", 
        "descripcion": "Descripción del producto 6", 
        "precio": 650.00, 
        "imagen": "./img/pack_img7.jpg" 
    },
    { 
        "id": 7, 
        "nombre": "Bono 3 sesiones en rejuvenecimiento facial", 
        "descripcion": "Descripción del producto 7", 
        "precio": 290.00, 
        "imagen": "./img/pack_img8.png" 
    },
    { 
        "id": 8, 
        "nombre": "Bono 3 sesiones en nutrición individual", 
        "descripcion": "Descripción del producto 8", 
        "precio": 50.00, 
        "imagen": "./img/pack_img9.jpg" 
    },
    { 
        "id": 9, 
        "nombre": "Bono 3 sesiones en nutrición por parejas", 
        "descripcion": "Descripción del producto 9", 
        "precio": 80.00, 
        "imagen": "./img/pack_img10.jpg" 
    },
    { 
        "id": 10, 
        "nombre": "Bono 2 sesiones en toxina butolínica", 
        "descripcion": "Descripción del producto 10", 
        "precio": 700.00, 
        "imagen": "./img/pack_img11.jpg" 
    }
  ];
  
  // Carrito
  let carrito = [];
  
  // Inicializar todo cuando el documento esté completamente cargado
  document.addEventListener('DOMContentLoaded', function() {
    // Mostrar los productos dinámicamente en el HTML
    mostrarProductos(productos);
  
    // Inicializar el slideshow de productos destacados
    initSlideshow('.productos_destacados');
  });