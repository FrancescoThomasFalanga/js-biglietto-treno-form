/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
seguendo delle determinate regole.
*/

/*
x Chiedi all'utente il numero di chilometri che vuole percorrere e memorizzali
x Chiedi all'utente l'età del passeggero e memorizzala
x Il prezzo del biglietto è definito in base ai km (0.21 $ al km)
? SE il passeggero è minorenne
    applica uno sconto del 20%
:? ALTRIMENTI SE il passeggero ha un'età compresa tra i 18 e i 64 anni
    non applicare nessuno sconto
: ALTRIMENTI applica uno sconto del 40%
*/

/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone 
(non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale 
(o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui 
l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/


let inputUserNameEl = document.getElementById("userName");
let inputUserAgeEl = document.getElementById("userAge");
let inputTotKmEl = document.getElementById("totKm");
let ticketGeneratorButtonEl = document.getElementById("ticketGeneratorButton");

ticketGeneratorButtonEl.addEventListener("click", function() {
    let userName = inputUserNameEl.value;
    console.log(userName);

    let userAge = inputUserAgeEl.value;
    console.log(userAge);

    let totKm = inputTotKmEl.value;
    console.log(totKm);


    let totEuro = (inputTotKmEl.value * 0.21).toFixed(2);
    console.log(totEuro);

})



// if(inputUserAgeEl.value < 18) {

//     console.log(`${(totEuro - ((totEuro * 20) / 100)).toFixed(2)} euro.`);

// } else if(inputUserAgeEl.value >= 65) {

//     console.log(`${(totEuro - ((totEuro * 40) / 100)).toFixed(2)} euro.`);

// } else {

//     console.log(totEuro);

// }