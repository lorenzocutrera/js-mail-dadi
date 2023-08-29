/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

// Generare un numero random per il giocatore

let numeroRandomComputer = Math.floor((Math.random() * 6) + 1); //cercare come generare un numero random da 1 a 6 in javascirp
//genera un numero random per il computer
let numeroRandomGiocatore = Math.floor((Math.random() * 6) + 1);
// stabiliamo il vincitore: 

if(numeroRandomComputer > numeroRandomGiocatore){
    //stampare il vincitore (computer9)
    console.log ('Ha vinto il computer');
}else if(numeroRandomComputer < numeroRandomGiocatore){
    //stampare il  vincitore (giocatore)
    console.log ('Ha vinto il giocatore');
}else{
    //stampare il pareggio
    console.log ('Pareggio');
}


