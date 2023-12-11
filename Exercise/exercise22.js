// Modifica il costrutto if creato nell'esercizio 20, trasformandolo in un costrutto switch

let primitive = '1';

//Il costrutto Switch permette di avere diversi output in base al contenuto di una variabile:

//Nella dichiarazione dello switch va inserito l'elemento che vogliamo prendere in considerazione:
switch(typeof(primitive))
{
        //Nei vari "case" si elencano invece i possibili risultati, con rispettiva operazione da effettuare:
    case "number":
            console.log(typeof(primitive));
            //il comando 'break ;' ci permette di interrompere ed uscire subito da un ciclo, ottenuto il risultato voluto
            break ;
    case  "string":
            console.log(typeof(primitive));
            break ;
    case "boolean":
            console.log(typeof(primitive));
            break ;
}

/* Nota: in questo caso la premessa dell'esercizio prevedeva come possibili formati di dato unicamente Boolean, String o Number,
quindi i case possibili sono unicamente 3. In altri contesti però il costrutto switch possiede anche la possibilità di dichiarare
un case dichiarabile con 'default', cioè un case che sarà eseguito nel caso tutti i case precedenti non risultassero veri.
Esempio del costrutto: 

switch(...)
{
        case ...:
                ...;
        case ...:
                ...;
        default :
                ...;
}
                
*/