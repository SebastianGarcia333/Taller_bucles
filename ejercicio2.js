const prompt = require('prompt-sync')();
const pin_correcto = 8236

let ingresa_pin = Number(prompt("Ingresa el PIN: "))


while (ingresa_pin != pin_correcto){
    console.log("Pin incorrecto, vuelve a ingresarlo")
    ingresa_pin = Number(prompt("Ingresa el PIN: "))
}

console.log("PIN Correcto")