/* Il nostro oggetto student è incompleto. 
Abbiamo bisogno di aggiungere a questo oggetto, un ulteriore oggetto al suo interno di nome personalData. 
L'oggetto nested personalData deve contenere le seguenti proprietà: name, surname, age. Sapresti inserirlo? */

const student = {
    id: 1,
    school: "Liceo",
    year: 3,
};
console.log(student);

/*Si può aggiungere o agire su una precisa proprietà di un oggetto chiamando "oggetto.proprietà".
Volendo aggiungere la proprietà ".personalData" all'oggetto "student", bastera associare un valore a questa proprietà e questa
sarà aggiunta all'oggetto.*/
student.personalData = {
    name: "Mario",
    surname: "Rossi",
    age: 30,
}
console.log(student);