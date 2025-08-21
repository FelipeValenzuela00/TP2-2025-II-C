
// identificar palindromos


const palabras = ["Sol", "Ana", "Oso", "Saludo", "Reconocer", "Soldado", "Neuquen"]

function invertirTexto(palabra) {
    // aca se invierte el texto
    const palabraDividida = palabra.split('')
    const palabraDivididaAlRevez = [...palabraDividida].reverse();
    for (let i = 0; i < palabraDividida.length; i++) {
        if (palabraDividida[i] !== palabraDivididaAlRevez[i]) {
            return false
        }
    }
    return true
}

function esPalindromo(palabras) {

    const resultado = []

    for (const element of palabras) {
        let palabra = element.toLowerCase()
        if (invertirTexto(palabra)) {
            resultado.push(palabra)
        }
    }

    return resultado
}

const resultado = esPalindromo(palabras)

console.log("Palabras Palindromo: ", resultado);

