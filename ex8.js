//ex8 Donada una paraula, insereix cada caràcter dins d’una cua. Extreu ara de la cua els caràcters un a un per poder decidir si és un palíndrom o no

let paraula = "reconocer"
let paraulaA = [""]
let paraulaI = [""]
let cont = 0

for (let i = 0; i < paraula.length; i++) {
    paraulaA.push(paraula[i]);
}

for (let i = 0; i < paraula.length; i++) {
    paraulaI[i] = paraulaA.pop()
}

for (let j = 0; j < paraula.length; j++) {
    if (paraula[j] === paraulaI[j]) {
        cont++
    }
}

if (cont === paraula.length){
    console.log("es un palindrom")
}
else{
    console.log("No es un palindrom")
}
