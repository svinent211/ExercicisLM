const nomsMascotes = ["Max", "Bella", "Charlie", "Luna"];
const edatsMascotes = [5, 3, 7, 2];

let mascota = {
    nom: "Irene",
    edat: 1
};

let mascotes = Array();

for (let i = 0; i < nomsMascotes.length; i++) {
    mascotes[i] = {
        nom: "",
        edat: 1
    }
    mascotes[i].nom = nomsMascotes[i];
    mascotes[i].edat = edatsMascotes[i];
};
for (let i = 0; i < mascotes.length; i++) {
    console.log("Nom: " + mascotes[i].nom);
    console.log("Edat: " + mascotes[i].edat  + "\n.");
};

function calcularEdatMitja(mascotes) {
    let suma = 0;
    for (let i = 0; i < mascotes.length; i++) {
        suma += mascotes[i].edat;
    }
    let resultat = suma / mascotes.length;
    return resultat;
}

console.log("Edat mitja: " + calcularEdatMitja(mascotes));
