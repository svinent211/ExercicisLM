// Ex 1

const nomsMascotes = ["Max", "Bella", "Charlie", "Luna"];
const edatsMascotes = [5, 3, 7, 2];

let mascota = {
    nom: "Irene",
    edat: 1
};

let mascotes = [];

for (let i = 0; i < nomsMascotes.length; i++) {
    mascotes[i] = {
        nom: "",
        edat: 1
    }
    mascotes[i].nom = nomsMascotes[i];
    mascotes[i].edat = edatsMascotes[i];
};
for (let i = 0; i < mascotes.length; i++) {
    console.log("Nom: " + mascotes[i].nom);
    console.log("Edat: " + mascotes[i].edat  + "\n.");
};

function calcularEdatMitja(mascotes) {
    let suma = 0;
    for (let i = 0; i < mascotes.length; i++) {
        suma += mascotes[i].edat;
    }
    let resultat = suma / mascotes.length;
    return resultat;
}

console.log("Edat mitja: " + calcularEdatMitja(mascotes));


// Ex 2

function f2(m) {
    let nCaracters = m.length;
    let paraules = m.split(" ");
    let nParaules = paraules.length;
    let n = "";
    n = m.toUpperCase();

    console.log("Nº caracters: " + nCaracters);
    console.log("Nº paraules: " + nParaules);
    console.log("Frase en majúscula: " + n);
}

f2("Hola muy buenos dias, esto es una prueba para comprovar que la función funciona");

// Ex 3

// function f (nom, cognom) {
//     alias = nom.charAt(0) + cognom.toLowerCase();;
//     console.log(alias);
// }

const f3 = (nom,cognom) => {
    alias = nom.charAt(0).toUpperCase() + cognom.toLowerCase();
    console.log(alias);
}
f3("Sergi", "Vinent");

// Ex 4

let preu = 100;
let descompte = 20;
    //Simulació de l'entrada
console.log(`Introdueix el preu del producte: ${preu}`);
console.log(`Introdueix el descompte del producte: ${descompte}`);

const calcularDescompte = (preu, descompte) => preu - preu*descompte/100;

console.log(calcularDescompte(preu,descompte));

// Ex 5 sin filter

let numeros = [1,2,3,4,5,6,7,8,9,10];
const parells = (numeros) =>{
    let parells = Array();

    numeros.forEach( element => {
        if (element%2 == 0) {
            parells.push(element);
        };
    });
    return parells;
}

console.log(parells(numeros));   

// Ex 5 con filter
let parells2 = numeros.filter(numero => numero %2 == 0);
console.log(parells2);

// Ex 6
let paraules = ["Hola", "Ola", "Pantalla", "Raton", "Disco", "Ordenador"];

const llarg = (paraules) => {
    let paraula = "";
    for (let i = 0; i < paraules.length; i++) {
        
        if (paraules[i].length > paraula.length) {
            paraula = paraules[i];
        }

    };
    return paraula;
};

console.log(llarg(paraules));

// Ex 6 con acumulador
const masGrande = paraules.reduce((acumulador, elementActual) => (acumulador.length > elementActual.length)? acumulador : elementActual,"")

console.log("Cosa: " + masGrande);

// Ex 7

var canciones = [];

const afegirCancion = m => {
    canciones.push(m);
};
const eliminarCancion = () => {
    canciones.pop();
}

afegirCancion("Hooligan")
afegirCancion("2.0")
console.log(canciones);
eliminarCancion();
console.log(canciones);

// Ex 8

const generarAleatori = (a, b) => Math.floor(Math.random() * (b-a+1) + a);
console.log(`Numero aleatorio: ${generarAleatori (5, 10)}`);

// Ex 9

let estudiants = [];

const afegirEstudiant = (nom, edat, nota) => {
    estudiants.push({nom,edat,nota});
};
const mostrarEstudiants = () => {
    estudiants.forEach(element => {
        console.log(element);
    });
};

const millorNota = () => {
    let index = 0;
    for (let i = 0; i < estudiants.length; i++) {
        if (estudiants[i].nota > estudiants[index].nota) {
            index = i;
        };
    };
    
    return estudiants[index].nom + " -> " + estudiants[index].nota;
};

afegirEstudiant("Hugo",19,8.67);
afegirEstudiant("Sebas",19,7.32);
mostrarEstudiants();

const millorNota2 = estudiants.reduce((mejor, elementActual) => (mejor.nota > elementActual.nota)? mejor : elementActual , 0).nom;

console.log(`L'estudiant amb la millor nota: ${millorNota()}`);
console.log(`L'estudiant amb la millor nota: ${millorNota2}`);

// Ex 10

var productes = [];

const afegirProducte = (nom, quantitat, preu) => {
    productes.push({
        nom,
        quantitat,
        preu
    })
};
const actualitzarStock = (posicio, quantitatt) => {
    productes[posicio].quantitat = productes[posicio].quantitat - quantitatt;
};
const calcularTotal = () => {
    let total = 0;
    productes.forEach( element => {
        total += element.preu * element.quantitat;
    });
    return total;
};

afegirProducte("Disco", 30, 300);
afegirProducte("Pendrive", 50, 100);
afegirProducte("Raton", 60, 50);

actualitzarStock(0, 1);

console.log(`Total inventari: ${calcularTotal()}`); 
