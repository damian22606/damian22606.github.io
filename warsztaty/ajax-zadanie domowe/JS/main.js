'use strict';
$("#btn").click(function () {
    $.ajax({
        url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        dataType: "json",
        success: function (resultJSON) {
            console.log(resultJSON);
            var div = document.createElement("div");
            div.id="dane-programisty";
            var wartosc = document.createTextNode(resultJSON.imie + " " + resultJSON.nazwisko + " " + resultJSON.zawod + " " + resultJSON.firma);
            div.appendChild(wartosc);
            document.body.appendChild(div);

        }
    });
});
