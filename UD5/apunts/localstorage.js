//Escriure al localStorage
let key = 'Item 1';

localStorage.setItem(key, 'Value');

//Llegir 
let myItem = localStorage.getItem(key);

//Update
localStorage.setItem(key, 'New Value');

//Eliminar
localStorage.removeItem(key);

localStorage.clear(); //Borra tots

const persones = [
    {
        nom: "Joan",
        edat: 25,
        ciutat: "Barcelona",
        interessos: ["programació","tenis"]
    },
    {
        nom: "Inés",
        edat: 30,
        ciutat: "Madrid",
        interessos: ["viatges","senderisme"]
    }
]

persones.forEach(persona => {
    localStorage.setItem(persona.nom, JSON.stringify(persona));
});

localStorage.setItem('persones', JSON.stringify(persones));

let ul = document.createElement("ul");

JSON.parse(localStorage.getItem('persones')).forEach(p=>{
    ul.innerHTML += `<li data-edat=${p.edat} data-ciutat=${p.ciutat}>${p.nom}<li/>`;
});
document.body.appendChild(ul);

const lis = document.querySelectorAll("li");

lis.forEach(li=>{
    li.addEventListener("click", e=>{
        console.log(e.target.getAttribute('data-ciutat'));
    });
})