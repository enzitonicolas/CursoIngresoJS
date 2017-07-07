/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio;
var alambre;
var contrapiso;
var cal=2;
var cantcal;
var cantcemento;
var cemento=3;
var terreno;

function Rectangulo () 
{largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;
radio=document.getElementById("Radio").value;

largo=parseInt(largo);
ancho=parseInt(ancho);
radio=parseInt(radio);

alambre=((largo+ancho)*2)*3;
alert("metros de alambre:"+ alambre)



}
function Circulo () 
{largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;
radio=document.getElementById("Radio").value;

largo=parseInt(largo);
ancho=parseInt(ancho);
radio=parseInt(radio);

alambre=(Math.PI*2*radio)*3;
	alert("metros de alambre:"+alambre);
}
function Materiales () 
{largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;
radio=document.getElementById("Radio").value;

largo=parseInt(largo);
ancho=parseInt(ancho);
radio=parseInt(radio);

terreno=largo*ancho
cantcal=(terreno*cal);
cantcemento=(terreno*cemento);
alert("se necesitan:" + cantcal + "de cal y" + cantcemento + "de cemento")

}
