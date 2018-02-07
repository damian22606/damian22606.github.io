'use strict';

var button = document.getElementById('btn1').addEventListener('click', pobierzDane);

function pobierzDane() {
    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
};

function ajax(method, url) {


    var xhttp = new XMLHttpRequest();


    xhttp.open(method, url);

    xhttp.onreadystatechange = function () { //wywołanie funkcji po sprawdzeniu statusu


        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                var data = xhttp.responseText;
                console.log(data);
                var obj = JSON.parse(data);
                console.log(obj);


                var paragraf = document.createElement("p");
                var wartosc = document.createTextNode("userId");
                paragraf.appendChild(wartosc);
                document.body.appendChild(paragraf);


            }
            xhttp = null;

        }

    }

    xhttp.send();
}
