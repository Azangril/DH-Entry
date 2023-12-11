//Stampa in console i numeri compresi da 0 a 10

/*Un ciclo for dentro parentesi ha tre elementi:
- la dichiarazione della variabile che farà da "contatore"
- la dichiarazione del limite di iterazioni da compiere. Questa parte se non ragionata correttamente
può portare ad un loop infinito (non voluto);
- l'incremento della variabile contatore che viene effettuato alla fine del ciclo ad ogni iterazione.
*/

/* In questo caso la variabile contatore 'i' viene inizializzata a '0', incrementata ad ogni "giro" fino
a raggiungere il valore '10', in cui terminerà le iterazioni dei comandi dentro le parentesi graffe del ciclo for */

for(let i = 0; i <= 10; i = i + 1 )
{
    console.log(i);
}