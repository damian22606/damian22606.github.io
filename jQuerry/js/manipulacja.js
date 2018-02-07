'use strict';
$(function(){
    
    /*var textParagrafu = $("p#paragraf").text("Nowy paragraf o id paragraf");
    console.log($("paragraf").text());*/
    
    var jakisTamparagraf = $("p.paragrafnext");
    jakisTamparagraf.html("<b>Hello</b>world").after("nowy tekst");

$("p.paragrafnext").append("<br>Dodatkowy tekst");


}
 );