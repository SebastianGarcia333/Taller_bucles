
const movimientos = [20000, -30000, 60000, -500000, 900000,50000];
let total = 0;
let cantidad_retiros = 0

for (const i of movimientos){
    total += i;
    if (i < 0){
        cantidad_retiros += 1;
    }

}

console.log("Total: ", total)
console.log("Cantidad de retiros: ", cantidad_retiros)