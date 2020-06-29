// 2__Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var parioDispari = prompt("Scegli e scrivi o pari o dispari");
var numerogiocatore = parseInt(prompt("scrivi un numero da 1 a 5"));
var numeroComputer = getRandomIntInclusive(1,5);
var numero = console.log(numeroComputer);
var sommaNumeri = numerogiocatore + numeroComputer;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (sommaNumeri % 2 == 0) {
  console.log(sommaNumeri + " La somma dei numeri è pari, vince chi ha scelto pari");
}
else {
  console.log(sommaNumeri + " La somma dei numeri è dispari, vince chi ha scelto dispari");
}
