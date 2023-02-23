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



// Imposto condizioni
let inputUserNameEl = document.getElementById("userName");
let inputUserAgeEl = document.getElementById("userAge");
let inputTotKmEl = document.getElementById("totKm");
let ticketGeneratorButtonEl = document.getElementById("ticketGeneratorButton");


// Inizio a targhettare il Button e aggiungo una funzione al suo interno per effettuare tutti i calcoli necessari
ticketGeneratorButtonEl.addEventListener("click", function() {
    let userName = inputUserNameEl.value;
    console.log(userName);

    let userAge = parseInt(inputUserAgeEl.value);
    console.log(userAge);

    let totKm = parseInt(inputTotKmEl.value);
    console.log(totKm);

    // Calcolo il prezzo del Biglietto STANDARD
    let totEuro = (inputTotKmEl.value * 0.21);
    console.log(totEuro);

    let offerta = "";
    let scontoPrevisto = "";


    // Aggiungo il SE e l'ALTRIMENTI per le varie offerte in base alla fascia d'età
    if(inputUserAgeEl.value < 18) {

        totEuro = totEuro - ((totEuro * 20) / 100);
        offerta = "Biglietto Scontato";
        scontoPrevisto = "20%"
    
    } else if(inputUserAgeEl.value >= 65) {
    
        totEuro = totEuro - ((totEuro * 40) / 100);
        offerta = "Biglietto Scontato";
        scontoPrevisto = "40%"
    
    }

    // Generiamo il biglietto...
    document.getElementById("passengerName").innerHTML = userName;
    document.getElementById("offerta").innerHTML = offerta;
    document.getElementById("totSconto").innerHTML = scontoPrevisto;
    document.getElementById("totale").innerHTML = totEuro.toFixed(2);
})

