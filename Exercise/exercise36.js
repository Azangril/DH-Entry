//Partendo dal codice, vogliamo che la variabile sport sia una variabile 'globale', quale definizione possiamo adottare?:

//Funzione d'esempio:
function canPlay() {
    let sport = " Football";

    if (true) 
    {
    let personName = "Cosimo";
    }

    console.log(personName + sport);
}

canPlay();

//Funzione corretta:
var sport = " Football";

function canPlay() {

    if (true) {
        var personName = "Cosimo";
    }
    
    console.log(personName + sport);
    }
    
    canPlay();

/* In JS dichiarare una variabile fuori dalla funzione la rende "globale", cioè potrà essere utilizzata in ogni funzione. */