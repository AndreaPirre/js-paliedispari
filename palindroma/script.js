// 1__Scrivi una funzione per capire se la parola è palindroma

var parolaUtente = prompt("Inserisci una parola: ");
var parolaGirata = rovesciaParola(parolaUtente);

if (parolaUtente == parolaGirata) {
 console.log("La parola è palindroma");
}

else {
  console.log("La parola non è palindroma");
}
function rovesciaParola(parola) {
 var parolaRovesciata = "";
 for (var i = parola.length -1; i >= 0; i--) {
   parolaRovesciata += parola[i]
 }
 return parolaRovesciata;
}

// esercizio con uso di split, reverse e join

// console.log(parola);
//
// var array = parola.split("");
//
// console.log(array);
//
// var strReverse = array.reverse();
//
// console.log(strReverse);
//
// var confronto = strReverse.join("")
//
// if (parola!=confronto) {
//     console.log("La parola non è palindroma");
//
// }else if (parola==confronto) {
//     console.log("La parola è palindroma");
//
// }
