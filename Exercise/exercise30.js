/* Scrivi una funzione di nome sayHelloName che, prende come parametro una stringa. 
Questa funzione deve ritornare la concatenazione di due stringhe, per capirci, il risultato finale dovrà essere: 'Hello Cosimo'. 
In questo caso, Cosimo è la stringa che passiamo come parametro alla funzione (cioè il nostro nome). */


//In questo caso passiamo come argomento la variabile 'arg' che conterrà la stringa da stampare:
function sayHelloName(arg)
{
    //Le variabili passate come argomento (in questo esempio 'arg') possono essere utilizzate dentro la funzione: 
    console.log("Hello " + arg );
}

//Cosa contiene la variabile 'arg' della funzione viene deciso alla chiamata, inserendo il valore tra le parentesi:
sayHelloName("Cosimo");