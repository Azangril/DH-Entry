/* Scriviamo il nostro primo array. 
Scrivi un array di nome numbers dove avremo una collezione di numeri da 1 a 10. 
Di seguito dovremo:
    - Stampare il primo valore
    - Stampare l'ultimo valore
    - Stampare la lunghezza dell'array
    - Indicare il risultato se proviamo a stampare il 20esimo valore ed il perché
*/

// Creazione di un array di numeri da 1 a 10 ponendo i numeri dentro parentesi quadra, separati da una virgola:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// La prima posizione di un array ha indice 0, quindi per stampare la prima posizione si scriverà:
console.log(numbers[0]);
// Il metodo ".length" restituisce il numero di elementi. Per avere la posizione ultima dell'array basterà sottrarre 1
// perchè le posizioni dell'array iniziano da indice 0, non da 1.
console.log(numbers[numbers.length - 1]);
// Il metodo ".length" restituirà "10",che è il numero di elementi presenti:
console.log(numbers.length);
// L'array non possiede 20 elementi, quindi se richiesta la posizione 20 il risultato sarà undefined:
console.log(numbers[20]);