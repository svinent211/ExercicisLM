const btnMenu = document.getElementById("btn-menu")
const navMenu = document.getElementById("nav-menu")
const btnClose = document.getElementById("btn-close")
const front = document.querySelector(".front")
const back = document.querySelector(".back")
btnMenu.addEventListener("click", () => {
    front.classList.add("display-flex")
    back.classList.add("display")

});
