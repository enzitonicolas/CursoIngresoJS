function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota;
nota=Math.floor(Math.random()*10 + 1) ;
if(nota>=9)
{ alert("Nota:" + nota + "excelente")
}	
if(nota>=4)
{alert("Nota:" + nota + "aprobo")
}
else
{alert("Nota:" + nota + "Vamos,la proxima se puede")}

}//FIN DE LA FUNCIÓN