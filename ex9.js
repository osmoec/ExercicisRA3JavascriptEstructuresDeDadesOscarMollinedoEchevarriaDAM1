//ex9 Crea una Cua d’Objectes amb dades de 3 pel·lícules. Itera la cua per mostrar per pantalla la pel·lícula més antiga.

let pelicules = [{nom:"pelicula",desc:"descripcio1",any: 1998},{nom:"pelicula2",desc:"descripcio2",any:2030},{nom:"pelicula3",desc:"descripcio3",any:1027},{nom:"pelicula4",desc:"descripcio4",any:990}]
let petit = 99999;
let posicioP = 0;

for (let i = 0; i < pelicules.length; i++) {
    if ( pelicules[i].any < petit){
        petit = pelicules[i].any
        posicioP = i;
    }
}


console.log(pelicules[posicioP])