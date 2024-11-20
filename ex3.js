//ex3 Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let array3 = [];

array3 = [...array1,...array2]

console.log("array1");
for(let num in array1) {
    console.log("Numero "+num+": "+array1[num]);
}

console.log(" ")
console.log("array2");
for(let num in array2) {
    console.log("Numero "+num+": "+array2[num]);
}

console.log(" ")
console.log("array3");
for(let num in array3) {
    console.log("Numero "+num+": "+array3[num]);
}