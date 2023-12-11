//Partendo dall'exercise39.js conosci altri modi per copiare l'oggetto user senza modificare le sue proprietà?

let user = {
    name : "Cosimo",
    age : 30,
};

newUser = {};
//il metodo ".assign" permette di copiare nel primo parametro passato (newUser), la struttura ed i valori del secondo parametro (user);
Object.assign(newUser, user);

newUser.name = "Paolo";

console.log(newUser);
console.log(user);