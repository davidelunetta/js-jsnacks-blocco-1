const fruttaFrigorifero = 
['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
const pesca = 'pesca';
fruttaFrigorifero.push(pesca);
console.log(fruttaFrigorifero);
let cocomeroPresente = false;
for (let i = 0; i < fruttaFrigorifero.length; i++) {
    if (fruttaFrigorifero[i] === 'cocomero') {
        cocomeroPresente = true;
        
    }
}
if (cocomeroPresente) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}