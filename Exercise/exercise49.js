/* Abbiamo il nostro array di studenti
Vogliamo rimuovere lo studente Giovanni ed aggiungere il seguente studente: 

{ id: 3, name: "Francesco", surname: "Verdi", age: 41 } 

Sapresti fare questa operazione?

Dopo ogni operazione inserire il console.log() del nostro array students */


const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

console.log(students);
//Si utilizza il metodo "".pop()"" per rimuovere lo studente "Giovanni", cioè l'ultimo studente:
students.pop();
console.log(students);
//In coda all'array, come ultimo studente, andiamo a mettere lo studente "Francesco", con il metodo ".push()":
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log(students);
