const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-close");
const navMenu = document.querySelector("#nav-menu");
const btnFeatures = document.querySelector("#btn-features");
const ulFeatures = document.querySelector(".ul-features");

// Abrir menu hamburguesa
btnMenu.addEventListener("click", ()=>{
    navMenu.classList.add("display-block");
    
} );
// Cerrar menu hamburguesa
btnClose.addEventListener("click", ()=>{
    navMenu.classList.remove("display-block");
});

// Abrir o cerrar apartado "Features" en menu hamburguesa
btnFeatures.addEventListener("click", ()=>{
    ulFeatures.classList.toggle("display-flex");
});