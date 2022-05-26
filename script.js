var saat = 0 ;
var dakika = 1 ;
var saniye = 10;

var a = setInterval(function(){

document.getElementById("saat").innerHTML = saat;
document.getElementById("dakika").innerHTML = dakika;
document.getElementById("saniye").innerHTML = saniye--;

if(Number(document.getElementById("saniye").innerHTML) == 0 ){

saniye = 59;
dakika --;

}

if(Number(document.getElementById("dakika").innerHTML) == 0 &&
 Number(document.getElementById("saniye").innerHTML) == 0 ) {

dakika = 59;
saat --;

}

if(Number(document.getElementById("saat").innerHTML) == 0 &&
  Number(document.getElementById("dakika").innerHTML) == 0 &&
  Number(document.getElementById("saniye").innerHTML) == 0){

 clearInterval(a)



}


},1000);