//ex5 Codifica la funció map d’una Array perquè en creï una nova amb el valor cúbic de cada número.
// Exemple: [1, 3, 6] => [1, 27, 216]

let mapa =new Map ([['a', 1],['b', 3], ['c', 6]]);
let mapa2 = new Map()
let canvi = 0;
let q3 = (x)=> x * x * x
console.log(mapa)

for (let [obj,numero] of mapa) {
    canvi = numero;
    console.log(canvi)
    canvi = q3(canvi)
    mapa2.set(obj,canvi);
}

console.log(mapa2);