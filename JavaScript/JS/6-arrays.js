'use strict';
 
var imiona =[ 'Monika', 'Krystian', 'Damian'];

imiona[3] = 'Tania' ;
imiona[2] = 'Ela'; 

imiona.push('Geralt');
 imiona.pop();
imiona.pop();


console.log(imiona.unshift('Robert')) ;
console.log(imiona.shift()) ;
console.log(imiona) ;
console.log(imiona.length);

var stringZtablicy =imiona.join('!');

console.log(stringZtablicy); 

console.log(imiona.reverse) ;

var tablicaLiczb = (3, 47, 567, 34, 56);

var posortowanaTablica = tablicaLiczb.sort() ;

console.log(posortowanaTablica) ;