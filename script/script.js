/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

*Nota
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Consigli:
Fate la scaletta degli step e commentate man mano che scrivete il codice
Usate i console.log per verificare che tutto sia a posto
Disattivate live server: può darvi problemi coi prompt.

Bonus
-Stampare il prezzo finale sulla pagina invece che in console
-Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
-Abbellire col CSS 
*/

/*

Preparo i dati che mi servono 



*/
//Preparazione
const kmPrice = 0.21 
 
//recupero gli elementi che voglio usare dalla pagina e la assegno a una variabile
const resultElement = document.getElementById('result');


// Recupero i dati (userAge, userkm), dall'utente

const userAge = parseInt(prompt('inserisci la tua età', '27'));
console.log('userAge:', userAge);

const userKm = parseInt(prompt('Per quanri km hai intenzione di viaggiare?', '100'));
console.log('userKm:', userKm)

// Fase Elaborazione dati 



//metodo 1. tengo separate le condizioni dato che sono solo 2 e semplici
// prezzo senza contare etò. let così da modificarlo in seguito
let tripPrice = kmPrice * userKm;
console.log('tripPrice:', tripPrice);

if (userAge > 64) { // over 65
    tripPrice = tripPrice -((tripPrice / 100) * 40);
    console.log('40-discount:', tripPrice);
}
if (userAge < 18) {  // minorenni
    tripPrice = tripPrice -((tripPrice / 100) * 20);
    console.log('20-discount', tripPrice);
}

// Metodo 2 Unisco le condizioni per usare una const
/*
num.toFixed([digits]) 
*/


resultElement.innerText = `ecco il prezzo del tuo biglietto: ${tripPrice.toFixed(2)} euro.`;