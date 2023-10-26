
// prompt
const eta = prompt("Inserisci la tua età");
const kmUtente = prompt("Inserisci il numero di chilometri che vuoi percorrere");

// variabili sistema
const euroKm = 0.21
const underDiscount = 0.2
const overDiscount = 0.4


//check dati validi in ingresso
if (isNaN(eta)==true || isNaN(kmUtente)==true) {
    document.getElementById("testo").innerHTML = `I valori inseriti non sono accettati`;
}


var price = kmUtente*euroKm

if ( eta < 18) {
    var price=(price-(price*underDiscount)).toFixed(2)
}
else if (eta >=65) {
    var price=(price-(price*overDiscount)).toFixed(2)
}


document.getElementById("testo").innerHTML = `il costo del tuo biglietto è di ${price} €`;














// document.getElementById("password").innerHTML = `la tua Password sicurissima è: ${password}`;
