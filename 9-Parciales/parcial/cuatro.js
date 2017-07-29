var numero1;
var numero2;
function Mostrar()
{
numero1=parseInt(prompt("ingresa numero"));
numero2=parseInt(prompt("ingresa numero"));

    if(numero1==numero2)
    {document.write(numero1*numero2)
    }
    if(numero1>numero2)
    {document.write(numero1-numero2)
    }
    if(numero1<numero2)
    {document.write(numero1+numero2)
    }

}
