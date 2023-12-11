/* Scrivere un funzione di nome Smartphone che prenda come parametro i 
seguenti elementi: brand,name, price. 
Questa funzione, ogni volta che viene chiamata con new, deve restituire 
un nuovo oggetto smartphone, con le informazioni (parametri) che passiamo */

// La funzione che prende come argomento il brand, il name ed il price e crea un nuovo oggetto con questi parametri:
// Nota: per convenzione le funzioni "constructor" si chiamano con la maiuscola.
function Smartphone(brand, name, price){
    this.brand = brand;
    this.name = name;
    this.price = price;
}

/* Chiamando la funzione "Smartphone", si crea un nuovo oggetto con i parametri specificati in funzione e dal nome
    deciso al momento dell'invocazione della funzione, in questo caso: xiaomi, apple e samsung: */
let xiaomi = new Smartphone("Xiaomi", "Redmi", 160);
let apple = new Smartphone("Apple", "Iphone", 699);
let samsung = new Smartphone("Samsung", "Galaxy", 280);

console.log(xiaomi);
console.log(apple);
console.log(samsung);

