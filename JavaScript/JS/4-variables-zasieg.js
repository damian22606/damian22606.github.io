'use strict'

var ilosc1 = 3500;
var ilosc2 = 300;
var ilosc3 = 7500;
var ilosc4 = 2500;

ilosc2 = 3000; 

function policzSumekasy(iloscOsoby1, iloscOsoby2, iloscOsoby3, iloscosoby4, wiek) {
    var sumaKasy; 
    sumaKasy = iloscOsoby1 + iloscOsoby2 + iloscOsoby3 + iloscosoby4; 
    var osoba =(sumaKasy, wiek); 
    return osoba; 
}

var osobaZobliczeniami = policzSumekasy( ilosc1, ilosc2, ilosc3, ilosc4, 25); 

console.log (osobaZobliczeniami); 