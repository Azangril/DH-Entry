/* Come nell'esercizio precedente si effettua il casting delle variabili a tipi di contenuto diversi. */

let hello = Number("Ciao");
let age = Boolean(18);
let isGraduated = String(false);

//Stampa del risultato:
console.log(hello);
console.log(age);
console.log(isGraduated);

/* La variabile "hello" in particolare restituira il valore "NaN", acronimo di "Not-a-Number".
Questo perché forzando il contenuto della variabile "hello", cioè la stringa "Ciao", ad assumere
un valore numerico, il computer non sa attribuire alla stringa un valore Number */