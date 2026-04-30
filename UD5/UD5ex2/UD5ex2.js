const button_obrirFinestra = document.getElementById("obrirFinestra");
const fons = document.getElementById("fons");
const contenidor = document.querySelector(".contenidor");
const acc = document.getElementById("buttonAcceptar");
const cancelar = document.getElementById("buttonCancelar");

const sortir = () => {
    button_obrirFinestra.classList.remove("display-none");
    fons.classList.add("display-none");
    contenidor.classList.add("display-none");
};
button_obrirFinestra.addEventListener("click", ()=> {
    button_obrirFinestra.classList.add("display-none");
    fons.classList.remove("display-none");
    contenidor.classList.remove("display-none");
    contenidor.animate([{transform: "rotate(0) scale(0)"},
        { transform: "rotate(0) scale(1)"},],
        {duration: 1000, iterations: 1,}
    );
    console.log("hola");

});

acc.addEventListener("click", () => {
    sortir();
    alert("Has acceptat el missatge");
});
cancelar.addEventListener("click", ()=> {
    sortir();
})

