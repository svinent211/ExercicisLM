const buttonAfegir = document.getElementById("afegir");
const buttonEsborrarPrimer = document.getElementById("esborrarPrimer");
const buttonEsborrarUltim= document.getElementById("esborrarUltim");
const ul = document.querySelector("ul");


buttonAfegir.addEventListener("click", ()=> {
    let text = prompt("Introdueix text:");
    let textNode = document.createTextNode(text);
    let li = document.createElement("li");
    li.appendChild(textNode);
    ul.appendChild(li);
});

buttonEsborrarPrimer.addEventListener("click", ()=> {
    let primerElement = document.querySelector("ul li:first-of-type");
    ul.removeChild(primerElement);
});
buttonEsborrarUltim.addEventListener("click", ()=> {
    let ultimElement = document.querySelector("ul li:last-of-type");
    ul.removeChild(ultimElement);
});