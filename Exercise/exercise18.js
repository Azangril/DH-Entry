// Trasforma il costrutto if-else in un operatore ternario:

let number = -1;

if (number > 0){
console.log("The number is positive");
} 
else console.log("The number is negative");

//Trasformazione in un operatore ternario:

let str = number > 0 ? "The number is positive" : "The number is negative";
console.log(str);