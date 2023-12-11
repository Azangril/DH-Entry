/*Sistemare la funzione in modo tale che non prendiamo errori in console. 
Inoltre spiegare brevemente come mai al momento la funzione è sbagliata. */

//La funzione fornita:

function canPlay() {
    let sport = " Football";
    
    if (true) {
    let personName = "Cosimo";
    }
    
    console.log(personName + sport);
    }
    
    canPlay();

//L'errore dato da questa funzione è "personName" is not defined.


//La funzione corretta:

function canPlay() {
    let sport = " Football";
    
    if (true) {
        //modifichiamo personName da let a var:
    var personName = "Cosimo";
    }
    
    console.log(personName + sport);
    }
    
    canPlay();

/* La funzione corretta funziona perché dichiarando la variabile con "var", questa è raggiungibile anche fuori dal singolo blocco
in cui è stata dichiarata. Nel primo caso (la funzione errata), persoName dichiarata dentro il blocco "for" non è raggiungibile
dal console.log post fuori dal ciclo for */