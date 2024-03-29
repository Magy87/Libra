

const userLogin = document.getElementById("userLogin")
const divProductos = document.getElementById("productos")

let productosDisponibles = JSON.parse(localStorage.getItem("productos"))


document.addEventListener("DOMContentLoaded", () => {
    generarCardsProductos(productosDisponibles)
})

const generarCardsProductos = (productos) => {
  
    productos.forEach(producto => {

      let card = document.createElement("div");
      card.className = "producto";
      card.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
      <div class="card-body">
      <p class="card-title">${producto.nombre}</p>
      <p class="card-text">Categoria: ${producto.categoria}</p>
  
      <p class="card-text">Precio: <b>$${producto.precio}</b></p>
      <button id="btn${id}" class="btn btn-primary">Comprar</button>
  
      </div>
      </div>`;
  
  
    });
  };

