
var nom;
let edat;
const PI=3.141592653589793238462;


console.log("Cosa \"rara\""); 
console.log(PI);
console.log("PI: " + PI + " \nNumeros normales")
console.log(`El nombre PI és ${PI}`)

for(var i = 0; i < 100; i++) {
    console.log("SAPO")
}


function f(m, n, p=1) {
    let x = 8;
    console.log(m + n + p + x);
}

nom = null;
console.log(typeof(nom));
nom = NaN;
console.log(typeof(nom));
f(2,5);

let x = "2";
let y = 4;
let z = "true";

x++;

console.log()

// console.log(x+y) Dona 24 perque x és un string i es concatena
console.log(-x-y); //El negado convierte el string a su numero negativo
console.log(parseInt(x));
console.log(!!z); //Negar vuelve al string en boolean, doble negado lo deja bien en boolean
console.log(Boolean(z));

let persona = {
    nom: "Joan",
    edat: 23
}

console.log(persona);
console.log(persona.edat);

persona.edat = 33;
console.log(persona);

console.log(1 == true);
console.log(undefined ===  null);


//Array
let num = [1,2,3];
let s = [];
console.log(num[1]); //Posicio 0, [1], 2
console.log(num);
console.log(typeof num)

let arrayNum = new Array();
let arrayNum2 = new Array(2.98,4,5,"dfhfdh");
let arrayNum3 = new Array(50); //Açò diu la quantitat de posicions inicialitzades
arrayNum3.fill(0); //Emplena totes les posicions inicialitzades

//push
//pop
//shift
//unshift
//concat
//slice
//splice
//indexOf
//join
//sort

//destructuring

alert("Felicidades!\nEres la persona número  10000 en entrar a esta pagina\nHas ganado el sorteo de un IPhone 20 Pro XL\nInstala este antivirus para reclamarlo! ")