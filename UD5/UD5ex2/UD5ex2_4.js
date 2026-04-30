
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


// f) Afegeix la classe “main” al div amb una classe “footer”.
const footer = document.querySelector("div.footer");
footer.classList.add("main");
// g) Treu la classe “main” del div amb una class “footer”.
footer.classList.remove("main");

// h) Crea i afegeix un nou li amb el text "four" a la llista no ordenada.
const li = document.createElement("li");
textNode = document.createTextNode("four");
li.appendChild(textNode);

const ol = document.querySelector("ol");
ol.appendChild(li);

// i) Passa per tots els elements de la llista ordenada i dona’ls un color de fons de color "verd".
const lis = document.querySelectorAll("ol li");
lis.forEach(element => {
    element.style.backgroundColor = "green";
});

// j) Elimina el div amb una classe “footer”.
footer.remove();
// k) Inserta un nou element abans del primer li de la llista no ordenada.
const primerLiUl = document.createElement("li");
const ul = document.querySelector("ul");
ul.insertBefore(primerLiUl, ul.firstElementChild);