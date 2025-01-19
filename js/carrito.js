/*carrito.js
 
-Interacción:
  Este archivo gestiona el carrito de compras en una página web. Permite mostrar los productos seleccionados,
  calcular el precio total, eliminar productos del carrito y actualizar la URL con los productos elegidos.

  -Estructura:
  Constantes
  Variables
  Funciones
  Eventos
 */ 


// Definimos un array con los productos disponibles, cada uno con un id, nombre, descripción, precio e imagen
const productos = [
    { "id": 1, "nombre": "Bono Regalo", "description": "Descripción del producto 1", "precio": 150.00, "image": "./img/pack_img2.jpg"},
    { "id": 2, "nombre": "Bono 5 sesiones en fisioterapia", "description": "Descripción del producto 2", "precio": 140.50, "image": "./img/pack_img3.jpg" },
    { "id": 3, "nombre": "Bono 10 sesiones en fisioterapia", "description": "Descripción del producto 3", "precio": 280.00, "image": "./img/pack_img4.jpeg" },
    { "id": 4, "nombre": "Bono 5 sesiones exclusivo para ATM", "description": "Descripción del producto 4", "precio": 150.00, "image": "./img/pack_img5.jpeg" },
    { "id": 5, "nombre": "Bono 10 sesiones exclusivo para ATM", "description": "Descripción del producto 5", "precio": 290.00, "image": "./img/pack_img6.jpg" },
    { "id": 6, "nombre": "Bono 3 sesiones en masculanización facial", "description": "Descripción del producto 6", "precio": 650.00, "image": "./img/pack_img7.jpg" },
    { "id": 7, "nombre": "Bono 3 sesiones en rejuvenecimiento facial", "description": "Descripción del producto 7", "precio": 290.00, "image": "./img/pack_img8.png" },
    { "id": 8, "nombre": "Bono 3 sesiones en nutrición individual", "description": "Descripción del producto 8", "precio": 50.00, "image": "./img/pack_img9.jpg" },
    { "id": 9, "nombre": "Bono 3 sesiones en nutrición pot parejas", "description": "Descripción del producto 9", "precio": 80.00, "image": "./img/pack_img10.jpg" },
    { "id": 10, "nombre": "Bono 2 sesiones en toxina butolínica", "description": "Descripción del producto 10", "precio": 700.00, "image": "./img/pack_img11.jpg" }
  ];

  // Creamos una variable para obtener los parámetros de la URL
  var params = new URLSearchParams(window.location.search);
  // Creamos una variable para obtener el valor del parámetro 'lista', que contiene los IDs de los productos seleccionados
  var productos_a_mostrar = params.get('lista'); 
  // Creamos una variable que almacenará el contenedor HTML donde se mostrarán los productos del carrito
  const contenedor_productos = document.querySelector('.cesta_productos'); 
  // Creamos una variable que se usará para almacenar el precio total de los productos en el carrito
  var precio = 0;
  // Función para mostrar los productos en el carrito
  function MostrarCarrito() {
    // Limpiamos el contenedor de productos antes de mostrar los nuevos
    while (contenedor_productos.firstChild)
      contenedor_productos.removeChild(contenedor_productos.firstChild);
    //Inicializar precio en 0
    precio = 0; 
      // Recorremos todos los productos definidos en la lista de productos
    productos.forEach((producto => {
        // Verificamos si el ID del producto está incluido en la lista de productos en el carrito
      if (productos_a_mostrar.includes(producto.id))
        {
        // Creamos una nueva tarjeta de producto para mostrar el producto en el carrito
          const productCard = document.createElement('div');
          //contenedor_productos.innerHTML = producto.nombre;
          //productCard.className = 'carta.producto';
          productCard.innerHTML = `<div><span onclick='EliminarDelCarrito(${producto.id})' class=eliminar_carrito>x</span> ${producto.nombre} (${producto.precio} €)</div>`;
           //Se añade la tarjeta al DOM
          contenedor_productos.appendChild(productCard);
          precio += producto.precio; //precio = precio + product.price;
        }
    }));

   // Creamos una nueva URL para actualizar los parámetros de la URL con los productos en el carrito
    var url = new URL(window.location.href);
    // Estable el parámetro 'lista' con los productos seleccionados
    url.searchParams.set('lista', productos_a_mostrar);
    // Actualizamos la URL sin recargar la página
    window.history.pushState({}, '', url);
  }
// Función para eliminar un producto del carrito
  function EliminarDelCarrito(param) {
    //Eliminar de la lista el elemento seleccionado
    productos_a_mostrar = productos_a_mostrar.replace(param, ''); 
    //Corregir si el elemento es el primero
    productos_a_mostrar = productos_a_mostrar.replace('[,', '['); 
    //Corregir si el elemento es el último
    productos_a_mostrar = productos_a_mostrar.replace(',]', ']');
    //Corregir si el elemente está en el medio
    productos_a_mostrar = productos_a_mostrar.replace(',,', ','); 
    //Actualizar carrito
    MostrarCarrito(); 
    //Actualizar importe
    ActualizarImporte(); //Actualizar importe
  }
// Función para actualizar el importe total del carrito
  function ActualizarImporte() {
     // Creamos una variable para obtener el elemento HTML que mostrará el total
    var result = document.getElementById("total");
    // Actualizamos el texto del elemento con el precio tota
    result.innerText = precio + " €" ; 
  }
  // Llamamos a las funciones para mostrar el carrito y actualizar el importe al cargar la página
  MostrarCarrito();
  ActualizarImporte();

  document.getElementById('email_compra').addEventListener('submit', function(event) {
    // Previene el envío del formulario
      event.preventDefault(); 
    // Creamos una variable para obtener el valor del campo de correo electrónico
      const emailInput = document.getElementById('Email').value;
    // Si el correo electrónico es válido, redirigimos al usuario a la página de pago
      if (emailInput) {
          // Si el correo electrónico no es válido, mostramos una alerta
          window.location.href = 'pago.html';
      } else {
          alert('Por favor, ingrese un email válido');
      }
  });