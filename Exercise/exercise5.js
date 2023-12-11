/* Crea le variabili isDoorClosed e isDogOutside, saranno delle variabili di tipo booleano
Assegna true alla variabile isDoorClosed e false alla variabile isDogOutside.
Esegui lo script con node
Prova a invertire i valori delle variabili e vedi cosa viene stampato in console */

//Dichiarazione delle variabili booleane "isDoorClosed" e "isDogOutside"
let isDoorClosed = false;
let isDogOutside = true;

//Lo scritp di controllo viene fornito dal testo dell'esercizio:
if (isDoorClosed == true && isDogOutside == false) {
console.log("the door is closed and the dog is inside");
} else if (isDoorClosed == false && isDogOutside == true) {
console.log("The door is open and the dog is outside");
} else console.log("Modify the variables values");

//Il contenuto delle due variabili iniziali varia l'output tre tre possibili messaggi diversi.