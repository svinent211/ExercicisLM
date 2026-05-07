let dades = [1,2,3,5,7,11];

for (let i = 0; i < dades.length; i++) {
    // console.log(dades[i]);

}

//for of (Dona el valor de la posició)
for (let element of dades) {
    // console.log(element);
}

//for in (Dona l'index on estàs) 
for (let index in dades) {
    // console.log(index);
}

let alumne = { nom: "Anna", edat: 22};

// console.log(alumne.nom);
// console.log(alumne["nom"]);

for (let clau in alumne) { // Index en es cas dels objectes són les claus, els noms de les variables
    // console.log(clau, alumne[clau]);
    // console.log(`Dades: ${clau} de l'alumne: ${alumne[clau]}`);
}

dades.forEach( element => {
    // console.log(element);
});
    
function suma (a,b) {
    return a+b;
}
console.log(suma(2,3));

// Arrow function /funció fletxa, anònima
const sum = (a,b) => {
    return a+b;
};
console.log(sum(1,1));

const sum2 = (a,b) => a+b;
console.log(sum2(1,2));

// Destructuring
let user = {nom: "Anna", edat:22};
// let nom = user.nom;
// let edat = user.edat;

let {nom, edat} = user;
console.log(nom, edat);

//Assigna el valor de la variable amb el seu nom
let user2 = {
    nom,
    edat
}

let numeros = [1,3,5];
const [a,b,c] = numeros;
console.log(a,b,c);
console.log(user2);

//Operador spread
const mesNombres = [... numeros, 4, 5, 6, 7, 8, 9];
console.log(mesNombres);

function sumarValorsArray (numeros) {
    let suma = 0;
    for (let num of numeros) {
        suma += num;
    }
    return suma;

}

console.log(sumarValorsArray(mesNombres));

const dobles = mesNombres.map((numero) => {
    return numero*2;
}); 
const dobles2 = mesNombres.map( numero => numero*2);

console.log(dobles);
console.log(dobles2);