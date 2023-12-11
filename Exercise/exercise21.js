/* Creare un controllo, tramite un costrutto if else, che permetta di verificare la lunghezza della variabile password.
Se la lunghezza della variabile è compresa tra 4 e 6 caratteri, stampa in console il messaggio "Password length is correct", 
altrimenti stampa il messaggio "Password not valid". */

let password = "banana";

/* Le stringhe hanno al prorpietà "length" che ci permette di utilizzare come valore la lunghezza della
stringa invece del suo contenuto: */
if (password.length >= 4 && password.length <= 6) 
{
  console.log("Password length is correct");
} else 
{
  console.log("Password not valid");
}