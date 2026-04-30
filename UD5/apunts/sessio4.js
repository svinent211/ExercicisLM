const paragraf = document.getElementById("paragraf");
console.log(paragraf);
console.log(paragraf.nodeType);
console.log(paragraf.nodeName);

const vermell = document.getElementsByClassName("vermell");

//ForEach no va amb html collection
for (let i = 0; i < vermell.length; i++) {
    console.log(vermell[i]);
    //Esdeveniment on click
    vermell[i].addEventListener("click", () => {
    vermell[i].style.color = "green";
    vermell[i].style.backgroundColor ="black";
    });
};
console.log(vermell);

const li = document.getElementsByTagName("li");
console.log(li);

const a = document.getElementsByTagName("a");
console.log(a);

const email = document.getElementsByName("email");
console.log(email);


// const elementsLi = document.querySelectorAll("li"); //Seleccionar els elements emprant els querySelector de css
const elementsLi = document.querySelector(".item"); //Agafa nomès el primer que troba
console.log(elementsLi);

const atribut = document.querySelector (`input[type="email"]`);
console.log(atribut);

// 

