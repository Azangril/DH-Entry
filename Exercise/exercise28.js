//Usa un ciclo for per stampare in console tutti i numeri da 0 a 10 e poi la loro somma.

//Inizilizza una variabile per 'salvare' il valore della somma:
let sum = 0;

for(let i = 0; i <= 10; i++)
{
    console.log(i);
    /* Ad ogni iterazione del ciclo for, dentro la variabile 'sum' viene salvata la somma tra il valore
    precedentemente salvato ed il nuovo valore di 'i'. Partendo da sum = 0, si avrà ad ogni iterazione
    che il nuovo valore di i sarà sommato al valore della somma di tutte le i precedenti. All'ultimo 'giro'
    del ciclo for quindi si sommerà l'ultimo valore di 'i' (in questo caso 10) arrivando alla sommatoria finale
    di ogni valore di i da 1 a 10: */
    sum = sum + i;
}
//Fuori dal ciclo for stampa, un unica volta, il valore salvato in "sum":
console.log(sum);