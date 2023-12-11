/* Abbiamo il nostro array di nomi, questa volta vogliamo stampare i nostri nomi 
in modo diverso, dopo ogni nome deve esserci un trattino al posto della virgola. 
Sapresti risolvere questo problema? */

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

//Il metodo ".join" permette di concatenare tutti gli elementi di un array specificando un separatore, in questo caso " - ":
console.log((names).join(" - "));