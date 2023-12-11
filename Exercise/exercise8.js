/*Eseguire il casting di una variabile molteplici volte con molteplici tipi diversi */

//Dichiarazione della variabile e stampa del contenuto e del tipo della variabile:
let var1 = true;
console.log (var1);             //true
console.log (typeof(var1));     //Boolean
//Casting a Number e stampa:
var1 = Number(true);
console.log (var1);             //1
console.log (typeof(var1));     //Number
//Casting a String e stampa:
var1 = String(true);
console.log (var1);             //'true'
console.log (typeof(var1));     //String
//Casting a Boolean e stampa:
var1 = Boolean(true);
console.log (var1);             //true
console.log (typeof(var1));     //Boolean

