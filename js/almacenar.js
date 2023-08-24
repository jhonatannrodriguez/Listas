const contenedor = document.getElementById("contenedor");
const agregar = document.getElementById("agregar");
const eliminar = document.getElementById("limpiar");
const contenido = document.getElementById("item"); 

limpiar.addEventListener("click", function(){
    contenedor.innerHTML = "";
    localStorage.clear();
    lista = [];
})

let lista = JSON.parse(localStorage.getItem("miLista")) || [];
function actualizarLista() {
  contenedor.innerHTML = "";
  for (let i of lista) {
    contenedor.innerHTML += `<li>${i}</li>`;
  }
  localStorage.setItem("miLista", JSON.stringify(lista));
}

agregar.addEventListener("click", function() {
  if (contenido.value !== "") {
    lista.push(contenido.value);
    actualizarLista();
    contenido.value = "";
  }
});
actualizarLista();
