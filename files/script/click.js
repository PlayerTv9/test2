
var ipotenusa = 0;
var base = 0;
var altezza = 0;

var ipotenusaInput = document.getElementById("ipotenusa");
var baseInput = document.getElementById("base");
var altezzaInput = document.getElementById("altezza");


function calcola() {
    
    if (document.getElementById("base").value != "" && altezzaInput != "" && document.getElementById("ipotenusa").value== "") {
        document.getElementById("ipotenusa").value = Math.sqrt(Math.pow(document.getElementById("base").value, 2) + Math.pow(document.getElementById("base").value, 2));
         
    }else if (document.getElementById("base").value == "" && document.getElementById("altezza").value != "" && document.getElementById("ipotenusa").value != "") {
        document.getElementById("base").value = Math.sqrt(Math.pow(document.getElementById("ipotenusa").value, 2) - Math.pow(document.getElementById("altezza").value, 2));
       
    }
    else if (document.getElementById("base").value != "" && document.getElementById("altezza").value == "" && document.getElementById("ipotenusa").value != "") {
        document.getElementById("altezza").value = Math.sqrt(Math.pow(document.getElementById("ipotenusa").value, 2) - Math.pow(document.getElementById("base").value, 2));
       
    }else{
        alert("C'è stato un erroe!\nPuò darsi che hai ho un solo campo pieno o due campi vuoti!\ncontrolla attentamente i campi e cancella il valore del campo di testo che non ti serve!");
    }
}
