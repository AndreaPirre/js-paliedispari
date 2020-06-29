// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Inizio

// chiadiamo all'utente di inserire una parola
var parola = prompt("Scrivi una parola: ");


console.log(parola);

var array = parola.split("");

console.log(array);

var strReverse = array.reverse();

console.log(strReverse);

var confronto = strReverse.join("")

if (parola!=confronto) {
    console.log("La parola non è palindroma");

}else if (parola==confronto) {
    console.log("La parola è palindroma");

}
