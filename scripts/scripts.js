// Seleccionar elementos del DOM
const carrito = document.getElementById('carrito');
const listaProductos = document.getElementById('lista-carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const productos = document.querySelectorAll('.agregar-carrito');

// Función para agregar un producto al carrito
function agregarProducto(e) {
  e.preventDefault();
  const producto = e.target.parentElement.parentElement;
  const productoInfo = obtenerProductoInfo(producto);
  insertarProductoEnCarrito(productoInfo);
}

// Función para obtener la información de un producto
function obtenerProductoInfo(producto) {
  const imagen = producto.querySelector('.imgprod').src;
  const nombre = producto.querySelector('.card-title').textContent;
  const precio = producto.querySelector('.card-text').textContent;
  return { imagen, nombre, precio };
}

// Función para insertar un producto en el carrito
function insertarProductoEnCarrito(producto) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <img src="${producto.imagen}" width="50">
    </td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>
      <a href="#" class="borrar-producto"><i class="fas fa-times-circle"></i></a>
    </td>
  `;
  listaProductos.appendChild(row);
}

// Función para vaciar el carrito
function vaciarCarritoCompras() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }
}

// Event listeners
productos.forEach((producto) => {
  producto.addEventListener('click', agregarProducto);
});

vaciarCarrito.addEventListener('click', vaciarCarritoCompras);

