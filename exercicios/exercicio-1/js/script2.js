const textoDigitado = document.querySelector("#textoDigitado")
const localizarPalavra = document.querySelector("#localizarPalavra")
const substituirPalavra = document.querySelector("#substituirPalavra")
const trocarBtn = document.querySelector("#trocar")
const trocarTodosBtn = document.querySelector("#trocarTodos")


// eventos
// addEventListener(interação, função)
trocarBtn.addEventListener('click', trocarTexto)
trocarTodosBtn.addEventListener('click', trocarTodosTexto)

// functions 
function trocarTexto() {
    let textoDigitadoValor = textoDigitado.value
    let localizarPalavraValor = localizarPalavra.value
    let substituirPalavraValor = substituirPalavra.value

    var textoFormatado = textoDigitadoValor.replace(localizarPalavraValor, substituirPalavraValor)
    textoDigitado.value = textoFormatado;
}
function trocarTodosTexto() {
    let textoDigitadoValor = textoDigitado.value
    let localizarPalavraValor = localizarPalavra.value
    let substituirPalavraValor = substituirPalavra.value

    var textoFormatado = textoDigitadoValor.replaceAll(localizarPalavraValor, substituirPalavraValor)
    textoDigitado.value = textoFormatado;
}