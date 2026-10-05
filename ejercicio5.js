
const usuarios = [
  { nombre: "Juan", movimientos: [20000, -5000, 30000] },
  { nombre: "Maria", movimientos: [-10000, -20000, -50000] },
  { nombre: "Carlos", movimientos: [50000, -12000, 0, -8000] }
];
for (let i = 0; i < usuarios.length; i++) {
  let totalUsuario = 0;
  for (let j = 0; j < usuarios[i].movimientos.length; j++) {
    totalUsuario += usuarios[i].movimientos[j];
  }
  console.log("El total gastado/movido por", usuarios[i].nombre,  "es: ", totalUsuario);
}