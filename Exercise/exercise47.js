/* Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

    - Rimuovere il nome "Giovanni" dal nostro array
    - Aggiungere il nome "Pippo" alla coda del nostro array
    - Aggiungere il nome "Giovanni" come primo elemento del nostro array

Dopo ogni operazione inserire il console.log() del nostro array names */

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
console.log(names);
// Il metodo ".pop()" rimuove l'ultimo elemento di un array:
names.pop();
console.log(names);
// Il metodo ".push" permette di porre l'elemento passato come argomento in coda ad un array:
names.push("Pippo");
console.log(names);
// Il metodo ".unshift" permette di porre l'elemento passato come argomento come primo elemento di un array:
names.unshift("Giovanni");
console.log(names);
