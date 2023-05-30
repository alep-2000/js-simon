"use strict"

// FUNZIONI 
// CREO FUNZIONE DI BLOCCO DEL TIMER
function stop(){
    clearInterval(timer);
    document.getElementById('randomNumber').innerHTML = '';
}


function visual(){
    let insertPrimeNumber= prompt('Inserisci il primo numero');
    let insertSecondNumber= prompt('Inserisci il secondo numero');
    let insertThirdNumber= prompt('Inserisci il terzo numero');
    let insertFourthNumber= prompt('Inserisci il quarto numero');
    let insertFifthNumber= prompt('Inserisci il quinto numero');
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
document.getElementById('randomNumber').innerText= `Memorizza i seguenti numeri: ${number}`;

// CREO VARIABILE PER IMPOSTARE I SECONDI DA CUI PARTIRE
let seconds= 0
// CREO VARIABILE PER GENERARE IL TIMER DI 30 SECONDI
let timer= setInterval(function(){
    // RICHIAMO TIMER NEL DOM
    document.getElementById('timer').innerText= `Hai ancora a disposizione ${seconds} secondi`;
    seconds++;
}, 1000);

// CREO TIMEOUT PER BLOCCARE IL TIMER A 30 SECONDI
const timeOut= setTimeout(stop, 31000);

let numberPlayer= setTimeout(visual, 32000);

