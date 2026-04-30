// Crear un nou element
let li = document.createElement("li");
let textNode = document.createTextNode("Element 5");
li.appendChild(textNode);


const ul = document.querySelector("ul");

ul.appendChild(li);

// insertBefore
const header = document.createElement("header");
textNode = document.createTextNode("Texto del header ");
header.appendChild(textNode);

const div = document.querySelector("div");
const pare = div.parentNode;
console.log(pare);
pare.insertBefore(header, div);

//replaceChild + setAttribute
textNode = document.createTextNode("Google");
const a = document.querySelector("a");
a.replaceChild(textNode, a.firstChild);

a.setAttribute("href","https:\\www.google.com");

console.log(a.getAttribute("href"));
console.log(a.hasAttribute("href"));

//removeAttribute
//toggleAttribute
//.attributes
// a.removeAttribute("href")
// a.toggleAttribute("disabled");
// document.querySelector("input").toggleAttribute("disabled");
console.log(document.querySelector("input").attributes);

//Eliminar elemento
const liVermell = document.querySelector("ul li.vermell");
ul.removeChild(liVermell);

//Moure un node de lloc
const h1 = document.querySelector("h1");
header.appendChild(h1);

//Copiar un node a un altre lloc
const inputEmail = document.querySelector("input");
const elementClonat = inputEmail.cloneNode(true);
const form = document.querySelector("form");
form.appendChild(elementClonat);
elementClonat.setAttribute("id", "repiteEmail");
elementClonat.setAttribute("name", "repiteEmail");


const button = document.querySelector("button");
const p1 = document.getElementById("paragraf")
const p2 = document.querySelector("p.vermell");
button.addEventListener("click", ()=> {
    // p1.classList.add("verd");
    // p1.classList.remove("verd");
    // p1.classList.add("vermell");
    // p1.classList.toggle("vermell");
    p1.classList.toggle("verd");
    p2.classList.replace("vermell","verd");
    // p1.style.backgroundColor = "black";
    p1.style["background-color"] = "cyan";
    console.log(p1.contains("verd"));

});