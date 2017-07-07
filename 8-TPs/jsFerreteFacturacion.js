/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var suma;
 var prom;
 var precio;
	
    suma=document.getElementById("PrecioUno").value;
    prom=document.getElementById("PrecioDos").value;
    precio=document.getElementById("PrecioTres").value;

    suma=parseInt(suma)
    prom=parseInt(prom)
    precio=parseInt(precio)

sumar=suma+prom+precio
alert(sumar)
}
function Promedio () 
{var suma;
 var prom;
 var precio;
	
    suma=document.getElementById("PrecioUno").value;
    prom=document.getElementById("PrecioDos").value;
    precio=document.getElementById("PrecioTres").value;

    suma=parseInt(suma)
    prom=parseInt(prom)
    precio=parseInt(precio)

promedio=(suma+prom+precio)/3
alert(promedio)
	
}
function PrecioFinal () 
{var suma;
 var prom;
 var precio;
	
    suma=document.getElementById("PrecioUno").value;
    prom=document.getElementById("PrecioDos").value;
    precio=document.getElementById("PrecioTres").value;

    suma=parseInt(suma)
    prom=parseInt(prom)
    precio=parseInt(precio)

PrecioFinal=(suma+prom+precio)*1.21
alert(PrecioFinal)
	
}