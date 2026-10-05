let inputSaludo = document.getElementById("basico")
let saludo = document.getElementById("saludar")
let texto = document.querySelector(".texto")

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function SaudarNombre() {
    const nombre = inputSaludo.value

    await esperar(1000)
    texto.textContent = `Procesando nombre ingresado`

    await esperar(1000)
    texto.textContent = `Bienvenido ${nombre}, gracias por visitar mi nueva pagina`

    await esperar(1000)
    texto.textContent = `Te saluda Edar Briceño`

    await esperar(1000)
    texto.textContent = `Te Quiero`
}

saludo.addEventListener("click",  () => {
    SaudarNombre()
})


let carreras1 = document.getElementById("Carreras")
let buscarCarrera = document.getElementById("buscarCarrera")
let textoCarrera = document.querySelector(".textoCarrera")

async function SaludarCarrera() {
    const carrera = carreras1.value

    await esperar(1000)
    textoCarrera.textContent = "Procesando datos.."

    await esperar(1000)
    textoCarrera.textContent = "En breve"

    await esperar(1500)
    textoCarrera.textContent = `Tu carrera es ${carrera}`
}

buscarCarrera.addEventListener("click", () => {
    SaludarCarrera()
})