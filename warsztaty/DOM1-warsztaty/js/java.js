'use strict';
var btn= document.getElementById( "btn" ).addEventListener('click',function(event) {
    event.preventDefault();
});

var imie= document.querySelector('#name').value;
var nazwisko= document.querySelector('#lname').value;

function pobierzImie(event) {
    console.log(imie);
    console.log(nazwisko);
};
pobierzImie(); 
