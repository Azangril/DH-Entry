//Istanzia una variabile 'age' con un valore numerico:

let age = 17;

/* Usando l'operatore ternario, stampa in console la stringa "You can drive a car" se la variabile 
ha un valore maggiore o uguale a 18, in caso contrario stampa la stringa "You are too young to drive" */

let legal = 18;
let str = age >= legal ? "You can drive a car" : "You are too youg to drive";
console.log(str);

/*Un operatore ternario si esprime sempre con un operazione di confronto o logica tra due o più elementi, posti prima
del simbolo '?'. La prima opzione dopo il '?' sarà quella presa in considerazione nel caso il risultato sia true, mentre
dopo il simbolo ':' si pone l'opzione nel caso il risultato sia false */