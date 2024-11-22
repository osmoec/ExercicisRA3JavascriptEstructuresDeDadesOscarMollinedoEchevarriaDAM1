//ex6 A partir d’una array de strings, es creï una nova amb aquelles que tinguin més d’una lletra ‘a’

let array = ["hola", "bona", "tarda", "com", "astas", "avui"];
let arraya = []

let voc = "a"
let cont = 0;
let contA = 0
console.log(array)

for (let i = 0; i < array.length; i++) {
    cont = 0;
    if (nvocals(array[i]) > 2){
        arraya[contA] = array[i];
        contA++
    }
}

console.log(arraya);

function nvocals(paraula){
    for (let i = 0; i < paraula.length; i++){
        if (paraula[i].includes(voc)){
            cont++;
        }
    }
    return cont;
}