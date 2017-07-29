function Mostrar()
{var largo;
var ancho;
var perimetro;
var alambre;
largo=parseInt(document.getElementById("largo").value);
ancho=parseInt(document.getElementById("ancho").value);
perimetro=((largo*2 + ancho*2)*3)
alert("metros de alambre:" + perimetro);


}
