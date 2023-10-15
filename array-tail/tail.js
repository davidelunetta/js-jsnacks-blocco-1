// Chiedi all'utente quanti elementi l'array dovrebbe contenere
const numeroElementi = parseInt(prompt("Inserisci il numero di elementi dell'array:"));

// Verifica se l'input dell'utente è valido
if (isNaN(numeroElementi) || numeroElementi <= 0) {
    console.log("Inserisci un numero valido.");
} else {
    // Crea un array con numeri casuali da 1 a 100
    const arrayCasuale = [];
    for (let i = 0; i < numeroElementi; i++) {
        arrayCasuale.push(Math.floor(Math.random() * 100) + 1);
    }

    // Stampa l'array completo
    console.log("Array completo:", arrayCasuale);

    // Chiedi all'utente quanti elementi dell'array vuole stampare
    const elementiDaStampare = parseInt(prompt("Quanti elementi dell'array desideri stampare?"));

    // Verifica che il numero di elementi da stampare sia valido
    if (isNaN(elementiDaStampare) || elementiDaStampare <= 0 || elementiDaStampare > numeroElementi) {
        console.log("Inserisci un numero valido per gli elementi da stampare.");
    } else {
        // Stampiamo gli elementi richiesti
        const elementiStampati = arrayCasuale.slice(0, elementiDaStampare);
        console.log(`Primi ${elementiDaStampare} elementi dell'array:`, elementiStampati);
    }
}
