const inputTasca = document.querySelector("#task-input");
const btn = document.querySelector("#add-task");
const list = document.querySelector("#task-list");
const filtre = document.querySelector("#filter");

//Afegir tasca
btn.addEventListener("click", () => {
    let li = document.createElement("li");
    let textNode = document.createTextNode(inputTasca.value);
    li.appendChild(textNode);
    list.appendChild(li);
    inputTasca.value = "";

    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Elimina"))
    btn.classList.add("delete");
    li.appendChild(btn);

    btn.addEventListener("click", ()=> {
        li.remove();
    })
});


//Marcar com completat o no
list.addEventListener("click", (e) => {
    e.target.classList.toggle("completed");
    
});

// 
filtre.addEventListener("change", () => {
    console.log(filtre.value); 
    let lis = document.querySelectorAll("li");

    if (filtre.value == "completed") {
        
        lis.forEach(element => {
            if(element.classList.contains("completed")) {
                element.classList.remove("display-none");
            }else {
                element.classList.add("display-none");
            }
        }
        );
    }
    else if(filtre.value == "pending") {
        lis.forEach(element => {
            if(element.classList.contains("completed")) {
                element.classList.add("display-none");
            }else {
                element.classList.remove("display-none");
            }
        }
    
    );
    }else {
        lis.forEach(element => element.classList.remove("display-none"));
    }
});
