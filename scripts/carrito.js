document.addEventListener("DOMContentLoaded", function () {
  console.log("La función se está ejecutando correctamente.");

  var agregarBotones = document.getElementsByClassName("agregar-carrito");
  var carritoProductosDiv = document.getElementById("carritoProductos");
  var totalCompraDiv = document.getElementById("totalCompra");
  var vaciarCarritoBtn = document.createElement("button");
  var carrito = sessionStorage.getItem("carrito") ? sessionStorage.getItem("carrito").split(",") : [];

  vaciarCarritoBtn.textContent = "Vaciar carrito";
  vaciarCarritoBtn.addEventListener("click", function () {
    carrito = [];
    sessionStorage.removeItem("carrito");
    mostrarCarrito();
  });

  for (var i = 0; i < agregarBotones.length; i++) {
    agregarBotones[i].addEventListener("click", function (event) {
      event.preventDefault();

      var productId = this.getAttribute("data-id");
      var nombre = this.getAttribute("data-nombre");
      var precio = parseFloat(this.getAttribute("data-precio"));

      var producto = productId + "|" + nombre + "|" + precio;

      carrito.push(producto);
      sessionStorage.setItem("carrito", carrito.join(","));

      mostrarCarrito();
      
    });
  }

  function mostrarCarrito() {
    var total = 0;

    carritoProductosDiv.innerHTML = ""; // Limpiar los productos existentes antes de agregar nuevos

    for (var i = 0; i < carrito.length; i++) {
      var productoInfo = carrito[i].split("|");
      var productId = productoInfo[0];
      var nombre = productoInfo[1];
      var precio = parseFloat(productoInfo[2]);

      var productoHTML = document.createElement("div");
      productoHTML.innerHTML = "<p>Nombre del producto: " + nombre + "</p>" +
        "<p>Precio del producto: $" + precio.toFixed(2) + "</p>" +
        "<button class='eliminar-producto' data-index='" + i + "'>Eliminar</button>";

      carritoProductosDiv.appendChild(productoHTML);

      total += precio;
    }

    totalCompraDiv.innerHTML = "<p>Total de la compra: $" + total.toFixed(2) + "</p>";

    var eliminarBotones = document.getElementsByClassName("eliminar-producto");
    for (var j = 0; j < eliminarBotones.length; j++) {
      eliminarBotones[j].addEventListener("click", function () {
        var index = parseInt(this.getAttribute("data-index"));
        carrito.splice(index, 1);
        sessionStorage.setItem("carrito", carrito.join(","));
        mostrarCarrito();
      });
    }
  }

  mostrarCarrito();

  totalCompraDiv.appendChild(vaciarCarritoBtn);
});
