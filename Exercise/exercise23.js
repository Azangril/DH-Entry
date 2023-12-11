/* Crea, tramite costrutto switch, un controllo che stampi in console il prezzo 
di una camera d'albergo in base alle seguenti tariffe:

Tariffa BB --> 50€
Tariffa HB --> 80€
Tariffa FB --> 100€

*/

let tariffa = "HB";

//Creiamo un costrutto switch che controlli i 3 possibili input forniti dal testo: 
switch(tariffa)
{
    case "BB":
        console.log("il prezzo è 50€");
        break ;
    case "HB":
        console.log("il prezzo è 80€");
        break ;
    case "FB":
        console.log("il prezzo è 100€");
        break ;
}
