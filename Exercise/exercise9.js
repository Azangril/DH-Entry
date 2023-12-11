/*Scrivere il risultato della comparazione tra le varaibili */

//Dichiarazione delle diverse variabili: 
const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

//Stampa a schermo dei risultati delle comparazioni fornite dall'esercizio:
console.log(name == lastname)                       //false
console.log(age <= average)                         //true
console.log(firstYearCompleted == lastname)         //false
console.log(yearsCompleted == firstYearCompleted)   //true
console.log(firstYearCompleted === yearsCompleted)  //false
console.log(examsCompleted < age)                   //true
console.log(isGraduated > yearsCompleted)           //false

/* Nota: guardare exercise10.js */