//ex4 Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.

let array1 = [1,2,3,4,5];
let array2 = [6,2,8,4,10];
let array3 = new Set([...array1, ...array2]);

console.log("array1");
for(let num of array1) {
    console.log("Numero "+num);
}

console.log(" ")
console.log("array2");
for(let num of array2) {
    console.log("Numero "+num);
}

console.log(" ")
console.log("array3");
for(let num of array3) {
    console.log("Numero "+num);
}