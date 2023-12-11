/* Date le variabili name e surname, crea un costrutto if else per stampare 
in console la variabile fullname, che conterrà le due variabili precedenti. */

/*Dichiariamo le variabili. Per controllare che l'if-else funzioni, lasciamo 'name' vuoto.
Questo da come risultato 'false' su un controllo in quanto una stringa vuota da come risultato false */
let name ;
let surname = "Rossi";

/*In una if ponendo solo il nome della variabile controllerà semplicemente se la variabile 
ha un valore, restituendo 'false' se vuota */
if (name && surname)
{
    let fullname = name + surname;
    console.log(fullname);
}
else
{
    console.log("Fullname is invalid");
}

