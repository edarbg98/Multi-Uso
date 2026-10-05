let input = document.getElementById("pokemon")
let texto = document.querySelector(".texto")
let buscarPokemon = document.getElementById("buscarPokemon")

function esperar(ms) {
    return new Promise(resolve => setTimeout (resolve, ms))
}

async function PokemonEncontrado() {
    try {
        const nombre = input.value
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
        const response = await fetch(url)
        const dato = await response.json()
        dato.abilities.forEach(e => {
            texto.textContent = `Buscando el Pokemon ${nombre}`

            esperar(1000)
            texto.textContent = `El ${nombre} su habilidad es "${e.ability.name}" [Ingles]`
        });
        
    } catch {
        texto.textContent = "Ingrese un nombre de Pokemon"
    }
}

buscarPokemon.addEventListener("click", () => {
    PokemonEncontrado()
})

let pais = document.getElementById("paises")
let buscarPais = document.getElementById("buscarPais")
let textoPais = document.querySelector(".textoPais")

async function EncontrarPais() {
    try {
        const encontrar = pais.value
        const api = "e25e787929b9cdb7cc3490217492577a"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encontrar}&appid=${api}`
        const response = await fetch(url)
        const datos = await response.json()
        const hora = datos.timezone / 3600

        textoPais.textContent = `El pais ${encontrar}, para llegar se demora ${hora}`
        
    } catch  {
        textoPais.textContent = `Ingrese un Pais/Ciudad`
    }
}

buscarPais.addEventListener("click", () => {
    EncontrarPais()
})