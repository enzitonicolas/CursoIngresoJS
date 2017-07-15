function Mostrar()
{
var acumuladorneg=0;
var contador=0;
var acumuladorpos=0;
var contadorpos=0;
var contadorneg=0;
var contadorpar=0
var contadorimpar=0
var num;
var bandera=true;
var contadorceros;
var promediopos;
var promedioneg;
var diferencia;

	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta==true)
	{
		num=prompt();
		num=parseInt(num);
		while(IsNaN(num))
	
	if(num<0)
{acumuladorneg+=num;
contadorneg++;
}
else if (num>0)
{acumuladorpos+=num;
contadorpos++;
}
else
{contadorceros++;

}
if(num%2==0)
{contadorpar++;

}
respuesta=confirm(respuesta)
	}

promediopos=acumuladorpos/contadorpos
promedioneg=acumuladorneg/contadorneg

if(contadorpos==0)
{promediopos="no ingreso ningun positivo"}
if (IsNaN(promedioneg))
{promedioneg="no ingreso ningun negativo"}

diferencia=contadorpos-contadorneg

if(diferencia<0)
{
diferencia*=-1;
}
document.write()
}//FIN DE LA FUNCIÓN