let titulo = document.querySelector('h1')
let img = document.querySelector('img')
let siguiente = document.querySelector('#siguiente')
let anterior = document.querySelector('#anterior')
let num = 20

function mostrar(numero){
    fetch('https://pokeapi.co/api/v2/pokemon-form/' + numero)

        .then(respuesta => respuesta.json())

        .then(datos => {
            titulo.textContent = datos.name
            img.src = datos.sprites.front_default
        })
}


siguiente.onclick = function () {
    //aca va todo lo que hace el boton
    num++
    mostrar(num)
}


anterior.onclick = function () {
    //aca va todo lo que hace el boton
    num--
    mostrar(num)
}


