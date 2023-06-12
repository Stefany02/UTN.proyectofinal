 // Obtener el ID del producto desde la URL
 var urlParams = new URLSearchParams(window.location.search);
 var productId = urlParams.get("id");

 // Definir el array de productos
 var products = [
   {
     id: "1",
     descripcion: "Camisa de algodón ejecutiva. Si queres saber el precio y opciones de compra contactate con nosotros",
     foto: "../assets/img/productos/verano/camisa mila.jpg"
   },
   {
     id: "2",
     descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
     foto: "../assets/img/productos/verano/short.jpg"
   },
   {
     id: "3",
     descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
     foto: "../assets/img/productos/verano/sonora.jpg"
   },
   {
    id: "4",
    descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
    foto: "../assets/img/productos/verano/vestido candi.jpeg"
  },
  {
    id: "5",
    descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
    foto: "../assets/img/productos/verano/vestido lili.jpg"
  },
  {
    id: "6",
    descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
    foto: "../assets/img/productos/verano/vestido pipe.jpg"
  },
//otoño
{
  id: "7",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/otoño/baby chaleco.jpg"
},
{
  id: "8",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/otoño/chaleco tejido.jpg"
},

{
  id: "9",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/otoño/chaleco vaquero.jpg"
},

{
  id: "10",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/otoño/chaqueta emilia.jpg"
},
{
  id: "11",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/otoño/conjunto China.jpg"
},
{
  id: "12",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/otoño/sweater jose.jpg"
},
//invierno

{
  id: "13",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/invierno/catalina.jpg"
},
{
  id: "14",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/invierno/buzo rosa.jpg"
},

{
  id: "15",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/invierno/buzo celes.jpg"
},

{
  id: "16",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/invierno/rose.jpg"
},
{
  id: "17",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/invierno/unnamed (1).jpg"
},
{
  id: "18",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/invierno/bei.jpg"
},
//primavera

{
  id: "19",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/primavera/bamba vestido.jpg"
},
{
  id: "20",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/primavera/mono.jpg"
},

{
  id: "21",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/primavera/petra.jpg"
},

{
  id: "22",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/primavera/Vestido Mara.jpg"
},
{
  id: "23",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/primavera/conjunto Priscila.jpg"
},
{
  id: "24",
  descripcion: "Si queres saber el precio, colores, talles disponnibles  y opciones de compra contactate con nosotros",
  foto: "../assets/img/productos/primavera/falda Cor.jpg"
}


   // acá se pueden agregar más objetos de producto según sea necesario
 ];

 // Encontrar el producto correspondiente al ID
 var product = products.find(function (item) {
   return item.id === productId;
 });

 if (product) {
   // Insertar la descripción del producto en el elemento con el ID "descripcion"
   document.getElementById("descripcion").textContent = product.descripcion;
   // Establecer la imagen del producto en el elemento con el ID "foto"
   document.getElementById("foto").src = product.foto;
 } else {
   console.log("Producto no encontrado");
 }

