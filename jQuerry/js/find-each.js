'use strict';

var body = $("body");

var par = body.find("p");
var par= body.find("p").eq(1);
console.log(par); 

$("p").each(function(index) {
    console.log($(this));
$(this).addClass("paragraf-"+index);
    
});