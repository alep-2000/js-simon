"use strict"

// ARRAY
let number= [];

// CICLO FOR
for (let i=0; i<5; i++){
    // GENERATORE NUMERI RANDOM
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    // AGGIUNTA ELEMENTI NELL'ARRAY
    number.push(randomNumber);
}

// RICHIAMO RANDOMNUMBER NEL DOM E MOSTRO I NUMERI RANDOM
document.getElementById('randomNumber').innerHTML = number;