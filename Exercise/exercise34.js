//Partendo dall'esercizio precedente, questa volta i numeri da sommare dovranno essere passati come parametro alla funzione:

//Questa volta semplicemente non si dichiarano i numeri all'interno dell'arrow function, ma vengono passati come parametro:
let sumArrow = (arg1, arg2) => arg1 + arg2;

//Nel momento in cui viene chiamata la funzione, vengono passati i parametri tra parentesi:
console.log(sumArrow(5, 4));