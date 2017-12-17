'use strict';
function obliczOdsetki(kapital, procent) {
    var kapitalZOdsetkami = kapital + kapital * procent;
    
    return kapitalZOdsetkami;
}


var inwestycjaAnety = obliczOdsetki(1000000, 0.015);

console.log( inwestycjaAnety );

var inwestycjaKuby = obliczOdsetki(1000, 0.051);
console.log(inwestycjaKuby);