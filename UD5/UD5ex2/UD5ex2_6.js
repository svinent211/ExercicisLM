const inputTasca = document.querySelector("#task-input");
const btn = document.querySelector("#add-task");
const list = document.querySelector("#task-list");
const filtre = document.querySelector("#filter");
const divErrorMessages = document.getElementsByClassName("errorMessages");

//Afegir tasca
btn.addEventListener("click", () => {
    divErrorMessages[0].textContent = "";
    if(inputTasca.value !== "") {
        createTask();
    }else {
       divErrorMessages[0].textContent = "El camp no pot quedar buit";
    };
});

function createTask() {
 let li = document.createElement("li");
    //opcio1 per afegir text
    let textNode = document.createTextNode(inputTasca.value);
    li.appendChild(textNode);
    //opcio2 per afegir el text
    // li.textContent = inputTasca.value;

    inputTasca.value = "";
    
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Elimina"));
    btn.classList.add("delete");
    
    btn.addEventListener("click", ()=> {
        // li.remove();
        list.removeChild(li);
        
    });

    //Posar append després de fer l'event per al botó
    li.appendChild(btn);
    list.appendChild(li);
    

    //Marcar com completat o no
    li.addEventListener("click", (e) => {
        e.target.classList.toggle("completed");
    });
};



// 
filtre.addEventListener("change", () => {

    for(const task of list.children) {
        switch(filtre.value) {
            case 'all':
                task.style.display = "";
                break;
            case 'completed':
                
                task.style.display = (task.classList.contains("completed") ? '' : 'none');
                break;
                
            case 'pending':
                task.style.display = (task.classList.contains("completed") ? 'none' : '');
                break;
        }
    }


    // console.log(filtre.value); 
    // let lis = document.querySelectorAll("li");

    // if (filtre.value == "completed") {
        
    //     lis.forEach(element => {
    //         if(element.classList.contains("completed")) {
    //             element.classList.remove("display-none");
    //         }else {
    //             element.classList.add("display-none");
    //         }
    //     }
    //     );
    // }
    // else if(filtre.value == "pending") {
    //     lis.forEach(element => {
    //         if(element.classList.contains("completed")) {
    //             element.classList.add("display-none");
    //         }else {
    //             element.classList.remove("display-none");
    //         }
    //     }
    
    // );
    // }else {
    //     lis.forEach(element => element.classList.remove("display-none"));
    // }
});
