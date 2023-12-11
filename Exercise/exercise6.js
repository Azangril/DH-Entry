/* Esegui la conversione (casting) delle variabili al tipo di dato presente nei commenti del file exercise.js
e stampa il risultato dell'operazione */

//Il casting serve a forzare il contenuto di una variabile verso un determinato tipo di dato:

//Facciamo il casting della variabile "hello" da String a Boolean:
let hello = Boolean('Ciao');

//Facciamo il casting della variabile "age" da Number a String:
let age = String(18);

//Facciamo il casting della variaile da Boolean a  Number:
let isGraduated = Number(false);

//La stampa di "hello" invece di restituire il messaggio 'Ciao' stamperà 'true'
console.log(hello);
//La stampa di "age" invece di restituire 18 come numero restituirà '18' come caratteri
console.log(age);
//La stampa di "isGraduated" inveve di restituire "false" restituirà il valore numerico 0
console.log(isGraduated);