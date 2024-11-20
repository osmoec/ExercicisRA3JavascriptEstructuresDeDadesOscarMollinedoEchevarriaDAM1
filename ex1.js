//ex 1 Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en
// aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.

let array1 = [];

for (let i = 0; i < 5; i++) {
    array1.push(Math.round(Math.random()*100))
}

for(let num in array1) {
    console.log("Numero "+num+": "+array1[num]);
}

array1 = array1.sort()

console.log("\n"+"Primer: "+array1[0])
console.log("Ultim: "+array1[4])