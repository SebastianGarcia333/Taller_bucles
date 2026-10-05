
const movimientos = [20000, 0, -30000, 0, -15000, 60000, -500000];


for (let i = 0; i < movimientos.length; i++) {

  if (movimientos[i] === 0) {
    continue; 
  }

  if (movimientos[i] === -15000) {
    posicionEncontrada = i;
    console.log(`¡Primer pago a comercio encontrado en la posición: `, posicionEncontrada);
    break;
  }
}