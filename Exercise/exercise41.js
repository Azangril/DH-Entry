/*Abbiamo l'oggetto smartphone, utilizzando uno specifico metodo degli oggetti, possiamo rendere questo 
oggetto 'freezato', e quindi non modificare il prezzo così facilmente. Sapresti scrivere il metodo che ci serve? */

//Funzione fornita:
const smartphone = {
brand: "Apple",
name: "Iphone 13",
price: 1300,
};

smartphone.price = 100;

console.log(smartphone);

//Funzione corretta:
const smartphone = {
    brand: "Apple",
    name: "Iphone 13",
    price: 1300,
    };
   
//Il metodo ".freeze" rende il parametro passato non modificabile:
Object.freeze(smartphone);
smartphone.price = 100;
    
console.log(smartphone);

//Commenta la prima funzione per eseguire correttamente la seconda.