/* 
-Preparo gli elementi che voglio usare del DOM
-setto variabili già note
-Chiedo all'utente i 2 input richiesti
-Controllo input inseriti dall'utente
-elaboro i dati
-mostro in pagina il risutato
*/

//Preparazione
const kmPrice = 0.21;

//recupero gli elementi che voglio usare dalla pagina e li assegno a una variabile
const resultElement = document.getElementById('result');


// Recupero i dati (userAge, userKm), dall'utente

const userAge = parseInt(prompt('Inserisci la tua età', '27'));
console.log('userAge:', userAge);

const userKm = parseInt(prompt('Per quanti km hai intenzione di viaggiare?', '100'));
console.log('userKm:', userKm)

// Fase validazione dati, prima di elaborarli

const isInvalidAge = isNaN(userAge) || userAge < 1;
console.log(isInvalidAge, 'invalidAge?');
const isInvalidKm = isNaN(userKm) || userKm < 1;
console.log(isInvalidKm, 'invalidKm?');

if (isInvalidAge || isInvalidKm) {   // non è molto carino, se sbagli entrambi ti dirà solo che avri sbagliato il primo, in questo caso l'età
    const errorMessage = isInvalidAge ? "Hai inserito un'età sbagliata!" : "Hai inserito un kilometraggio sbagliato!";
    alert(errorMessage);
    location.reload();   // se trovo errore, ricarico la pagina
}

// Fase Elaborazione dati 

//metodo 1. tengo separate le condizioni dato che sono solo 2 e semplici, ma costringo ogni volta a farle entrambe
/*
 prezzo senza contare età. let così da modificarlo in seguito

let tripPrice = kmPrice * userKm;
console.log('tripPrice:', tripPrice);

if (userAge > 64) { // over 65
    tripPrice = tripPrice - ((tripPrice / 100) * 40);
    console.log('40-discount:', tripPrice);
}
if (userAge < 18) {  // minorenni
    tripPrice = tripPrice - ((tripPrice / 100) * 20);
    console.log('20-discount', tripPrice);
}
*/

// Metodo 2 Unisco le condizioni per usare una const

const startPrice =  kmPrice * userKm;
if (userAge > 17 && userAge < 65 ) {
    tripPrice = startPrice
} else if (userAge > 64) {
    tripPrice = startPrice - ((startPrice / 100) * 40);
    console.log('40-discount:', tripPrice);
} else {
    tripPrice = startPrice - ((startPrice / 100) * 20);
    console.log('20-discount', tripPrice);
}

// Fase di produzione output
resultElement.innerText = `ecco il prezzo del tuo biglietto: ${tripPrice.toFixed(2)} euro.`;
console.log(tripPrice, typeof(tripPrice));