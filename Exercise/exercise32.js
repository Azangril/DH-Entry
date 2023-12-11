/* Partendo dall'esercizio precedente, vogliamo aggiungere un delay quando andiamo a stampare il nostro "Hello" "Nome". 
Per fare questo, andremo ad utilizzare la funzione di Javascript setTimeout() che prende due parametri. 
Il primo parametro è una funzione, il secondo sono i millesimi di secondo di delay. 
Nel nostro esercizio, vogliamo che la funzione sayHelloName abbia al suo interno un setTimeout(), 
che stampi dopo 1 secondo il nostro "Hello" "Name". */

//L'esercizio è praticamente uguale all'exercise31.js:

function sayHelloName(callback)
{
    /*La funzione setTimeout crea un delay pari ai millisecondo passati come secondo argomento (in questo caso 1000).
      Il primo argomento di setTimout è invece la funzione da "ritardare", in questo caso la stampa di "hello " e la
      chiamata della funzione callback printName:  */
  setTimeout(function(){
    console.log("Hello " + callback())}, 1000);
}

//Definizione dell'arrow function "printName" che in questo caso restituisce il nome in modo da conservarlo nel delay: 
let printName = () => "Alessandro";

sayHelloName(printName);