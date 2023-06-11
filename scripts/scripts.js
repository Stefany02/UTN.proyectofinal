// Obtener todos los botones "Agregar" en la página
const agregarBotones = document.querySelectorAll('.agregar-carrito');
const carritoProductos = document.getElementById('carritoProductos');
const carrito = [];

// Manejar el clic en el botón "Agregar"
agregarBotones.forEach(boton => {
  boton.addEventListener('click', () => {
    const productoId = boton.dataset.id;
    const productoNombre = boton.parentNode.parentNode.querySelector('.card-title').textContent;
    const productoPrecio = boton.parentNode.parentNode.querySelector('.card-text').textContent;

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.id === productoId);

    if (productoExistente) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      productoExistente.cantidad += 1;
    } else {
      // Si el producto no está en el carrito, agregarlo
      const nuevoProducto = {
        id: productoId,
        nombre: productoNombre,
        precio: parseFloat(productoPrecio.replace('$', '')),
        cantidad: 1
      };

      carrito.push(nuevoProducto);
    }

    // Actualizar la interfaz del carrito
    actualizarCarrito();
  });
});

// Manejar el clic en el botón "Eliminar" del carrito
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

  carrito.forEach(producto => {
    const itemCarrito = document.createElement('div');
    itemCarrito.classList.add('item-carrito');
    itemCarrito.innerHTML = `
        <span>${producto.nombre}</span>
        <span>${producto.cantidad}</span>
        <span>$${producto.precio.toFixed(2)}</span>
        <button class="btn btn-sm btn-danger" onclick="eliminarProductoCarrito('${producto.id}')">Eliminar</button>
      `;

    carritoProductos.appendChild(itemCarrito);
  });

  calcularTotal();
}

// Calcular el total de la compra
function calcularTotal() {
  const total = carrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
  document.getElementById('totalCompra').textContent = `$${total.toFixed(2)}`;
}

// Manejar el clic en el botón "Finalizar Compra"
const finalizarCompraBtn = document.getElementById('finalizarCompraBtn');
finalizarCompraBtn.addEventListener('click', () => {
  // Aquí puedes agregar la lógica para finalizar la compra
  console.log('Compra finalizada');
  console.log('Productos en el carrito:', carrito);
});