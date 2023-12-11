/* Crea una variabile primitive e assegnale un valore che potrà essere di tipo numero, stringa o booleano.
Crea un controllo per verificare il tipo della variabile e stamparlo in console. */

let primitive = 1;

//typeof() ci restituisce come stringa il tipo di variabile, permettendoci di confrontarlo:
if(typeof(primitive) == Number)
{
    console.log(typeof(primitive));
}
else if (typeof(primitive) == Boolean)
{
    console.log(typeof(primitive));
}
/*da premessa la variabile può avere unicamente valore Number, Boolean o String. Arrivati al terzo controllo
la variabile sarà necessariamente String */
else
    console.log(typeof(primitive));