const div = document.querySelector("div");
const p = document.querySelector("p");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", (event)=> {
    console.log(event.target);
    console.log(event.target.textContent);
    event.stopPropagation(); //Fa falta perque sino al clickar invoca els events de <p> y <div> que el conté
});

ul.addEventListener("click", (event)=> {
    console.log(event.target);
    console.log(event.target.textContent); //A sa UL pots veure quin element has clickat
});

p.addEventListener("mouseout", (event)=> { //mouseover --> quan te poses damunt, mouseout --> quan deixes d'estar damunt
    console.log(event.target);
    console.log(event.target.textContent); //A sa UL pots veure quin element has clickat
});

div.addEventListener("dblclick", (event)=> {
    console.log(event.target);
    console.log(event.target.textContent); //A sa UL pots veure quin element has clickat
});

document.addEventListener("keydown", (e)=> {
    console.log(e.key); // =='Enter
    console.log(e.keyCode); // ==13
});

document.addEventListener("DOMContentLoaded", ()=> {

});


const form = document.querySelector("form");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log(e);
    console.log("Enviado");

    console.log(form["nom"].value);
    console.log(form["llinatge"].value);

    const nom = document.querySelector("#nom"); //l'input amb id="nom"
    console.log(nom.value); //.value treu el valor guardat
    console.log(document.querySelector("#condiciones").checked);
});

// input, change, focus, blur

const nom = document.querySelector("#nom");
nom.addEventListener("input", (e) => {
    console.log("input");
});

nom.addEventListener("change", (e) => {
    console.log("change");
});

nom.addEventListener("focus", (e) => {
    console.log("focus");
});


nom.addEventListener("blur", (e) => {
    console.log("blur");
});