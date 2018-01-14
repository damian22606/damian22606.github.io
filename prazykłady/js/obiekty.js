 'use strict';

class Ogłoszenie {
   
    constructor(tytul, opis, kategoria, status, cena ){
        this.tytuk = tytuł;
        this.opis = opis;
        this.kategoria = kategoria;
        this.status = status;
        this.cena = cena; 
        
    }
    pobierzTytul() {
        return this.Tytul;
    }
}

var ogloszenie1 = new  Ogloszenie ("sprzedam opla", " stan fabryczny" , "kombi", "nieaktywny" , "15000");

var ogloszenie2 = new  Ogloszenie ("sprzedam seata", " stan fabryczny" , "sedan", "aktywny" , "25000");

console.log(ogloszenie1);
console.log(ogloszenie2);

console.log(ogloszenie2.pobierzTytul); 