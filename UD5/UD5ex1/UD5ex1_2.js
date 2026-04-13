
function f(m) {
    let nCaracters = m.length;
    let paraules = m.split(" ");
    let nParaules = paraules.length;
    let n = "";
    n = m.toUpperCase();

    console.log("Nº caracters: " + nCaracters);
    console.log("Nº paraules: " + nParaules);
    console.log("Frase en majúscula: " + n);
}

f("Hola muy buenos dias, esto es una prueba para comprovar que la función funciona");