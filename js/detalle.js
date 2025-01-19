/**
detalleProducto.js
 
 
 -Interacción:
  Obtiene el parámetro 'id' de la URL para identificar el producto seleccionado.
  Busca el producto correspondiente en el array 'productosDetalle'.
  Si el producto se encuentra, muestra sus detalles (imagen, nombre, descripción, precio) en el HTML.
  Si el producto no se encuentra, muestra un mensaje de error en la página.

  -Estructura:
  Constantes
  Variables
  Funciones
 */ 

//  array con los productos disponibles, cada uno con un id, nombre, descripción, precio e imagen
const productosDetalle = [
  { 
      "id": 1, 
      "nombre": "Bono Regalo", 
      "descripcion": "Un regalo versátil y especial, ideal para cualquier persona que desee cuidarse o mimarse. ¡Regala salud, belleza y bienestar en un solo bono!", 
      "precio": 150.00, 
      "imagen": "./img/pack_img2.jpg"
  },
  { 
      "id": 2, 
      "nombre": "Bono 5 sesiones en fisioterapia", 
      "descripcion": "Recupera tu bienestar físico con este Bono de 5 sesiones de fisioterapia personalizadas, diseñado para tratar lesiones, aliviar dolores, mejorar la movilidad y prevenir futuras molestias.", 
      "precio": 140.50, 
      "imagen": "./img/pack_img3.jpg" 
  },
  { 
      "id": 3, 
      "nombre": "Bono 10 sesiones en fisioterapia", 
      "descripcion": "Aprovecha este bono de 10 sesiones de fisioterapia personalizadas, diseñadas para ayudarte a recuperar tu bienestar físico. Ideal para tratar lesiones, aliviar dolores musculares, mejorar la movilidad, prevenir futuras molestias y potenciar tu rendimiento físico.", 
      "precio": 280.00, 
      "imagen": "./img/pack_img4.jpeg" 
  },
  { 
      "id": 4, 
      "nombre": "Bono 5 sesiones exclusivo para ATM", 
      "descripcion": "Este Bono de 5 sesiones está diseñado específicamente para tratar y mejorar los trastornos de la articulación temporomandibular (ATM).", 
      "precio": 150.00, 
      "imagen": "./img/pack_img5.jpeg" 
  },
  { 
      "id": 5, 
      "nombre": "Bono 10 sesiones exclusivo para ATM", 
      "descripcion": "Este Bono de 10 sesiones está diseñado específicamente para tratar y mejorar los trastornos de la articulación temporomandibular (ATM).", 
      "precio": 290.00, 
      "imagen": "./img/pack_img6.jpg" 
  },
  { 
      "id": 6, 
      "nombre": "Bono 3 sesiones en masculanización facial", 
      "descripcion": "Transforma tu apariencia con nuestro tratamiento de Masculinización Facial, diseñado para realzar y definir los rasgos faciales masculinos de manera natural y armoniosa.", 
      "precio": 650.00, 
      "imagen": "./img/pack_img7.jpg" 
  },
  { 
      "id": 7, 
      "nombre": "Bono 3 sesiones en rejuvenecimiento facial", 
      "descripcion": "Recupera la frescura y vitalidad de tu piel con nuestro tratamiento de Rejuvenecimiento Facial, diseñado para atenuar los signos de envejecimiento y revitalizar tu rostro de forma natural.", 
      "precio": 290.00, 
      "imagen": "./img/pack_img8.png" 
  },
  { 
      "id": 8, 
      "nombre": "Bono 3 sesiones en nutrición individual", 
      "descripcion": "Alcanza tus objetivos de salud y bienestar con este Bono de 3 sesiones de nutrición personalizada, diseñado para brindarte un plan alimenticio adaptado a tus necesidades y estilo de vida.", 
      "precio": 50.00, 
      "imagen": "./img/pack_img9.jpg" 
  },
  { 
      "id": 9, 
      "nombre": "Bono 3 sesiones en nutrición por parejas", 
      "descripcion": "Mejora tus hábitos alimenticios junto a tu pareja con este Bono de 3 sesiones de nutrición personalizada para dos, ideal para alcanzar metas compartidas de salud y bienestar.", 
      "precio": 80.00, 
      "imagen": "./img/pack_img10.jpg" 
  },
  { 
      "id": 10, 
      "nombre": "Bono 2 sesiones en toxina butolínica", 
      "descripcion": "Consigue un rostro más rejuvenecido y libre de arrugas con este Bono de 2 sesiones de toxina botulínica. Un tratamiento eficaz para suavizar líneas de expresión y prevenir la aparición de nuevos signos de envejecimiento.", 
      "precio": 700.00, 
      "imagen": "./img/pack_img11.jpg" 
  }
];

// Creamos una constante 'params' que obtiene los parámetros de la URL para obtener el 'id' del producto seleccionado
const params = new URLSearchParams(window.location.search);

// Convierte el parámetro 'id' en un número entero
const productoId = parseInt(params.get('id'), 10);

// Busca el producto correspondiente en el array 'productosDetalle' usando el 'id'
const producto = productosDetalle.find(p => p.id === productoId);

// Referencia al elemento en el HTML donde se mostrará el detalle del producto
const detalleProducto = document.getElementById('producto-detalle');

// Si el producto existe, muestra los detalles en el HTML; si no, muestra un mensaje de error
if (producto) {
  detalleProducto.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.imagen}" class="producto_imagen_detalle">
      <div class="titulo_producto">${producto.nombre}</div>
      <div class="producto_descripcion">${producto.descripcion}</div>
      <div class="precio_producto">${producto.precio.toFixed(2)}€</div>
      <a href="packs_online.html" class="back-link">Volver a la lista</a>
  `;
} else {
  detalleProducto.innerHTML = `<p>Producto no encontrado.</p><a href="packs_online.html" class="back-link">Volver a la lista</a>`;
}