// const imagen = document.querySelector("img");
// const titulo = document.querySelector("h3");
// const descripcion = document.querySelector("p");
// const precio = document.querySelector("small");

// const URL = "https://fakestoreapi.com/products"

// fetch(URL)
// .then(respuesta => respuesta.json())
// .then(data => {

//     titulo.innerHTML = data[0].title;
//     imagen.src = data[0].image;
//     descripcion.innerHTML = data[0].description;
//     precio.innerhtml = data[0].price;
// });

const URL = "https://fakestoreapi.com/products"
const container = document.getElementById("listaProductos");

function mostrarInfo(array) {

    for (let elemento of array) {
        container.innerHTML +=
        ` <div class="row list-group-item d-flex justify-content-between">
            <div class="col-3">
                <img src="${elemento.image}" style="height: 200; width: 200;" alt="..." class="img-thumbnail">
            </div>
            <div class="col-7">
                <h3>${elemento.title}</h3>
                <p>${elemento.description}</p>
            </div>
            <div class="col-2 text-muted">
                <small>${elemento.price}</small>
            </div>
        </div> `;
      }
}

fetch(URL)
.then(respuesta => respuesta.json())
.then(data => {

    mostrarInfo(data);

});