let titulo = document.querySelector('#titulo');
let imagen = document.querySelector('#imagen');
let botonMostrar = document.querySelector('#mostrar');
let botonAtras = document.querySelector('#atras');
let botonAdelante = document.querySelector('#adelante');

let idActual = 1;
const MAX_POKEMON = 898;
const MIN_POKEMON = 1;

function mostrarPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
        .then(respuesta => {
            if (!respuesta.ok) throw new Error("No se pudo obtener el Pokémon");
            return respuesta.json();
        })
        .then(datos => {
            titulo.textContent = datos.name.charAt(0).toUpperCase() + datos.name.slice(1);
            imagen.src = datos.sprites.front_shiny;
            imagen.alt = `Imagen de ${datos.name}`;
        })
        .catch(error => {
            titulo.textContent = 'Error al cargar Pokémon';
            imagen.src = '';
            imagen.alt = 'Error';
            console.error(error);
        });
}

// Mostrar uno aleatorio
botonMostrar.onclick = function () {
    idActual = Math.floor(Math.random() * MAX_POKEMON) + MIN_POKEMON;
    mostrarPokemon(idActual);
};

// Pokémon anterior
botonAtras.onclick = function () {
    idActual--;
    if (idActual < MIN_POKEMON) idActual = MAX_POKEMON;
    mostrarPokemon(idActual);
};

// Pokémon siguiente
botonAdelante.onclick = function () {
    idActual++;
    if (idActual > MAX_POKEMON) idActual = MIN_POKEMON;
    mostrarPokemon(idActual);
};

// Mostrar el primero al cargar
mostrarPokemon(idActual);

