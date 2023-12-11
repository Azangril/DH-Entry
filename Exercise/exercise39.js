/* Nel nostro file di partenza, troviamo un oggetto user che presenta le proprietà name e age. 
Adesso, se vogliamo creare un nuovo utente partendo da user, e dopo proviamo a modificarne 
il nome, come vedrete dai console.log(), andremo a modificare anche l'oggetto di partenza. 
Sapresti modificare il name di newUser, senza cambiare quello di user? */

//Funzione fornita:
let user = {
name: "Cosimo",
age: 30,
};

//Un comando simile copia "l'indirizzo" dell'oggetto, non il contenuto. Modificando newUser modificheremo anche user quindi.
let newUser = user;

//Infatti con questo comando sovrascriveremo "Cosimo" con "Paolo", perdendo il valore originale.
newUser.name = "Paolo";

console.log(newUser);
console.log(user);


//Funzione corretta:
let user = {
    name: "Cosimo",
    age: 30,
    };

//Si deve creare un oggetto nuovo: 
let newUser = {};

//Copiare la struttura ed i dati degli oggetti, copiando passo per passo la proprietà ed il suo valore in un ciclo for:
for(let key in user){
    newUser[key] = user[key];
}

//Ora, modificando newUser.name non si andrà a modificare user perché newUser è un oggetto totalmente nuovo.
newUser.name = "Paolo";
    
console.log(newUser);
console.log(user);

//Per testare la funzione corretta, commentare la prima funzione così che il terminale non dia errore.