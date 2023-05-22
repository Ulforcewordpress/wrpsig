// Obtener el contenedor y los elementos
var contenedor = document.querySelector('.contenedor');
var elementos = contenedor.querySelectorAll('.elemento');

// Obtener un elemento aleatorio
var elemento_index = Math.floor(Math.random() * elementos.length);
var elemento = elementos[elemento_index];

// Mostrar el elemento seleccionado
elemento.style.display = "block";