//2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior

let array1 = [];
let array2 = [];

for (let i = 0; i < 5; i++) {
    array1.push(Math.round(Math.random()*100))
}

console.log("array1");
for(let num in array1) {
    console.log("Numero "+num+": "+array1[num]);
}

array1 = array1.sort((a,b) => a - b);

console.log("\n"+"Primer: "+array1[0])
console.log("Ultim: "+array1[4])

array2 = array2.push(...array1)

console.log("array2")
for(let num in array1) {
    console.log("Numero "+num+": "+array1[num]);
}
