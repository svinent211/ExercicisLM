
// a) Selecciona la secció (section) amb un identificador “container” sense utilitzar querySelector.
let container = document.getElementById("container");
// b) Selecciona la secció (section) amb un identificador “container” mitjançant querySelector.
container = document.querySelector("#container");

// c) Selecciona tots els li amb classe “second“ dins de qualsevol llista.
const seconds = document.querySelectorAll("li.second");
// d) Selecciona un element de la llista amb una classe “third”, però només l'element de la llista ordenada.
const third = document.querySelector("ol li.third");

// e) Afegeix el text "Hola!" al final de la secció amb un identificador de contenidor.
const holaFinal = document.createElement("p");
let textNode = document.createTextNode("Hola!");
holaFinal.appendChild(textNode);
container.appendChild(holaFinal);

container.innerHTML += "adios"; //Permet afegir texte, pero no és per posar objectes més complicats

// f) Afegeix la classe “main” al div amb una classe “footer”.
const footer = document.querySelector("div.footer");
footer.classList.add("main");
// g) Treu la classe “main” del div amb una class “footer”.
footer.classList.remove("main");

// h) Crea i afegeix un nou li amb el text "four" a la llista no ordenada.
const li = document.createElement("li");
textNode = document.createTextNode("four");
li.appendChild(textNode);

const ul = document.querySelector("ul");
ul.appendChild(li);

// i) Passa per tots els elements de la llista ordenada i dona’ls un color de fons de color "verd".
const lis = document.querySelectorAll("ol li");
lis.forEach(element => element.style.backgroundColor = "green");

// j) Elimina el div amb una classe “footer”.
footer.remove();
// k) Inserta un nou element abans del primer li de la llista no ordenada.
const primerLiUl = document.createElement("li");
primerLiUl.appendChild(document.createTextNode("aa"))
ul.insertBefore(primerLiUl, ul.firstElementChild);


// l) Mou l'ultim element de la llista no ordenada a la llist aordenada
const ultim = document.querySelector("ul li:last-child");

const ol = document.querySelector("ol");
ol.appendChild(ultim);

// m) Clona el primer element de la llist ano ordenada i afegeix-lo al final
const ul_first = document.querySelector("ul li:first-child");
const clone = ul_first.cloneNode(true); //El true hace que copie también el texto de dentro y no solo el Nodo

ul.appendChild(clone); 