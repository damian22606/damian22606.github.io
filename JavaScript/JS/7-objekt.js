'use strict';

class Osoba {
    constructor(imie, nazwisko, plec) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.plec = plec;
    }
        wyswietlDetale() {

            console.log("imie" + this.imie + ", nazwisko" + this.nazwisko + ", plec" + this.plec)
        }
    }

    var ewa = new Osoba("Ewa", "Rogulska", "Kobieta");

    console.log(ewa);
    ewa.wyswietlDetale();

var damian =new Osoba ("Damian", "Pawelec", "Mezczyzna"); 

damian.wyswietlDetale(); 

var tablica =[ewa, damian]; 
console.log(tablica);
