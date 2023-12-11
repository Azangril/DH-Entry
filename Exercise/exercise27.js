/*Stampa in console tutti i numeri pari da 0 a 20.

Esempio:
    10 % 2 --> restituisce 0 perchè 10 / 2 non ha resto
    10 % 4 --> restituisce 2 perchè 10 / 4 ritorna 2 con un resto di 2

*/

for(let i = 0; i <= 20; i = i + 1 )
{
    //L'operatore % fornisce il resto e non il risultato della divisione. In questo caso se il resto è 0 il numero è pari: 
    if(i%2 == 0)
    {
        console.log(i);
    }
    i++;
}
