// # Palavra-Corrompida

const corrompida = "$Ailuropoda@ melanoleuca!"
let purificado = '';

const proibidos = ["!", "@", "#", "$", "%", "&", "*", " (", ")", "."]




for (let caractere of corrompida) {
    if (proibidos.includes(caractere)) {
        // ignorar
    }
    else {
        purificado += caractere
    }

}

console.log(purificado)
