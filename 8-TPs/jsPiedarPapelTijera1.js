/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var respuesta;
var resultado;

function MostrarResultado()
{alert(respuesta)}
function comenzar()
{eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
	console.log(eleccionMaquina)
}
//FIN DE LA FUNCIÓN
function piedra()
{comenzar(eleccionMaquina)
{switch(eleccionMaquina)
    {case 1:
        respuesta="empate";
        MostrarResultado()
        break;
    case 2:
    respuesta="perdió";
    MostrarResultado()
    break;

    case 3:
    respuesta="gano";
    MostrarResultado()
    break;
    }
}	
}//FIN DE LA FUNCIÓN
function papel()
{comenzar(eleccionMaquina)
{switch(eleccionMaquina)
    {case 1:
        respuesta="empate";
        MostrarResultado()
        break;
    case 2:
    respuesta="perdio";
    MostrarResultado()
    break;
    case 3:
    respuesta="gano"
    MostrarResultado()
    break;
    }

}
}//FIN DE LA FUNCIÓN
function tijera()
{comenzar(eleccionMaquina)
{switch(eleccionMaquina)
    {case 1:
        respuesta="empate";
        break;
    case 2:
    respuesta="perdio";
    MostrarResultado()
    break;
    case 3:
    respuesta="gano";
    MostrarResultado()
    break;
    }

}
}
//FIN DE LA FUNCIÓN
