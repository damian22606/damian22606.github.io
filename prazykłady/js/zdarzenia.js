'use strict';



document.getElementById( 'exampleDiv' ).addEventListener( 'click', function(e) {
alert( 'Kliknięto div' );
} );
document.getElementById( 'exampleLink' ).addEventListener( 'click', function(e) {

e.preventDefault();
e.stopPropagation();
alert( 'Kliknięto link' );
} );
                
                
                
                
                
                
