const emailInput = document.getElementById("email")
const senhaInput = document.getElementById("senha")
const formulario = document.getElementById("form-id")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailDigitado = emailInput.value
    const senhaDigitada = senhaInput.value


    console.log(emailDigitado)
    console.log(senhaDigitada)

    const procuraLocal = localStorage.getItem(emailDigitado)
    console.log(procuraLocal)

    if (procuraLocal && procuraLocal == senhaDigitada) {
        console.log("Pode Entrar")
    } else {
        console.log("Senha ou email errados!")
    }

})