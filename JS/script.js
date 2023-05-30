"use strict"

// FUNZIONI
function stop(){
    clearInterval(timer);
}

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

// CREO VARIABILE PER IMPOSTARE I SECONDI DA CUI PARTIRE
let seconds= 0
// CREO VARIABILE PER GENERARE IL TIMER DI 30 SECONDI
let timer= setInterval(function(){
    document.getElementById('timer').innerHTML= seconds;
    seconds++;
}, 1000);

const timeOut= setTimeout(stop, 31000);