/* Scrivere due funzioni, la prima funzione si chiamerà sayHelloName, questa prenderà come parametro 
una callback che sarà la nostra seconda funzione di nome printName. La nostra funzione printName 
dovrà semplicemente fare un console.log() del nostro nome (ricordiamoci che sarà la funzione di callback). 
La funzione sayHelloName, prende come parametro una callback, e dovrà prima fare un console.log() della 
stringa 'Hello' e dopo chiamare la funzione che prende come parametro. */

//Nella funzione passiamo come parametro la funzione printName e la usiamo con il nome "callback":
function sayHelloName(callback)
{
  console.log("Hello " );
  callback();
}

//Questa funzione sarà eseguita dentro sayHelloName perché chiamata dentro la funzione: 
function printName()
{
    console.log("Alessandro");
}

//Nel chiamare la funzione sayHelloName gli comunichiamo tra parentesi qual'è la funzione callback:
sayHelloName(printName);