//Riprendendo l'esempio dall'esercizio precedente:

const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted

/* Il confronto fatto con == e === non ha lo stesso significato. 

L'operatore "==" controlla che il contenuto abbia lo stesso 'significato', per cui una variabile Boolean con contenuto 'true'
ed una variabile Number con contenuto 1, darebbero risultato true con questo operatore.

Al contrario l'operatore "===" controlla non il 'significato' ma che l'attuale contenuto delle variabili corrisponda. In questo
caso l'esempio di prima risulterebbe 'false' perché il valore Boolean true ed il valore Number 1 sono di due tipi diversi. */