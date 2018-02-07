'use strict';

document.onscroll = function () {

    var d = document.documentElement;

    if (d.scrollTop + window.innerHeight == d.offsetHeight) {
        console.log("koniec scroll'a")
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


                    //var paragraf = document.createElement("");
                    //var wartosc = document.createTextNode("");
                    //paragraf.appendChild(wartosc);
                    //document.body.appendChild(paragraf);





                }
                xhttp = null;

            }

        }

        xhttp.send();
    }
    ajax("GET", "https://jsonplaceholder.typicode.com/users");









};
