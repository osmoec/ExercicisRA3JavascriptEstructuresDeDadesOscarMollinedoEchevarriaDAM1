//ex3 Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).

let array1 = [1,2,3,4,5];
let array2 = [6,2,8,4,10];
let canvi = [...array1, ...array2];
let cont = 0;
let array3 = []

for (let i = 0; i < canvi.length; i++) {
    for (let j = i+1; j < canvi.length; j++) {
        if (canvi[i] === canvi[j]) {
            canvi[i] = 9999999;
        }
    }
}

for (let j = 0; j < canvi.length; j++) {
    if (canvi[j] !== 9999999){
        array3.push(canvi[j]);
    }
}

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
