//ex5 Codifica la funció map d’una Array perquè en creï una nova amb el valor cúbic de cada número.
// Exemple: [1, 3, 6] => [1, 27, 216]

let array1 = [1,3,6]

let array2 = array1.map(function (numero){
  return Math.pow(numero,3)
})

console.log(array2)