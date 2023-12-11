/* Abbiamo bisogno di scrivere un array di nome students, questo array conterrà tre oggetti con le seguenti informazioni:

    - id
    - name
    - surname
    - age 

Dobbiamo scrivere queste informazioni per tre studenti diversi. 
Dopo averlo fatto, vogliamo stampare le info solamente del primo studente */

let students = 
    [
        {id: "1", name: "Mario", surname: "Rossi", age: "30"}, 
        {id: "2", name: "Maria", surname: "Bianchi", age: "20"},
        {id: "3", name: "Giovanni", surname: "Brambilla", age: "30"}
    ];

//Un array di oggetti funziona come qualsiasi altro array, permettendo di stampare la prima posizione ponendo indice [0]:
console.log(students[0]);
