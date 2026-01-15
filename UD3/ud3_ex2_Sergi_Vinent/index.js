const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-close");
const navMenu = document.querySelector("#nav-menu");

const btnFeatures = document.querySelector("#btn-features");
const ulFeatures = document.querySelector(".ul-features");
const upFeatures = document.querySelector("#arrow-up-1");
const downFeatures = document.querySelector("#arrow-down-1");

const btnCompany = document.querySelector("#btn-company");
const ulCompany = document.querySelector(".ul-company");
const upCompany = document.querySelector("#arrow-up-2");
const downCompany = document.querySelector("#arrow-down-2");

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
    downFeatures.classList.toggle("display-none");
    upFeatures.classList.toggle("display-inline");
});

// Abrir o cerrar apartado "Company" en menu hamburguesa
btnCompany.addEventListener("click", ()=>{
    ulCompany.classList.toggle("display-flex");
    downCompany.classList.toggle("display-none");
    upCompany.classList.toggle("display-inline");
});