/*document.getElementById("btn1")[0].onclick=function() {
    document.getElementById("txt1")[0].innerHTML="Ciao";
}*/

var ver = 1;
var ciao = false;
function changeText() {
    if (ver == 1) {
        document.getElementById("txt1").innerHTML="Ciao";
        ver = 2;
    }else if (ver == 2) {
        document.getElementById("txt1").innerHTML="ffff";
    }
    
}

function kk(ciao) {
    this.ciao = ciao;
}

