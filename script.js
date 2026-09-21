const caja = document.getElementById("caja");
const cajaEscena = document.getElementById("cajaEscena");
const ramoEscena = document.getElementById("ramoEscena");

const ramo = document.getElementById("ramo");
const frases = document.getElementById("frases");

const mensajeRamo = document.getElementById("mensajeRamo");
const ayuda = document.getElementById("ayuda");


const frasesBonitas = [
    "Eres bonita. 🌼",
    "Eres fuerte. 💛",
    "Eres increíble. ✨",
    "Eres especial. 🌻",
    "Eres única. ☀️",
    "Nunca olvides lo mucho que vales. 🤍"
];


let cantidadToques = 0;


/* ABRIR CAJA */

caja.addEventListener("click", () => {

    caja.disabled = true;

    caja.classList.add("abrir");

    setTimeout(() => {

        cajaEscena.style.display = "none";
        ramoEscena.style.display = "flex";

    }, 900);

});


/* TOCAR RAMO */

ramo.addEventListener("click", () => {

    if (cantidadToques >= frasesBonitas.length) {
        return;
    }

    cantidadToques++;

    const frase = document.createElement("div");

    frase.className = "frase";
    frase.textContent = frasesBonitas[cantidadToques - 1];

    frases.appendChild(frase);


    /* Movimiento del ramo */

    ramo.classList.remove("golpe");

    void ramo.offsetWidth;

    ramo.classList.add("golpe");


    /* Quitar frase anterior */

    const frasesActuales = document.querySelectorAll(".frase");

    if (frasesActuales.length > 1) {

        frasesActuales[0].style.opacity = "0";

        setTimeout(() => {
            frasesActuales[0].remove();
        }, 500);

    }


    /* Última frase */

    if (cantidadToques === frasesBonitas.length) {

        setTimeout(() => {

            mensajeRamo.style.opacity = "0";
            ayuda.style.opacity = "0";

        }, 700);

    }

});