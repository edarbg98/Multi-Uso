let basico = document.getElementById("basico")
let verificar = document.getElementById("verificar")
let texto = document.querySelector(".texto")

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function verificarCorreo() {
    const ragex = RegExp("@gmail.com")
    const valor = basico.value 
        if (ragex.test(valor)) {
            texto.textContent = `El corroe es valido: ${valor}`
        } else {
            texto.textContent = "Ingrese un correo"
        }
}

verificar.addEventListener("click", () => {
    verificarCorreo()
})

let inputContraseña = document.getElementById("validar")
let validarContraseña1 = document.getElementById("validarContraseña")
let textoValidar = document.querySelector(".textoValidar")

async function validarContraseña() {
    const rage = /[A-Z]\d{6}/
    const input = inputContraseña.value

    if (rage.test(input)) {
        textoValidar.textContent = `La contraseña es valida : ${input}`
    } else {
        textoValidar.textContent = "Ingrese una contraseña"
    }
}

validarContraseña1.addEventListener("click", () => {
    validarContraseña()
})
