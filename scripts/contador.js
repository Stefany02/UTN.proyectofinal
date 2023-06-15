document.addEventListener("DOMContentLoaded", function() {
    console.log("La función se está ejecutando correctamente.");
  
    var agregarBotones = document.getElementsByClassName("agregar-carrito");
    var contadorCarrito = document.getElementById("contadorCarrito");
    var carrito = sessionStorage.getItem("carrito") ? sessionStorage.getItem("carrito").split(",") : [];
  
    for (var i = 0; i < agregarBotones.length; i++) {
      agregarBotones[i].addEventListener("click", function(event) {
        event.preventDefault();
  
        var productId = this.getAttribute("data-id");
        var nombre = this.getAttribute("data-nombre");
        var precio = parseFloat(this.getAttribute("data-precio"));
  
        var producto = productId + "|" + nombre + "|" + precio;
  
        carrito.push(producto);
        sessionStorage.setItem("carrito", carrito.join(","));
  
        mostrarMensaje("Producto agregado al carrito");
        actualizarContadorCarrito();
      });
    }
  
    function mostrarMensaje(mensaje) {
      alert(mensaje);
    }
  
    function actualizarContadorCarrito() {
      var cantidadProductos = carrito.length;
      contadorCarrito.textContent = cantidadProductos.toString();
    }
  
    actualizarContadorCarrito();
  });
  