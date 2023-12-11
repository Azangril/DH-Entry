/* Inserisci i corretti operatori logici per ottenere il risultato richiesto */

//Dichiarazione delle variabili:

const question1 = 101 < 67; // è false
const question2 = 1 == true; // è true
const question3 = true != 1 // è false
const question4 = 4 <= 4 // è true

// L'operatore corretto è già inserito tra le due 'question', dove nell'esercizio originale erano presento solo puintini: 

console.log(question1 || question2) //il risultato deve essere true
console.log(question1 && question2) //il risultato deve essere false
console.log(question3 || question2) //il risultato deve essere true
console.log(question4 && !question4); //il risultato deve essere false
console.log(!question2 || !question4); //il risultato deve essere false

/* Nota: per ottenere un risultato false da due valori true l'unico modo è negare uno dei due valori con un operatore &&, negare
entrambi i valori con un operatore || oppure negare direttamente il risultato ponendo la negazione ! fuori dall'operazione tra
parentesi come:

console.log(!(question4 || question4));

*/