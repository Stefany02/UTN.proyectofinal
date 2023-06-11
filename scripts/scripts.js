// Lista de productos en el carrito
let carrito = [];

// Obtener elementos del DOM
const carritoProductos = document.getElementById('carritoProductos');

// Agregar un producto al carrito
function agregarProductoCarrito(productoId) {
  // Simular la obtención de los datos del producto
  const producto = {
    id: productoId,
    nombre: 'Conjunto Vertu',
    precio: 20000,
    cantidad: 1
  };

  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find(item => item.id === productoId);
  if (productoExistente) {
    // Si el producto ya está en el carrito, incrementar la cantidad
    productoExistente.cantidad++;
  } else {
    // Si el producto no está en el carrito, agregarlo
    carrito.push(producto);
  }

  // Actualizar la interfaz del carrito
  actualizarCarrito();
}

// Eliminar un producto del carrito
function eliminarProductoCarrito(productoId) {
  const productoIndex = carrito.findIndex(producto => producto.id === productoId);
  if (productoIndex !== -1) {
    carrito.splice(productoIndex, 1);
    // Actualizar la interfaz del carrito
    actualizarCarrito();
  }
}

// Actualizar la interfaz del carrito
function actualizarCarrito() {
  carritoProductos.innerHTML = '';

  if (carrito.length === 0) {
    carritoProductos.innerHTML = '<p>No hay productos en el carrito</p>';
    return;
  }

  carrito.forEach(producto => {
    const productoHTML = `
      <div class="producto-carrito">
        <h4>${producto.nombre}</h4>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button class="btn-eliminar" onclick="eliminarProductoCarrito(${producto.id})">Eliminar</button>
      </div>
    `;
    carritoProductos.innerHTML += productoHTML;
  });
}

// Event listener para los botones de agregar al carrito
const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
agregarCarritoButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const productoId = button.dataset.id;
    agregarProductoCarrito(productoId);
  });
});
