function Mostrar()
{var num;
var max=0;
var min;
var contador=0;
var respuesta='si';
var bandera=true;
// declarar variables
while(respuesta!='no')
	{num=prompt("Ingrese un numero")
contador++

respuesta=prompt("Desea seguir operando,Responda SI O NO")

		if(bandera)
{ max=num;
  min=num;
bandera=false;
}
else 
{if(num>max)
{ max=num;
}
if(num< min)
{min=num;
}
	
}	
	}
document.getElementById("maximo").value=max
document.getElementById("minimo").value=min




}//FIN DE LA FUNCIÓN